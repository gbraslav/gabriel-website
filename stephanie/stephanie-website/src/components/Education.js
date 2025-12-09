import React from 'react';

const Education = ({ education, certifications }) => {
  return (
    <section className="education">
      <h2>Education</h2>
      {education.map((edu, index) => (
        <div key={index} className="education-item">
          <p><strong>{edu.degree}</strong></p>
          <p>{edu.institution}</p>
        </div>
      ))}
      <h2>Certifications</h2>
      <ul>
        {certifications.map((cert, index) => (
          <li key={index}>{cert}</li>
        ))}
      </ul>
    </section>
  );
};

export default Education;
