import { Navigate } from "react-router";
import { useAuth } from "../../hooks/AuthProvider";
import { useLocation } from "react-router";

export default function ProtectedRoute({ children }) {
    const { isAuthenticated } = useAuth() 
    const location = useLocation()

    //Allow access to login and register pages even when not authenticated
    if(!isAuthenticated && location.pathname !== "/login" && location.pathname !== "/register") {
        return <Navigate to="/login" replace/>
    }

    return children
}