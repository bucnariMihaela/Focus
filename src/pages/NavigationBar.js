import { Outlet, Link } from "react-router-dom";
import './NavigationBar.css'

const NavigationBar = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Games</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default NavigationBar;
