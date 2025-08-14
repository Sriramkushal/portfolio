import React from 'react';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-grid">
                    <div className="about-image">
                        <img
                            src={`${process.env.PUBLIC_URL}/kushal-pic.jpg`}
                            alt="Profile of Sriram Kushal"
                        />
                    </div>
                    <div className="about-text">
                        <h1>Sriram Kushal</h1>
                        <h3>A Passionate Frontend Developer</h3>
                        <p>
                            I am a Computer Science graduate and aspiring Full Stack Developer. I enjoy building
                            user-centric web apps and solving real-world challenges with code. I have experience with HTML,
                            CSS, JavaScript, and am currently learning React and backend development. I'm looking for
                            opportunities to grow as a developer, work on exciting projects, and contribute to innovative
                            teams.
                        </p>
                        <div className="button-group">
                            <a
                                href={`${process.env.PUBLIC_URL}/SriramKushal.pdf`}
                                className="btn btn-primary"
                                download="sriramkushal-Resume"
                            >
                                <i className="fas fa-download"></i> Download CV
                            </a>
                            <a href="#contact" className="btn btn-secondary">Contact</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About