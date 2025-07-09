import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { AllData } from "./Data/AllData";
import ScrollToTop from "react-scroll-to-top";
import SignUp from "./SignUp/SignUp";
import AllSignIn from "./SignIn/AllSignIn";
import AllAbout from "./About/AllAbout";
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
]);

createRoot(document.getElementById("root")).render(
	<AllData>
		<RouterProvider router={router} />
		<ScrollToTop smooth />
	</AllData>
);
