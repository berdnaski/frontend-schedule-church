// src/router.tsx
import { createBrowserRouter } from "react-router-dom";
import { Admin } from "./pages/admin/admin";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Login } from "./pages/login/login";
import { Register } from "./pages/register/register";
import { Private } from "./routes/Private";
import { Layout } from "./components/layout/layout";
import { ListSchedules } from "./pages/schedules/list-schedules";
import { CreateSchedules } from "./pages/schedules/create-schedules";
import { CreateDepartmentForm } from "./pages/department/create-department";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/dashboard",
        element: (
          <Private>
            <Dashboard />
          </Private>
        )
      },
      {
        path: "/admin",
        element: (
          <Private role='ADMIN'>
            <Admin />
          </Private>
        )
      },
      {
        path: "/schedules",
        element: (
          <Private>
            <ListSchedules />
          </Private>
        )
      },
      {
        path: "/schedules/create",
        element: (
          <Private>
            <CreateSchedules />
          </Private>
        )
      },
      {
        path: "/departments",
        element: (
          <Private>
            <CreateDepartmentForm />
          </Private>
        )
      }
    ]
  }
]);

export { router };
