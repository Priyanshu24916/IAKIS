
import { Link } from "react-router-dom";
import "../App.css";
import "./TraditionalWaterManagement.css";
import logo from "./assets/iakis-logo.png";

function TraditionalWaterManagement() {
  return (
    <>
      <nav className="navbar water-navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="IAKIS Logo" />
          </Link>
        </div>
      </nav>

      <header className="detail-header">
        <h1>Traditional water management</h1>
        <p>Discover India's traditional ways of saving and managing water</p>
      </header>

      <main className="detail-content water-content">

        {/* 1. Introduction */}
        <section className="detail-card">
          <h2>1. What is traditional water management?</h2>
          <p>
            Traditional water management means using old and locally developed
            methods to collect, store, save and distribute water. These methods
            were developed by people according to their local environment and
            water needs.
          </p>
          <p>
            In India, communities have used ponds, wells, stepwells, canals,
            tanks and rainwater harvesting systems for many generations.
            These methods helped people manage water for farming, drinking
            and daily activities.
          </p>

          <div className="simple-example">
            <h3>Simple example</h3>
            <p>
              A village pond collects rainwater during the rainy season.
              Farmers can use this stored water when there is less rainfall.
              This is a simple example of traditional water management.
            </p>
          </div>
        </section>

        {/* 2. History */}
        <section className="detail-card">
          <h2>2. History and traditional background</h2>
          <p>
            Water management has been an important part of Indian life since
            ancient times. People developed different systems to collect and
            store rainwater because water availability was different in
            different regions.
          </p>
          <p>
            Ancient communities built tanks, wells, stepwells and ponds.
            These structures were often maintained by local communities.
            Their knowledge was passed from one generation to another.
          </p>
          <p>
            These traditional systems show how people used local materials,
            local knowledge and community cooperation to manage water.
          </p>
        </section>

        {/* 3. When and Where */}
        <section className="detail-card">
          <h2>3. When and where is it practised?</h2>
          <p>
            Traditional water management is practised throughout the year.
            However, rainwater collection is especially important during
            the monsoon season.
          </p>

          <h3 className="detail-subheading">Where is it found?</h3>
          <ul>
            <li><strong>Bihar:</strong> Traditional ponds, wells and Ahar-Pyne systems.</li>
            <li><strong>Rajasthan:</strong> Johads, Kunds and stepwells.</li>
            <li><strong>Gujarat:</strong> Traditional stepwells and water tanks.</li>
            <li><strong>Tamil Nadu:</strong> Traditional village irrigation tanks.</li>
            <li><strong>Meghalaya:</strong> Traditional bamboo drip irrigation.</li>
          </ul>
        </section>

        {/* 4. How it Works */}
        <section className="detail-card">
          <h2>4. How does traditional water management work?</h2>
          <p>
            Traditional water management works by collecting water from
            rainfall, rivers or other natural sources and storing or
            distributing it according to local needs.
          </p>

          <div className="step-list">
            <div className="step-item">
              <span>01</span>
              <div>
                <h3>Water collection</h3>
                <p>Rainwater is collected from rooftops, open areas and natural water sources.</p>
              </div>
            </div>

            <div className="step-item">
              <span>02</span>
              <div>
                <h3>Water storage</h3>
                <p>Water is stored in ponds, tanks, wells and other traditional structures.</p>
              </div>
            </div>

            <div className="step-item">
              <span>03</span>
              <div>
                <h3>Water distribution</h3>
                <p>Stored water is supplied to fields and other areas where it is needed.</p>
              </div>
            </div>

            <div className="step-item">
              <span>04</span>
              <div>
                <h3>Water conservation</h3>
                <p>Communities maintain water structures and try to reduce water wastage.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 5. Types */}
        <section className="detail-card">
          <h2>5. Types of traditional water management systems</h2>

          <h3 className="detail-subheading">Ahar-Pyne system</h3>
          <p>
            Ahar-Pyne is a traditional water management system found in
            parts of Bihar. Ahars are storage reservoirs, while Pynes are
            channels that carry water towards agricultural fields.
          </p>

          <h3 className="detail-subheading">Johads</h3>
          <p>
            Johads are small earthen structures used to collect and store
            rainwater. They also help rainwater soak into the ground.
          </p>

          <h3 className="detail-subheading">Stepwells</h3>
          <p>
            Stepwells are deep structures with steps leading down to the
            water level. They were traditionally used to access stored
            groundwater.
          </p>

          <h3 className="detail-subheading">Village ponds and tanks</h3>
          <p>
            Ponds and tanks collect rainwater and surface water. They
            support farming, animals and local communities.
          </p>

          <h3 className="detail-subheading">Bamboo drip irrigation</h3>
          <p>
            This traditional method uses bamboo pipes to carry water
            slowly to plants. It is practised in parts of Meghalaya.
          </p>
        </section>

        {/* 6. Materials */}
        <section className="detail-card">
          <h2>6. Materials and resources used</h2>
          <ul>
            <li>Soil and clay for making small water storage structures.</li>
            <li>Stones and bricks for building wells and stepwells.</li>
            <li>Bamboo and wood for making water channels.</li>
            <li>Sand and gravel for filtering and improving drainage.</li>
            <li>Natural land slopes for guiding the flow of water.</li>
            <li>Rainwater and surface water as the main water sources.</li>
          </ul>
        </section>

        {/* 7. Tools */}
        <section className="detail-card">
          <h2>7. Tools and equipment</h2>
          <ul>
            <li>Spades and shovels for digging.</li>
            <li>Baskets for carrying soil and stones.</li>
            <li>Ropes and buckets for drawing water from wells.</li>
            <li>Traditional measuring tools for construction.</li>
            <li>Hand tools for cleaning ponds and water channels.</li>
          </ul>
        </section>

        {/* 8. Steps */}
        <section className="detail-card">
          <h2>8. Step-by-step process</h2>
          <div className="step-list">
            <div className="step-item">
              <span>01</span>
              <div>
                <h3>Study the local area</h3>
                <p>Understand the rainfall, soil, land slope and water needs of the area.</p>
              </div>
            </div>

            <div className="step-item">
              <span>02</span>
              <div>
                <h3>Select a suitable method</h3>
                <p>Choose a pond, tank, channel, well or another suitable traditional system.</p>
              </div>
            </div>

            <div className="step-item">
              <span>03</span>
              <div>
                <h3>Build the structure</h3>
                <p>Use suitable local materials to build the water collection or storage structure.</p>
              </div>
            </div>

            <div className="step-item">
              <span>04</span>
              <div>
                <h3>Collect and store water</h3>
                <p>Collect rainwater or other available water in the structure.</p>
              </div>
            </div>

            <div className="step-item">
              <span>05</span>
              <div>
                <h3>Use water carefully</h3>
                <p>Use stored water for farming and other suitable needs without wasting it.</p>
              </div>
            </div>

            <div className="step-item">
              <span>06</span>
              <div>
                <h3>Maintain the system</h3>
                <p>Clean ponds and channels regularly and repair damaged structures.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Cycle */}
        <section className="detail-card">
          <h2>9. Traditional water management cycle</h2>
          <p>
            The following cycle explains how water is collected, stored,
            used and conserved.
          </p>

          <div className="farming-flow">
            <div className="flow-box">Rainfall</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-box">Water collection</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-box">Storage in ponds and tanks</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-box">Water use</div>
            <div className="flow-arrow">↓</div>
            <div className="flow-box">Maintenance and conservation</div>
          </div>
          <p className="detail-note">
            This is a simple learning diagram. Actual water systems may
            have different steps depending on the local area.
          </p>
        </section>

        {/* 10. Examples */}
        <section className="detail-card">
          <h2>10. Examples from India</h2>

          <h3 className="detail-subheading">Ahar-Pyne – Bihar</h3>
          <p>
            The Ahar-Pyne system collects and distributes rainwater.
            It has traditionally supported agriculture in parts of Bihar.
          </p>

          <h3 className="detail-subheading">Johads – Rajasthan</h3>
          <p>
            Johads collect rainwater and help improve groundwater
            recharge in dry regions.
          </p>

          <h3 className="detail-subheading">Bamboo drip irrigation – Meghalaya</h3>
          <p>
            Bamboo channels carry water slowly to crops and help
            control the amount of water supplied.
          </p>

          <h3 className="detail-subheading">Village tanks – South India</h3>
          <p>
            Traditional tanks store rainwater and help supply water
            for irrigation and community needs.
          </p>
        </section>

        {/* 11. Features */}
        <section className="detail-card">
          <h2>11. Main features</h2>
          <ul>
            <li>Uses local knowledge and locally available materials.</li>
            <li>Collects and stores rainwater.</li>
            <li>Supports farming and village life.</li>
            <li>Can help recharge groundwater.</li>
            <li>Often depends on community participation.</li>
            <li>Methods change according to local climate and geography.</li>
          </ul>
        </section>

        {/* 12. Uses */}
        <section className="detail-card">
          <h2>12. Uses and applications</h2>
          <ul>
            <li>Providing water for agricultural fields.</li>
            <li>Storing rainwater for dry periods.</li>
            <li>Supporting livestock and village activities.</li>
            <li>Helping recharge groundwater.</li>
            <li>Managing water in areas with low or irregular rainfall.</li>
          </ul>
        </section>

        {/* 13. Importance */}
        <section className="detail-card">
          <h2>13. Why is traditional water management important?</h2>
          <p>
            Traditional water management helps communities use available
            water carefully. It is important in areas where rainfall is
            seasonal or water resources are limited.
          </p>
          <ul>
            <li>It helps reduce water wastage.</li>
            <li>It supports agriculture and rural communities.</li>
            <li>It helps preserve traditional knowledge.</li>
            <li>It can improve local water availability.</li>
            <li>It encourages people to work together.</li>
          </ul>
        </section>

        {/* 14. Benefits */}
        <section className="detail-card">
          <h2>14. Benefits of traditional water management</h2>
          <ul>
            <li>Uses locally available resources.</li>
            <li>Can reduce dependence on distant water sources.</li>
            <li>Helps collect and store rainwater.</li>
            <li>May support groundwater recharge.</li>
            <li>Can be suitable for local environmental conditions.</li>
            <li>Preserves valuable traditional practices.</li>
          </ul>
        </section>

        {/* 15. Limitations */}
        <section className="limitation-card">
          <h2>15. Limitations and challenges</h2>
          <ul>
            <li>Some structures need regular cleaning and repair.</li>
            <li>Water availability depends on rainfall and local conditions.</li>
            <li>Old structures may become damaged or neglected.</li>
            <li>Pollution can make stored water unsafe.</li>
            <li>Some systems may not meet the needs of a growing population alone.</li>
          </ul>
        </section>

        {/* 16. Conclusion */}
        <section className="detail-card conclusion-card">
          <h2>16. Conclusion</h2>
          <p>
            Traditional water management is an important part of India's
            cultural and agricultural heritage. Methods such as Ahar-Pyne,
            Johads, stepwells and village tanks show how communities have
            collected and used water for generations.
          </p>
          <p>
            Protecting and improving these traditional systems can help
            communities save water and support sustainable development.
            Traditional knowledge can also work together with modern
            water management methods.
          </p>
        </section>

        <div className="knowledge-note">
          <h3>IAKIS KNOWLEDGE NOTE</h3>
          <p>
            Traditional water systems are different in different regions.
            Their success depends on local rainfall, soil, geography,
            maintenance and community participation.
          </p>
        </div>

        <div className="detail-back">
          <Link to="/practices">
          ← Back to traditional practices
          </Link>
        </div>

      </main>

      <footer>
        <p>© 2026 IAKIS – Indigenous Agricultural Knowledge Portal</p>
      </footer>
    </>
  );
}

export default TraditionalWaterManagement;
