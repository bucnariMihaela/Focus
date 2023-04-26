import { Outlet, Link } from "react-router-dom";
import "./NavigationBar.css";
import React from "react";
import { useContext } from "react";
import { MyContext } from "../App";

const NavigationBar = () => {
  const { key, setKey } = useContext(MyContext);

  const handleLogoutClick = () => {
    setKey("");
  };

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
            <li>
              <Link onClick={handleLogoutClick} to="/auth">
                Log out
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
};

export default NavigationBar;
