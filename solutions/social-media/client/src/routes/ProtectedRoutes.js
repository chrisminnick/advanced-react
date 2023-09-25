import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../provider/authProvider';
export const ProtectedRoute = () => {
  const { currentUser } = useAuth();

  // Check if the user is authenticated
  if (!currentUser) {
    // If not authenticated, redirect to the login page
    return <Navigate to="/login" />;
  }

  // If authenticated, render the child routes
  return <Outlet />;
};
