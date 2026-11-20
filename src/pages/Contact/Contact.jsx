import { useState } from "react";

import "./Contact.css";
import aboutBg from "../../assets/Rectangle 4.png";
import linkedinIcon from "../../assets/icons/linkedinIcon.png";
import gmailIcon from "../../assets/icons/gmailIcon.png";
import githubIcon from "../../assets/icons/githubIcon.png";
import Footer from "../../components/Footer/Footer";

const contactEmail = "sorim.swe@gmail.com";

const Contact = () => {
  // Contact form state
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Portfolio contact message from ${form.name.trim() || "website visitor"}`,
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`,
    );

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  }

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

      {/* Contact Links Section */}
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
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
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

      {/* Contact Form Section */}
      <section className="contact__form-section">
        <form className="contact__form" onSubmit={handleSubmit}>
          <p className="contact__form-help">
            Submitting opens your email app. Review the message and press Send.
            If it doesn’t open, email me at{" "}
            <a href={`mailto:${contactEmail}`}>{contactEmail}</a>.
          </p>
          <input
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Open Email App</button>
        </form>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
