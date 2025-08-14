import React from 'react'

const Skills = () => {
  const technical = [
    { name: "C", percentage: "70%" },
    { name: "C++", percentage: "80%" },
    { name: "Python", percentage: "76%" },
    { name: "Java", percentage: "70%" },
    { name: "R", percentage: "80%" },
    { name: "ML", percentage: "70%" }
  ];
  const fullstack = [
    { name: "Html5", percentage: "90%" },
    { name: "Css3", percentage: "85%" },
    { name: "JavaScript", percentage: "80%" },
    { name: "ReactJS", percentage: "80%" },
    { name: "NodeJS", percentage: "70%" },
    { name: "MongoDB", percentage: "85%" }
  ];
  const renderSkills = (skills) => (
    skills.map((skill, index) => (
      <div className='skill' key={index}>
        <span className='badge'>{skill.name}</span>
        <div className='progress-bar'>
          <div className='progress' style={{ width: skill.percentage }}></div>
        </div>
        <span>{skill.percentage}</span>
      </div>
    ))
  );
  return (
    <section className='skills-section' id='skills'>
      <div className='container'>
        <h1 className='section-title'>Skills & Expertise</h1>
        <p className='skills-intro'>A blend of technical expertise and problem-solving skills to build efficient, user-friendly solutions.</p>

        <div className="skill-grid">
          <div className="skills-grid1">
            <p className="skill-title">Technical Skills</p>
            {renderSkills(technical)}
          </div>

          <div className="skill-grid2">
            <p className="skill-title">FullStack</p>
            {renderSkills(fullstack)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;