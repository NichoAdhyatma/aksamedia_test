import {Navigate} from "react-router-dom";
import {ReactNode} from "react";

interface ProtectedRouteProps {
    redirectPath?: string;
    children: ReactNode;
}

export const GuestComponent = ({redirectPath = "/", children,}: ProtectedRouteProps) => {
    if (localStorage.getItem('username') != null) {
        return <Navigate to={redirectPath} replace/>;
    }

    return <>{children}</>;
}

export const MiddlewareComponent = ({redirectPath = "/", children,}: ProtectedRouteProps) => {
    if (localStorage.getItem('username') == null) {
        return <Navigate to={redirectPath} replace/>;
    }

    return <>{children}</>;
};
