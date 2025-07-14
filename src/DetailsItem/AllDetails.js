import React, { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useParams } from "react-router";
import axios from "axios";
import { toast } from "react-toastify";
import { useCart } from "react-use-cart";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

function AllDetails() {

	const params = useParams();
	const [details, setDetails] = useState({});
	const { addItem } = useCart();
	useEffect(() => {
		axios
			.get(`https://dummyjson.com/products/${params.itemId}`)
			.then((element) => {
				setDetails(element.data);
			});
	}, [params.itemId]);
	return (
		<div>
			<Navbar />
			<div className="container">
				<div className="row m-4">
					<div className="col-md-10 card details-card">
						<img src={details.images && details.images[0]} />
						<h1>{details.title}</h1>
						<h3>Price: {details.price} $</h3>
						<h4>{details.category}</h4>
						<h4>{details.description}</h4>
						<h5>Rating: {details.rating} ⭐</h5>
						<button
							className="side-btns m-auto"
							style={{
								height: "44px",
							}}
							onClick={() => {
								addItem(details);
								toast.success("Product added to cart!");
							}}>
							Add To Cart <FontAwesomeIcon icon={faCartPlus} />
						</button>

					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default AllDetails;
