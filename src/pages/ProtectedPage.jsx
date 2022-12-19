import { Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
const ProtectedRoute = () => {
        const user = null;
        if (!user) {
                return <Navigate to="/login" replace />;
        } else {
                return <Outlet />;
        }
};
export default ProtectedRoute;
