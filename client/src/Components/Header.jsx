import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-emerald-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-white">
          🎓 CampusCalendar
        </Link>

        {/* Desktop Nav */}
    {/* Desktop Nav */}
    <nav className="hidden md:flex space-x-6 text-lg items-center">
  <NavLink
    to="/"
    className={({ isActive }) =>
      `transition duration-300 hover:scale-105 ${
        isActive ? "text-yellow-300 font-semibold" : "text-emerald-100 hover:text-white"
      }`
    }
  >
    Home
  </NavLink>

  <NavLink
    to="/events"
    className={({ isActive }) =>
      `transition duration-300 hover:scale-105 ${
        isActive ? "text-yellow-300 font-semibold" : "text-emerald-100 hover:text-white"
      }`
    }
  >
    Events
  </NavLink>

  <NavLink
    to="/clubs"
    className={({ isActive }) =>
      `transition duration-300 hover:scale-105 ${
        isActive ? "text-yellow-300 font-semibold" : "text-emerald-100 hover:text-white"
      }`
    }
  >
    Clubs
  </NavLink>

  <Link
    to="/signin"
    className="ml-4 bg-white text-emerald-600 px-4 py-1.5 rounded-xl border border-emerald-600 hover:bg-emerald-700 hover:text-white transition duration-300"
  >
    Sign In
  </Link>

  <Link
    to="/signup"
    className="bg-emerald-800 text-white px-4 py-1.5 rounded-xl hover:bg-emerald-900 transition duration-300"
  >
    Sign Up
  </Link>
</nav>


        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? "×" : "≡"}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
  <div className="md:hidden bg-emerald-700 px-4 pb-4 space-y-3 text-lg">
    <NavLink
      to="/"
      onClick={toggleMenu}
      className={({ isActive }) =>
        `block w-full text-center rounded-md px-4 py-2 transition duration-300 ${
          isActive
            ? "bg-yellow-300 text-emerald-900 font-semibold"
            : "bg-emerald-600 text-emerald-100 hover:bg-emerald-500 hover:text-white"
        }`
      }
    >
      Home
    </NavLink>

    <NavLink
      to="/events"
      onClick={toggleMenu}
      className={({ isActive }) =>
        `block w-full text-center rounded-md px-4 py-2 transition duration-300 ${
          isActive
            ? "bg-yellow-300 text-emerald-900 font-semibold"
            : "bg-emerald-600 text-emerald-100 hover:bg-emerald-500 hover:text-white"
        }`
      }
    >
      Events
    </NavLink>

    <NavLink
      to="/clubs"
      onClick={toggleMenu}
      className={({ isActive }) =>
        `block w-full text-center rounded-md px-4 py-2 transition duration-300 ${
          isActive
            ? "bg-yellow-300 text-emerald-900 font-semibold"
            : "bg-emerald-600 text-emerald-100 hover:bg-emerald-500 hover:text-white"
        }`
      }
    >
      Clubs
    </NavLink>
  </div>
)}


    </header>
  );
};

export default Header;
