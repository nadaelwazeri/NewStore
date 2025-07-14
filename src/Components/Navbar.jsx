import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "react-use-cart";

function Navbar() {
	const { totalItems } = useCart();
	return (
		<div className="navbar">
			<Link to="/">
				<img src="/img/copy1.png" />
			</Link>
			<div className="links">
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/shop">Shop</Link>
				<Link to="/cart">
					Cart
					<span>{totalItems}</span>
				</Link>
				<Link className="button" to="/signin">
					Sign in
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
