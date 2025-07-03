import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `px-3 py-2 rounded transition duration-200 ${
      isActive ? "bg-white text-green-700 font-semibold" : "hover:bg-green-800"
    }`;

  return (
    <nav className="bg-green-700 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="text-xl font-bold">Library System</div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-4">
            <NavLink to="/" className={navLinkClass}>
              All Books
            </NavLink>
            <NavLink to="/add-book" className={navLinkClass}>
              Add Book
            </NavLink>
            <NavLink to="/borrow-summary" className={navLinkClass}>
              Borrow Summary
            </NavLink>
          </div>

          {/* Hamburger Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 8h16M4 16h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav - Animated */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 py-2 space-y-2">
          <NavLink to="/" className={navLinkClass}>
            All Books
          </NavLink>
          <NavLink to="/add-book" className={navLinkClass}>
            Add Book
          </NavLink>
          <NavLink to="/borrow-summary" className={navLinkClass}>
            Borrow Summary
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
