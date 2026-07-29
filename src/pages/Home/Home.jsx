import { useEffect, useState, useCallback } from "react";
import avatar from "../../assets/myavatar.png";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/preloader";

const localQuotes = [
  {
    quote: "You are capable of amazing things.",
    author: "Anonymous",
  },
  {
    quote: "Every moment is a fresh beginning.",
    author: "T.S. Eliot",
  },
  {
    quote: "Be gentle with yourself. You’re doing the best you can.",
    author: "Anonymous",
  },
  {
    quote: "Small progress is still progress.",
    author: "Anonymous",
  },
  {
    quote: "Healing is not linear.",
    author: "Anonymous",
  },
  {
    quote: "Believe in the person you are becoming.",
    author: "Anonymous",
  },
  {
    quote: "You deserve to take up space.",
    author: "Anonymous",
  },
  {
    quote: "Growth is uncomfortable because you’ve never been here before.",
    author: "Anonymous",
  },
  {
    quote: "You are stronger than your struggles.",
    author: "Anonymous",
  },
  {
    quote: "Your story isn’t over yet.",
    author: "Anonymous",
  },
];

function Home() {
  const [quote, setQuote] = useState(localQuotes[0].quote);
  const [author, setAuthor] = useState(localQuotes[0].author);
  const [loading, setLoading] = useState(true); // shimmer state
  const [fade, setFade] = useState(false); // fade-in animation

  function getRandomQuote() {
    const randomQuote =
      localQuotes[Math.floor(Math.random() * localQuotes.length)];
    return randomQuote;
  }

  const loadZenQuote = useCallback(async () => {
    try {
      setLoading(true);
      setFade(false);

      const response = await fetch("https://dummyjson.com/quotes");

      if (!response.ok) {
        console.log("API failed — using fallback quotes");
        throw new Error("Unable to load quote");
      }

      const data = await response.json();
      console.log("Loaded", data.quotes.length, "quotes");

      const randomQuote =
        data.quotes[Math.floor(Math.random() * data.quotes.length)];

      setQuote(randomQuote.quote);
      setAuthor(randomQuote.author || "Anonymous");
    } catch (error) {
      console.log("Error:", error);
      const fallbackQuote = getRandomQuote();
      setQuote(fallbackQuote.quote);
      setAuthor(fallbackQuote.author);
    } finally {
      setTimeout(() => {
        setLoading(false);
        setFade(true);
      }, 300);
    }
  }, []);

  useEffect(() => {
    // defer invocation so state updates don't run synchronously inside the effect
    Promise.resolve().then(() => loadZenQuote());
  }, [loadZenQuote]);

  return (
    <div className="page">
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

            {/* QUOTE SECTION */}
            <div className={`hero__quote ${fade ? "fade-in" : ""}`}>
              {loading ? (
                <Preloader />
              ) : (
                <>
                  <p className="quote-text">{quote}</p>
                  {author && <p className="quote-author">— {author}</p>}
                </>
              )}
              <button className="new-quote-btn" onClick={loadZenQuote}>
                ✨ New Quote
              </button>
            </div>
          </section>
          <p>
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
          </p>
          <Footer />
        </div>

        <div className="right-image" aria-hidden="true"></div>
      </div>
    </div>
  );
}

export default Home;
