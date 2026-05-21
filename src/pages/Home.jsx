import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";
import houseFront from "../assets/house_front.jpeg";
import sampleLandscape from "../assets/sample/sample_landscape.avif"

export default function Home(){
    return (
        <div className="page">
            {/* Main Image in the Home Screen */}
            <div className="main-home-image" 
                 style={{ backgroundImage: `url(${sampleLandscape})`}}>
            </div>

            {/* Intro Section in the Home Screen */}
            <div className="intro-section">
                <div className="inner-intro-section">
                    <div className="intro-text-section">
                        <h1>NI&AA GROUP LLC.</h1>
                        <p>
                        NI&AA Group is a family owned business with over ## years of <br/>
                        experience dedicated to delivering the best in remodeling and <br/>
                        construction. We are located the general Miami-Dade area where <br/>
                        we take pride in what we build. We work closely with our clients <br/>
                        to make sure that their wish lists are completed all the way <br/>
                        down to the last one! Our communication and efficiency here at <br/>
                        make us perfect for any job you require! 
                        <br/>
                        If you want a result, we're here to deliver. <br/>
                        </p>
                    </div>
                    
                    <div className="intro-image-section">

                    </div>
                </div>
            </div>

            {/* Featured Projects Section in the Home Screen */}
            <div className="featured-projects-section">
                <div className="inner-featured-projects-section">
                    <h1>Featured Projects</h1>
                </div>
            </div>

            {/* Services Section in the Home Screen */}
            <div className="services-section">
                <div className="inner-services-section">
                    <h1>Services</h1>
                </div>
            </div>

            {/* Relationships Section in the Home Screen */}
            <div className="relationships-section">
                <div className="inner-relationships-section">
                    <h1>Relationships</h1>
                </div>
            </div>

            {/* FAQs Section in the Home Screen */}
            <div className="faqs-section">
                <div className="inner-faqs-section">
                    <h1>FAQs (Frequently Asked Questions)</h1>
                </div>
            </div>
        </div>
    );
}