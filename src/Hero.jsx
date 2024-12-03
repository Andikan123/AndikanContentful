import React from "react";
import heroImg from "./assets/hero.svg"

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            Coloring book kogi vinyl, af church-key green juice vegan. Biodiesel
            shabby chic skateboard, copper mug banh mi blue bottle fam slow-carb
            semiotics chartreuse PBR&B tofu enamel pin brunch. DSA skateboard
            vaporware, pickled poke hammock fanny pack keytar blackbird spyplane
            listicle. Shabby chic synth street art live-edge, gluten-free
            chambray prism gorpcore.
          </p>
        </div>
        <div className="img-container">
            <img src={heroImg} alt="woman with the browser" className="img" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
