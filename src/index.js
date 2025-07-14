import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { AllData } from "./Data/AllData";
import ScrollToTop from "react-scroll-to-top";
import SignUp from "./SignUp/SignUp";
import AllSignIn from "./SignIn/AllSignIn";
import AllAbout from "./About/AllAbout";
import AllShop from "./Shop/AllShop";
import AllCart from "./Cart/AllCart";
import { CartProvider } from "react-use-cart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AllDetails from "./DetailsItem/AllDetails";

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
	},
	{
		path: "about",
		element: <AllAbout />,
	},
	{
		path: "signup",
		element: <SignUp />,
	},
	{
		path: "signin",
		element: <AllSignIn />,
	},
	{
		path: "/shop",
		element: <AllShop />,
	},
	{
		path: "cart",
		element: <AllCart />,
	},
	{
		path: "/details/:itemId",
		element: <AllDetails/>,
	},
]);

createRoot(document.getElementById("root")).render(
	<CartProvider>
		<AllData>
			<RouterProvider router={router} />
			<ToastContainer position="top-right" autoClose={3000}  />

			<ScrollToTop smooth />
		</AllData>
	</CartProvider>
);
