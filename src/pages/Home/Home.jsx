import { useEffect, useState } from "react";
import "./Home.css";

function Home() {
  const [quote, setQuote] = useState("");

  useEffect(() => {
    // Placeholder — replace with your real API call later
    setQuote("You are capable of amazing things.");
  }, []);

  return (
    <main className="home">
      {/* HERO SECTION */}
      <section className="hero">
        <h1 className="hero-title">Welcome to StarCatcher23</h1>
        <p className="hero-subtitle">This is my portfolio + blog website.</p>

        <div className="hero-quote">{quote && <p>✨ {quote}</p>}</div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="about-preview">
        <h2>About Me</h2>
        <p>
          I am a passionate developer with experience in creating dynamic web
          applications.
        </p>
      </section>
    </main>
  );
}

export default Home;
