
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Rice.css";

import logo from "./assets/iakis-logo.png";
import riceImage from "./assets/rice.jpg";

function Rice() {
  return (
    <div className="app organic-page millets-page rice-page">

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

          <h1>Rice</h1>

          <p>
            Discover the importance of rice, its major types,
            suitable growing conditions, traditional cultivation
            methods, nutritional value and role in Indian agriculture.
          </p>

          <a href="#rice-introduction" className="millet-start-btn">
            Start learning ↓
          </a>
        </div>

        <div className="millet-hero-image">
          <img src={riceImage} alt="Green rice crop field" />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="millet-content">

        {/* 01. INTRODUCTION */}
        <section className="millet-card" id="rice-introduction">
          <span className="millet-number">01. Introduction</span>
          <h2>What is rice?</h2>

          <p>
            Rice is one of the most important food crops in the
            world. It is a cereal crop that belongs to the grass
            family. Its scientific name is Oryza sativa.
          </p>

          <p>
            Rice is mainly grown for its edible grains. These
            grains are used to prepare many foods such as boiled
            rice, pulao, biryani, idli and dosa.
          </p>

          <p>
            Rice is a major food for millions of people,
            especially in India and other Asian countries.
            It is an important part of the daily diet of many families.
          </p>

          <div className="millet-example">
            <h3>🌾 Simple example</h3>
            <p>
              In many Indian homes, rice is eaten daily with dal,
              vegetables, curd and other food items.
            </p>
          </div>
        </section>

        {/* 02. IMPORTANCE */}
        <section className="millet-card">
          <span className="millet-number">02. Importance of rice</span>
          <h2>What is the importance of rice?</h2>

          <p>
            Rice is important for people, farmers and the
            agricultural economy. It supports food needs and
            provides income and employment to many people.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <span>🍚</span>
              <h3>Food supply</h3>
              <p>
                Rice is a major staple food and provides energy
                to millions of people.
              </p>
            </div>

            <div className="millet-feature">
              <span>👨‍🌾</span>
              <h3>Farmer employment</h3>
              <p>
                Rice cultivation provides work to farmers and
                agricultural labourers.
              </p>
            </div>

            <div className="millet-feature">
              <span>💰</span>
              <h3>Farmer income</h3>
              <p>
                Farmers earn money by growing and selling
                rice grains.
              </p>
            </div>

            <div className="millet-feature">
              <span>🏭</span>
              <h3>Industries</h3>
              <p>
                Rice is used in food processing and other
                agricultural industries.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌾</span>
              <h3>Food security</h3>
              <p>
                Rice helps meet the food needs of many
                families and communities.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌍</span>
              <h3>Trade</h3>
              <p>
                Rice is traded between different states
                and countries.
              </p>
            </div>
          </div>
        </section>

        {/* 03. TYPES AND VARIETIES */}
        <section className="millet-card">
          <span className="millet-number">03. Types and varieties</span>
          <h2>What are the main types of rice?</h2>

          <p>
            Rice has many types. They differ in grain size,
            shape, colour, fragrance and cooking quality.
          </p>

          <h3 className="millet-subheading">Types according to grain size</h3>

          <div className="millet-variety-grid">
            <div className="millet-variety">
              <h3>1. Long-grain rice</h3>
              <p>
                It has long and thin grains. After cooking,
                the grains usually remain separate.
              </p>
            </div>

            <div className="millet-variety">
              <h3>2. Medium-grain rice</h3>
              <p>
                It has medium-sized grains and is generally
                softer after cooking.
              </p>
            </div>

            <div className="millet-variety">
              <h3>3. Short-grain rice</h3>
              <p>
                It has short and round grains. It often
                becomes soft and sticky after cooking.
              </p>
            </div>

            <div className="millet-variety">
              <h3>4. Aromatic rice</h3>
              <p>
                These varieties have a natural fragrance.
                Basmati is a well-known example.
              </p>
            </div>
          </div>

          <h3 className="millet-subheading">Some well-known Indian varieties</h3>

          <div className="millet-variety-grid">
            <div className="millet-variety">
              <h3>5. Basmati rice</h3>
              <p>
                Basmati is known for its long grains and
                pleasant natural fragrance. It is used
                in biryani and pulao.
              </p>
            </div>

            <div className="millet-variety">
              <h3>6. Sona Masuri</h3>
              <p>
                Sona Masuri is a medium-grain rice variety
                widely used in many parts of India.
              </p>
            </div>

            <div className="millet-variety">
              <h3>7. Swarna</h3>
              <p>
                Swarna is an important rice variety grown
                in several rice-producing regions of India.
              </p>
            </div>

            <div className="millet-variety">
              <h3>8. Pusa Basmati</h3>
              <p>
                Pusa Basmati varieties are developed for
                rice production and are known for their
                grain quality and fragrance.
              </p>
            </div>
          </div>

          <div className="millet-note">
            <strong>Remember:</strong> Rice varieties are selected
            according to local climate, soil, water availability,
            grain quality and market demand.
          </div>
        </section>

        {/* 04. CLIMATE */}
        <section className="millet-card">
          <span className="millet-number">04. Climate</span>
          <h2>What climate is suitable for rice cultivation?</h2>

          <p>
            Rice grows well in a warm and humid climate.
            It needs suitable temperature, sunlight and
            enough water during its growing period.
          </p>

          <ul className="millet-list">
            <li>
              <strong>Temperature:</strong> Warm conditions,
              generally around 20°C to 35°C, are suitable
              for many rice varieties.
            </li>

            <li>
              <strong>Rainfall:</strong> Regular rainfall
              supports rice growth, but the amount needed
              depends on the variety and farming method.
            </li>

            <li>
              <strong>Sunlight:</strong> Good sunlight helps
              plants grow and supports grain development.
            </li>

            <li>
              <strong>Humidity:</strong> Humid conditions
              are generally suitable for rice cultivation.
            </li>
          </ul>

          <p>
            Rice can also be grown in areas with low rainfall
            when farmers have access to suitable irrigation.
          </p>

          <div className="millet-note">
            <strong>Important:</strong> Climate requirements
            may differ according to rice variety and local
            growing conditions.
          </div>
        </section>

        {/* 05. SOIL REQUIREMENTS */}
        <section className="millet-card">
          <span className="millet-number">05. Soil requirements</span>
          <h2>Which soil is suitable for rice cultivation?</h2>

          <p>
            Rice can grow in different types of soil.
            However, clayey and clay loam soils are often
            suitable because they can hold water for a
            longer time.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <span>🌱</span>
              <h3>Clayey soil</h3>
              <p>
                It has good water-holding capacity and
                is commonly used for rice cultivation.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌾</span>
              <h3>Clay loam soil</h3>
              <p>
                It contains clay and other soil particles
                and can support healthy rice growth.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌿</span>
              <h3>Alluvial soil</h3>
              <p>
                Fertile alluvial soils found in river
                plains are suitable for rice in many areas.
              </p>
            </div>
          </div>

          <div className="millet-example">
            <h3>Important point</h3>
            <p>
              The field should be reasonably level so that
              water can spread evenly. Proper drainage is
              also important when extra water needs to be removed.
            </p>
          </div>
        </section>

        {/* 06. GROWING SEASON */}
        <section className="millet-card">
          <span className="millet-number">06. Growing season</span>
          <h2>In which season is rice grown in India?</h2>

          <p>
            Rice is mainly grown during the Kharif season
            in India. However, it can also be cultivated
            in other seasons where irrigation and climate
            conditions are suitable.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <span>🌧️</span>
              <h3>Kharif season</h3>
              <p>
                Rice is generally sown with the arrival
                of the monsoon, around June to July.
              </p>
            </div>

            <div className="millet-feature">
              <span>❄️</span>
              <h3>Rabi season</h3>
              <p>
                Rice is grown during winter in some
                regions where suitable conditions exist.
              </p>
            </div>

            <div className="millet-feature">
              <span>☀️</span>
              <h3>Summer season</h3>
              <p>
                Some irrigated areas also grow rice
                during the summer season.
              </p>
            </div>
          </div>

          <p>
            The exact sowing and harvesting time changes
            from one state and region to another.
          </p>
        </section>

        {/* 07. LAND PREPARATION */}
        <section className="millet-card">
          <span className="millet-number">07. Land preparation</span>
          <h2>How is the land prepared for rice cultivation?</h2>

          <p>
            Proper land preparation helps rice plants grow
            evenly and makes water management easier.
            Farmers prepare the field before sowing or transplanting.
          </p>

          <div className="millet-process">

            <div className="millet-process-step">
              <span>01</span>
              <div>
                <h3>Ploughing</h3>
                <p>
                  The field is ploughed to loosen and
                  turn the soil.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>02</span>
              <div>
                <h3>Levelling</h3>
                <p>
                  The field is levelled so that water
                  can spread more evenly.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>03</span>
              <div>
                <h3>Puddling</h3>
                <p>
                  In transplanted rice, wet soil is mixed
                  and softened to prepare the field.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>04</span>
              <div>
                <h3>Bund making</h3>
                <p>
                  Small raised borders are made around
                  the field to help hold water.
                </p>
              </div>
            </div>

          </div>

          <div className="millet-note">
            <strong>Note:</strong> Puddling is common in
            traditional transplanted rice farming, but
            it is not necessary for every rice-growing method.
          </div>
        </section>

        {/* 08. SEED SELECTION AND NURSERY */}
        <section className="millet-card">
          <span className="millet-number">08. Seed selection and nursery</span>
          <h2>How are rice seeds selected and nursery prepared?</h2>

          <p>
            Good-quality seeds help farmers grow healthy
            rice plants. Farmers should select varieties
            according to local climate, soil, water
            availability and growing season.
          </p>

          <h3 className="millet-subheading">Seed selection</h3>

          <ul className="millet-list">
            <li>Use clean and healthy seeds from a reliable source.</li>
            <li>Choose varieties suitable for local conditions.</li>
            <li>Avoid damaged, diseased or mixed seeds.</li>
          </ul>

          <h3 className="millet-subheading">Nursery preparation</h3>

          <div className="millet-process">

            <div className="millet-process-step">
              <span>01</span>
              <div>
                <h3>Select a nursery area</h3>
                <p>
                  Choose a suitable area with access
                  to water.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>02</span>
              <div>
                <h3>Prepare the seedbed</h3>
                <p>
                  Make the nursery soil fine and level
                  before sowing seeds.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>03</span>
              <div>
                <h3>Sow the seeds</h3>
                <p>
                  Sow seeds at the recommended rate
                  and maintain suitable moisture.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>04</span>
              <div>
                <h3>Care for seedlings</h3>
                <p>
                  Protect young plants from weeds,
                  pests and diseases.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>05</span>
              <div>
                <h3>Transplant seedlings</h3>
                <p>
                  Move healthy seedlings to the main
                  field when they are ready.
                </p>
              </div>
            </div>

          </div>

          <div className="millet-note">
            <strong>Remember:</strong> Direct-seeded rice
            is sown directly in the main field, so a
            separate nursery is not required.
          </div>
        </section>

        {/* 09. CULTIVATION METHODS */}
        <section className="millet-card">
          <span className="millet-number">09. Cultivation methods</span>
          <h2>What are the main methods of rice cultivation?</h2>

          <p>
            Rice can be grown using different cultivation
            methods. Farmers select a method according
            to labour, water, soil and local conditions.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <span>🌱</span>
              <h3>Transplanting method</h3>
              <p>
                Seedlings are first grown in a nursery
                and then planted in the prepared main field.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌾</span>
              <h3>Direct seeding method</h3>
              <p>
                Seeds are sown directly in the main field
                instead of first growing nursery seedlings.
              </p>
            </div>

            <div className="millet-feature">
              <span>💧</span>
              <h3>System of rice intensification</h3>
              <p>
                This method uses practices such as younger
                seedlings, wider spacing and careful
                water management.
              </p>
            </div>
          </div>

          <p>
            Each method has its own benefits and limitations.
            The best method depends on the local farming conditions.
          </p>
        </section>

        {/* 10. WATER MANAGEMENT */}
        <section className="millet-card">
          <span className="millet-number">10. Water management</span>
          <h2>How is water managed in rice cultivation?</h2>

          <p>
            Water is very important for rice cultivation.
            However, keeping the field continuously flooded
            is not necessary in every rice-growing system.
          </p>

          <ul className="millet-list">
            <li>
              Provide enough water during important
              crop growth stages.
            </li>
            <li>
              Avoid unnecessary water loss from the field.
            </li>
            <li>
              Maintain suitable soil moisture according
              to the cultivation method.
            </li>
            <li>
              Remove extra water when heavy rainfall
              causes harmful waterlogging.
            </li>
            <li>
              Use irrigation carefully when rainfall
              is not sufficient.
            </li>
          </ul>

          <div className="millet-example">
            <h3>💧 Water-saving practice</h3>
            <p>
              Alternate wetting and drying is a water-saving
              method used in suitable rice fields. The field
              is allowed to become less flooded before
              irrigation is applied again.
            </p>
          </div>
        </section>

        {/* 11. NUTRIENT MANAGEMENT */}
        <section className="millet-card">
          <span className="millet-number">11. Nutrient management</span>
          <h2>Which nutrients and fertilizers are needed for rice?</h2>

          <p>
            Rice plants need nutrients for healthy growth,
            strong roots and good grain production.
            The main nutrients are nitrogen, phosphorus
            and potassium.
          </p>

          <div className="millet-nutrients">
            <div>
              <h3>Nitrogen</h3>
              <p>
                Helps leaf and stem growth and supports
                healthy green plants.
              </p>
            </div>

            <div>
              <h3>Phosphorus</h3>
              <p>
                Supports root development and early
                plant growth.
              </p>
            </div>

            <div>
              <h3>Potassium</h3>
              <p>
                Helps plants stay strong and supports
                overall crop health.
              </p>
            </div>

            <div>
              <h3>Zinc</h3>
              <p>
                Supports normal plant growth and may
                be needed in zinc-deficient soils.
              </p>
            </div>

            <div>
              <h3>Organic manure</h3>
              <p>
                Adds organic matter and helps improve
                soil condition.
              </p>
            </div>

            <div>
              <h3>Compost</h3>
              <p>
                Provides organic matter and some nutrients
                to the soil.
              </p>
            </div>
          </div>

          <p>
            Farmers can use well-decomposed organic manure,
            compost and recommended fertilizers according
            to crop needs.
          </p>

          <div className="millet-note">
            <strong>Important:</strong> The correct fertilizer
            quantity should be decided through soil testing
            and local agricultural advice. Excess fertilizer
            can harm the environment and waste money.
          </div>
        </section>

        {/* 12. WEEDS, PESTS AND DISEASES */}
        <section className="millet-card">
          <span className="millet-number">12. Weeds, pests and diseases</span>
          <h2>What are the major weeds, pests and diseases of rice?</h2>

          <p>
            Weeds, insect pests and diseases can damage
            rice plants and reduce crop production.
            Farmers need to check their fields regularly.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <span>🌿</span>
              <h3>Common weeds</h3>
              <p>
                Weedy grasses, sedges and broad-leaved
                weeds compete with rice plants for
                water, sunlight and nutrients.
              </p>
            </div>

            <div className="millet-feature">
              <span>🐛</span>
              <h3>Common insect pests</h3>
              <p>
                Stem borer, brown planthopper and leaf
                folder are important rice pests in
                many regions.
              </p>
            </div>

            <div className="millet-feature">
              <span>🍃</span>
              <h3>Common diseases</h3>
              <p>
                Blast, bacterial leaf blight and
                sheath blight are important rice diseases.
              </p>
            </div>
          </div>

          <h3 className="millet-subheading">How can farmers manage them?</h3>

          <ul className="millet-list">
            <li>Use healthy seeds and suitable resistant varieties when available.</li>
            <li>Keep the field clean and monitor the crop regularly.</li>
            <li>Use balanced fertilizers and proper water management.</li>
            <li>Follow integrated pest management practices.</li>
            <li>
              Use pesticides only when needed and follow
              expert advice and label instructions.
            </li>
          </ul>
        </section>

        {/* 13. TRADITIONAL PRACTICES */}
        <section className="millet-card">
          <span className="millet-number">13. Traditional practices</span>
          <h2>What are the traditional practices used in rice farming?</h2>

          <p>
            Farmers have developed many traditional rice-growing
            practices through experience. These practices are
            often suited to local climate, soil and available resources.
          </p>

          <ul className="millet-list">
            <li>
              <strong>Traditional seed selection:</strong>
              Farmers select healthy seeds from good-quality crops.
            </li>

            <li>
              <strong>Farmyard manure:</strong>
              Decomposed animal dung and plant waste are used
              to improve soil fertility.
            </li>

            <li>
              <strong>Local varieties:</strong>
              Farmers grow traditional varieties that may
              be suited to local conditions.
            </li>

            <li>
              <strong>Mixed farming:</strong>
              In some areas, rice farming is combined
              with fish or other farm activities.
            </li>

            <li>
              <strong>Community knowledge:</strong>
              Farmers share knowledge about rainfall,
              sowing time and crop care.
            </li>

            <li>
              <strong>Traditional storage:</strong>
              Farmers use local storage structures and
              methods to protect harvested grains.
            </li>
          </ul>

          <p>
            Traditional practices can be useful, but they
            should be combined with suitable scientific
            advice whenever needed.
          </p>
        </section>

        {/* 14. HARVESTING AND STORAGE */}
        <section className="millet-card">
          <span className="millet-number">14. Harvesting and storage</span>
          <h2>When and how is rice harvested and stored?</h2>

          <p>
            Rice is harvested when the grains are mature.
            The crop is usually ready when most grains
            have turned golden yellow and grain moisture
            has reduced to a suitable level.
          </p>

          <div className="millet-process">

            <div className="millet-process-step">
              <span>01</span>
              <div>
                <h3>Harvesting</h3>
                <p>
                  Plants are cut by hand or with a
                  harvesting machine.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>02</span>
              <div>
                <h3>Threshing</h3>
                <p>
                  Grains are separated from the harvested
                  plants using suitable methods.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>03</span>
              <div>
                <h3>Cleaning</h3>
                <p>
                  Straw, dust and other unwanted materials
                  are removed from the grains.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>04</span>
              <div>
                <h3>Drying</h3>
                <p>
                  Grains are dried to a safe moisture
                  level before storage.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>05</span>
              <div>
                <h3>Storage</h3>
                <p>
                  Dry grains are stored in clean, dry
                  and protected places.
                </p>
              </div>
            </div>

          </div>

          <div className="millet-note">
            <strong>Important:</strong> Proper drying and
            safe storage help prevent mould, insects
            and grain loss.
          </div>
        </section>

        {/* 15. USES, NUTRITION AND SUSTAINABILITY */}
        <section className="millet-card">
          <span className="millet-number">15. Uses, nutrition and sustainability</span>
          <h2>What are the uses, nutritional benefits and sustainable practices of rice?</h2>

          <h3 className="millet-subheading">Uses of rice</h3>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <span>🍚</span>
              <h3>Human food</h3>
              <p>
                Rice is used to prepare boiled rice,
                pulao, biryani and many other dishes.
              </p>
            </div>

            <div className="millet-feature">
              <span>🥣</span>
              <h3>Rice flour</h3>
              <p>
                Rice flour is used to prepare different
                snacks and food products.
              </p>
            </div>

            <div className="millet-feature">
              <span>🐄</span>
              <h3>Animal feed</h3>
              <p>
                Rice bran and some rice by-products
                are used in animal feed.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌾</span>
              <h3>Rice straw</h3>
              <p>
                Rice straw can be used as animal fodder
                and for other farm purposes.
              </p>
            </div>

            <div className="millet-feature">
              <span>🏭</span>
              <h3>Rice bran</h3>
              <p>
                Rice bran is used to produce rice bran
                oil and other products.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌱</span>
              <h3>Rice husk</h3>
              <p>
                Rice husk is used in different agricultural
                and industrial applications.
              </p>
            </div>
          </div>

          <h3 className="millet-subheading">Nutritional importance of rice</h3>

          <p>
            Rice mainly provides carbohydrates, which
            supply energy to the body. It also contains
            some protein and small amounts of vitamins
            and minerals.
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
              <p>Brown rice contains more fibre than polished white rice.</p>
            </div>

            <div>
              <h3>Vitamin B</h3>
              <p>Some B vitamins are present in rice, especially in less-polished forms.</p>
            </div>

            <div>
              <h3>Minerals</h3>
              <p>Rice contains small amounts of minerals such as magnesium.</p>
            </div>

            <div>
              <h3>Energy</h3>
              <p>Rice is an important energy-giving food.</p>
            </div>
          </div>

          <div className="millet-example">
            <h3>Did you know?</h3>
            <p>
              Brown rice contains more fibre than polished
              white rice because its outer layers are retained.
              Rice should be eaten with pulses, vegetables
              and other foods as part of a balanced diet.
            </p>
          </div>

          <h3 className="millet-subheading">Sustainable practices in rice farming</h3>

          <ul className="millet-list">
            <li>
              <strong>Water conservation:</strong>
              Use suitable irrigation methods and avoid
              unnecessary water use.
            </li>

            <li>
              <strong>Balanced nutrients:</strong>
              Apply fertilizers according to soil testing
              and crop requirements.
            </li>

            <li>
              <strong>Integrated pest management:</strong>
              Monitor pests and use suitable control
              methods responsibly.
            </li>

            <li>
              <strong>Soil health:</strong>
              Use organic matter and suitable crop
              management practices.
            </li>

            <li>
              <strong>Suitable varieties:</strong>
              Select varieties according to local
              climate and water availability.
            </li>

            <li>
              <strong>Crop residue management:</strong>
              Manage rice straw properly and avoid
              unnecessary burning.
            </li>
          </ul>

          <p>
            Sustainable rice farming helps farmers use
            natural resources carefully and maintain
            crop production over time.
          </p>
        </section>

        {/* 16. CHALLENGES */}
        <section className="millet-card">
          <span className="millet-number">16. Challenges and conclusion</span>
          <h2>What are the major challenges in rice farming and what have we learned?</h2>

          <p>
            Rice farmers face several challenges that can
            affect crop production, income and the environment.
          </p>

          <ul className="millet-list">
            <li>
              <strong>Uncertain rainfall:</strong>
              Irregular rainfall, floods and droughts
              can affect rice production.
            </li>

            <li>
              <strong>Water shortage:</strong>
              Some areas face a shortage of irrigation water.
            </li>

            <li>
              <strong>Pests and diseases:</strong>
              Insects and diseases can damage rice crops.
            </li>

            <li>
              <strong>High production costs:</strong>
              Seeds, fertilizers, labour and other
              farm inputs can be costly.
            </li>

            <li>
              <strong>Soil health problems:</strong>
              Unsuitable farming practices can affect
              soil quality over time.
            </li>

            <li>
              <strong>Storage losses:</strong>
              Poor drying and storage can damage
              harvested grains.
            </li>
          </ul>

          <h3 className="millet-subheading">How can these challenges be reduced?</h3>

          <ul className="millet-list">
            <li>Use healthy seeds and suitable rice varieties.</li>
            <li>Manage irrigation water carefully.</li>
            <li>Use balanced fertilizers based on soil testing.</li>
            <li>Follow integrated pest and disease management.</li>
            <li>Improve harvesting, drying and storage practices.</li>
            <li>Protect soil health and manage crop residues properly.</li>
          </ul>

          <div className="millet-conclusion">
            <span className="millet-number">Conclusion</span>
            <div className="millet-conclusion-icon">🌾</div>

            <h2>What have we learned about rice?</h2>

            <p>
              Rice is an important cereal crop in India
              and many other countries. It provides food,
              supports farmers and creates employment
              for many people.
            </p>

            <p>
              Successful rice cultivation depends on
              good-quality seeds, suitable soil, proper
              land preparation, balanced nutrients,
              careful water management and timely
              crop protection.
            </p>

            <p>
              Traditional farming knowledge and modern
              agricultural methods can work together
              to improve rice production. Water-saving
              practices, healthy soil management and
              responsible pest control can make rice
              farming more sustainable.
            </p>

            <div className="millet-final-message">
              <strong>
                Rice is an important crop for food security,
                farmers' livelihoods and Indian agriculture.
                Sustainable cultivation can help protect
                natural resources for future generations.
              </strong>
            </div>
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

export default Rice;
