import { useState } from "react";
import { FaLaptopCode, FaTimes, FaBars } from "react-icons/fa";
import { NavLink } from "react-router";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const base = "transition hover:text-blue-400";
  const active = "font-bold text-blue-400";
  return (
    <nav className="bg-gray-800 border-b border-gray-700 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between px-6 py-4 items-center">
        <NavLink
          to="/"
          className="flex items-center gap-2 text-lg font-bold text-blue-300"
        >
          <FaLaptopCode className="text-blue-400 text-xl" />
          <span></span>
        </NavLink>

        {/* Desktop Nav */}
        <div className="max-md:hidden flex items-center gap-6">
          <div className="space-x-4 text-md text-gray-300">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Home
            </NavLink>
            <NavLink
              to="/projects"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Projects
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Blog
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? active : base)}
            >
              Contact
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? active : base)}
            >
              About
            </NavLink>
          </div>
        </div>

        {/* Mobile Icons */}

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-blue-400 text-xl cursor-pointer"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}

      {menuOpen && (
        <div className="md:hidden bg-gray-800 border-t text-lg border-gray-700 flex flex-col px-6 py-4 space-y-2 space-x-4 text-left">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? active : base)}
            onClick={() => setMenuOpen(false)}
          >
            About
          </NavLink>
        </div>
      )}
    </nav>
  );
};
export default Navbar;
