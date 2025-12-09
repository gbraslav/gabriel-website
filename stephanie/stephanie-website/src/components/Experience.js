import React from 'react';

const Experience = ({ experience }) => {
  return (
    <section className="experience">
      <h2>Experience</h2>
      {experience.map((job, index) => (
        <div key={index} className="job">
          <h3>{job.title}</h3>
          <p className="company">{job.company}</p>
          <p className="dates">{job.dates}</p>
          <ul>
            {job.responsibilities.map((responsibility, i) => (
              <li key={i}>{responsibility}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
};

export default Experience;
