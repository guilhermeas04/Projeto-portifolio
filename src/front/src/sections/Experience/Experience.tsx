import React from 'react';
import './Experience.css';

const ExperienceItem = () => (
  <div className="experience-item">
    <h3>EMPRESA X</h3>
    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
  </div>
);

function Experience() {
  return (
    <section id="experience" className="section">
      <h2>EXPERIÊNCIAS</h2>
      <div className="experience-list">
        <ExperienceItem />
        <ExperienceItem />
        <ExperienceItem />
      </div>
    </section>
  );
}

export default Experience;