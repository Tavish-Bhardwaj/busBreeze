import { createBrowserRouter } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Login from "../Pages/Login";
import Signup from "../Pages/Signup";
import App from "../src/App";
import Searchbus from "../Pages/Searchbus";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Searchbus />,
      },
    ],
  },
]);

export default router;
