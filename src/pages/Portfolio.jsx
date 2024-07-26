import React from 'react';
import Project from '../components/Project';

function Portfolio() {
  const projects = [
    {
      title: 'Cash Compass',
      image: '/images/dashboard-1-snip.png',
      deployedLink: 'https://cash-compass.onrender.com/',
      repoLink: 'https://github.com/brettfritz/cash-compass'
    },
    {
      title: 'Weather Website',
      image: '/images/weather-project.png',
      deployedLink: 'https://brettfritz.github.io/weather-website/',
      repoLink: 'https://github.com/brettfritz/weather-website'
    },
  ];

  return (
    <section className="container my-5">
      <h2>Portfolio</h2>
      <div className="row">
        {projects.map((project, index) => (
          <Project key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Portfolio;
