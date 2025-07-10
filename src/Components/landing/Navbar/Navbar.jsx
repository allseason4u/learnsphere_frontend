import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Function to check if current path matches the link
  const isActiveLink = (path) => {
    return location.pathname === path;
  };

  // Function to get link classes based on active state
  const getLinkClasses = (path) => {
    const baseClasses = "transition-colors font-medium";
    const activeClasses = "text-violet-600 font-semibold";
    const inactiveClasses = "text-gray-700 hover:text-violet-600";

    return `${baseClasses} ${
      isActiveLink(path) ? activeClasses : inactiveClasses
    }`;
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold bg-gradient-to-r from-violet-600 cursor-pointer to-purple-600 bg-clip-text text-transparent"
          >
            LearnSphere
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClasses("/")}>
              Home
            </Link>
            <Link to="/courses" className={getLinkClasses("/courses")}>
              Courses
            </Link>
            <Link to="/about" className={getLinkClasses("/about")}>
              About
            </Link>
            <Link to="/contact" className={getLinkClasses("/contact")}>
              Contact
            </Link>
            <Link to="/login" className={getLinkClasses("/login")}>
              Login
            </Link>
            <Link
              to="/register"
              className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              Register
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center items-center">
              <span
                className={`block w-full h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-gray-600 mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block w-full h-0.5 bg-gray-600 mt-1 transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden mt-4 pb-4 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          <div className="flex flex-col space-y-3">
            <Link
              to="/"
              className={getLinkClasses("/")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/courses"
              className={getLinkClasses("/courses")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Courses
            </Link>
            <Link
              to="/about"
              className={getLinkClasses("/about")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              to="/contact"
              className={getLinkClasses("/contact")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Link
              to="/login"
              className={getLinkClasses("/login")}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-gradient-to-r from-violet-500 to-purple-600 text-white px-6 py-2 rounded-full font-semibold w-fit"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Register
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
