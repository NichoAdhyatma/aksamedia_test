import AuthPage from "@/pages/AuthPage";
import {DashboardPage} from "@/pages/DashboardPage";

export const routeName = {
    auth: "/",
    dashboard: "/dashboard",
}

export const routes = [
    {
        path: "/",
        element: <AuthPage/>,
    },
    {
        path: "/dashboard",
        element: <DashboardPage/>,
    },
]