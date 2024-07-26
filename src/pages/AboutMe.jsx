import React from 'react';

function AboutMe() {
  return (
    <section className="container my-5">
      <h2>About Me</h2>
      <div className="row">
        <div className="col-md-4">
          <img src="/images/Brett-Fritz-Profile-Picture.JPG" className="img-fluid rounded-circle" alt="Brett Fritz" />
        </div>
        <div className="col-md-8">
          <p>My name is Brett Fritz and I am an aspriring web developer. I am a current CAD technician at an engineering firm in the Houston area. I have always loved drawing and drafing and creating something from nothing. I am learning to bring those skills to the web development space. I love baseball and catch a World Weries champion Astros game any time I can. I have a 2 year old golden retierve named Mira who keeps me active and on my toes every day, and occasionally I need to get a break from her and play a nice peaceful round of golf. </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
