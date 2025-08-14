import React from 'react'

const Education = () => {
  return (
    <section id="education" className="education-section">
        <div className="container">
            <h1 className="section-title">Education</h1>

            <div className="education-item">
                <div className="education-header">
                    <h2>Bachelor's Degree</h2>
                    <div className="education-meta">
                        <div className="location">
                            <i className="fas fa-map-marker-alt "aria-hidden="true"></i>
                            <span>Surampalem, Andhra Pradesh</span>
                        </div>
                        <span className="duration">2021 - 2025</span>
                    </div>
                </div>
                <h3 className="course">Information Technology</h3>
                <div className="institution-info">
                    <p className="institution">Aditya College of Engineering and Technology</p>
                    <span className="grade">(7.8 CGPA)</span>
                </div>
                <p className="description">
                    Focused on programming fundamentals, software engineering, data structures, and web technologies.
                </p>
            </div>

            <div className="education-item">
                <div className="education-header">
                    <h2>Intermediate Education</h2>
                    <div className="education-meta">
                        <div className="location">
                            <i className="fas fa-map-marker-alt"aria-hidden="true"></i>
                            <span>Samarlakota, Andhra Pradesh</span>
                        </div>
                        <span className="duration">2019 - 2021</span>
                    </div>
                </div>
                <div className="institution-info">
                    <p className="institution">KSN Junior College</p>
                    <span className="grade">(9.4 CGPA)</span>
                </div>
                <p className="description">
                    Focused on mathematics, physics, and chemistry with an emphasis on analytical problem-solving and logical thinking.
                </p>
            </div>

            <div className="education-item">
                <div className="education-header">
                    <h2>Secondary School</h2>
                    <div className="education-meta">
                        <div className="location">
                            <i className="fas fa-map-marker-alt "aria-hidden="true"></i>
                            <span>Peddapuram, Andhra Pradesh</span>
                        </div>
                        <span className="duration">2018 - 2019</span>
                    </div>
                </div>
                <div className="institution-info">
                    <p className="institution">Trinity English Medium School</p>
                    <span className="grade">(9.2 CGPA)</span>
                </div>
                <p className="description">
                    Completed foundational academic subjects including English, Science, and Mathematics.
                </p>
            </div>
        </div>
    </section>
  )
}

export default Education