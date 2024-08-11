import AuthPage from "@/pages/AuthPage";
import {DashboardPage} from "@/pages/DashboardPage";
import {RouteObject} from "react-router-dom";
import {GuestComponent, MiddlewareComponent} from "@/components/MiddlewareComponent";

export const routeName = {
    auth: "/",
    dashboard: "/dashboard",
}

export const routes: RouteObject[] = [
    {
        path: "/",
        element:
            <GuestComponent redirectPath={'/dashboard'}>
                <AuthPage/>
            </GuestComponent>,
    },
    {
        path: "/dashboard",
        element:
            <MiddlewareComponent>
                <DashboardPage/>
            </MiddlewareComponent>,
    },
]