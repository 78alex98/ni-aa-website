import sampleLandscape from "../assets/sample/sample_landscape.avif";

const projects = [
    {
        id: 1,
        title: "Kitchen Remodel",
        location: "Coral Gables, FL",
        description: "Full kitchen renovation including custom cabinetry, quartz countertops, and modern fixtures.",
        image: sampleLandscape,
    },
    {
        id: 2,
        title: "Bathroom Renovation",
        location: "Doral, FL",
        description: "Complete bathroom overhaul with walk-in shower, new tiling, and updated plumbing.",
        image: sampleLandscape,
    },
    {
        id: 3,
        title: "Home Addition",
        location: "Hialeah, FL",
        description: "800 sq ft addition including a new bedroom, bathroom, and expanded living area.",
        image: sampleLandscape,
    },
    {
        id: 4,
        title: "Exterior Facelift",
        location: "Miami, FL",
        description: "Full exterior repaint, new shutters, updated landscaping, and driveway resurfacing.",
        image: sampleLandscape,
    },
    {
        id: 5,
        title: "Flooring Installation",
        location: "Kendall, FL",
        description: "Whole-home porcelain tile installation across 2,200 sq ft of living space.",
        image: sampleLandscape,
    },
    {
        id: 6,
        title: "Roof Replacement",
        location: "Homestead, FL",
        description: "Full roof tear-off and replacement with impact-resistant shingles rated for hurricane winds.",
        image: sampleLandscape,
    },
    {
        id: 7,
        title: "Commercial Office Build-Out",
        location: "Brickell, FL",
        description: "Ground-up interior build-out for a 1,500 sq ft professional office space.",
        image: sampleLandscape,
    },
    {
        id: 8,
        title: "Patio & Pergola",
        location: "Pinecrest, FL",
        description: "Custom outdoor patio with pergola, pavers, outdoor kitchen rough-in, and lighting.",
        image: sampleLandscape,
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
                                    <img src={project.image} alt={project.title} />
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