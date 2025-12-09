import React from 'react';

const Skills = ({ skills, languages }) => {
  return (
    <section className="skills">
      <h2>Tools & Systems</h2>
      <div className="skill-category">
        <h3>Enablement & LMS</h3>
        <p>{skills.enablementLMS.join(', ')}</p>
      </div>
      <div className="skill-category">
        <h3>CRM & Analytics</h3>
        <p>{skills.crmAnalytics.join(', ')}</p>
      </div>
      <div className="skill-category">
        <h3>Sales Tech</h3>
        <p>{skills.salesTech.join(', ')}</p>
      </div>
      <div className="skill-category">
        <h3>Project Management</h3>
        <p>{skills.projectManagement.join(', ')}</p>
      </div>
      <h2>Languages</h2>
      <p>{languages.join(', ')}</p>
    </section>
  );
};

export default Skills;
