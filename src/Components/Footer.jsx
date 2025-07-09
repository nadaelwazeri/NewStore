import React from "react";
import { Link } from "react-router-dom";

function Footer() {
	return (
		<div>
			<footer>
				<div className="footer-title">
				
					<h4>Contact Info</h4>
					<h6>
						📍 Address: 123 Deww Street, Cairo, Egypt <br />
						📞 Phone: +20 123 456 7890 <br />
						📧 Email: support@deww.com <br />
					</h6>
				</div>
				<div className="footer-links">
					<Link to="/">🏠 Home</Link>
					<Link to="/about">📖 About</Link>
					<Link to="#">📦 Shop</Link>
					<Link to="#">🛒 Cart</Link>
				</div>
				<div className="footer-icons">
					<i
						className="fa-brands fa-facebook"
						style={{
							color: "white",padding:"5px"
						}}></i>
					<i
						className="fa-brands fa-whatsapp"
						style={{
							color: "#25D366", padding:"5px"
						}}></i>
					<i className="fa-brands fa-youtube" style={{ color: "red",padding:"5px" }}></i>
					<i
						className="fa-brands fa-instagram"
						style={{ color: "#E1306C",padding:"5px" }}></i>
					<i className="fa-brands fa-tiktok" style={{ color: "#010101",padding:"5px" }}></i>
					<i className="fa-brands fa-telegram" style={{ color: "#ffffff",padding:"5px" }}></i>
				</div>
			</footer>
		</div>
	);
}

export default Footer;
