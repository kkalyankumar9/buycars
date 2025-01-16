import React, { createContext, useState, useContext } from "react";
import axios from "axios";

// Create Dealer Auth Context
const DealerAuthContext = createContext();

// DealerAuthProvider component
export const DealerAuthProvider = ({ children }) => {
  const [dealerToken, setDealerToken] = useState(null);

  const dealerLogin = async (email, password) => {
    try {
      const response = await axios.post("/dealer/login", { email, password });
      setDealerToken(response.data.token);
      localStorage.setItem("dealerToken", response.data.token); // Save token in localStorage
    } catch (error) {
      console.error("Dealer Login Error:", error.response?.data?.msg || error.message);
    }
  };

  const dealerLogout = async () => {
    try {
      const token = localStorage.getItem("dealerToken");
      await axios.post("/dealer/logout", {}, { headers: { Authorization: token } });
      setDealerToken(null);
      localStorage.removeItem("dealerToken");
    } catch (error) {
      console.error("Dealer Logout Error:", error.response?.data?.msg || error.message);
    }
  };

  return (
    <DealerAuthContext.Provider value={{ dealerToken, dealerLogin, dealerLogout }}>
      {children}
    </DealerAuthContext.Provider>
  );
};

// Custom hook to use DealerAuthContext
export const useDealerAuth = () => useContext(DealerAuthContext);
