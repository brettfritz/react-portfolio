import React from 'react';

function Resume() {
  return (
    <section className="container my-5">
      <h2>Resume</h2>
      <p>
        <a href="/images/test.txt" className="btn btn-dark" download>
          Download Resume
        </a>
      </p>
      <h3>Proficiencies</h3>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>React</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>SQL</li>
      </ul>
    </section>
  );
}

export default Resume;
