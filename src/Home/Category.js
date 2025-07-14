import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Category() {
	const [category, setCategory] = useState([]);
	useEffect(() => {
		axios.get("/js/categories.json")
			.then((element) => {
			setCategory(element.data.categories);
		});
	}, []);
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/shop");
	}
	return (
		<div className="category">
			<div className="category-title">
				<h1>Top Categories</h1>
				<button onClick={handleClick}>Show All</button>
			</div>
			<div className="container">
				<div className="row">
					{category.map((cat) => {
						return (
							<div className="col-md-3 cards">
								<Link to="/shop">
								<div className="trend-card">
									<img src={cat.images} />
									<div className="card-info">
										<h2>{cat.title} </h2>
									</div>
								</div>
								
								</Link>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
}

export default Category;
