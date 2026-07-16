import { useEffect, useState } from "react";
import avatar from "../../assets/myavatar.png";
import "./Home.css";
import Footer from "../../components/Footer/Footer";

function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    setQuote("You are capable of amazing things.");
  }, []);

  return (
    <div className="page">
      {" "}
      <div className="home">
        <div className="left-content">
          <section className="header">
            <div className="home-hero">
              <div>
                <h1 className="home-title">Welcome to my Portfolio + Blog</h1>
                <p className="home-subtitle">Full-Stack Web Developer</p>
              </div>
            </div>

            <div className="avatar-wrapper">
              <img src={avatar} alt="Sorim Tim" className="home-avatar" />
            </div>

            <div className="home-quote">{quote && <p>✨ {quote}</p>}</div>
          </section>

          <section className="home-preview">
            <h2>My Developer Approach</h2>
            <p>
              I love turning ideas into functional, polished web experiences
              using modern full‑stack tools.
            </p>
            <p>
              Whether it’s crafting intuitive UI or building reliable backend
              logic, I focus on thoughtful, human‑centered design.
            </p>
            <p>
              My work is guided by curiosity, growth, and the belief that
              technology can support people in meaningful ways.
            </p>
          </section>
          <Footer />
        </div>

        <div className="right-image" aria-hidden="true"></div>
      </div>
    </div>
  );
}

export default Home;
