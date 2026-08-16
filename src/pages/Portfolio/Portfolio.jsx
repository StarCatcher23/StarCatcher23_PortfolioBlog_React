import "./Portfolio.css";
import aboutBg from "../../assets/Rectangle 4.png";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import CoffeeShopImg from "../../assets/CoffeeShopImg.png";
import Spots from "../../assets/Spots.png";
import ToDoAppImg from "../../assets/ToDoAppImg.png";
import WTWRImg from "../../assets/WTWRImg.png";

const projects = [
  {
    id: 1,
    title: "Portfolio + Blog Website",
    preview:
      "A React-based personal portfolio and blog with motivational quotes and modals",
    github:
      "https://github.com/StarCatcher23/StarCatcher23_PortfolioBlog_React.git",
  },
  {
    id: 2,
    title: "WTWR-React",
    preview:
      "A React frontend that recommends clothing based on live weather conditions.",
    github: "https://github.com/StarCatcher23/se_project_react.git",
    image: WTWRImg,
  },
  {
    id: 3,
    title: "WTWR-Express",
    preview:
      "A Node.js/Express backend for WTWR that handles user auth, item management, and secure data storage.",
    github: "https://github.com/StarCatcher23/se_project_express.git",
  },
  {
    id: 4,
    title: "To-Do App",
    preview:
      "A lightweight vanilla JavaScript todo app for adding, completing, and deleting tasks with a live progress counter.",
    github: "https://github.com/StarCatcher23/se_project_todo-app.git",
    image: ToDoAppImg,
  },
  {
    id: 5,
    title: " Coffee Shop",
    preview:
      "A React app that lets users save, view, and delete images of their favorite places.",
    github: "https://github.com/StarCatcher23/se_project_coffeeshop.git",
    image: CoffeeShopImg,
  },
  {
    id: 6,
    title: "Spots",
    preview:
      "A responsive Figma prototype showcasing fluid layouts across breakpoints, paired with a React app where users can save favorite places, like/unlike them, and add or delete images.",
    github: "https://github.com/StarCatcher23/se_project_spots.git",
    image: Spots,
  },
  // add more projects here
];

const Portfolio = () => {
  return (
   <div className="portfolio">
    
    <section className="portfolio__header full-bleed">
      <div className="portfolio__background-image" style={{ backgroundImage: `url(${aboutBg})` }}>
          <h1 className="portfolio__title">Portfolio</h1>
        </div>
      </section>

      <section className="portfolio__content">
        <h2 className="portfolio__subtitle">Projects</h2> 

        <div className="projects__projects-grid">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              preview={project.preview}
              github={project.github}
              image={project.image}
            />
          ))}
        </div>
      </section>
      
    </div>
  );
};

export default Portfolio;
