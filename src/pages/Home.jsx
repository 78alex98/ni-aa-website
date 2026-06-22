import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Link } from "react-router-dom";

import { useState } from "react";

import houseFront from "../assets/house_front.jpeg";
import sampleLandscape from "../assets/sample/sample_landscape.avif"
import sampleHouse2 from "../assets/sample/sample_house_2.webp"
import sampleHouse3 from "../assets/sample/sample_house_3.jpg"
import sampleHouse4 from "../assets/sample/sample_house_4.webp"
import houseIcon from "../assets/icons/home.png"
import constructionIcon from "../assets/icons/construction.png"
import remodelingIcon from "../assets/icons/remodeling.png"
import additionsIcon from "../assets/icons/additions.png"
import repairsIcon from "../assets/icons/repairs.png"
import andmoreIcon from "../assets/icons/andmore.png"

export default function Home(){
    const [openFaq, setOpenFaq] = useState(null);

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
                        NI&AA Group is a family owned business with over 12 years of <br/>
                        experience dedicated to delivering the best in remodeling and <br/>
                        construction. We are located the general Miami-Dade area where <br/>
                        we take pride in what we build. We work closely with our clients <br/>
                        to make sure that their wish lists are completed all the way <br/>
                        down to the last one! Our communication and efficiency here at <br/>
                        make us perfect for any job you require! 
                        <br/><br/>
                        <strong> If you want a result, we're here to deliver. </strong> <br/>
                        </p>
                        <Link to="/contact" className="intro-contact-btn">Contact Us!</Link>
                    </div>
                    
                    <div className="intro-image-section">
                        <div className="inner-intro-image-section">
                            <div className="intro-image-left">
                                <img className="intro-img-1" src={sampleHouse2} alt="Left Image" />
                            </div>
                            <div className="intro-image-right">
                                <img className="intro-img-2" src={sampleHouse3} alt="Right Top Image" />
                                <img className="intro-img-3" src={sampleHouse4} alt="Right Bottom Image" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Featured Projects Section in the Home Screen */}
            <div className="featured-projects-section">
                <div className="inner-featured-projects-section">

                    {/* Left Panel */}
                    <div className="left-featured-projects-panel">
                        <div className="featured-projects-title">
                            <h1>We Have Proven Results!</h1>
                        </div>
                        <div className="featured-projects-description">
                                <p>Come see some of our work!</p>
                        </div>
                        <div className="featured-projects-bottom-row">
                            <div className="left-featured-projects-gallery-section">
                                <img className="feat-proj-img-1" src={sampleHouse2} alt="Project Image 1" />
                            </div>
                            <Link to="/projects" className="see-more-projects-btn">View More!</Link>
                        </div>
                    </div>

                    {/* Right Panel */}
                    <div className="right-featured-projects-panel">
                        <div className="right-featured-projects-gallery-section">
                            <img className="feat-proj-img-2" src={sampleHouse2} alt="Project Image 2" />
                            <img className="feat-proj-img-3" src={sampleHouse2} alt="Project Image 3" />
                            <img className="feat-proj-img-4" src={sampleHouse2} alt="Project Image 4" />
                            <img className="feat-proj-img-5" src={sampleHouse2} alt="Project Image 5" />
                            <img className="feat-proj-img-6" src={sampleHouse2} alt="Project Image 6" />
                            <img className="feat-proj-img-7" src={sampleHouse2} alt="Project Image 7" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Services Section in the Home Screen */}
            <div className="services-section">
                <div className="inner-services-section">
                    <div className="services-title">
                        <h1>We Provide Many Different Services!</h1>
                    </div>

                    <div className="services-icons-row">
                        
                        <div className="service-item">
                            <div className="service-icon-outer">
                                <div className="service-icon-inner">
                                    <img src={constructionIcon} alt="Construction" />
                                </div>
                            </div>
                            <p>Construction</p>
                        </div>

                        <div className="service-item">
                            <div className="service-icon-outer">
                                <div className="service-icon-inner">
                                    <img src={remodelingIcon} alt="Remodeling" />
                                </div>
                            </div>
                            <p>Remodeling</p>
                        </div>

                        <div className="service-item">
                            <div className="service-icon-outer">
                                <div className="service-icon-inner">
                                    <img src={additionsIcon} alt="Additions" />
                                </div>
                            </div>
                            <p>Additions</p>
                        </div>

                        <div className="service-item">
                            <div className="service-icon-outer">
                                <div className="service-icon-inner">
                                    <img src={repairsIcon} alt="Repairs" />
                                </div>
                            </div>
                            <p>Repairs</p>
                        </div>

                        <div className="service-item">
                            <div className="service-icon-outer">
                                <div className="service-icon-inner">
                                    <img src={andmoreIcon} alt="And More" />
                                </div>
                            </div>
                            <p>And More!</p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Relationships Section in the Home Screen */}
            <div className="relationships-section">
                <div className="inner-relationships-section">
                    <div className="relationship-image-section">
                        <div className="inner-relationship-image-section">
                            <div className="relationship-image-left">
                                <img className="relationship-img-1" src={sampleHouse2} alt="Left Image" />
                            </div>
                            <div className="relationship-image-right">
                                <img className="relationship-img-2" src={sampleHouse3} alt="Right Image" />
                            </div>
                        </div>
                    </div>
                    
                    <div className="relationships-text-section">
                        <h1>Our Relationships</h1>
                        <p>
                            Our relationships with our clients are our top priority. <br/>
                            When we ensure that we are delivering a good product, <br/>
                            we also ensure that our clients are happy. Many of our <br/>
                            clients are recurring and continue to work with us to complete <br/>
                            all the projects on their wish lists!
                            <br/><br/>
                            <strong> Here, we make sure you'd want to come back! </strong> <br/>
                        </p>
                    </div>
                </div>
            </div>

            {/* FAQs Section in the Home Screen */}
            <div className="faqs-section">
                <div className="inner-faqs-section">
                    <div className="faqs-title-section">
                        <h1>FAQs</h1>
                        <h2>Frequently Asked Questions</h2>
                    </div>

                    <div className="faqs-columns">
                        <div className="faqs-column">
                            <div className="faq-item" onClick={() => setOpenFaq(openFaq === 1 ? null : 1)}>
                                <div className="faq-question">
                                    <span>What languages do you speak?</span>
                                    <span className={`faq-arrow ${openFaq === 1 ? 'open' : ''}`}>▼</span>
                                </div>
                                <div className={`faq-answer ${openFaq === 1 ? 'open' : ''}`}>
                                    <p>We can speak both English and Spanish!</p>
                                </div>
                            </div>

                            <div className="faq-item" onClick={() => setOpenFaq(openFaq === 3 ? null : 3)}>
                                <div className="faq-question">
                                    <span>How do I get a quote?</span>
                                    <span className={`faq-arrow ${openFaq === 3 ? 'open' : ''}`}>▼</span>
                                </div>
                                <div className={`faq-answer ${openFaq === 3 ? 'open' : ''}`}>
                                    <p>Simply reach out to us via our Contact page and we'll get back to you with an estimate as soon as possible.</p>
                                </div>
                            </div>
                        </div>

                        <div className="faqs-column">
                            <div className="faq-item" onClick={() => setOpenFaq(openFaq === 2 ? null : 2)}>
                                <div className="faq-question">
                                    <span>Where are you located?</span>
                                    <span className={`faq-arrow ${openFaq === 2 ? 'open' : ''}`}>▼</span>
                                </div>
                                <div className={`faq-answer ${openFaq === 2 ? 'open' : ''}`}>
                                    <p>We are based in the Miami-Dade area and can also serve the surrounding regions! 
                                       We have even served towards the Naples city area! If you are curious if we cover 
                                       your area, please contact us!</p>
                                </div>
                            </div>

                            <div className="faq-item" onClick={() => setOpenFaq(openFaq === 4 ? null : 4)}>
                                <div className="faq-question">
                                    <span>How long does a project take?</span>
                                    <span className={`faq-arrow ${openFaq === 4 ? 'open' : ''}`}>▼</span>
                                </div>
                                <div className={`faq-answer ${openFaq === 4 ? 'open' : ''}`}>
                                    <p>Project timelines vary depending on the scope of work. We can provide a detailed timeline based on your initial consultation.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}