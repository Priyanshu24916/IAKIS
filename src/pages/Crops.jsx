
import { Link } from "react-router-dom";
import "../App.css";
import "./Crops.css";
import logo from "./assets/iakis-logo.png";

// Crop Images
import riceImage from "./assets/rice.jpg";
import milletImage from "./assets/millets.jpg";
import pulsesImage from "./assets/pulses.jpg";
import herbsImage from "./assets/traditional-herbs.jpg";
import oilseedsImage from "./assets/oilseeds.jpg";
import localImage from "./assets/local-varieties.jpg";

function Crops() {
  return (
    <div className="app">

      {/* Navigation Bar */}
            <nav className="navbar">
             <div className="logo">
        <img src={logo} alt="IAKIS Logo" />
      
        <p className="logo-fullform">
          INDIGENOUS AGRICULTURAL
          <br />
          KNOWLEDGE PORTAL
        </p>
      </div>
      </nav>
      {/* Header */}
      <section className="crops-header">
        <p className="section-label">INDIGENOUS CROPS</p>

        <h1>Traditional Crops of India</h1>

        <p>
          Discover traditional and locally grown crops that are
          connected with India's diverse regions, climate and farming
          traditions.
        </p>
      </section>

      {/* Crop Cards */}
      <section className="crops-section">
        <div className="crop-grid">

          {/* 01 - Rice */}
          <div className="crop-card">
            <div className="crop-image">
              <img src={riceImage} alt="Traditional Rice Farming" />
            </div>

            <div className="crop-content">
              <h2>Rice</h2>

              <p>
                Rice is an important traditional crop grown in many
                parts of India. Different local varieties are adapted
                to different soil and water conditions.
              </p>

              <span>Traditional Grain</span>

              <Link to="/crops/rice" className="crop-learn-more">
                Learn More →
              </Link>
            </div>
          </div>

          {/* 02 - Millets */}
          <div className="crop-card">
            <div className="crop-image">
              <img src={milletImage} alt="Traditional Millets" />
            </div>

            <div className="crop-content">
              <h2>Millets</h2>

              <p>
                Millets are traditional small-grain crops such as
                jowar, bajra and ragi. They can grow in different
                climatic conditions and are important for nutrition.
              </p>

              <span>Nutritious Grain</span>

              <Link to="/crops/millets" className="crop-learn-more">
                Learn More →
              </Link>
            </div>
          </div>

          {/* 03 - Pulses */}
          <div className="crop-card">
            <div className="crop-image">
              <img src={pulsesImage} alt="Traditional Pulses" />
            </div>

            <div className="crop-content">
              <h2>Pulses</h2>

              <p>
                Pulses include lentils, chickpeas, peas and beans.
                They provide protein and help improve soil fertility
                by adding nitrogen to the soil.
              </p>

              <span>Protein-Rich Crop</span>

              <Link to="/crops/pulses" className="crop-learn-more">
                Learn More →
              </Link>
            </div>
          </div>

          {/* 04 - Traditional Herbs */}
          <div className="crop-card">
            <div className="crop-image">
              <img src={herbsImage} alt="Traditional Herbs" />
            </div>

            <div className="crop-content">
              <h2>Traditional Herbs</h2>

              <p>
                Traditional herbs such as tulsi, neem and aloe vera
                have been used in Indian households, traditional
                practices and local knowledge systems.
              </p>

              <span>Medicinal Plants</span>

              <Link
                to="/crops/traditional-herbs"
                className="crop-learn-more"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* 05 - Oilseeds */}
          <div className="crop-card">
            <div className="crop-image">
              <img src={oilseedsImage} alt="Traditional Oilseed Crops" />
            </div>

            <div className="crop-content">
              <h2>Oilseeds</h2>

              <p>
                Oilseed crops such as mustard, sesame, groundnut
                and linseed are grown for extracting edible oils
                and supporting farming activities.
              </p>

              <span>Oil-Producing Crops</span>

              <Link to="/crops/oilseeds" className="crop-learn-more">
                Learn More →
              </Link>
            </div>
          </div>

          {/* 06 - Local Varieties */}
          <div className="crop-card">
            <div className="crop-image">
              <img src={localImage} alt="Traditional Local Crop Varieties" />
            </div>

            <div className="crop-content">
              <h2>Local Varieties</h2>

              <p>
                Local crop varieties are traditional seeds developed
                and maintained by farming communities. Many are
                adapted to their local climate and soil conditions.
              </p>

              <span>Indigenous Seeds</span>

              <Link
                to="/crops/local-varieties"
                className="crop-learn-more"
              >
                Learn More →
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* Back to Home */}
      <div className="back-home">
        <Link to="/">← Back to Home</Link>
      </div>

      {/* Footer */}
      <footer>
        <h3>Indigenous Agricultural Knowledge Portal</h3>

        <p>
          Digital documentation of India's traditional agricultural
          knowledge.
        </p>

        <p className="copyright">
          © 2026 IAKIS | Academic Project
        </p>
      </footer>

    </div>
  );
}

export default Crops;
