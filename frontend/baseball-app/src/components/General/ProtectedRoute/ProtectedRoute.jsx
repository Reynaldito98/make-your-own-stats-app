import './ProtectedRoute.css';
import { Navigate } from 'react-router-dom';

function ProtectedRoute({isLoggedIn, children}) {
    if(!isLoggedIn) {
        return <Navigate to="/login"></Navigate>
    }
    return children;
}

export default ProtectedRoute;