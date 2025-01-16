import React from 'react';

import { Navigate, useLocation } from 'react-router-dom';

const DealerPrivateRoute = ({ children }) => {
   const isAuth=false 
  const location = useLocation();

  return isAuth ? (
    // If authenticated, render the children
    children
  ) : (
    // If not authenticated, navigate to the "/signin" route
    <Navigate to="/dealer_login"  />
  );
};

export default DealerPrivateRoute;
