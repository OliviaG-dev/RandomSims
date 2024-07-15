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
                    to="/Lieu"
                    className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
                    >Lieu</NavLink>
                </li>
                <li>
                    <NavLink 
                    to="/Challenge"
                    className={({ isActive }) => (isActive ? "activeLink" : "inactiveLink")}
                    >challenge</NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;