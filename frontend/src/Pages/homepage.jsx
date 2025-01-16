import React from 'react';
import { Link } from 'react-router-dom';
import CarsPages from './carsPages';

const Homepage = () => {
  return (
    <div>
      {/* Navbar */}
      <nav className="bg-gray-800 p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-semibold">Buycars</div>
          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-400">Home</Link>
            <Link to="/cars" className="text-white hover:text-gray-400">Cars</Link>
            <Link to="/user_signup" className="text-white hover:text-gray-400">User Signup</Link>
          </div>
          <div className="md:hidden flex items-center">
            <button className="text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>
      {/* Main Content */}
      <div className="p-8">
        <h1 className="text-4xl font-bold text-center text-white">Welcome to BuyCars</h1>
        <CarsPages/>
      </div>
    </div>
  );
}

export default Homepage;
