import React, { useState, useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../Contexts/AuthContext"

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuth, userName, setIsAuth, setToken, setUserName,role,setRole } = useContext(AuthContext);
  console.log('role: ', role);
  const navigate = useNavigate();

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userName");
    localStorage.removeItem("role");

    setIsAuth(false);
    setToken("");
    setUserName("");
    setRole("")
    navigate("/");
  };

  return (
    <header className="bg-emerald-600 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          🎓 CampusCalendar
        </Link>

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
          {role=="admin" && <>
            <NavLink
            to="/create-events"
            className={({ isActive }) =>
              `transition duration-300 hover:scale-105 ${
                isActive ? "text-yellow-300 font-semibold" : "text-emerald-100 hover:text-white"
              }`
            }
          >
            Create Events
          </NavLink>
          </>}
          

          {isAuth ? (
            <>
              <span className="text-emerald-100 text-lg">
  Welcome, <span className="font-semibold italic text-white tracking-wide">{userName}</span>!
</span>
              <button
                onClick={handleLogout}
                className="ml-4 bg-red-500 text-white px-4 py-1.5 rounded-xl hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
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
            </>
          )}
        </nav>

        <button
          onClick={toggleMenu}
          className="md:hidden text-white text-2xl focus:outline-none"
        >
          {isOpen ? "×" : "≡"}
        </button>
      </div>

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
          {role=="admin"&& <>
            <NavLink
            to="/create-events"
            onClick={toggleMenu}
            className={({ isActive }) =>
              `block w-full text-center rounded-md px-4 py-2 transition duration-300 ${
                isActive
                  ? "bg-yellow-300 text-emerald-900 font-semibold"
                  : "bg-emerald-600 text-emerald-100 hover:bg-emerald-500 hover:text-white"
              }`
            }
          >
            Create Events
          </NavLink>
          </>}
       

          {isAuth ? (
            <>
              <div className="text-center text-emerald-100">Welcome, {userName}!</div>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="block w-full text-center rounded-md px-4 py-2 bg-red-500 text-white hover:bg-red-600 transition duration-300"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                to="/signin"
                onClick={toggleMenu}
                className="block w-full text-center rounded-md px-4 py-2 bg-white text-emerald-600 border border-emerald-600 hover:bg-emerald-700 hover:text-white transition duration-300"
              >
                Sign In
              </Link>
              <Link
                to="/signup"
                onClick={toggleMenu}
                className="block w-full text-center rounded-md px-4 py-2 bg-emerald-800 text-white hover:bg-emerald-900 transition duration-300"
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
};

export default Header;
