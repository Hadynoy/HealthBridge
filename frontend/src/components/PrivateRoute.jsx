import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext'; // Corrected to use useAuth hook

const PrivateRoute = ({ element, allowedRole }) => {
  const { isAuthenticated, userRole } = useAuth(); // Corrected to use 'userRole'

  if (!isAuthenticated) {
    // Not logged in
    return <Navigate to={`/login/${allowedRole.toLowerCase()}`} replace />;
  }

  if (userRole !== allowedRole) {
    // Logged in but not the right role
    return <Navigate to="/" replace />;
  }

  return element; // Render the element if authenticated and has the right role
};

export default PrivateRoute;
