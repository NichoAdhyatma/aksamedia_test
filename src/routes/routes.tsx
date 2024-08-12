import AuthPage from "@/pages/AuthPage";
import {DashboardPage} from "@/pages/DashboardPage";
import {RouteObject} from "react-router-dom";
import {GuestComponent, MiddlewareComponent} from "@/components/layout/MiddlewareComponent.tsx";
import {ProfilePage} from "@/pages/ProfilePage.tsx";

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
    {
        path: "/profile",
        element:
            <MiddlewareComponent>
                <ProfilePage/>
            </MiddlewareComponent>,
    },
]