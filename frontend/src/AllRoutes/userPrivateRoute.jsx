import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useUserAuth } from "../Context/userAuth";


const UserPrivateRoute = ({ children }) => {
  const { userToken } = useUserAuth();
  const location = useLocation();

  return userToken ? (
    children
  ) : (
    <Navigate to="/user_login" state={{ from: location }} />
  );
};

export default UserPrivateRoute;
