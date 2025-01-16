import React, { createContext, useState, useContext } from "react";
import axios from "axios";

// Create User Auth Context
const UserAuthContext = createContext();

// UserAuthProvider component
export const UserAuthProvider = ({ children }) => {
  const [userToken, setUserToken] = useState(localStorage.getItem("userToken"))
  const userLogin = async (email, password) => {
    try {
      const response = await axios.post("https://buycars-tjn7.onrender.com/user_auth/login", { email, password });
      setUserToken(response.data.token);
      localStorage.setItem("userToken", response.data.token); // Save token in localStorage
    } catch (error) {
      console.error("User Login Error:", error.response?.data?.msg || error.message);
    }
  };

  const userLogout = async () => {
    try {
      const token = localStorage.getItem("userToken");
      await axios.post("https://buycars-tjn7.onrender.com/user_auth/logout", {}, { headers: { Authorization: token } });
      setUserToken(null);
      localStorage.removeItem("userToken");
    } catch (error) {
      console.error("User Logout Error:", error.response?.data?.msg || error.message);
    }
  };

  return (
    <UserAuthContext.Provider value={{ userToken, userLogin, userLogout }}>
      {children}
    </UserAuthContext.Provider>
  );
};

// Custom hook to use UserAuthContext
export const useUserAuth = () => useContext(UserAuthContext);