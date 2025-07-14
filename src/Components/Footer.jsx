import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faAddressCard } from "@fortawesome/free-solid-svg-icons";
import { faShop } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

function Footer() {
	return (
		<div>
			<footer>
				<div className="contanier">
					<div className="row footer-caption">
						<div className="col-md-8 m-auto">
							<h3>
								Hello , Dear Customers! <br/>
								We're so glad to have you here at Deww.
								Your presence means the world to us Thank you for being a part
								of our journey. We’re here to make your shopping experience
								delightful, easy, and inspiring. ❤️
							</h3>
							<hr />
						</div>
					</div>
				</div>
				<div className="footer-content">
				<div className="footer-title">
					<h4>Contact Info</h4>
					<h6>
						<FontAwesomeIcon icon={faLocationDot} /> Address: 123 Deww Street,
						Cairo, Egypt <br />
						<FontAwesomeIcon icon={faPhone} /> Phone: +20 123 456 7890 <br />
						<FontAwesomeIcon icon={faEnvelope} /> Email: support@deww.com <br />
					</h6>
				</div>
				<div className="footer-links">
					<Link to="/">
						<FontAwesomeIcon icon={faHouse} /> Home
					</Link>
					<Link to="/about">
						<FontAwesomeIcon icon={faAddressCard} /> About
					</Link>
					<Link to="/shop">
						{" "}
						<FontAwesomeIcon icon={faShop} /> Shop
					</Link>
					<Link to="/cart">
						<FontAwesomeIcon icon={faCartShopping} /> Cart
					</Link>
				</div>
				<div className="footer-icons">
					<i
						className="fa-brands fa-facebook"
						style={{
							color: "white",
							padding: "5px",
						}}></i>
					<i
						className="fa-brands fa-whatsapp"
						style={{
							color: "#25D366",
							padding: "5px",
						}}></i>
					<i
						className="fa-brands fa-youtube"
						style={{ color: "red", padding: "5px" }}></i>
					<i
						className="fa-brands fa-instagram"
						style={{ color: "#E1306C", padding: "5px" }}></i>
					<i
						className="fa-brands fa-tiktok"
						style={{ color: "#010101", padding: "5px" }}></i>
					<i
						className="fa-brands fa-telegram"
						style={{ color: "#ffffff", padding: "5px" }}></i>
				</div>

				</div>
			</footer>
		</div>
	);
}

export default Footer;
