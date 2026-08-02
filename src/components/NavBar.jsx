import { Link } from "react-router-dom";
import logo from '../assets/icons/logo.png';

export default function NavBar() {
    return <nav className="navbar">
        <div className="navbar-container">
            <div className="left-navbar-container">
                <div className="navbar-links">
                    <Link className="navbar-link" to="/"> HOME </Link>
                    <Link className="navbar-link" to="/projects"> PROJECTS </Link>
                </div>
            </div>

            <div className="center-navbar-container">
                <Link to="/" className="navbar-logo">
                    <div className="navbar-logo-inner">
                        <img src={logo} alt="NI & AA Group LLC Logo" />
                    </div>
                </Link>
            </div>

            <div className="right-navbar-container">
                <div className="navbar-links">
                    <Link className="navbar-link" to="/about"> ABOUT </Link>
                    <Link className="navbar-link" to="/contact"> CONTACT </Link>
                </div>
            </div>
        </div>
    </nav>;
}