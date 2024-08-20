import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../header/header";

export function Layout() {
    const location = useLocation();
    const shouldShowHeader = !['/login', '/register'].includes(location.pathname);

    return (
        <>
            {shouldShowHeader && <Header />}
            <Outlet />
        </>
    );
}
