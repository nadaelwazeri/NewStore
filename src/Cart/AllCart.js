import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";

function Cart() {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/shop");
	};
	const {
		isEmpty,
		totalUniqueItems,
		items,
		updateItemQuantity,
		removeItem,
		cartTotal, // بتجيب السعر الكلي
		totalItems, // عدد المنتجات الكلي
		emptyCart, // بنفضي العربية كلها
	} = useCart();

	if (isEmpty)
		return (
			<div className="empty-cart text-center m-5">
				<p>Your cart is empty</p>
				<button
					style={{
						height: "44px",
					}}
					className="side-btns"
					onClick={handleClick}>
					Shop now
				</button>
			</div>
		);

	return (
		<div>
			<div className="cart-title">
				<button
						className="btn btn-danger"
					onClick={() => {
						emptyCart();
						toast.error("Your cart has been emptied!")
					}}
				>
					Empty Cart
				</button>
			</div>

			<ul>
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<table className="table">
								<thead>
									<tr>
										<th>Id</th>
										<th>Image</th>
										<th>Name</th>
										<th>Quantity</th>
										<th>Price</th>
										<th>Operation</th>
									</tr>
								</thead>
								<tbody>
									{items.map((item) => (
										<tr key={item.id}>
											<td>{item.id}</td>
											<td>
												<img src={item.images[0]} style={{ height: "100px" }} />
											</td>
											<td>{item.title}</td>
											<td>{item.quantity}</td>
											<td>{Math.ceil(item.price * item.quantity)} $</td>
											<td>
												<button
													className="btn btn-warning"
													onClick={() =>
														updateItemQuantity(
															item.id,
															(item.quantity ?? 0) - 1
														)
													}>
													-
												</button>
												<button
													className="btn btn-success mx-2"
													onClick={() =>
														updateItemQuantity(
															item.id,
															(item.quantity ?? 0) + 1
														)
													}>
													+
												</button>
												<button
													className="btn btn-danger"
													onClick={() => removeItem(item.id)}>
													&times;
												</button>
											</td>
										</tr>
									))}
								</tbody>
								<tfoot>
									<tr>
										<td></td>
										<td></td>
										<td>Total</td>
										<td>{totalItems}</td>
										<td>{Math.ceil(cartTotal)} $</td>
										<td>
											<button
												onClick={handleClick}
												style={{ height: "70px" }}
												className="side-btns">
												Continue Shopping
											</button>
										</td>
									</tr>
								</tfoot>
							</table>
						</div>
					</div>
				</div>
			</ul>
		</div>
	);
}

function AllCart() {
	return (
		<div>
			<Navbar />
			<Cart />
			<Footer />
		</div>
	);
}

export default AllCart;
