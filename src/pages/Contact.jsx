import { useState } from "react";

import sampleLandscape from "../assets/sample/sample_landscape.avif";
import emailIcon from "../assets/icons/email.png"
import locationIcon from "../assets/icons/location.png"
import phoneIcon from "../assets/icons/phone.png"
import presidentIcon from "../assets/icons/president.png"

export default function Contact() {
    const [formData, setFormData] = useState({ name: "", subject: "", description: "" });
    const [status, setStatus] = useState("idle"); // "idle" | "sending" | "success" | "error"

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("sending");

        try {
            const response = await fetch("https://formspree.io/f/mzdldwna", {
                method: "POST",
                headers: { "Content-Type": "application/json", "Accept": "application/json" },
                body: JSON.stringify({
                    name: formData.name,
                    subject: formData.subject,
                    message: formData.description,
                }),
            });

            if (response.ok) {
                setStatus("success");
                setFormData({ name: "", subject: "", description: "" });
            } else {
                setStatus("error");
            }
        } catch {
            setStatus("error");
        }
    };

    return (
        <div className="page">
            {/* Hero Image */}
            <div className="main-contact-image"
                style={{ backgroundImage: `url(${sampleLandscape})` }}>
                <div className="contact-hero-overlay">
                    <h1>Contact Us</h1>
                </div>
            </div>

            {/* Contact Form Section */}
            <div className="contact-form-section">
                <div className="inner-contact-form-section">
                    <div className="contact-form-text">
                        <h1>Ask Us Here!</h1>
                        <p>
                        Have a project in mind?<br/>
                        Want to figure out a price?<br/>
                        Don't know where to start?<br/><br/>
                        Fill out this form to contact us<br/>
                        and we'll get back to you as soon as possible!
                        </p>
                    </div>
                    <div className="contact-form-wrapper">
                        <div className="contact-form-fields">
                            <div className="contact-field-group">
                                <label htmlFor="name">Name</label>
                                <input
                                    type="text" id="name" name="name"
                                    placeholder="Your Full Name"
                                    value={formData.name}
                                    onChange={handleChange} required
                                />
                            </div>
                            <div className="contact-field-group">
                                <label htmlFor="subject">Subject</label>
                                <input
                                    type="text" id="subject" name="subject"
                                    placeholder="What is this regarding?"
                                    value={formData.subject}
                                    onChange={handleChange} required
                                />
                            </div>
                            <div className="contact-field-group">
                                <label htmlFor="description">Description</label>
                                <textarea
                                    id="description" name="description"
                                    placeholder="Tell us what you need..."
                                    rows={5}
                                    value={formData.description}
                                    onChange={handleChange} required
                                />
                            </div>
                            {status === "error" && (
                                <p className="contact-form-error">
                                    Something went wrong. Please try again or email us directly.
                                </p>
                            )}
                            {status === "success" ? (
                                <p className="contact-form-success-inline">✓ Message sent! We'll be in touch soon!</p>
                            ) : (
                                <button
                                    className="contact-submit-btn"
                                    onClick={handleSubmit}
                                    disabled={status === "sending"}
                                >
                                    {status === "sending" ? "Sending..." : "Send Message"}
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Contact Info Section */}
            <div className="contact-info-section">
                <div className="inner-contact-info-section">
                    <div className="contact-info-text">
                        <h1>Get In Touch</h1>
                        <p>We're always happy to hear from you.</p>
                    </div>
                    <div className="contact-info-cards">
                        <div className="contact-info-card">
                            <img src={presidentIcon} alt="President" className="contact-info-icon" />
                            <p className="contact-info-card-label">President</p>
                            <p className="contact-info-card-value">Nivio Valdes </p>
                        </div>
                        <div className="contact-info-card">
                            <img src={phoneIcon} alt="Phone" className="contact-info-icon" />
                            <p className="contact-info-card-label">Phone</p>
                            <a className="contact-info-card-value contact-info-link" href="tel:7866098310">
                                (786)-609-8310
                            </a>
                        </div>
                        <div className="contact-info-card">
                            <img src={emailIcon} alt="Email" className="contact-info-icon" />
                            <p className="contact-info-card-label">Email</p>
                            <a className="contact-info-card-value contact-info-link" href="mailto:your@email.com">
                                niviovaldes@gmail.com
                            </a>
                        </div>
                        <div className="contact-info-card">
                            <img src={locationIcon} alt="Location" className="contact-info-icon" />
                            <p className="contact-info-card-label">Location</p>
                            <p className="contact-info-card-value">Miami-Dade, FL</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}