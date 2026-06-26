import { Link } from "react-router-dom";

export default function Footer(){
    return (
        <div className="footer">
            <div className="footer-container">

                {/* Company Info */}
                <div className="footer-column">
                    <h3 className="footer-company-name">NI&AA Group LLC.</h3>
                    <p>Serving the Miami-Dade Area</p>
                    <p>Since 20##</p>
                </div>

                {/* Navigation Links */}
                <div className="footer-column">
                    <h4 className="footer-heading">Navigation</h4>
                    <Link to="/" className="footer-link">Home</Link>
                    <Link to="/projects" className="footer-link">Projects</Link>
                    <Link to="/about" className="footer-link">About</Link>
                    <Link to="/contact" className="footer-link">Contact</Link>
                </div>

                {/* Owner Info */}
                <div className="footer-column">
                    <h4 className="footer-heading">Contact Us</h4>
                    <p>President: Nivio Valdes</p>
                    <p>(786)-609-8340</p>
                    <Link to="/contact" className="footer-link">Click Here to Contact</Link>
                </div>

            </div>

            <div className="footer-bottom">
                <p>Created by NI&AA Group LLC.</p>
            </div>
        </div>
    );
}