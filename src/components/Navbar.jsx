import "./Navbar.css";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../Images/logo.png";
import { links } from "../data";
import { FaBars } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

import React from "react";

const Navbar = () => {
  const [isNavShowing, SetisNavShowing] = useState(false);

  return (
    <nav>
      <Link to="/" className="logo" onClick={()=> SetisNavShowing(false)}>
        <img src={Logo} alt="nav logo" />
      </Link>
      <div className="container nav__container">
        <ul
          className={`navbar__link ${isNavShowing ? "show__nav" : "hide__nav"}`}
        >
          {links.map(({ name, path }, index) => {
            return (
              <li key={index}>
                <NavLink
                  to={path}
                  className={({ isActive }) => (isActive ? "active-nav" : "")}
                  onClick={() => SetisNavShowing((prev) => !prev)}
                >
                  {name}
                </NavLink>
              </li>
            );
          })}
        </ul>
        <button
          className="nav__toggle-button"
          onClick={() => SetisNavShowing(prev=>!prev)}
        >
          {isNavShowing ? <AiOutlineClose /> : <FaBars />}
          {/* <FaBars/> */}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
