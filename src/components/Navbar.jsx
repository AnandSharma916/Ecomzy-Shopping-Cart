import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import logo from "../logo.png";

const Navbar = () => {
  const { cart } = useSelector((state) => state);
  const [searchTerm, setSearchTerm] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() !== "") {
      navigate(`/search?query=${encodeURIComponent(searchTerm.trim())}`);
      setSearchTerm("");
      setIsMenuOpen(false); // close menu on mobile after search
    }
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/contact", label: "Contact" },
    { to: "/login", label: "Login" },
    { to: "/register", label: "Register" },
  ];

  return (
    <nav className="w-full bg-gray-900 text-gray-200 shadow-md fixed top-0 left-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 h-20">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="Logo" className="h-14" />
        </NavLink>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center space-x-8 font-semibold tracking-wide">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "text-green-400 border-b-2 border-green-400 pb-1"
                  : "hover:text-green-400 transition"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Search + Cart + Hamburger */}
        <div className="flex items-center space-x-4 md:space-x-6">
          {/* Search Form */}
          <form
            onSubmit={handleSearchSubmit}
            className="relative hidden sm:block"
          >
            <input
              type="text"
              className="bg-gray-800 text-gray-200 rounded-full py-2 px-4 w-40 md:w-64 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-1 top-1 bottom-1 px-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition"
              aria-label="Search"
            >
              🔍
            </button>
          </form>

          {/* Cart Icon */}
          <NavLink
            to="/cart"
            className="relative hover:text-green-400 transition"
          >
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 rounded-full text-sm w-5 h-5 grid place-items-center text-white animate-pulse">
                {cart.length}
              </span>
            )}
          </NavLink>

          {/* Hamburger Icon */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-2xl text-white md:hidden focus:outline-none"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white px-6 py-4 space-y-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-green-400 border-b border-green-400 pb-1"
                  : "block hover:text-green-400 transition"
              }
            >
              {link.label}
            </NavLink>
          ))}

          {/* Mobile Search */}
          <form onSubmit={handleSearchSubmit} className="relative mt-4">
            <input
              type="text"
              className="bg-gray-700 text-gray-200 rounded-full py-2 px-4 w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button
              type="submit"
              className="absolute right-2 top-1 bottom-1 px-3 rounded-full bg-green-500 hover:bg-green-600 text-white transition"
              aria-label="Search"
            >
              🔍
            </button>
          </form>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
