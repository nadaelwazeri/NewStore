import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Content() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/shop");
	}
	return (
		<div>
			<div className="container">
				<div className="row">
					<div className="home">
						<div className="col-md-6 mt-5">
							<h1>You're at the premier online shopping !</h1>
							<h4>
							
								Easily find exactly what you're searching for, No effort
								required!
							</h4>
							<button onClick={handleClick}>Shop Now</button>
							
						</div>
						<div className="col-md-6">
							<img src="img/pexels-ron-lach-8386654.jpg" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Content;
