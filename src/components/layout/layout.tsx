import { Outlet, useLocation } from "react-router-dom";
import { Header } from "../header/header";

export function Layout() {
    const location = useLocation();
    const shouldShowHeader = !['/login', '/register'].includes(location.pathname);

    return (
        <div className="flex flex-col min-h-screen">
            {shouldShowHeader && <Header />}
            <main className=" items-center justify-center">
                <Outlet />
            </main>
        </div>
    );
}
