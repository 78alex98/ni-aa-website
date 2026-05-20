import { Link } from "react-router-dom";

export default function Contact(){
    return (
        <div className="page">
            {/* Aims to be a contact form that can be easily submitted */}
            <div className="contact-form-section">
                <p>---------------------</p>
                <h1>Contact Form Section</h1>
                <h2>Also contains image</h2>
                <h2>Should be a form that sends email or info</h2>
                <p>---------------------</p>
            </div>

            {/* Aims to be a section that displays info about them */}
            <div className="contact-info-section">
                <p>---------------------</p>
                <h1>Contact Info Section</h1>
                <h2>Also contains images</h2>
                <h2>Phone number, email, location</h2>
                <p>---------------------</p>
            </div>
        </div>
    );
}