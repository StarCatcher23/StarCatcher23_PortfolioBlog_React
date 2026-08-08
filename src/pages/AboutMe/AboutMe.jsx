import "./AboutMe.css";
import aboutBg from "../../assets/Rectangle 4.png";
import Footer from "../../components/Footer/Footer";

const AboutMe = () => {
  return (
    <div className="about">
      <section className="about__header full-bleed">
        <div
          className="about__background-image"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <h1 className="about__title">About Me</h1>
        </div>
      </section>

      <section className="about__content">
        <p className="about__paragraph">
          I come from a healthcare and patient‑experience background where
          empathy, listening, and supporting people were at the center of
          everything I did. Working closely with patients taught me how deeply
          design and communication can affect someone’s day — and it shaped the
          way I think about building technology. Mental health, compassion, and
          creating experiences that make people feel understood are values I
          carry with me into every part of my work.
        </p>

        <p className="about__paragraph">
          As a full‑stack web developer, I’ve grown confident in building
          projects from the ground up — from designing responsive UIs to
          structuring clean, scalable backend logic. I’ve learned how to break
          down complex problems, architect features, and ship applications that
          feel purposeful and intuitive. Every project I’ve completed has
          strengthened my technical foundation and expanded my creativity,
          whether I’m working with React components, API integrations, or
          full‑stack workflows. I’m driven by the idea of building tools that
          genuinely help people and make a positive impact in the world.
        </p>

        <p className="about__paragraph">
          My portfolio showcases the projects that represent my growth, my
          creativity, and my commitment to thoughtful, user‑centered
          development. Alongside it, my blog is a space where I write about
          mental health, personal growth, and the process of becoming a
          developer who leads with empathy. It’s a blend of tech, creativity,
          and reflection — a place where I share the ideas, challenges, and
          inspirations behind the work I create. Together, my portfolio and blog
          tell the story of where I’ve been, what I’m building, and the kind of
          impact I hope to make.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default AboutMe;
