import { createBrowserRouter, Link } from "react-router-dom";
import Login from "./Login";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import ProtectedRoute from "./pages/ProtectedPage";
import SignUp from "./pages/SignUp";

const router = createBrowserRouter([
        {
                path: "/",
                element: (
                        <Home/>
                ),
        },
        {
                path: "about",
                element: <div>About</div>,
        },
        {
                path: "sign-up",
                element: <SignUp/>,
        },
        {
                path: "login",
                element: <Login/>,
        },
        {
                path: "protected",
                element: <ProtectedRoute />,
                children: [
                        {
                                path: "dashboard",
                                element: <Dashboard />,
                        },
                ],
        },
]);

export default router;
