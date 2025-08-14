import React from 'react';

const certificates = [
  {
    title: "Data Analytics",
    issuedBy: "Forage",
    date: "July 2025",
    img: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=400",
    file: "certificates/Data_Analytics.png"
  },
  {
    title: "Data Visualization",
    issuedBy: "Forage",
    date: "July 2025",
    img: "https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=400",
    file: "certificates/Data_Visualization.png"
  },
  {
    title: "HTML & CSS",
    issuedBy: "PearsonVUE",
    date: "July 2023",
    img: "https://images.pexels.com/photos/270348/pexels-photo-270348.jpeg?auto=compress&cs=tinysrgb&w=400",
    file: "certificates/html&css.png"
  }
];

const achievements = [
  {
    title: "Coding",
    description: "Solved 300+ coding problems on GeeksforGeeks and HackerRank."
  },
  {
    title: "Full Stack Internship Completion",
    description: "Successfully developed and deployed a dynamic web application for real projects."
  },
  {
    title: "Vitamin Deficiency Detection Project",
    description: "Recognized by faculty as one of the most innovative projects of the batch."
  },
  {
    title: "Faculty Appreciation",
    description: "Hosted and coordinated departmental technical events and cultural programs, engaging over 100+ participants."
  }
];

const Certification = () => {
  return (
    <>
      {/* Certifications Section */}
      <section id="certificates" className="certificates-section">
        <div className="container">
          <h1 className="section-title">Certifications</h1>
          <div className="certificate-description">
            <p>
              I have pursued industry-relevant certifications to enhance my knowledge and stay updated with
              the latest technologies. These certifications reflect my commitment to continuous learning and professional
              development.
            </p>
          </div>

          <div className="certificates-grid">
            {certificates.map((cert, index) => (
              <div key={index} className="certificate-card">
                <img src={cert.img} alt={cert.title} />
                <div className="card-content">
                  <h3>{cert.title}</h3>
                  <p><strong>Issued By:</strong> {cert.issuedBy}</p>
                  <p><strong>Date:</strong> {cert.date}</p>
                  <a
                    href={`${process.env.PUBLIC_URL}/${cert.file}`}
                    download={cert.title}
                    className="btn btn-primary"
                  >
                    <i className="fas fa-download"></i> Download Certificate
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="achievements-section">
        <div className="container">
          <h2 className="section-title">Achievements</h2>
          <div className="achievements-grid">
            {achievements.map((achiev, index) => (
              <div key={index} className="achievement-card">
                <h5 className='card-title'>{achiev.title}</h5>
                <p className='card-text'>{achiev.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Certification;
