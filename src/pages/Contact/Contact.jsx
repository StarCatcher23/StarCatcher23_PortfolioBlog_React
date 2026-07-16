import {useEffect, useState} from "react";
import "./Contact.css";
import aboutBg from "../../assets/Rectangle 4.png";


const Contact = () => {
  return (
    <div className="contact-page">
      <section className="contact-header">
        <section className="contact-background-image"
             style={{ backgroundImage: `url(${aboutBg})` }}
        >
        <h1>Contact</h1>
      </section>
      </section>
    </div>
  );
};

export default Contact;
