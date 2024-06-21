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
                    >Sims</NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/page1"
                    className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
                    >Lieu</NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/page2"
                    className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
                    >challenge</NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/page3"
                    className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
                    >contrainte</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;