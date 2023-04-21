import { Outlet, Link } from "react-router-dom";
import './NavigationBar.css'
import React from "react";

const NavigationBar = () => {
  return (
    <>
    <header className="header">
      <nav>
        <ul className="list">
          <li>
            <Link to="/">Games</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/auth">Log in/Sign in</Link>
          </li>
          
        </ul>
      </nav>
      </header>
      <Outlet />
    </>
  )
};

export default NavigationBar;
