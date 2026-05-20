import { Link } from "react-router-dom";

export default function NavBar() {
    return <nav className="navbar">
        <div className="navbar-container">
            <Link to="/" className="navbar-brand"> 
                NI & AA Group LLC
            </Link>

            <div className="navbar-links">
                <Link to="/"> Home </Link>
                <Link to="/projects"> Projects </Link>
                <Link to="/about"> About </Link>
                <Link to="/contact"> Contact </Link>
            </div>
        </div>
    </nav>;
}