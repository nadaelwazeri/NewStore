import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

function AllAbout() {
	return (
		<div>
			<Navbar />
			<div>
				<h1 className="about-caption"> Welcome to Deww ! </h1>
				<h3 className="about-caption">
					Your go-to destination for a unique and seamless online shopping
					experience !
					<br /> We are a passionate team of tech and e-commerce enthusiasts
					<br /> who created this platform to provide high-quality products
					<br /> at the best prices, with a smooth and secure <br /> shopping
					journey.
				</h3>
				<div className="container">
					<div className="row">
						<div className="col-md-3 about">
							
								<div className="about-card">
									<h1>Our Vision</h1>
									<h4>
										To become one of the leading e-commerce platforms in the
										Arab world by offering a complete, fast, and reliable
										shopping experience that meets all customer expectations.
									</h4>
								</div>
								<div className="about-card">
									<h1>Our Mission</h1>
									<h4>
										<ul>
											<li>
												Offer a wide range of carefully selected products.
											</li>
											<li>
												Simplify the shopping process with a clean and
												user-friendly design.
											</li>
											<li>
												Ensure fast delivery and excellent customer support.
											</li>
											<li>Provide high-quality items at fair prices.</li>
										</ul>
									</h4>
								</div>
								<div className="about-card">
									<h1> Why Choose Deww?</h1>
									<h4>
										✅ Easy-to-use website <br />
										✅ Diverse, high-quality products <br />
										✅ Multiple secure payment options <br />
										✅ Reliable customer support <br />
										✅ Fast shipping <br />
										✅ After-sale services <br />
									</h4>
								</div>
							
						</div>
					</div>
					<h1 className="about-caption">Get in Touch</h1>
					<h2
						className="about-caption"
						style={{
							marginBottom: "20px",
						}}>
						We’re always here to help!
						<br /> If you have any questions or suggestions,
						<br /> feel free to contact us through the Contact Us page or reach
						out via our social media channels.
					</h2>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default AllAbout;
