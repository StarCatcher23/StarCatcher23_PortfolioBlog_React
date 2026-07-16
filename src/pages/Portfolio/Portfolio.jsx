import { useEffect, useState } from "react";
import "./Portfolio.css";
import aboutBg from "../../assets/Rectangle 4.png";

const Portfolio = () => {
  return (
    <div className="portfolio-page">
      <section className="portfolio-header">
        <section className="portfolio-background-image"
             style={{ backgroundImage: `url(${aboutBg})` }}
        >
        <h1>Portfolio</h1>
      </section>
      </section>
    </div>
  );
};

export default Portfolio;
