import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
	return (
		<div className="navbar">
			<img src="img/copy1.png" />
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/cart">Cart</Link>
				<Link className="button" to="/signin">
					Sign in
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
