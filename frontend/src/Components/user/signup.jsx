import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
   
      await axios.post("https://buycars-tjn7.onrender.com/user_auth/signup", { email, password });
      alert("Signup successful! Redirecting to login...");

    
      navigate("/user_login");
    } catch (err) {
      setError("Sign up failed. Please try again.");
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6">User Sign Up</h2>

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full mt-2 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Sign Up
          </button>

          {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
        </form>

        <div className="mt-4 text-center">
          <p className="text-sm text-gray-600">Already have an account?</p>
          <Link to="/user_login" className="text-blue-500 hover:text-blue-700">Login here</Link>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300">
            <Link to="/user_signup">User</Link>
          </button>
          <button className="bg-gray-200 py-2 px-4 rounded-md hover:bg-gray-300">
            <Link to="/dealer_signup">Dealer</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
