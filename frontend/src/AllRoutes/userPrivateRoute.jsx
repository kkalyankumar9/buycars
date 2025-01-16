import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

const UserPrivateRoute = ({ children }) => {
  const isAuth = false
  const location = useLocation();

  return isAuth ? (
    // If authenticated, render the children
    children
  ) : (
    // If not authenticated, navigate to the "/signin" route
    <Navigate to="/user_login"  />
  );
};

export default UserPrivateRoute;
