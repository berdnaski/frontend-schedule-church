import { createBrowserRouter } from "react-router-dom";
import { Register } from "./pages/register/register";
import { Login } from "./pages/login/login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
  {
    path: "/login",
    element: <Login />
  }
]);

export { router };