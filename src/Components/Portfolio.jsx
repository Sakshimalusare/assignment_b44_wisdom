import React from "react";
import Card from "./Card";
import "./Portfolio.css"

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <h2>Our Portfolio</h2>
      <div className="portfolio-container">
        <Card title="Project 1" description="Description of Project 1" />
        <Card title="Project 2" description="Description of Project 2" />
        <Card title="Project 3" description="Description of Project 3" />
      </div>
    </section>
  );
}

export default Portfolio;
