import "./Contact.css";
import aboutBg from "../../assets/Rectangle 4.png";
import linkedinIcon from "../../assets/icons/linkedinIcon.png";
import gmailIcon from "../../assets/icons/gmailIcon.png";
import githubIcon from "../../assets/icons/githubIcon.png";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <div className="contact">
      {/* Header Section */}
      <section className="contact__header full-bleed">
        <div
          className="contact__background-image"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <h1 className="contact__title">Contact</h1>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact__section">
        <div className="contact__list">
          {/* LinkedIn */}
          <div className="contact__item">
            <img src={linkedinIcon} alt="LinkedIn" className="contact__icon" />
            <a
              href="https://www.linkedin.com/in/sorim-tim"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/sorim-tim
            </a>
          </div>

          {/* Gmail */}
          <div className="contact__item">
            <img src={gmailIcon} alt="Gmail" className="contact__icon" />
            <a href="mailto:sorim.swe@gmail.com">sorim.swe@gmail.com</a>
          </div>

          {/* GitHub */}
          <div className="contact__item">
            <img src={githubIcon} alt="GitHub" className="contact__icon" />
            <a href="https://github.com/StarCatcher23">
              github.com/StarCatcher23
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
