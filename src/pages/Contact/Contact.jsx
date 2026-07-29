import "./Contact.css";
import aboutBg from "../../assets/Rectangle 4.png";
import linkedinIcon from "../../assets/icons/linkedinIcon.png";
import gmailIcon from "../../assets/icons/gmailIcon.png";
import githubIcon from "../../assets/icons/githubIcon.png";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Header Section */}
      <section className="contact-header">
        <section
          className="contact-background-image"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <h1>Contact</h1>
        </section>
      </section>

      {/* Contact Section */}
      <div className="contact-section">
        <div className="contact-list">
          {/* LinkedIn */}
          <div className="contact-item">
            <img
              src={linkedinIcon}
              alt="LinkedIn"
              className="contact-icon-img"
            />
            <a
              href="https://www.linkedin.com/in/sorim-tim"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sorim-tim
            </a>
          </div>

          {/* Gmail */}
          <div className="contact-item">
            <img src={gmailIcon} alt="Gmail" className="contact-icon-img" />
            <a href="mailto:sorim.swe@gmail.com">sorim.swe@gmail.com</a>
          </div>

          {/* GitHub */}
          <div className="contact-item">
            <img src={githubIcon} alt="GitHub" className="contact-icon-img" />
            <a
              href="https://github.com/StarCatcher23"
              target="_blank"
              rel="noopener noreferrer"
            >
              github.com/StarCatcher23
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;
