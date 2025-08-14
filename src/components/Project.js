import React from 'react';

const projectsData = [
  {
    title: "Task Manager App",
    img: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=400",
    text: "A dynamic web app that helps users manage daily tasks with add, edit, and delete features."
  },
  {
    title: "Vitamin Deficiency Detection",
    img: "https://images.pexels.com/photos/356040/pexels-photo-356040.jpeg?auto=compress&cs=tinysrgb&w=400",
    text: "Used CNN model to detect vitamin deficiencies based on image analysis, with a Flask backend."
  },
  {
    title: "Portfolio Website",
    img: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=400",
    text : "Personal portfolio built using HTML, CSS, JavaScript to showcase skills, education, and projects."
  },
  {
    title: "Weather Website",
    img: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=400",
    text : "A real-time weather app using OpenWeatherMap API with live temperature and location-based forecasts."
  },
  {
    title: "Real Estate Website",
    img: "https://images.pexels.com/photos/280229/pexels-photo-280229.jpeg?auto=compress&cs=tinysrgb&w=400",
    text : "Responsive real estate website showcasing property listings with search, filter, and contact features."
  },
  {
    title: "E-commerce Store",
    img: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=400",
    text : "Responsive online store with shopping cart functionality and intuitive user interface."
  }
];

const Project = () => {
  return (
    <section id="projects" className="projects-section">
      <div className="container">
        <h1 className="section-title">Projects</h1>
        <p className="project-intro">
          Here are some of the projects I've worked on recently. Click to explore more.
        </p>

        <div className="projects-grid">
          {projectsData.map((pro, index) => (
            <div className="project-card" key={index}>
              <img src={pro.img} alt={pro.title} />
              <div className="card-content">
                <h2>{pro.title}</h2>
                <p>{pro.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Project;
