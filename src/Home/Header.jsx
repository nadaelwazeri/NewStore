import React from "react";
import { Link } from "react-router";

function Header() {
	return (
		<div>
			<header>
				<h1>Welcome to Deww's Website</h1>
				<p>
					If you haven’t ordered from us yet, create an account and place your
					order now!
				</p>
				<Link to="/signup" className="button-signup">
					Sign up
				</Link>
			</header>
		</div>
	);
}

export default Header;
