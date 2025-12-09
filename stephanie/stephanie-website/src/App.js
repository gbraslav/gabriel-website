import React from 'react';
import './App.css';
import resume from './resume';
import Header from './components/Header';
import CoreStrengths from './components/CoreStrengths';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';

function App() {
  return (
    <div className="App">
      <Header 
        name={resume.name}
        contact={resume.contact}
        careerHighlight={resume.careerHighlight}
      />
      <CoreStrengths strengths={resume.coreStrengths} />
      <Experience experience={resume.experience} />
      <Education 
        education={resume.education}
        certifications={resume.certifications}
      />
      <Skills 
        skills={resume.skills}
        languages={resume.languages}
      />
    </div>
  );
}

export default App;