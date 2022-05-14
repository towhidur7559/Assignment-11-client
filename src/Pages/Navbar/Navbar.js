import React from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light shadow-lg bg-white p-1 sticky-top">
      <div className="container">
        <Link className="navbar-brand" to="/">
          <h2 className="color-blue fw-bold">PC <span className="color-pink">HOUSE</span></h2>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nave-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-info fs-5" : "nav-link fs-5"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="nave-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-info fs-5" : "nav-link fs-5"
                }
                to="/blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="nave-item">
              <NavLink
                className={({ isActive }) =>
                  isActive ? "nav-link text-info fs-5" : "nav-link fs-5"
                }
                to="/login"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
