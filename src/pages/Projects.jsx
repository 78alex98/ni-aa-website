import sampleLandscape from "../assets/sample/sample_landscape.avif";

import ichavezFrontHouse from '../assets/Images/6161_11_IChavez_Front_House.jpeg'
import ichavezBathroom from '../assets/Images/6161_11_IChavez_Bathroom.jpg'
import ichavezKitchen from '../assets/Images/6161_11_IChavez_Kitchen.jpg'
import ichavezPool from '../assets/Images/6161_11_IChavez_Pool.jpeg'
import cchavezRoof from '../assets/Images/5841_13_CChavez_New_Roof.jpeg'
import cchavezAddition from '../assets/Images/5841_13_CChavez_New_Addition.jpeg'

const projects = [
    {
        id: 1,
        title: "Kitchen Renovation",
        location: "West Miami, FL",
        description: "Full kitchen renovation including cabinetry, countertops, and new appliances.",
        image: ichavezKitchen,
        imagePosition: "50% 50%",
    },
    {
        id: 2,
        title: "Bathroom Renovation",
        location: "West Miami, FL",
        description: "Complete bathroom overhaul with walk-in shower, new tiling, and updated plumbing.",
        image: ichavezBathroom,
        imagePosition: "50% 75%",
    },
    {
        id: 3,
        title: "New Pool",
        location: "West Miami, FL",
        description: "New pool built into existing backyard with new tiling and a complete remodel of the sorrounding area.",
        image: ichavezPool,
        imagePosition: "50% 30%",
    },
    {
        id: 4,
        title: "Exterior Facelift",
        location: "West Miami, FL",
        description: "Full exterior repaint, new lights, new doors, updated roofing, and new driveway.",
        image: ichavezFrontHouse,
        imagePosition: "50% 50%",
    },
    {
        id: 5,
        title: "New Roofing",
        location: "West Miami, FL",
        description: "Complete new roof which included the installation of new tile and insolation.",
        image: cchavezRoof,
        imagePosition: "50% 50%",
    },
    {
        id: 6,
        title: "Home Addition",
        location: "West Miami, FL",
        description: "Newly created house addition included with an interior renovation, electricity, plumbing, and A/C.",
        image: cchavezAddition,
        imagePosition: "50% 50%",
    },
    {
        id: 7,
        title: "Commercial Office Build-Out",
        location: "Brickell, FL",
        description: "Ground-up interior build-out for a 1,500 sq ft professional office space.",
        image: sampleLandscape,
        imagePosition: "50% 50%",
    },
    {
        id: 8,
        title: "Patio & Pergola",
        location: "Pinecrest, FL",
        description: "Custom outdoor patio with pergola, pavers, outdoor kitchen rough-in, and lighting.",
        image: sampleLandscape,
        imagePosition: "50% 50%",
    },
];

export default function Projects() {
    return (
        <div className="page">
            {/* Hero Image */}
            <div className="main-projects-image"
                style={{ backgroundImage: `url(${sampleLandscape})` }}>
                <div className="projects-hero-overlay">
                    <h1>Projects</h1>
                </div>
            </div>

            {/* Intro Description Section */}
            <div className="projects-intro-section">
                <div className="inner-projects-intro-section">
                    <h2>Our Work</h2>
                    <p>
                        Take a look at some of the projects we've completed across the Miami-Dade area. 
                        From full home renovations to custom additions, every job is a reflection of 
                        our commitment to quality, craftsmanship, and client satisfaction. 
                        Each project is handled with care from start to finish — no shortcuts, no compromises.
                    </p>
                </div>
            </div>

            {/* Projects Grid */}
            <div className="projects-grid-section">
                <div className="inner-projects-grid-section">
                    <div className="projects-grid">
                        {projects.map((project) => (
                            <div className="project-card" key={project.id}>
                                <div className="project-card-image">
                                    <img src={project.image} alt={project.title} 
                                    style={{ 
                                        objectPosition: project.imagePosition,
                                        transform: `scale(${project.imageScale})`
                                    }}/>
                                </div>
                                <div className="project-card-body">
                                    <p className="project-card-location">{project.location}</p>
                                    <h3 className="project-card-title">{project.title}</h3>
                                    <p className="project-card-description">{project.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}