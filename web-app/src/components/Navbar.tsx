import React from "react";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <div className="bg-black flex justify-between items-center text-white">
      <div className="px-7">
        <Link to="/">
        <img
          src="/src/assets/helmet-cinema-logo.png"
          alt="Logo"
          className="w-8 h-8"
        />
        </Link>
      </div>
      <div className="flex flex-row">
        <Link
          to="/login"
          className="text-l font-bold bg-red-400 px-7 py-5 hover-standard"
        >
          Login
        </Link>
        <Link
          to="/register"
          className="text-ll font-bold bg-red-600 px-7 py-5 hover-standard"
        >
          Register
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
