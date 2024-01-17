import { useAuth } from "../context/Auth";
import { Navigate, Outlet } from "react-router-dom";
export const ProtectedRoute = () => {
    const { token } = useAuth();
    console.log(token)
  
    // Check if the user is authenticated
    if (!token) {
      // If not authenticated, redirect to the login page
      return console.log("NO TOKEN");
    }
  
    // If authenticated, render the child routes
    return <Outlet />;
  };