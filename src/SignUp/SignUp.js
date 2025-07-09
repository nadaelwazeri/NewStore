import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function SignUp() {
	return (
		<div>
			<Navbar />
			<div>
				<div className="container">
					<div className="row signUp">
						<div className="col-md-12 boxUp">
							<h2>Sign Up</h2>
							<div className="inputs">
								<h5>First Name </h5>
								<input type="text" placeholder="First Name" />
								<h5> Second Name </h5>
								<input type="text" placeholder="Second Name" />
								<h5> Username </h5>
								<input type="text" placeholder="Enter your Username" />
								<h5> Email </h5>
								<input type="email" placeholder="example@gmail.com" />
								<h5>Password </h5>
								<input type="password" placeholder="Password" />
								<button className="buttonSign">Sign Up</button>
							</div>
						</div>
					</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default SignUp;
