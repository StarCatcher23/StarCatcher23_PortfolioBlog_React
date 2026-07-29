import "./ProjectCard.css";

function ProjectCard({ title, preview, github, image }) {
  return (
    <article className="project-card">
      {image && (
        <div className="project-image-wrap">
          <img src={image} alt={title} className="project-image" />
        </div>
      )}

      <h3 className="project-title">{title}</h3>
      <p className="project-preview">{preview}</p>
      <a
        href={github}
        className="project-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        View on GitHub
      </a>
    </article>
  );
}

export default ProjectCard;
