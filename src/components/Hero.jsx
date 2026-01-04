import React from "react";

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="container">
        <h1>John Doe</h1>
        <p>Full Stack Developer & UI/UX Designer</p>
        <p>
          I create beautiful, functional web applications with modern
          technologies. Passionate about clean code and great user experiences.
        </p>
        <a href="#projects" className="btn">
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
