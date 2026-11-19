
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../App.css";
import "./About.css";

import aboutHeroImage from "./assets/about-hero.png";

function About() {
  return (
    <div className="app organic-page about-page">

      {/* NAVBAR */}
      <Navbar />

      {/* HERO HEADER */}
      <header className="about-header">
        <div className="about-header-content">
          <span className="about-tag">
            About the IAKIS project
          </span>

          <h1>Preserving India's agricultural knowledge</h1>

          <p>
            Explore the purpose, objectives and learning areas
            of IAKIS, a digital academic project that presents
            India's traditional agricultural knowledge.
          </p>

          <a href="#about-introduction" className="about-start-btn">
            Explore the project ↓
          </a>
        </div>

         <div className="about-header-image">
    <img
      src={aboutHeroImage}
      alt="Green agricultural field in India"
      className="about-hero-image"
    />
  </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="about-content">

        {/* 01. INTRODUCTION */}
        <section className="about-card" id="about-introduction">
          <span className="about-number">01. Introduction</span>
          <h2>What is IAKIS?</h2>

          <p>
            IAKIS stands for Indigenous Agricultural Knowledge
            and Information System. It is a digital academic
            project that focuses on traditional farming practices,
            indigenous crops and regional agricultural knowledge
            of India.
          </p>

          <p>
            Traditional agricultural knowledge has developed
            through the experience of farming communities.
            Farmers have learned how to use local soil, water,
            climate, seeds and natural resources over many generations.
          </p>

          <p>
            This portal brings selected agricultural information
            together in one place. It helps students and visitors
            learn about India's traditional farming knowledge
            in a simple and organized way.
          </p>

          <div className="about-example">
            <h3>🌾 Simple example</h3>
            <p>
              Traditional water conservation methods such as
              Johads and Tankas show how people in dry areas
              have collected and stored rainwater.
            </p>
          </div>
        </section>

        {/* 02. PURPOSE */}
        <section className="about-card">
          <span className="about-number">02. Project purpose</span>
          <h2>Why was this portal developed?</h2>

          <p>
            India has many traditional farming practices.
            These practices are connected with local weather,
            soil, water, crops and the daily lives of farming
            communities.
          </p>

          <p>
            Much of this knowledge has been developed through
            years of practical experience. It is important to
            document and present this information so that
            students and future generations can learn from it.
          </p>

          <p>
            IAKIS uses digital technology to organize this
            information and make it easier to explore.
            Its main purpose is to support learning and
            awareness about India's agricultural heritage.
          </p>
        </section>

        {/* 03. OBJECTIVES */}
        <section className="about-card">
          <span className="about-number">03. Project objectives</span>
          <h2>What are the main objectives of IAKIS?</h2>

          <p>
            The portal has been developed with the following
            objectives:
          </p>

          <div className="about-feature-grid">

            <div className="about-feature">
              <span>📚</span>
              <h3>Document knowledge</h3>
              <p>
                Present traditional agricultural knowledge
                in an organized digital format.
              </p>
            </div>

            <div className="about-feature">
              <span>🌱</span>
              <h3>Preserve traditions</h3>
              <p>
                Highlight traditional farming practices
                and indigenous crop knowledge.
              </p>
            </div>

            <div className="about-feature">
              <span>🗺️</span>
              <h3>Explore regions</h3>
              <p>
                Show how farming methods and crops
                differ across regions of India.
              </p>
            </div>

            <div className="about-feature">
              <span>🌾</span>
              <h3>Learn about crops</h3>
              <p>
                Provide useful information about
                traditional and important Indian crops.
              </p>
            </div>

            <div className="about-feature">
              <span>💡</span>
              <h3>Support learning</h3>
              <p>
                Help students and visitors understand
                agricultural topics in easy language.
              </p>
            </div>

            <div className="about-feature">
              <span>💻</span>
              <h3>Use digital technology</h3>
              <p>
                Make agricultural information easier
                to access through a digital platform.
              </p>
            </div>

          </div>
        </section>

        {/* 04. PORTAL SECTIONS */}
        <section className="about-card">
          <span className="about-number">04. Portal sections</span>
          <h2>What information can visitors explore?</h2>

          <p>
            IAKIS is divided into different sections.
            Each section provides information about
            an important part of Indian agriculture.
          </p>

          <div className="about-variety-grid">

            <div className="about-variety">
              <h3>1. Home</h3>
              <p>
                The Home page introduces the portal
                and helps visitors explore its main sections.
              </p>
            </div>

            <div className="about-variety">
              <h3>2. Practices</h3>
              <p>
                This section explains traditional and
                sustainable farming practices used in India.
              </p>
            </div>

            <div className="about-variety">
              <h3>3. Crops</h3>
              <p>
                This section provides information about
                different crops, their uses and characteristics.
              </p>
            </div>

            <div className="about-variety">
              <h3>4. Regions</h3>
              <p>
                This section explains agricultural knowledge,
                crops and farming methods in different
                Indian regions.
              </p>
            </div>

            <div className="about-variety">
              <h3>5. About</h3>
              <p>
                This section explains the purpose,
                objectives and academic background
                of the IAKIS project.
              </p>
            </div>

          </div>

          <div className="about-note">
            <strong>Remember:</strong> All these sections
            work together to make agricultural information
            easier to understand and explore.
          </div>
        </section>

        {/* 05. IMPORTANCE */}
        <section className="about-card">
          <span className="about-number">05. Importance of traditional knowledge</span>
          <h2>Why is traditional agricultural knowledge important?</h2>

          <p>
            Traditional agricultural knowledge is important
            because it shows how farming communities have
            used local resources to grow crops and manage
            different environmental conditions.
          </p>

          <div className="about-feature-grid">

            <div className="about-feature">
              <span>🌍</span>
              <h3>Local experience</h3>
              <p>
                It is based on the experience of people
                who understand their local farming conditions.
              </p>
            </div>

            <div className="about-feature">
              <span>💧</span>
              <h3>Water management</h3>
              <p>
                Traditional methods show different ways
                to collect, store and use water.
              </p>
            </div>

            <div className="about-feature">
              <span>🌿</span>
              <h3>Natural resources</h3>
              <p>
                It explains how farmers use soil,
                seeds, plants and other local resources.
              </p>
            </div>

            <div className="about-feature">
              <span>🌾</span>
              <h3>Crop diversity</h3>
              <p>
                Local crop varieties help us understand
                the diversity of Indian agriculture.
              </p>
            </div>

            <div className="about-feature">
              <span>👨‍🌾</span>
              <h3>Community knowledge</h3>
              <p>
                Farming knowledge is shared and developed
                by communities over many generations.
              </p>
            </div>

            <div className="about-feature">
              <span>♻️</span>
              <h3>Sustainable farming</h3>
              <p>
                Some traditional practices can support
                careful use of natural resources.
              </p>
            </div>

          </div>
        </section>

        {/* 06. ACADEMIC PROJECT */}
        <section className="about-card">
          <span className="about-number">06. Academic project</span>
          <h2>Digital documentation of Indian agricultural heritage</h2>

          <p>
            IAKIS is developed as an academic project.
            It explores how digital technology can be used
            to collect, organize and present information
            about traditional Indian agriculture.
          </p>

          <p>
            The project brings different agricultural topics
            together through separate website sections.
            It is designed to provide a simple learning
            experience for students and visitors.
          </p>

          <div className="about-project-details">

            <div>
              <strong>Project name</strong>
              <span>IAKIS Portal</span>
            </div>

            <div>
              <strong>Project type</strong>
              <span>Academic project</span>
            </div>

            <div>
              <strong>Main focus</strong>
              <span>Indigenous agricultural knowledge</span>
            </div>

            <div>
              <strong>Year</strong>
              <span>2026</span>
            </div>

          </div>
        </section>

        {/* 07. CONCLUSION */}
        <section className="about-card about-conclusion">
          <span className="about-number">07. Conclusion</span>
          <div className="about-conclusion-icon">🌱</div>

          <h2>What is the overall goal of IAKIS?</h2>

          <p>
            India's traditional agricultural knowledge
            is an important part of its history and rural life.
            It includes farming practices, local crops,
            water conservation methods and the experience
            of farming communities.
          </p>

          <p>
            IAKIS brings selected information about these
            topics together in a digital learning platform.
            It aims to make this knowledge easier to understand
            and explore.
          </p>

          <p>
            Through this project, students and visitors
            can learn more about India's agricultural
            heritage and the value of traditional knowledge.
          </p>

          <div className="about-final-message">
            <strong>
              Understanding traditional agricultural knowledge
              helps us value India's farming heritage and
              learn from the experience of farming communities.
            </strong>
          </div>
        </section>

        {/* BACK TO HOME */}
        <div className="about-back">
          <Link to="/">
            ← Back to Home
          </Link>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="about-footer">
        <div className="about-footer-content">
          <h2>IAKIS</h2>

          <p>
            Preserving India's Indigenous Agricultural Knowledge
            for future generations.
          </p>

          <div className="about-footer-bottom">
            © 2026 IAKIS | Academic project
          </div>
        </div>
      </footer>

    </div>
  );
}

export default About;
