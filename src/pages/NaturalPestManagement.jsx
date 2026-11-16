import React from "react";
import { Link } from "react-router-dom";
import "./NaturalPestManagement.css";
import logo from "./assets/iakis-logo.png";

function NaturalPestManagement() {
  return (
    <div className="app pest-page">

      {/* Navbar */}

      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="IAKIS Logo" />
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/practices">Traditional Practices</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </nav>

      {/* Page Header */}

      <header className="detail-header">
        <span className="section-label">
          🌾 Traditional Agricultural Practice
        </span>

        <h1>🌿 Natural Pest Management</h1>

        <p>
          Traditional methods of protecting crops from harmful insects
          and pests using natural resources and eco-friendly practices.
        </p>
      </header>

      {/* Main Content */}

      <main className="detail-content">

        {/* 01 - Introduction */}

        <section className="detail-card">
          <span className="section-label">🌱 01. Introduction</span>

          <h2>What is Natural Pest Management?</h2>

          <p>
            Natural Pest Management is a traditional and eco-friendly
            method of controlling harmful insects, pests and diseases
            in agricultural fields. It uses natural materials, beneficial
            insects and traditional farming practices instead of depending
            only on chemical pesticides.
          </p>

          <p>
            Farmers use methods such as neem-based preparations, crop
            rotation, mixed cropping, traps and natural predators to
            protect their crops and maintain soil and environmental health.
          </p>

          <div className="simple-example">
            <h3>💡 Simple Example</h3>
            <p>
              A farmer may use neem-based preparations to manage certain
              crop pests instead of immediately using a chemical pesticide.
            </p>
          </div>
        </section>

        {/* 02 - History */}

        <section className="detail-card">
          <span className="section-label">📜 02. History</span>

          <h2>History and Traditional Background</h2>

          <p>
            Natural Pest Management has been practised by Indian farmers
            for generations. Before modern chemical pesticides became
            common, farmers used locally available plants, agricultural
            materials and traditional knowledge to protect their crops.
          </p>

          <p>
            Neem leaves, ash, plant extracts, crop diversity and manual
            removal of pests were among the traditional methods used
            in different regions of India.
          </p>

          <p>
            These practices were generally based on local climate,
            crop conditions and farmers' experience.
          </p>
        </section>

        {/* 03 - Where Practised */}

        <section className="detail-card">
          <span className="section-label">🌍 03. Practice Area</span>

          <h2>When and Where is it Practised?</h2>

          <p>
            Natural Pest Management can be practised in different types
            of agricultural systems, including small farms, vegetable
            gardens, orchards and organic farming fields.
          </p>

          <div className="feature-grid">
            <div className="feature-item">
              <h3>🥬 Vegetable Farms</h3>
              <p>
                Natural methods help manage pests affecting vegetables
                such as cabbage, tomato and brinjal.
              </p>
            </div>

            <div className="feature-item">
              <h3>🍎 Fruit Orchards</h3>
              <p>
                Farmers use monitoring, traps and suitable biological
                methods to protect fruit crops.
              </p>
            </div>

            <div className="feature-item">
              <h3>🌱 Organic Farms</h3>
              <p>
                Natural pest management supports farming systems that
                reduce dependence on synthetic pesticides.
              </p>
            </div>
          </div>
        </section>

        {/* 04 - Working Method */}

        <section className="detail-card">
          <span className="section-label">⚙️ 04. Working Method</span>

          <h2>How Does Natural Pest Management Work?</h2>

          <p>
            Natural Pest Management works by preventing pest problems,
            identifying harmful insects and selecting suitable control
            methods. It also supports beneficial insects that naturally
            help control crop pests.
          </p>

          <p>
            Instead of trying to kill every insect, farmers aim to keep
            harmful pest populations under control while protecting
            useful organisms and the environment.
          </p>

          <div className="simple-example">
            <h3>⚠️ Important Point</h3>
            <p>
              Not every insect is harmful. Ladybird beetles, spiders
              and some other beneficial organisms help farmers by
              feeding on crop pests.
            </p>
          </div>
        </section>

        {/* 05 - Types */}

        <section className="detail-card">
          <span className="section-label">🐛 05. Types</span>

          <h2>Types of Natural Pest Management</h2>

          <p>
            Different natural methods can be selected according to
            the crop, pest type and local farming conditions.
          </p>

          <div className="feature-grid">

            <div className="feature-item">
              <h3>🌾 1. Cultural Control</h3>
              <p>
                Crop rotation, mixed cropping, timely sowing and field
                sanitation help reduce pest problems.
              </p>
            </div>

            <div className="feature-item">
              <h3>🛠️ 2. Mechanical Control</h3>
              <p>
                Hand-picking insects, using nets and installing suitable
                traps help remove or control pests.
              </p>
            </div>

            <div className="feature-item">
              <h3>🐞 3. Biological Control</h3>
              <p>
                Beneficial insects and natural predators help control
                harmful pest populations.
              </p>
            </div>

            <div className="feature-item">
              <h3>🌿 4. Botanical Control</h3>
              <p>
                Certain plant-based preparations, such as neem-based
                products, can help manage specific pests.
              </p>
            </div>

            <div className="feature-item">
              <h3>🛡️ 5. Physical Control</h3>
              <p>
                Barriers, insect nets and suitable physical methods
                help prevent pests from reaching crops.
              </p>
            </div>

            <div className="feature-item">
              <h3>🦋 6. Habitat Management</h3>
              <p>
                Suitable field habitats can support beneficial organisms
                that naturally help manage pests.
              </p>
            </div>

          </div>
        </section>

        {/* 06 - Materials */}

        <section className="detail-card">
          <span className="section-label">🍃 06. Materials</span>

          <h2>Natural Materials Used</h2>

          <p>
            Farmers use different locally available materials in
            traditional pest management. Their usefulness depends
            on the crop, pest and method of preparation.
          </p>

          <div className="resource-list">
            <div className="resource-item">
              <h3>🍃 Neem Leaves and Neem Products</h3>
              <p>
                Neem-based preparations are traditionally used to
                manage certain insect pests.
              </p>
            </div>

            <div className="resource-item">
              <h3>🧄 Garlic</h3>
              <p>
                Garlic is used in some traditional plant-based
                preparations for pest management.
              </p>
            </div>

            <div className="resource-item">
              <h3>🌶️ Chilli</h3>
              <p>
                Chilli is used in certain traditional preparations.
                It should be handled carefully.
              </p>
            </div>

            <div className="resource-item">
              <h3>🔥 Wood Ash</h3>
              <p>
                In some local practices, ash is used around plants
                for limited pest-management purposes.
              </p>
            </div>

            <div className="resource-item">
              <h3>🌱 Plant Extracts</h3>
              <p>
                Extracts from selected plants are used in some
                traditional farming systems.
              </p>
            </div>
          </div>
        </section>

        {/* 07 - Tools */}

        <section className="detail-card">
          <span className="section-label">🧰 07. Equipment</span>

          <h2>Tools and Equipment</h2>

          <p>
            Some simple tools are used to prepare and apply natural
            pest-management methods and to monitor crop conditions.
          </p>

          <div className="feature-grid">
            <div className="feature-item">
              <h3>🚿 Sprayer</h3>
              <p>
                Used to apply suitable prepared solutions to crops.
              </p>
            </div>

            <div className="feature-item">
              <h3>🪤 Insect Traps</h3>
              <p>
                Used to monitor or capture selected insect pests.
              </p>
            </div>

            <div className="feature-item">
              <h3>🧤 Protective Gloves</h3>
              <p>
                Help protect hands while handling plant materials
                and preparations.
              </p>
            </div>

            <div className="feature-item">
              <h3>🪣 Collection Containers</h3>
              <p>
                Used for collecting and preparing suitable materials.
              </p>
            </div>

            <div className="feature-item">
              <h3>🥅 Garden Nets</h3>
              <p>
                Help protect plants from selected insects and pests.
              </p>
            </div>

            <div className="feature-item">
              <h3>✂️ Pruning Tools</h3>
              <p>
                Used to remove affected plant parts when necessary.
              </p>
            </div>
          </div>
        </section>

        {/* 08 - Step by Step Process */}

        <section className="detail-card">
          <span className="section-label">📝 08. Practical Method</span>

          <h2>Step-by-Step Process</h2>

          <p>
            Natural Pest Management follows a planned process.
            Farmers first observe the crop and then select a suitable
            method according to the pest problem.
          </p>

          <div className="step-list">

            <div className="step-item">
              <span className="step-number">01</span>
              <div>
                <h3>🌱 Observe the Crop</h3>
                <p>
                  Regularly inspect plants and look for signs of
                  insect damage or disease.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span className="step-number">02</span>
              <div>
                <h3>🔍 Identify the Pest</h3>
                <p>
                  Identify the harmful insect and understand the
                  type of damage it causes.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span className="step-number">03</span>
              <div>
                <h3>📊 Check the Pest Level</h3>
                <p>
                  Check whether the pest population is causing
                  significant damage to the crop.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span className="step-number">04</span>
              <div>
                <h3>🛡️ Select a Natural Method</h3>
                <p>
                  Choose a suitable cultural, mechanical, biological
                  or botanical method.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span className="step-number">05</span>
              <div>
                <h3>🧺 Prepare the Materials</h3>
                <p>
                  Prepare the selected materials carefully and
                  follow reliable local recommendations.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span className="step-number">06</span>
              <div>
                <h3>🌿 Apply the Method</h3>
                <p>
                  Use the selected method at the appropriate time
                  while protecting beneficial insects.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span className="step-number">07</span>
              <div>
                <h3>📈 Monitor the Results</h3>
                <p>
                  Observe the crop again to check whether pest
                  damage has reduced.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span className="step-number">08</span>
              <div>
                <h3>✨ Improve the Practice</h3>
                <p>
                  Record the results and make changes when needed
                  for better crop protection.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 09 - Management Cycle */}

        <section className="detail-card">
          <span className="section-label">🔄 09. Management Cycle</span>

          <h2>Natural Pest Management Cycle</h2>

          <p>
            Natural Pest Management is a continuous process.
            Farmers regularly observe their crops, take suitable
            action and check the results.
          </p>

          <div className="farming-flow">

            <div className="flow-step">
              <h3>🌱 Observe the Crop</h3>
              <p>Check crop health and identify signs of pest damage.</p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <h3>🔍 Identify the Pest</h3>
              <p>Find out which pest is affecting the crop.</p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <h3>📋 Assess the Problem</h3>
              <p>Understand the level of damage and need for action.</p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <h3>🛡️ Select a Method</h3>
              <p>Choose an appropriate natural management method.</p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <h3>🚜 Take Action</h3>
              <p>Apply the selected method carefully.</p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-step">
              <h3>📊 Monitor and Improve</h3>
              <p>Check results and improve future pest management.</p>
            </div>

          </div>
        </section>

        {/* 10 - Indian Examples */}

        <section className="detail-card">
          <span className="section-label">🇮🇳 10. Indian Practices</span>

          <h2>Examples from India</h2>

          <p>
            Different regions of India have their own traditional
            pest-management practices. These practices depend on
            local crops, climate and available natural resources.
          </p>

          <div className="feature-grid">

            <div className="feature-item">
              <h3>🍃 Neem-Based Practices</h3>
              <p>
                Neem leaves and neem-based products are traditionally
                used in different parts of India to manage certain pests.
              </p>
            </div>

            <div className="feature-item">
              <h3>🌼 Marigold Intercropping</h3>
              <p>
                Marigold is planted with certain vegetable crops
                as a trap crop in some farming systems.
              </p>
            </div>

            <div className="feature-item">
              <h3>🐦 Bird Perches</h3>
              <p>
                Farmers in some areas use perches to attract insect-eating
                birds to agricultural fields.
              </p>
            </div>

            <div className="feature-item">
              <h3>🟨 Sticky Traps</h3>
              <p>
                Yellow and blue sticky traps are used for monitoring
                selected flying insect pests.
              </p>
            </div>

          </div>
        </section>

        {/* 11 - Features */}

        <section className="detail-card">
          <span className="section-label">✨ 11. Main Features</span>

          <h2>Main Features of Natural Pest Management</h2>

          <div className="resource-list">
            <div className="resource-item">
              <h3>🌿 Natural Resources</h3>
              <p>
                Makes use of suitable natural materials and biological
                resources.
              </p>
            </div>

            <div className="resource-item">
              <h3>🛡️ Preventive Approach</h3>
              <p>
                Focuses on preventing pest problems before they become
                serious.
              </p>
            </div>

            <div className="resource-item">
              <h3>🐞 Beneficial Organisms</h3>
              <p>
                Supports useful insects and other natural predators.
              </p>
            </div>

            <div className="resource-item">
              <h3>📚 Local Knowledge</h3>
              <p>
                Uses traditional knowledge and locally available resources.
              </p>
            </div>

            <div className="resource-item">
              <h3>🌍 Environmental Care</h3>
              <p>
                Aims to reduce unnecessary dependence on chemical
                pesticides.
              </p>
            </div>
          </div>
        </section>

        {/* 12 - Uses */}

        <section className="detail-card">
          <span className="section-label">🌿 12. Applications</span>

          <h2>Uses and Applications</h2>

          <p>
            Natural Pest Management can be used in several agricultural
            activities to support crop protection.
          </p>

          <ul>
            <li>Protection of vegetable crops from selected pests.</li>
            <li>Management of insects in fruit orchards.</li>
            <li>Monitoring pest populations in agricultural fields.</li>
            <li>Supporting organic and sustainable farming practices.</li>
            <li>Reducing unnecessary pesticide applications.</li>
            <li>Protecting beneficial insects and field biodiversity.</li>
          </ul>
        </section>

        {/* 13 - Importance */}

        <section className="detail-card">
          <span className="section-label">🌍 13. Importance</span>

          <h2>Why is Natural Pest Management Important?</h2>

          <p>
            Natural Pest Management is important because it encourages
            farmers to manage pests in a planned and responsible way.
            It helps maintain a balance between crop production,
            useful organisms and the natural environment.
          </p>

          <p>
            It also helps farmers understand their fields better
            through regular observation and the use of suitable
            preventive practices.
          </p>
        </section>

        {/* 14 - Benefits */}

        <section className="detail-card">
          <span className="section-label">✅ 14. Benefits</span>

          <h2>Benefits of Natural Pest Management</h2>

          <div className="feature-grid">

            <div className="feature-item">
              <h3>🌍 Environment Friendly</h3>
              <p>
                Helps reduce unnecessary use of synthetic pesticides.
              </p>
            </div>

            <div className="feature-item">
              <h3>🦋 Supports Biodiversity</h3>
              <p>
                Encourages the protection of beneficial insects
                and other organisms.
              </p>
            </div>

            <div className="feature-item">
              <h3>🌱 Local Resources</h3>
              <p>
                Some methods use materials that are locally available.
              </p>
            </div>

            <div className="feature-item">
              <h3>🌾 Long-Term Soil Care</h3>
              <p>
                Supports a wider sustainable farming approach.
              </p>
            </div>

            <div className="feature-item">
              <h3>👨‍🌾 Farmer Awareness</h3>
              <p>
                Encourages farmers to observe crops and identify
                pest problems correctly.
              </p>
            </div>

            <div className="feature-item">
              <h3>🔄 Integrated Approach</h3>
              <p>
                Different methods can be combined according to
                field conditions.
              </p>
            </div>

          </div>
        </section>

        {/* 15 - Limitations */}

        <section className="detail-card">
          <span className="section-label">⚠️ 15. Challenges</span>

          <h2>Limitations and Challenges</h2>

          <p>
            Natural Pest Management is useful, but it also has
            some limitations. Its success depends on proper
            identification, timing and correct application.
          </p>

          <ul>
            <li>
              Some natural methods may work slowly compared with
              certain chemical treatments.
            </li>

            <li>
              Effectiveness can vary according to weather and
              crop conditions.
            </li>

            <li>
              Farmers need proper knowledge to identify pests
              and beneficial insects.
            </li>

            <li>
              Preparing some traditional solutions can require
              additional time and effort.
            </li>

            <li>
              Not every natural preparation is safe or effective
              for every crop and pest.
            </li>

            <li>
              Severe pest attacks may require additional
              scientifically recommended control measures.
            </li>
          </ul>
        </section>

        {/* 16 - Conclusion */}

        <section className="detail-card">
          <span className="section-label">🎯 16. Conclusion</span>

          <h2>Conclusion</h2>

          <p>
            Natural Pest Management is an important traditional
            agricultural approach that uses prevention, observation
            and suitable natural methods to manage crop pests.
          </p>

          <p>
            It helps farmers reduce unnecessary dependence on
            chemical pesticides and supports the protection
            of beneficial organisms.
          </p>

          <p>
            By combining traditional knowledge with scientific
            guidance, farmers can use natural pest-management
            practices more safely and effectively.
          </p>
        </section>

        {/* Knowledge Note */}

        <div className="knowledge-note">
          <h3>💡 IAKIS KNOWLEDGE NOTE</h3>

          <p>
            Natural Pest Management is based on traditional farming
            knowledge and local experience. However, every natural
            preparation should be checked for safety and suitability.
            Farmers should test methods on a small area first and
            follow reliable agricultural recommendations.
          </p>
        </div>

        {/* Back Button */}

        <div className="detail-back">
          <Link to="/practices">
            ← Back to Traditional Practices
          </Link>
        </div>

      </main>

      {/* Footer */}

      <footer className="footer">
        <div className="footer-content">
          <h2>IAKIS</h2>

          <p>
            Indigenous Agricultural Knowledge Information System
          </p>

          <p>
            Preserving Traditional Agricultural Knowledge
            for Future Generations.
          </p>
        </div>

        <div className="footer-bottom">
          <p>© 2026 IAKIS | Academic Project</p>
        </div>
      </footer>

    </div>
  );
}

export default NaturalPestManagement;