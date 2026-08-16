import {
  useEffect,
  useState,
  useCallback,
  startTransition,
  useRef,
} from "react";
import avatar from "../../assets/myavatar.png";
import "./Home.css";
import Footer from "../../components/Footer/Footer";
import Preloader from "../../components/Preloader/preloader";

const localQuotes = [
  { quote: "You are capable of amazing things.", author: "Anonymous" },
  { quote: "Every moment is a fresh beginning.", author: "T.S. Eliot" },
  {
    quote: "Be gentle with yourself. You’re doing the best you can.",
    author: "Anonymous",
  },
  { quote: "Small progress is still progress.", author: "Anonymous" },
  { quote: "Healing is not linear.", author: "Anonymous" },
  { quote: "Believe in the person you are becoming.", author: "Anonymous" },
  { quote: "You deserve to take up space.", author: "Anonymous" },
  {
    quote: "Growth is uncomfortable because you’ve never been here before.",
    author: "Anonymous",
  },
  { quote: "You are stronger than your struggles.", author: "Anonymous" },
  { quote: "Your story isn’t over yet.", author: "Anonymous" },
];

function Home() {
  const [quote, setQuote] = useState(localQuotes[0].quote);
  const [author, setAuthor] = useState(localQuotes[0].author);
  const [loading, setLoading] = useState(true);
  const [fade, setFade] = useState(false);

  const isFirstRenderRef = useRef(true);

  function getRandomQuote() {
    return localQuotes[Math.floor(Math.random() * localQuotes.length)];
  }

  // Used ONLY for the "New Quote" button
  const loadZenQuote = useCallback(async () => {
    try {
      const response = await fetch("https://dummyjson.com/quotes");

      if (!response.ok) throw new Error("Unable to load quote");

      const data = await response.json();
      const randomQuote =
        data.quotes[Math.floor(Math.random() * data.quotes.length)];

      Promise.resolve().then(() => {
        startTransition(() => {
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author || "Anonymous");
        });
      });
    } catch (error) {
      console.log("Error:", error);
      const fallbackQuote = getRandomQuote();
      Promise.resolve().then(() => {
        startTransition(() => {
          setQuote(fallbackQuote.quote);
          setAuthor(fallbackQuote.author);
        });
      });
    } finally {
      setTimeout(() => {
        Promise.resolve().then(() => {
          startTransition(() => {
            setLoading(false);
            setFade(true);
          });
        });
      }, 300);
    }
  }, []);

  useEffect(() => {
    if (!isFirstRenderRef.current) return;
    isFirstRenderRef.current = false;

    let timeoutId;

    Promise.resolve().then(async () => {
      try {
        const response = await fetch("https://dummyjson.com/quotes");

        if (!response.ok) throw new Error("Unable to load quote");

        const data = await response.json();
        const randomQuote =
          data.quotes[Math.floor(Math.random() * data.quotes.length)];

        startTransition(() => {
          setQuote(randomQuote.quote);
          setAuthor(randomQuote.author || "Anonymous");
        });
      } catch (error) {
        console.log("Error:", error);
        const fallbackQuote = getRandomQuote();
        startTransition(() => {
          setQuote(fallbackQuote.quote);
          setAuthor(fallbackQuote.author);
        });
      } finally {
        timeoutId = setTimeout(() => {
          startTransition(() => {
            setLoading(false);
            setFade(true);
          });
        }, 300);
      }
    });

    // ✔ Cleanup OUTSIDE finally (safe)
    return () => {
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="page">
      <div className="home">
        {/* LEFT SIDE */}
        <div className="home__left">
          {/* HEADER SECTION */}
          <section className="home__header">
            <div className="home__hero">
              <div>
                <h1 className="home__title">Welcome to my Portfolio + Blog</h1>
                <p className="home__subtitle">Full-Stack Web Developer</p>
              </div>
            </div>

            {/* AVATAR */}
            <div className="home__avatar-wrapper">
              <img src={avatar} alt="Sorim Tim" className="home__avatar" />
            </div>

            {/* QUOTE SECTION */}
            <div className={`home__quote ${fade ? "fade-in" : ""}`}>
              {loading ? (
                <Preloader />
              ) : (
                <>
                  <p className="home__quote-text">{quote}</p>
                  {author && <p className="home__quote-author">— {author}</p>}
                </>
              )}

              <button className="home__quote-btn" onClick={loadZenQuote}>
                ✨ New Quote
              </button>
            </div>
          </section>

          {/* PREVIEW SECTION */}
          <section className="home__preview">
            <h2 className="home__preview-title">My Developer Approach</h2>

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

        {/* RIGHT SIDE IMAGE */}
        <div className="home__right-image" aria-hidden="true"></div>
      </div>
    </div>
  );
}

export default Home;
