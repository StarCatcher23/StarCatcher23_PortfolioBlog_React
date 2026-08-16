import { useEffect, useRef, useState } from "react";
import "./Blog.css";
import aboutBg from "../../assets/Rectangle 4.png";
import visionBoard from "../../assets/visionboard.png";
import journeyImg from "../../assets/journeyImg.jpg";
import portfolioImg from "../../assets/portfolioImg.jpg";
import mentalImg from "../../assets/mentalImg.jpg";
import interviewImg from "../../assets/interview.jpg";

import BlogPostList from "./BlogPostList";
import FeaturedArticle from "./FeaturedArticle";
import Modal from "../../components/Modal/Modal";
import ModalThumbnailGrid from "../../components/Modal/ModalThumbnailGrid";

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeArticle, setActiveArticle] = useState(null);
  const activeArticleRef = useRef(null);

  // Featured article content
  const featured = {
    title: "Future plans for My Blog Template",
    preview:
      "We have big plans for My Blog. First, some different setups for menus, blog & portfolio pages...",
    image: visionBoard, // <-- correct
    fullText: (
      <>
        <p>
          As I continue building my portfolio and blog website, new ideas keep
          coming to mind — ideas that will make the site more functional, more
          interactive, and more aesthetically pleasing. I plan to write more
          articles to grow the blog section, and eventually I want to add
          features like a save article button, a like button, and a comment
          section.
        </p>

        <p>
          To make those features work properly, I know I’ll likely need to
          implement authentication and authorization — registration, login,
          sign‑in, and user profiles. That would allow users to save articles,
          leave comments, and like posts in a way that’s tied to their own
          account.
        </p>

        <p>
          I’m still deciding whether I should require registration for these
          features or allow some of them without an account. I’ll definitely
          talk to my peers and tutors to figure out what’s most practical. But
          realistically, if I want users to save articles, I’ll probably need
          authentication to make it work the right way.{" "}
        </p>
      </>
    ),
  };

  // Your blog posts (the "cards")
  const [posts] = useState([
    {
      id: 1,
      title: "My Journey Into Web Development",
      preview: "How I transitioned from healthcare to tech...",
      fullText: (
        <>
          <p>
            My journey from healthcare to tech was never something I saw coming.
            In fact, I don’t think I ever took a single computer science class
            in high school. When the first Apple computers were introduced
            during my elementary school years, the only classes I remember
            taking were typing or basic “intro to computers.” Nothing ever
            hinted that I would one day be writing code.
          </p>

          <p>
            After high school, I spent years in college taking courses that
            would help me enter the healthcare field — medical billing and
            coding, anatomy and physiology, and other classes. During those
            years, I was never introduced to computer science, and I didn’t know
            anyone who was studying software engineering. So I continued down
            the path I knew: healthcare management.
          </p>

          <p>
            In 2018, I finally entered the healthcare field as a registrar. From
            there, my career continued to grow. I worked in patient access,
            patient experience, and process improvement. Some days were tough —
            customer service in healthcare can be emotionally heavy — but the
            moments that mattered always stayed with me. The patients who
            thanked me for making their visit easier, the ones I could make
            smile or laugh, the ones who felt seen. Those small moments reminded
            me that everyone who walks into a medical facility carries their own
            story, their own fears, their own reasons for being there.
          </p>

          <p>
            A couple of years ago, everything changed unexpectedly. I was on
            YouTube, endlessly scrolling for something to fill the background
            noise, when I stumbled across a video of someone explaining how
            software works — how code becomes apps and websites. Something
            inside me woke up. I kept watching more videos and realized there
            was an entire world where people were building things that millions
            of others use every day. I wanted to be part of that world. I wanted
            to create.
          </p>

          <p>
            It took me a couple of years to fully commit, but eventually I
            decided to invest in myself and enroll in the TripleTen Bootcamp. I
            knew it was expensive, but they offered flexible payment options,
            and I knew I needed structure. I had tried the self‑taught route,
            but I realized I needed guidance, feedback, and a real curriculum.
          </p>

          <p>
            Once I started TripleTen, I felt genuinely excited — like this was
            the beginning of a new chapter. I wanted this as badly as I wanted
            my first home. The program was challenging from the start: long
            readings, coding exercises, and projects that pushed me out of my
            comfort zone. But TripleTen offered group tutoring hours, a student
            platform called The Hub, and 1:1 support. I never felt alone. The
            help was always there; I just had to reach for it.
          </p>

          <p>
            {" "}
            My first project was the Coffee Shop, where I learned HTML, CSS, and
            JavaScript. Then came "Spots", where I built modals and user
            functionality like the “like” button. With every project, I gained
            more experience in both frontend and backend development. Now I’m at
            my final project — my custom project — this website, my portfolio,
            and my blog. It’s something I plan to continue building, expanding,
            and writing on.
          </p>

          <p>
            {" "}
            I hope that whoever reads this feels inspired. I’ve always taken
            chances on my dreams. Failure is part of growth, and every challenge
            teaches you something that makes you stronger. That’s what I
            believe. And this journey — from healthcare to tech — is proof that
            it’s never too late to choose a new path and build something
            meaningful.
          </p>
        </>
      ),
      date: "July 2026",
      image: journeyImg,
    },
    {
      id: 2,
      title: "Building My Portfolio From Scratch",
      preview: "Design choices, React components, and lessons learned...",
      fullText: (
        <>
          <p>
            Since starting my tech journey, I’ve always been a little fearful of
            creating my own project from start to finish. There’s something
            intimidating about staring at a blank screen and knowing that
            everything — every component, every style, every bug — will be yours
            to build and yours to fix. But for my final TripleTen project, we
            were required to create a custom project from scratch. So here I am,
            building my portfolio and blog from the ground up, beginning with
            the simplest step: typing an exclamation point and pressing Tab to
            generate my first HTML file.
          </p>

          <p>
            With each file I created, I felt a little more confident about the
            outcome. I won’t lie — the process has been tedious. I spent long
            hours wrestling with CSS just to get an image to fit correctly
            inside a modal. I spent even more hours debugging issues in the
            browser’s inspect mode, checking and rechecking my VS Code setup,
            only to discover that I made the most rookie mistake of all: I
            forgot to import the CSS file into my JSX component. (Drops head on
            table.)
          </p>

          <p>
            Becoming a full‑stack web developer isn’t easy. If someone says it
            is, kudos to them — truly. I’m learning at my own pace, and I’m
            being challenged constantly. But I believe these obstacles are
            necessary. Hands‑on experience is the best teacher. Reading and
            watching tutorials can only take you so far; eventually, I had to
            build, break, fix, and rebuild. Even with hands‑on work, I still
            find myself reading, watching, documenting, and then reading again.
            Could I have a more efficient process? Maybe. But this is how it’s
            going, and it’s working for me.
          </p>

          <p>
            When I began my transition into tech, I knew I wanted to build
            something personal, intentional, and reflective of who I am. The
            first step was figuring out how I wanted my portfolio to feel. I
            wanted an editorial aesthetic because I love writing. I browsed
            countless Figma templates for portfolios and blogs before finally
            settling on The Observer theme. I followed some of its styling, but
            eventually I adjusted things to be more functional and aesthetically
            pleasing for my own vision and from what I think the user would
            enjoy.
          </p>

          <p>
            From there, I built the foundation: React components, routing, page
            structure, and overall architecture. I created separate pages for
            Home, About Me, Portfolio, Blog, and Contact — each with its own CSS
            styling. I knew I needed a third‑party API, and motivational quotes
            felt perfect for me. They matched the vibe of my website: mental
            health, tech journey, progress, and pursuing dreams.
          </p>

          <p>
            I even created AI‑generated cartoon images of myself, and they
            turned out surprisingly accurate. I love them. (Am I the only one
            who wonders what it would feel like to be a cartoon or a Marvel
            hero?) There is still more styling to refine and more thumbnails to
            add, but I’ve come a long way from just one idea.
          </p>

          <p>
            This personal project — even though it’s my final assignment for
            TripleTen — means a lot to me. It’s a reflection of who I am and who
            I’m becoming. I will continue to build on it, write more articles,
            and grow this space into something bigger than I imagined.
          </p>

          <p>~ Full Stack Web Developer Loading </p>
        </>
      ),
      date: "July 2026",
      image: portfolioImg,
    },

    {
      id: 3,
      title: "Mental Health + Coding",
      preview: "How I balance creativity, learning, and self-care...",
      fullText: (
        <>
          <p>
            Self‑doubt and fear can be anyone’s worst enemy. They drain
            motivation, cloud judgment, and weigh heavily on mental health. I’m
            not a mental health professional, but I can share what I’ve
            experienced and what I’ve done to keep myself above water — and
            sometimes even out of the water entirely. Beyond the coding journey,
            we all deal with everyday stresses: finances, family, health,
            relationships, work. Some days, I forget that I’m only human. I
            forget to breathe. I forget to slow down. And honestly, it’s hard to
            relax when I have deadlines, kids’ basketball practice, and a health
            routine I’m trying to maintain.
          </p>

          <p>
            Someone once told me to block out my calendar so I could focus on
            the most important tasks during the times when I’m most productive.
            I tried that. Some days it works beautifully, and other days the
            busyness of life takes over. I think planning your days and weeks is
            important — blocking out time, setting intentions, creating
            structure. But I also think you should give yourself grace when
            things don’t go as planned. Life happens. Things fall apart.
            Interruptions show up without warning. What matters is getting back
            on track once the interruption passes.
          </p>

          <p>
            Coding itself can be stressful. I’ve spent hours on the computer
            only to break something, spend even more hours trying to fix it, and
            sometimes wait until the next day for a tutor session. I learned
            quickly that I needed mini breaks during long sessions. My
            suggestion: take your eyes off the screen. Go outside. Walk around
            the block. Get some Vitamin D. Clear your head. It makes a
            difference.
          </p>

          <p>
            I keep a gratitude journal and try to write in it before bed or
            whenever I feel especially grateful — or even when I don’t. I sit
            there and force myself to find something to appreciate. There is
            always something, even if it doesn’t feel obvious at first. Close
            your eyes for a moment and listen to your own breathing. That alone
            is something to be grateful for.
          </p>

          <p>
            Another thing that helps me stay motivated is going to the gym as
            often as I can. If I can’t make it, I’ll do an hour of home
            exercises. I’ve noticed that on the days I exercise, I’m more
            productive and my mental state is noticeably better. Believe it or
            not, I get a little happy boost.
          </p>

          <p>
            I also realized how much time I spend sitting — twelve‑hour shifts
            at work, then coming home and sitting again to code. I started
            wearing a Fitbit (a $40 one from Amazon) to track my health data and
            remind me to stand up or drink water. It made me more aware of how
            sedentary I was and pushed me to make changes.
          </p>

          <p>
            Coding is hard. Believe me when I say I’ve heard this from many
            people in TripleTen Bootcamp. We feel like imposters. We feel like
            we still have so much more to learn. But having support — tutors,
            classmates, other tech learners — makes a huge difference. I had to
            connect with others so you can get through your journey and help
            pull others along the way.
          </p>

          <p>
            If I had any ideas that could help software engineers, beginners, or
            anyone currently on their tech journey, I’d love to hear them.
          </p>
          <p>Comment section coming soon. Send me an email if you'd like.</p>
          <div className="email-button">
            <button
              className="email-button__btn"
              onClick={() =>
                (window.location.href = "mailto:sorim.swe@gmail.com")
              }
            >
              Email
            </button>
          </div>
        </>
      ),
      date: "July 2026",
      image: mentalImg,
    },

    {
      id: 4,
      title: "Career Search Journey",
      preview: "The Emotional Rollercoaster of Job Hunting in Tech",
      fullText: (
        <>
          <p>
            I started the job search for my first tech role way before I
            completed my SE Program at TripleTen Bootcamp. TripleTen actually
            starts the career journey early on in the program, so I jumped in
            early. With that being said, I’ve applied to many places — some
            tech‑related, some healthcare‑related, and some that blended both.
            That’s because I come from a healthcare background.
          </p>

          <p>
            The job search and interview process has been an emotional
            rollercoaster, to say the least. I’ve had to look for roles that I
            thought matched my skills and qualifications. I’ve had to alter my
            resume and cover letter for each role. I’ve had to apply to each
            position and re‑enter the same information that’s already on the
            resume I just attached. I’ve had to keep track of all the places I
            applied to, the documents I submitted, and the outcomes of those
            applications. So while you’re receiving rejection emails throughout
            the week, you’re also keeping track of them.
          </p>

          <p>
            In the middle of all this, I needed to complete more projects, wait
            impatiently for externship opportunities, research other
            opportunities, and network. And all of this is done after the
            full‑time job I have to support myself and my family. Oh, and don’t
            forget — I also have to do tech interview practice and continue
            learning web development and Google Cloud deployment.
          </p>

          <p>
            This may sound like I’m complaining. I’m not. This is just the
            reality of my life and my career journey. I need to get to where I
            want to be, and the only way to do that is by doing.
          </p>

          <p>
            Since applying for tech roles, I’ve had the opportunity to interview
            for an Application Analyst role and one tech role. For the analyst
            role, I interviewed with at least nine people. I was sure I got the
            job. I was invested and ready to continue on this new path with what
            seemed like great people to work and grow with. I didn’t get the
            job. It was definitely a bummer. I had to remind myself what was at
            stake. Quitting wasn’t an option.
          </p>

          <p>
            I also couldn’t allow negative thoughts to consume me. I continued
            researching job, internship, and externship opportunities. I
            continued applying. The next week after the rejection, I got an
            email to interview for a tech role. Was this fate? I don’t know. I
            do know that I will hope for the best, but I won’t expect an
            automatic yes.
          </p>

          <p>
            I’m not giving up — I’m just guarding my mental health so I can keep
            moving. I’ve seen and heard other graduates land their first tech
            role. There’s never envy from my end, but I always try to figure out
            what steps they took so I can be better at my own process.
          </p>

          <p>
            Job searching is long and hard, and it can sometimes seem
            impossible. I still remind myself that doing nothing will definitely
            give me negative results. The only option is forward.
          </p>

          <p>
            Here’s another reminder to find ways to keep up with your mental and
            physical health. It’s okay to take a break. Exercise has been the
            best medicine for me — I just have to be consistent with it. I’m
            still not perfect, but I believe that even if your goal is an hour
            and you only got thirty minutes in today, you’re still winning.
          </p>

          <p>
            And on a lighter note — does anyone else have to chase after their
            dog for love and affection like I do? Because wow, my dog acts like
            I’m asking for a signed celebrity autograph every time I try to hug
            him. Some dogs love affection, but only on their terms. Sometimes
            they want cuddles, and other times they want you to run laps around
            the house just to earn a single head scratch. Honestly, it’s a whole
            personality trait.
          </p>

          <p>
            Even in moments like that, I’m reminded that life is full of small
            joys and funny distractions. Whether it’s chasing your dog for a hug
            or carving out thirty minutes to exercise, those little things
            matter. They keep you grounded while you’re grinding toward your
            goals.
          </p>
        </>
      ),
      date: "August 2026",
      image: interviewImg,
    },
  ]);

  // Filter posts by search term
  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()),
  );

  // Open modal for ANY article
  const openArticleModal = (article) => {
    setActiveArticle(article);
    setIsModalOpen(true);

    setTimeout(() => {
      activeArticleRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 100);
  };

  useEffect(() => {
    if (!isModalOpen || !activeArticleRef.current) return;

    activeArticleRef.current.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, [isModalOpen, activeArticle]);

  return (
    <div className="blog">
      {/* HEADER */}
      <section className="blog__header full-bleed">
        <section
          className="blog__background-image"
          style={{ backgroundImage: `url(${aboutBg})` }}
        >
          <h1 className="blog__title">Articles</h1>
        </section>
      </section>

      {/* FEATURED ARTICLE */}
      <div ref={activeArticleRef}>
        <FeaturedArticle
          article={featured}
          onOpen={() => openArticleModal(featured)}
        />
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        {activeArticle && (
          <>
            <div className="modal__article">
              <div className="modal__image">
                <img src={activeArticle.image} alt={activeArticle.title} />
              </div>

              <div className="modal__text">
                <h2 className="modal__title">{activeArticle.title}</h2>
                <div className="modal__body">{activeArticle.fullText}</div>
              </div>
            </div>

            {/* THUMBNAIL GRID */}
            {activeArticle.thumbnails && (
              <ModalThumbnailGrid items={activeArticle.thumbnails} />
            )}
          </>
        )}
      </Modal>

      {/* SEARCH FORM */}
      <div className="blog__search">
        <input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* BLOG POSTS */}
      <BlogPostList
        posts={filteredPosts}
        onOpen={(post) => openArticleModal(post)}
      />
    </div>
  );
};

export default Blog;
