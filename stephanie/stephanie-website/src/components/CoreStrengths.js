import React from 'react';

const CoreStrengths = ({ strengths }) => {
  return (
    <section className="core-strengths">
      <h2>Core Strengths</h2>
      <ul>
        {strengths.map((strength, index) => (
          <li key={index}>{strength}</li>
        ))}
      </ul>
    </section>
  );
};

export default CoreStrengths;
