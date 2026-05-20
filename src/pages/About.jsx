import { Link } from "react-router-dom";

export default function About(){
    return (
        <div className="page">
            {/* Aims to describe about the company */}
            <div className="main-about-section">
                <p>---------------------</p>
                <h1>About Us</h1>
                <h2>Also contains image</h2>
                <h2></h2>
                <p>---------------------</p>
            </div>

            {/* Aims to describe about owner */}
            <div className="president-section">
                <p>---------------------</p>
                <h1>President About</h1>
                <h2>Nivio Valdes Diaz</h2>
                <h2>Contains info blah blah</h2>
                <h2>Also contains picture :D</h2>
                <p>---------------------</p>
            </div>

            {/* Aims to describe about philosophy in regards to projects */}
            <div className="philosophy-section">
                <p>---------------------</p>
                <h1>Our Philosophy</h1>
                <h2>Contains info blah blah about how they work</h2>
                <p>---------------------</p>
            </div>

            {/* Aims to describe why a client should choose them */}
            <div className="why-us-section">
                <p>---------------------</p>
                <h1>Why Us?</h1>
                <h2>Contains info blah blah about why they should be chosen</h2>
                <p>---------------------</p>
            </div>
        </div>
    );
}