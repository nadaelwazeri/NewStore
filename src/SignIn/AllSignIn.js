import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function AllSignIn() {
	return (
		<div>
			<Navbar />
            <div>
                <div className="container">
				<div className="row signin">
					<div className="col-md-12 box ">
						<h2>Sign In</h2>
						<div className="inputs">
							<h5> Email or Username </h5>
							<input type="email" placeholder="Email or Username" />
							<h5>Password </h5>
							<input type="password" placeholder="Password" />
							<a href="#">Forget your Password?</a>
							<button className="buttonSign">Sign In</button>
						</div>
					</div>
				</div>
			</div>
            </div>
			<Footer />
		</div>
	);
}

export default AllSignIn;
