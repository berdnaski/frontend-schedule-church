import { createBrowserRouter } from "react-router-dom";
import { Register } from "./pages/register/register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Register />
  },
]);

export { router };