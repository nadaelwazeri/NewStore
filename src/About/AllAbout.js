import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

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
						<div className="col-md-12 about-content">
							<div className="about-card">
								<h1>Our Vision</h1>
								<h4>
									To become one of the leading e-commerce platforms in the Arab
									world by offering a complete, fast, and reliable shopping
									experience that meets all customer expectations.
								</h4>
							</div>
							<div className="about-card">
								<h1>Our Mission</h1>
								<h4>
									- Offer a wide range of carefully selected products.
									<br/>
									- Simplifythe shopping process with a clean and user-friendly design.
									<br/>
									- En sure fast delivery and excellent customer support.
									<br/>
									- Provide
									high-quality items at fair prices.
								</h4>
							</div>
							<div className="about-card">
								<h1> Why Choose Deww?</h1>
								<h4>
									<FontAwesomeIcon icon={faCheck} /> Easy-to-use website <br />
									<FontAwesomeIcon icon={faCheck} /> Diverse, high-quality products <br />
									<FontAwesomeIcon icon={faCheck} /> Multiple secure payment options <br />
									<FontAwesomeIcon icon={faCheck} /> Reliable customer support <br />
									<FontAwesomeIcon icon={faCheck} /> Fast shipping <br />
									<FontAwesomeIcon icon={faCheck} /> After-sale services <br />
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
