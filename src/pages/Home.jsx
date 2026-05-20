import { Link } from "react-router-dom";

export default function Home(){
    return (
        <div className="page">
            {/* Aims to have an image with an introductory message */}
            <div className="intro-section">
                <p>---------------------</p>
                <h1>Intro Section blah blah blah</h1>
                <h2>Also contains image</h2>
                <h2>Should also have contact info</h2>
                <Link to="/contact"> Contact Us! </Link>
                <p>---------------------</p>
            </div>

            {/* Aims to have a description about the company (with a pic)*/}
            <div className="description-section">
                <p>---------------------</p>
                <h1>Description Section blah blah blah</h1>
                <h2>Also contains image</h2>
                <p>---------------------</p>
            </div>

            {/* Aims to have a some featured projects and link to projects page*/}
            <div className="featured-projects-section">
                <p>---------------------</p>
                <h1>Featured Project Section blah blah blah</h1>
                <h2>Also contains images</h2>
                <Link to="/projects"> View More Projects </Link>
                <p>---------------------</p>
            </div>

            {/* Aims to showcase the type of services that the company does*/}
            <div className="services-section">
                <p>---------------------</p>
                <h1>Services Section blah blah blah</h1>
                <h2>Also contains images</h2>
                <p>---------------------</p>
            </div>

            {/* Aims to showcase a little bit about the relationships ascpect*/}
            <div className="relationship-section">
                <p>---------------------</p>
                <h1>Relationship Section blah blah blah</h1>
                <h2>Also contains images</h2>
                <p>---------------------</p>
            </div>

            {/* Aims to display FAQs*/}
            <div className="faq-section">
                <p>---------------------</p>
                <h1>FAQs Section blah blah blah</h1>
                <h2>I have no structure for this yet :/</h2>
                <p>---------------------</p>
            </div>
        </div>
    );
}