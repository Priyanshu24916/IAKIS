
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Millets.css";

import logo from "./assets/iakis-logo.png";
import milletImage from "./assets/millets.jpg";

function Millets() {
  return (
    <div className="app organic-page millets-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="IAKIS logo" />
          </Link>
        </div>
      </nav>

      {/* HERO HEADER */}
      <header className="millet-header">
        <div className="millet-header-content">
          <span className="millet-tag">
            Traditional Indian crops
          </span>

          <h1>Millets</h1>

          <p>
            Discover the importance of millets, their different
            varieties, traditional cultivation methods, nutritional
            value and role in sustainable agriculture.
          </p>

          <a href="#millet-introduction" className="millet-start-btn">
            Start learning ↓
          </a>
        </div>

        <div className="millet-hero-image">
          <img src={milletImage} alt="Millet crop field" />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="millet-content">

        {/* 01. INTRODUCTION */}
        <section className="millet-card" id="millet-introduction">
          <span className="millet-number">01. Introduction</span>
          <h2>What are millets?</h2>

          <p>
            Millets are small-seeded cereal crops that have been
            grown by farmers for thousands of years. They belong
            to the grass family and are mainly grown for their
            edible grains.
          </p>

          <p>
            Millets are important crops in areas where rainfall
            is low and water is limited. Many millet varieties can
            grow in hot and dry conditions. They generally need
            less water than water-intensive crops such as rice.
          </p>

          <p>
            In India, Jowar, Bajra, Ragi, Foxtail Millet and Kodo
            Millet are some popular examples. Their grains are
            used to prepare different traditional foods.
          </p>

          <p>
            Millets are also called Nutri-Cereals because their
            grains contain important nutrients such as protein,
            dietary fibre, iron, calcium and other minerals.
          </p>

          <div className="millet-example">
            <h3>🌾 Simple example</h3>
            <p>
              Bajra is commonly grown in dry areas of Rajasthan.
              Its grains are used to prepare traditional Bajra roti.
            </p>
          </div>
        </section>

        {/* 02. MAIN FEATURES */}
        <section className="millet-card">
          <span className="millet-number">02. Main features</span>
          <h2>What are the main characteristics of millets?</h2>

          <p>
            Millets have several useful features that make them
            important crops for farmers and consumers.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <span>☀️</span>
              <h3>Drought tolerance</h3>
              <p>
                Many millet varieties can tolerate dry weather
                better than water-demanding crops.
              </p>
            </div>

            <div className="millet-feature">
              <span>💧</span>
              <h3>Less water</h3>
              <p>
                Many millets can grow with less water than
                crops such as rice.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌱</span>
              <h3>Adaptability</h3>
              <p>
                Different varieties can grow in different
                soil and climate conditions.
              </p>
            </div>

            <div className="millet-feature">
              <span>⏳</span>
              <h3>Short duration</h3>
              <p>
                Many millet varieties mature in a relatively
                short growing period.
              </p>
            </div>

            <div className="millet-feature">
              <span>🥗</span>
              <h3>Nutrition</h3>
              <p>
                Their grains contain fibre, protein and
                important minerals.
              </p>
            </div>

            <div className="millet-feature">
              <span>🐄</span>
              <h3>Multiple uses</h3>
              <p>
                Millets provide food for people and
                fodder for animals.
              </p>
            </div>
          </div>
        </section>

        {/* 03. TYPES AND VARIETIES */}
        <section className="millet-card">
          <span className="millet-number">03. Types and varieties</span>
          <h2>What are the different types of millets?</h2>

          <p>
            India grows different types of millets. Each type
            has its own grain shape, growing conditions and uses.
          </p>

          <h3 className="millet-subheading">Major millets</h3>

          <div className="millet-variety-grid">
            <div className="millet-variety">
              <h3>1. Jowar (Sorghum)</h3>
              <p>
                Jowar is an important cereal crop grown in many
                parts of India. Its grains are used to prepare
                roti, porridge and other foods. Its stalks are
                also used as animal fodder.
              </p>
            </div>

            <div className="millet-variety">
              <h3>2. Bajra (Pearl millet)</h3>
              <p>
                Bajra grows well in many hot and dry regions.
                It is an important food crop in Rajasthan and
                other parts of India. Bajra flour is commonly
                used to prepare traditional roti.
              </p>
            </div>
          </div>

          <h3 className="millet-subheading">Small millets</h3>

          <div className="millet-variety-grid">
            <div className="millet-variety">
              <h3>3. Ragi (Finger millet)</h3>
              <p>
                Ragi is well known for its high calcium content.
                It is used to prepare flour, porridge, roti
                and other traditional foods.
              </p>
            </div>

            <div className="millet-variety">
              <h3>4. Foxtail millet</h3>
              <p>
                Foxtail millet has small grains and a seed head
                that looks like a fox's tail. It is used in
                rice-like dishes and porridge.
              </p>
            </div>

            <div className="millet-variety">
              <h3>5. Kodo millet</h3>
              <p>
                Kodo millet is traditionally grown in some
                dryland areas. Its grains are used in porridge
                and other food preparations.
              </p>
            </div>

            <div className="millet-variety">
              <h3>6. Little millet</h3>
              <p>
                Little millet has very small grains. It is
                used to prepare different traditional dishes
                and can grow in suitable local conditions.
              </p>
            </div>

            <div className="millet-variety">
              <h3>7. Barnyard millet</h3>
              <p>
                Barnyard millet is a short-duration crop in
                many varieties. Its grains are used in porridge
                and other food items.
              </p>
            </div>

            <div className="millet-variety">
              <h3>8. Proso millet</h3>
              <p>
                Proso millet is also called common millet.
                It is used as human food and sometimes as
                bird feed.
              </p>
            </div>

            <div className="millet-variety">
              <h3>9. Browntop millet</h3>
              <p>
                Browntop millet is a traditional small millet
                grown in some parts of India. It is used as
                food in certain regions.
              </p>
            </div>
          </div>

          <div className="millet-note">
            <strong>Remember:</strong> Jowar and Bajra are
            major millets, while Ragi, Foxtail, Kodo, Little,
            Barnyard, Proso and Browntop are commonly grouped
            as small millets.
          </div>
        </section>

        {/* 04. CLIMATE */}
        <section className="millet-card">
          <span className="millet-number">04. Climate</span>
          <h2>What climate is suitable for growing millets?</h2>

          <p>
            Most millet crops grow well in warm climates.
            Many varieties are suitable for tropical and
            subtropical regions.
          </p>

          <ul className="millet-list">
            <li>
              <strong>Temperature:</strong> Most millets prefer
              warm growing conditions.
            </li>
            <li>
              <strong>Rainfall:</strong> Many varieties can grow
              under low or moderate rainfall conditions.
            </li>
            <li>
              <strong>Sunlight:</strong> Sufficient sunlight
              supports healthy plant growth.
            </li>
            <li>
              <strong>Dry weather:</strong> Many millet crops
              can tolerate short periods of dry weather.
            </li>
          </ul>

          <p>
            In India, millets are grown in dry plains,
            semi-arid areas and some hilly regions.
            The suitable climate depends on the type
            of millet being grown.
          </p>
        </section>

        {/* 05. SOIL REQUIREMENTS */}
        <section className="millet-card">
          <span className="millet-number">05. Soil requirements</span>
          <h2>What type of soil is suitable for millets?</h2>

          <p>
            Millets can grow in different types of soil.
            However, suitable soil helps plants grow better
            and produce healthy grains.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Sandy loam soil</h3>
              <p>
                This soil allows extra water to drain and
                supports root growth.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Loamy soil</h3>
              <p>
                It contains a mixture of sand, silt and clay
                and is generally suitable for crop growth.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Red soil</h3>
              <p>
                Several millet varieties can grow in
                suitable red soil conditions.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Black soil</h3>
              <p>
                Jowar and Bajra are also grown in suitable
                black soil areas.
              </p>
            </div>
          </div>

          <div className="millet-example">
            <h3>Important point</h3>
            <p>
              Proper drainage is important because standing
              water can damage many millet crops. Soil fertility
              and local crop conditions also affect production.
            </p>
          </div>
        </section>

        {/* 06. TRADITIONAL FARMING */}
        <section className="millet-card">
          <span className="millet-number">06. Traditional farming</span>
          <h2>How are millets traditionally grown in India?</h2>

          <p>
            Millets have been grown in India for many generations.
            Farmers in dry and semi-dry regions traditionally
            depend on seasonal rainfall for their cultivation.
          </p>

          <ul className="millet-list">
            <li>
              Farmers select local seeds that are suitable
              for their area.
            </li>
            <li>
              Fields are prepared using traditional tools
              and ploughing methods.
            </li>
            <li>
              Seeds are sown according to the local rainfall
              and growing season.
            </li>
            <li>
              Farmyard manure and compost may be used to
              improve soil fertility.
            </li>
            <li>
              Weeds are removed through manual or suitable
              field operations.
            </li>
            <li>
              Crops are harvested when their grains become mature.
            </li>
          </ul>

          <p>
            Traditional farming knowledge helps farmers make
            use of local soil, rainfall, seeds and available
            resources.
          </p>
        </section>

        {/* 07. CULTIVATION PROCESS */}
        <section className="millet-card">
          <span className="millet-number">07. Cultivation process</span>
          <h2>What is the step-by-step process of millet cultivation?</h2>

          <p>
            Millet cultivation involves several steps.
            Farmers follow these steps to grow healthy crops
            and obtain a good harvest.
          </p>

          <div className="millet-process">

            <div className="millet-process-step">
              <span>01</span>
              <div>
                <h3>Seed selection</h3>
                <p>
                  Farmers select healthy seeds of a suitable
                  millet variety according to local conditions.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>02</span>
              <div>
                <h3>Land preparation</h3>
                <p>
                  The field is ploughed to loosen the soil
                  and make it ready for sowing.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>03</span>
              <div>
                <h3>Sowing</h3>
                <p>
                  Seeds are planted at suitable depth and
                  spacing using line sowing or broadcasting.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>04</span>
              <div>
                <h3>Germination</h3>
                <p>
                  Seeds receive moisture and begin to grow.
                  Small seedlings emerge from the soil.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>05</span>
              <div>
                <h3>Weed management</h3>
                <p>
                  Unwanted plants are removed so that millet
                  crops can receive enough sunlight, water
                  and nutrients.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>06</span>
              <div>
                <h3>Nutrient management</h3>
                <p>
                  Suitable manure or fertilizers are added
                  according to the crop's needs and soil
                  conditions.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>07</span>
              <div>
                <h3>Water management</h3>
                <p>
                  Farmers use rainfall or irrigation when
                  needed to support crop growth.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>08</span>
              <div>
                <h3>Crop protection</h3>
                <p>
                  Farmers check crops for insects, pests
                  and diseases and use suitable control methods.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>09</span>
              <div>
                <h3>Harvesting</h3>
                <p>
                  Mature crops are harvested when the grains
                  are ready.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>10</span>
              <div>
                <h3>Drying and storage</h3>
                <p>
                  Grains are dried properly, cleaned and stored
                  in a clean and dry place.
                </p>
              </div>
            </div>

          </div>

          <div className="millet-note">
            <strong>Note:</strong> Sowing time, seed quantity,
            spacing and fertilizer requirements are different
            for each millet variety and region.
          </div>
        </section>

        {/* 08. WATER REQUIREMENTS */}
        <section className="millet-card">
          <span className="millet-number">08. Water requirements</span>
          <h2>How much water do millets need?</h2>

          <p>
            Millets generally need less water than many
            water-intensive cereal crops. Many varieties
            can grow under rainfed conditions.
          </p>

          <p>
            Rainfed farming means growing crops mainly
            with the help of natural rainfall instead
            of regular irrigation.
          </p>

          <ul className="millet-list">
            <li>
              Many varieties can tolerate short periods
              of water shortage.
            </li>
            <li>
              Some millet crops have a relatively short
              growing period.
            </li>
            <li>
              Their root systems help them use available
              moisture in the soil.
            </li>
            <li>
              Irrigation can be useful when rainfall
              is not sufficient.
            </li>
          </ul>

          <p>
            However, millets also need water for proper
            growth. Severe drought during important growth
            stages can reduce grain production.
          </p>
        </section>

        {/* 09. TRADITIONAL KNOWLEDGE */}
        <section className="millet-card">
          <span className="millet-number">09. Traditional knowledge</span>
          <h2>What is the importance of traditional knowledge in millet farming?</h2>

          <p>
            Traditional knowledge means the farming experience
            and useful methods passed from one generation
            to another.
          </p>

          <p>
            Farmers have learned how to grow millets by
            observing their land, rainfall, soil and crops
            over many years.
          </p>

          <ul className="millet-list">
            <li>
              <strong>Local seeds:</strong> Farmers preserve
              seeds that grow well in their area.
            </li>
            <li>
              <strong>Rainfall planning:</strong> Sowing
              is planned according to seasonal rainfall.
            </li>
            <li>
              <strong>Mixed cropping:</strong> Suitable
              millets may be grown with pulse crops.
            </li>
            <li>
              <strong>Organic manure:</strong> Compost
              and farmyard manure are used to improve soil.
            </li>
            <li>
              <strong>Seed preservation:</strong> Healthy
              seeds are saved for the next growing season.
            </li>
          </ul>

          <p>
            These practices help protect local crop varieties
            and traditional agricultural knowledge.
          </p>
        </section>

        {/* 10. USES AND BENEFITS */}
        <section className="millet-card">
          <span className="millet-number">10. Uses and benefits</span>
          <h2>What are the uses and benefits of millets?</h2>

          <p>
            Millets are useful for people, farmers and animals.
            They are used in food preparation, animal feeding
            and different agricultural activities.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <span>🍲</span>
              <h3>Human food</h3>
              <p>
                Millets are used to make roti, porridge,
                khichdi, dosa and other food items.
              </p>
            </div>

            <div className="millet-feature">
              <span>🐄</span>
              <h3>Animal feed</h3>
              <p>
                Grains of certain millets can be used
                as animal feed.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌾</span>
              <h3>Fodder</h3>
              <p>
                Stalks and leaves of some millet crops
                are used as livestock fodder.
              </p>
            </div>

            <div className="millet-feature">
              <span>🏭</span>
              <h3>Food products</h3>
              <p>
                Millet flour is used to prepare biscuits,
                snacks and other food products.
              </p>
            </div>

            <div className="millet-feature">
              <span>💰</span>
              <h3>Farmer income</h3>
              <p>
                Millets can provide income when farmers
                have access to suitable markets.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌱</span>
              <h3>Food security</h3>
              <p>
                They provide another food source in
                areas with uncertain rainfall.
              </p>
            </div>
          </div>
        </section>

        {/* 11. NUTRITION */}
        <section className="millet-card">
          <span className="millet-number">11. Nutrition</span>
          <h2>What is the nutritional importance of millets?</h2>

          <p>
            Millets contain several nutrients that are
            important for the human body. They provide
            energy and contain protein, dietary fibre
            and different minerals.
          </p>

          <div className="millet-nutrients">
            <div>
              <h3>Carbohydrates</h3>
              <p>Provide energy for daily activities.</p>
            </div>

            <div>
              <h3>Protein</h3>
              <p>Helps the body build and repair tissues.</p>
            </div>

            <div>
              <h3>Dietary fibre</h3>
              <p>Supports healthy digestion.</p>
            </div>

            <div>
              <h3>Calcium</h3>
              <p>Important for healthy bones and teeth.</p>
            </div>

            <div>
              <h3>Iron</h3>
              <p>Helps the body make haemoglobin.</p>
            </div>

            <div>
              <h3>Magnesium</h3>
              <p>Supports normal muscle and nerve function.</p>
            </div>
          </div>

          <h3 className="millet-subheading">
            Nutritional features of different millets
          </h3>

          <div className="millet-table-wrap">
            <table className="millet-table">
              <thead>
                <tr>
                  <th>Millet</th>
                  <th>Important nutritional feature</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Jowar</td>
                  <td>Dietary fibre and minerals</td>
                </tr>
                <tr>
                  <td>Bajra</td>
                  <td>Iron and protein</td>
                </tr>
                <tr>
                  <td>Ragi</td>
                  <td>High calcium content</td>
                </tr>
                <tr>
                  <td>Foxtail millet</td>
                  <td>Protein and fibre</td>
                </tr>
                <tr>
                  <td>Kodo millet</td>
                  <td>Fibre and minerals</td>
                </tr>
                <tr>
                  <td>Little millet</td>
                  <td>Dietary fibre</td>
                </tr>
                <tr>
                  <td>Barnyard millet</td>
                  <td>Fibre and minerals</td>
                </tr>
                <tr>
                  <td>Proso millet</td>
                  <td>Protein</td>
                </tr>
                <tr>
                  <td>Browntop millet</td>
                  <td>Dietary fibre</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="millet-example">
            <h3>Did you know?</h3>
            <p>
              Ragi is especially known for its high calcium
              content. Millets are also naturally gluten-free,
              but packaged products can sometimes be affected
              by cross-contact during processing.
            </p>
          </div>

          <p>
            The exact nutrient content differs according
            to the variety, growing conditions and processing
            method. Millets should be eaten as part of
            a balanced diet.
          </p>
        </section>

        {/* 12. CHALLENGES */}
        <section className="millet-card">
          <span className="millet-number">12. Challenges</span>
          <h2>What are the major challenges in millet cultivation?</h2>

          <p>
            Although millets have many advantages, farmers
            may face some problems while growing and selling them.
          </p>

          <ul className="millet-list">
            <li>
              <strong>Uncertain rainfall:</strong> Irregular
              rainfall can affect crop growth.
            </li>
            <li>
              <strong>Low market demand:</strong> In some
              areas, demand for millets is limited.
            </li>
            <li>
              <strong>Lack of awareness:</strong> Some people
              do not know enough about their benefits.
            </li>
            <li>
              <strong>Processing problems:</strong> Some
              small millets need extra processing before use.
            </li>
            <li>
              <strong>Pests and diseases:</strong> Insects
              and diseases can damage millet crops.
            </li>
            <li>
              <strong>Storage problems:</strong> Moisture
              and insects can damage stored grains.
            </li>
            <li>
              <strong>Marketing difficulties:</strong> Farmers
              may not always get good prices or nearby markets.
            </li>
          </ul>

          <p>
            Better seeds, farming guidance, storage facilities,
            processing units and market support can help
            reduce these problems.
          </p>
        </section>

        {/* 13. CONSERVATION */}
        <section className="millet-card">
          <span className="millet-number">13. Conservation</span>
          <h2>How can millets be conserved and promoted?</h2>

          <p>
            Conservation means protecting millet seeds,
            local varieties and traditional farming
            knowledge for future generations.
          </p>

          <ul className="millet-list">
            <li>
              Preserve healthy traditional millet seeds.
            </li>
            <li>
              Grow different millet varieties to protect
              crop diversity.
            </li>
            <li>
              Support local farmers with training and
              better market facilities.
            </li>
            <li>
              Encourage people to learn about millet-based foods.
            </li>
            <li>
              Use suitable crop rotation and soil management.
            </li>
            <li>
              Store traditional seeds in community seed banks.
            </li>
            <li>
              Improve cleaning, processing and storage facilities.
            </li>
          </ul>

          <p>
            Conserving millets also means protecting the
            knowledge and food traditions of farming communities.
          </p>
        </section>

        {/* 14. REGIONAL IMPORTANCE */}
        <section className="millet-card">
          <span className="millet-number">14. Regional importance</span>
          <h2>What is the regional importance of millets in India?</h2>

          <p>
            Millets are grown in different Indian states.
            The type of millet depends on local soil,
            rainfall, climate and farming traditions.
          </p>

          <div className="millet-region-grid">
            <div>
              <h3>Rajasthan</h3>
              <p>Bajra is an important crop in many dry areas.</p>
            </div>

            <div>
              <h3>Maharashtra</h3>
              <p>Jowar and Bajra are traditional crops.</p>
            </div>

            <div>
              <h3>Karnataka</h3>
              <p>Ragi is widely grown and used in traditional food.</p>
            </div>

            <div>
              <h3>Andhra Pradesh and Telangana</h3>
              <p>Jowar, Bajra and small millets are grown.</p>
            </div>

            <div>
              <h3>Tamil Nadu</h3>
              <p>Ragi, Kambu and other millets are used in traditional diets.</p>
            </div>

            <div>
              <h3>Odisha</h3>
              <p>Small millets are traditionally grown in several areas.</p>
            </div>

            <div>
              <h3>Jharkhand</h3>
              <p>Ragi and other small millets are grown in suitable areas.</p>
            </div>
          </div>

          <p>
            Millet cultivation differs from district to district.
            Farmers select crops according to their local conditions.
          </p>
        </section>

        {/* 15. SUSTAINABLE AGRICULTURE */}
        <section className="millet-card">
          <span className="millet-number">15. Sustainable agriculture</span>
          <h2>Why are millets important for sustainable agriculture?</h2>

          <p>
            Sustainable agriculture means growing crops
            while taking care of natural resources so
            that future generations can also use them.
          </p>

          <ul className="millet-list">
            <li>
              <strong>Water conservation:</strong> Many
              millets need less water than water-intensive crops.
            </li>
            <li>
              <strong>Climate adaptability:</strong> Several
              varieties can tolerate heat and short dry periods.
            </li>
            <li>
              <strong>Dryland farming:</strong> They provide
              useful crop options in areas with limited rainfall.
            </li>
            <li>
              <strong>Crop diversity:</strong> Different
              millet varieties support agricultural biodiversity.
            </li>
            <li>
              <strong>Soil management:</strong> Millets can
              be included in suitable crop rotation systems.
            </li>
            <li>
              <strong>Food security:</strong> They provide
              another important source of food.
            </li>
            <li>
              <strong>Farmer support:</strong> They can
              provide income opportunities when markets are available.
            </li>
          </ul>

          <p>
            Millets can help farmers build farming systems
            that are better suited to changing weather
            and limited natural resources.
          </p>
        </section>

        {/* 16. CONCLUSION */}
        <section className="millet-card millet-conclusion">
          <span className="millet-number">16. Conclusion</span>
          <div className="millet-conclusion-icon">🌾</div>

          <h2>What have we learned about millets?</h2>

          <p>
            Millets are valuable traditional cereal crops
            that have been grown in India for many generations.
            They provide food, animal fodder and important
            nutrients for human health.
          </p>

          <p>
            Many millet varieties can grow in hot and dry
            conditions and need less water than water-intensive
            crops. This makes them useful for farmers in
            dry and rainfed areas.
          </p>

          <p>
            Millets also help protect traditional farming
            knowledge, local crop varieties and food culture.
            Better farming methods, processing facilities
            and market support can help increase their use.
          </p>

          <p>
            By protecting millet varieties and encouraging
            their cultivation, we can support farmers,
            improve food diversity and promote sustainable
            agriculture.
          </p>

          <div className="millet-final-message">
            <strong>
              Millets are important for nutritious food,
              traditional agriculture and a sustainable future.
            </strong>
          </div>
        </section>

        {/* BACK TO CROPS */}
        <div className="millet-back">
          <Link to="/crops">
            ← Back to Crops
          </Link>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="millet-footer">
        <div className="millet-footer-content">
          <h2>IAKIS</h2>

          <p>
            Preserving India's Indigenous Agricultural Knowledge
            for future generations.
          </p>

          <div className="millet-footer-bottom">
            © 2026 IAKIS | Academic project
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Millets;
