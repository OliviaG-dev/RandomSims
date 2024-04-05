import './Navbar.css';
import { NavLink } from 'react-router-dom';

function Navbar() {
    return (
        <nav>
            <ul className="nav_links">
                <li>
                    <NavLink 
                    to="/"
                    className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
                    >Home</NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/page1"
                    className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
                    >Page1</NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/page2"
                    className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
                    >Page2</NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/page3"
                    className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
                    >Page3</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;