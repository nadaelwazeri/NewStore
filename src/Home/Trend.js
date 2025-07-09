import axios from "axios";
import React, { useEffect, useState } from "react";

function Trend() {
	const [item, setItem] = useState([]);
	useEffect(() => {
		axios.get("/js/trending.json")
			.then((element) => {
			setItem(element.data.products);
		});
	}, []);

	return (
		<div className="trend">
			<div className="trend-title">
				<h1>Trending Products</h1>
				<button>Show All</button>
			</div>
			<div className="container">
				<div className="row">
					{item.map((product) => {
						return (
							<div className="col-md-3 cards">
								<div className="trend-card">
									<img src={product.images[0]} />
										<h3 style={{height:"65px"}}>{product.title}</h3>
									<div className="card-info">
										<h4>{product.category}</h4>
										<h6>Rating: {product.rating} ⭐</h6>
										<h5>{product.price} 💲</h5>
									</div>
								</div>
							</div>
						);
					})}
					
				</div>
			</div>
		</div>
	);
}

export default Trend;
