import { Link } from "react-router-dom";
import sampleLandscape from "../assets/sample/sample_landscape.avif";

export default function About() {
    return (
        <div className="page">
            {/* Hero Image */}
            <div className="main-about-image"
                style={{ backgroundImage: `url(${sampleLandscape})` }}>
                <div className="about-hero-overlay">
                    <h1>About Us</h1>
                </div>
            </div>

            {/* Presidential Section — text LEFT, image RIGHT */}
            <div className="about-section about-first-section">
                <div className="inner-about-section">
                    <div className="about-text-section">
                        <h1>Nivio Valdes</h1>
                        <h2>President & Founder</h2>
                        <p>
                            With over ## years of experience in construction and remodeling,
                            Nivio has worked hands on to deliver the best for his client.
                            <br/>*Add More*
                        </p>
                    </div>
                    <div className="about-image-section">
                        <div className="inner-about-image-section">
                            <div className="about-image-left">
                                <img src={sampleLandscape} alt="President 1" />
                            </div>
                            <div className="about-image-right">
                                <img src={sampleLandscape} alt="President 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Philosophy Section — image LEFT, text RIGHT */}
            <div className="about-section">
                <div className="inner-about-section inner-about-section--reverse">
                    <div className="about-text-section">
                        <h1>Our Philosophy</h1>
                        <h2>Built on Integrity</h2>
                        <p>
                            *Fill out Section*
                        </p>
                    </div>
                    <div className="about-image-section">
                        <div className="inner-about-image-section">
                            <div className="about-image-left">
                                <img src={sampleLandscape} alt="Philosophy 1" />
                            </div>
                            <div className="about-image-right">
                                <img src={sampleLandscape} alt="Philosophy 2" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Us Section — text LEFT, 3 image panels RIGHT */}
            <div className="about-section">
                <div className="inner-about-section">
                    <div className="about-text-section">
                        <h1>Why Us?</h1>
                        <h2>The NI&AA Difference</h2>
                        <p>
                            *Fill out Section*
                        </p>
                    </div>
                    <div className="about-image-section">
                        <div className="inner-about-image-section">
                            <div className="about-image-left">
                                <img src={sampleLandscape} alt="Why Us 1" />
                            </div>
                            <div className="about-image-right">
                                <img src={sampleLandscape} alt="Why Us 2" />
                                <img src={sampleLandscape} alt="Why Us 3" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}