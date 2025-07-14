import React, { useContext, useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { apiValue } from "../Data/AllData";
import axios from "axios";
import { useCart } from "react-use-cart";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function AllShop() {
	const product = useContext(apiValue);
	const { addItem } = useCart();

	// const navigate = useNavigate();
	// 	const handleClick = () => {
	// 		navigate("/shop");
	// 	}

	const [cats, setCats] = useState([]);
	const [selectedCat, setSelectedCat] = useState("");
	const [filterItems, setFilterItems] = useState(product);
	const [text, setText] = useState("");
	const [searchType, setSearchType] = useState("title");

	useEffect(() => {
		axios
			.get("https://dummyjson.com/products/category-list")
			.then((element) => {
				setCats(element.data);
			});
	}, []);

	useEffect(() => {
		if (selectedCat) {
			axios
				.get(`https://dummyjson.com/products/category/${selectedCat}`)
				.then((element) => {
					setFilterItems(element.data.products);
				});
		} else {
			setFilterItems(product); // عرض الكل
		}
	}, [selectedCat, product]);

	const searchResults = filterItems.filter((item) => {
		if (searchType == "title") {
			return item.title.toLowerCase().includes(text.toLowerCase());
		} else if (searchType == "price") {
			return item.price.toString().includes(text);
		}
		return true;
	});

	return (
		<div>
			<Navbar />
			<div className="container-fluid pl-0">
				<div className="row">
					<div className="col-md-2">
						<div className="sidebar ml-0">
							<button
								onClick={() => {
									setSelectedCat("");
								}}
								className="side-btns"
								style={{ height: "70px" }}>
								Show All Categories
							</button>
							{cats.map((cat) => {
								return (
									<div key={cat}>
										<button
											className="side-btns"
											onClick={() => {
												setSelectedCat(cat);
											}}>
											{cat}
										</button>
									</div>
								);
							})}
						</div>
					</div>
					<div className="col-md-10 shop">
						<div className="container-fluid">
							<div className="row">
								<div className="search-shop">
									<input
										type="search"
										value={text}
										onChange={(e) => setText(e.target.value)}
										placeholder={`Search by ${searchType}`}
									/>
									<select
										value={searchType}
										onChange={(e) => setSearchType(e.target.value)}>
										<option value="title">Name</option>
										<option value="price">Price</option>
									</select>
								</div>
								{searchResults.map((item) => {
									return (
										<div key={item.id} className="col-md-4">
											<div className="item-card">
												<Link to={`/details/${item.id}`}>
												<img src={item.images[0]} />
												<h3>{item.title}</h3>
												
												</Link>

												<h4>{item.price} $</h4>
												<h5>Rating: {item.rating}</h5>
												<h6>{item.category}</h6>
												<button
													className="side-btns"
													style={{
														height: "44px",
													}}
													onClick={() => {
														addItem(item);
														toast.success("Product added to cart!");
													}}>
													Add To Cart <FontAwesomeIcon icon={faCartPlus} />
												</button>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}
export default AllShop;
