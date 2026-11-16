
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Rajasthan.css";

import logo from "./assets/iakis-logo.png";
import rajasthanImage from "./assets/rajasthan.jpg";

function Rajasthan() {
  return (
    <div className="app organic-page rajasthan-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="IAKIS logo" />
          </Link>
        </div>
      </nav>

      {/* HERO HEADER */}
      <header className="rajasthan-header">
        <div className="rajasthan-header-content">
          <span className="rajasthan-tag">
            Traditional agriculture in India
          </span>

          <h1>Agriculture in Rajasthan</h1>

          <p>
            Explore the traditional farming methods, desert
            agriculture, water conservation systems, major crops
            and agricultural knowledge of Rajasthan.
          </p>

          <a href="#rajasthan-introduction" className="rajasthan-start-btn">
            Start learning ↓
          </a>
        </div>

        <div className="rajasthan-hero-image">
          <img src={rajasthanImage} alt="Agricultural fields in Rajasthan" />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="rajasthan-content">

        {/* 01. INTRODUCTION */}
        <section className="rajasthan-card" id="rajasthan-introduction">
          <span className="rajasthan-number">01. Introduction</span>
          <h2>What is the importance of agriculture in Rajasthan?</h2>

          <p>
            Agriculture is an important part of life in Rajasthan.
            Many people depend on farming and animal rearing
            for their livelihood.
          </p>

          <p>
            Rajasthan is the largest state of India by area.
            A large part of the state has dry and desert conditions.
            Rainfall is low and water is limited in many areas.
          </p>

          <p>
            Despite these challenges, farmers grow crops such
            as Bajra, Jowar, Wheat, Gram, Mustard and pulses.
            They use traditional knowledge to manage soil,
            rainfall and water.
          </p>

          <p>
            Traditional water conservation methods are especially
            important in Rajasthan because they help people
            store rainwater for dry periods.
          </p>

          <div className="rajasthan-example">
            <h3>🌾 Simple example</h3>
            <p>
              Bajra is widely grown in dry areas of Rajasthan
              because it can grow with limited rainfall.
            </p>
          </div>
        </section>

        {/* 02. HISTORY */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">02. History of farming</span>
          <h2>How has traditional farming developed in Rajasthan?</h2>

          <p>
            Farming in Rajasthan has a long history.
            People living in villages have developed different
            methods to grow crops in dry conditions.
          </p>

          <p>
            In earlier times, farmers depended on local seeds,
            animal power, traditional tools and seasonal rainfall.
            They also developed ways to collect and store water.
          </p>

          <ul className="rajasthan-list">
            <li>
              Bullocks and camels were used for agricultural work
              in different areas.
            </li>
            <li>
              Wooden ploughs and other traditional tools
              were used to prepare fields.
            </li>
            <li>
              Farmers saved seeds from healthy crops
              for the next season.
            </li>
            <li>
              Cow dung and crop waste were used
              to improve soil fertility.
            </li>
            <li>
              Ponds, tanks and underground water storage
              structures helped save rainwater.
            </li>
          </ul>

          <p>
            These practices show how farming communities
            learned to use limited natural resources carefully.
          </p>
        </section>

        {/* 03. CLIMATE */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">03. Climate and geography</span>
          <h2>What are the climate and geographical conditions of Rajasthan?</h2>

          <p>
            Rajasthan is located in north-western India.
            The Thar Desert covers a large part of its western region.
            The Aravalli Range is an important mountain system
            that passes through the state.
          </p>

          <p>
            Most parts of Rajasthan have an arid or semi-arid climate.
            Summers are very hot, rainfall is limited in many areas
            and winters are generally cool.
          </p>

          <div className="rajasthan-feature-grid">
            <div className="rajasthan-feature">
              <span>☀️</span>
              <h3>Summer</h3>
              <p>
                Summers are very hot and dry.
                High temperatures increase water needs.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🌧️</span>
              <h3>Monsoon</h3>
              <p>
                Most rainfall occurs during the monsoon.
                Farmers plan sowing according to rainfall.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>❄️</span>
              <h3>Winter</h3>
              <p>
                Cool winter weather supports crops
                such as wheat, gram and mustard.
              </p>
            </div>
          </div>

          <div className="rajasthan-note">
            <strong>Important point:</strong> Rainfall is not
            the same across Rajasthan. Eastern and southern
            areas generally receive more rainfall than
            the western desert areas.
          </div>
        </section>

        {/* 04. SOIL */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">04. Soil types</span>
          <h2>What types of soil are found in Rajasthan?</h2>

          <p>
            Rajasthan has different soil types because
            of changes in rainfall, landforms and natural conditions.
            Soil type affects the crops that farmers can grow.
          </p>

          <div className="rajasthan-feature-grid">
            <div className="rajasthan-feature">
              <h3>Sandy soil</h3>
              <p>
                It is common in western desert areas.
                Bajra and guar can grow in suitable sandy soils.
              </p>
            </div>

            <div className="rajasthan-feature">
              <h3>Loamy soil</h3>
              <p>
                It contains sand, silt and clay.
                It can support many crops with proper care.
              </p>
            </div>

            <div className="rajasthan-feature">
              <h3>Black soil</h3>
              <p>
                It is found in some south-eastern areas
                and can support crops such as cotton.
              </p>
            </div>

            <div className="rajasthan-feature">
              <h3>Alluvial soil</h3>
              <p>
                It is found in some river plains
                and is suitable for different crops.
              </p>
            </div>

            <div className="rajasthan-feature">
              <h3>Red and yellow soil</h3>
              <p>
                It occurs in parts of eastern and southern
                Rajasthan and needs suitable soil management.
              </p>
            </div>
          </div>

          <div className="rajasthan-example">
            <h3>Important point</h3>
            <p>
              Adding organic matter, preventing soil erosion
              and choosing suitable crops help maintain
              soil health.
            </p>
          </div>
        </section>

        {/* 05. MAJOR CROPS */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">05. Major crops</span>
          <h2>What are the major crops grown in Rajasthan?</h2>

          <p>
            Rajasthan grows different food crops, pulses,
            oilseeds and cash crops. Crop selection depends
            on rainfall, soil, irrigation and local conditions.
          </p>

          <h3 className="rajasthan-subheading">Food crops</h3>

          <div className="rajasthan-variety-grid">
            <div className="rajasthan-variety">
              <h3>1. Bajra</h3>
              <p>
                Bajra is one of the most important crops
                of Rajasthan. It grows well in many hot
                and dry areas with limited rainfall.
              </p>
            </div>

            <div className="rajasthan-variety">
              <h3>2. Wheat</h3>
              <p>
                Wheat is an important Rabi crop.
                It is mainly grown in winter where
                suitable water and soil conditions are available.
              </p>
            </div>

            <div className="rajasthan-variety">
              <h3>3. Jowar</h3>
              <p>
                Jowar is grown in suitable dry and
                semi-dry areas. Its grain is used as food
                and its stalks can be used as fodder.
              </p>
            </div>

            <div className="rajasthan-variety">
              <h3>4. Maize</h3>
              <p>
                Maize is grown mainly in areas with
                suitable rainfall and soil conditions.
                It is used as food and animal feed.
              </p>
            </div>
          </div>

          <h3 className="rajasthan-subheading">Pulses and cash crops</h3>

          <div className="rajasthan-variety-grid">
            <div className="rajasthan-variety">
              <h3>5. Gram</h3>
              <p>
                Gram is an important pulse crop.
                It is mainly grown during the winter season.
              </p>
            </div>

            <div className="rajasthan-variety">
              <h3>6. Moth bean</h3>
              <p>
                Moth bean is suitable for many dry areas.
                It is an important traditional pulse crop.
              </p>
            </div>

            <div className="rajasthan-variety">
              <h3>7. Guar</h3>
              <p>
                Guar is a drought-tolerant crop.
                Its seeds are used for food and industrial purposes.
              </p>
            </div>

            <div className="rajasthan-variety">
              <h3>8. Mustard</h3>
              <p>
                Mustard is an important oilseed crop.
                Its seeds are used to produce cooking oil.
              </p>
            </div>

            <div className="rajasthan-variety">
              <h3>9. Barley</h3>
              <p>
                Barley is grown in some areas during winter.
                It is used for food and animal feed.
              </p>
            </div>

            <div className="rajasthan-variety">
              <h3>10. Cotton</h3>
              <p>
                Cotton is grown in suitable irrigated
                and rainfed areas. Its fibre is used
                by the textile industry.
              </p>
            </div>
          </div>

          <div className="rajasthan-note">
            <strong>Remember:</strong> Bajra, Guar, Moth bean,
            Gram and Mustard are important crops of Rajasthan.
          </div>
        </section>

        {/* 06. TRADITIONAL FARMING */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">06. Traditional farming methods</span>
          <h2>What traditional farming methods are used in Rajasthan?</h2>

          <p>
            Traditional farming in Rajasthan is shaped by
            low rainfall and limited water. Farmers have
            developed methods to make the best use of
            available land and natural resources.
          </p>

          <ul className="rajasthan-list">
            <li>
              <strong>Animal power:</strong> Bullocks and
              camels were used for ploughing and transport.
            </li>
            <li>
              <strong>Local seeds:</strong> Farmers selected
              seeds that could grow in local conditions.
            </li>
            <li>
              <strong>Mixed cropping:</strong> Suitable crops
              such as Bajra and pulses were grown together.
            </li>
            <li>
              <strong>Organic manure:</strong> Cow dung
              and compost were used to improve soil.
            </li>
            <li>
              <strong>Rainwater collection:</strong> Ponds
              and tanks were used to store water.
            </li>
            <li>
              <strong>Dryland farming:</strong> Farmers
              selected crops that could grow with limited rainfall.
            </li>
          </ul>

          <p>
            These practices helped farming communities
            manage difficult weather conditions.
          </p>
        </section>

        {/* 07. WATER CONSERVATION */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">07. Traditional water conservation</span>
          <h2>How do traditional water conservation methods work in Rajasthan?</h2>

          <p>
            Water is very valuable in Rajasthan because
            rainfall is low in many areas. For many generations,
            people have developed traditional structures
            to collect and store rainwater.
          </p>

          <div className="rajasthan-variety-grid">
            <div className="rajasthan-variety">
              <h3>1. Johad</h3>
              <p>
                A Johad is a traditional rainwater storage
                structure. It collects rainwater and helps
                recharge groundwater.
              </p>
            </div>

            <div className="rajasthan-variety">
              <h3>2. Tanka</h3>
              <p>
                A Tanka is an underground water storage
                structure. It collects rainwater, often
                from rooftops or nearby catchment areas.
              </p>
            </div>

            <div className="rajasthan-variety">
              <h3>3. Kund</h3>
              <p>
                A Kund is a traditional underground rainwater
                collection structure, commonly found
                in dry parts of Rajasthan.
              </p>
            </div>

            <div className="rajasthan-variety">
              <h3>4. Nadi</h3>
              <p>
                A Nadi is a village pond that collects
                rainwater for use by people and animals.
              </p>
            </div>
          </div>

          <p>
            These structures help communities save water
            and reduce their dependence on distant water sources.
          </p>

          <div className="rajasthan-note">
            <strong>Important point:</strong> Traditional
            water structures need regular cleaning and
            maintenance to store water safely.
          </div>
        </section>

        {/* 08. KHADIN SYSTEM */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">08. Khadin system</span>
          <h2>What is the traditional Khadin farming system?</h2>

          <p>
            Khadin is a traditional rainwater harvesting
            and farming system developed in the desert
            region of western Rajasthan.
          </p>

          <p>
            It uses a long earthen embankment to collect
            and hold rainwater runoff from nearby slopes.
            The stored water slowly enters the soil
            and increases soil moisture.
          </p>

          <div className="rajasthan-process">

            <div className="rajasthan-process-step">
              <span>01</span>
              <div>
                <h3>Rainfall</h3>
                <p>
                  Rain falls on nearby slopes and open land.
                </p>
              </div>
            </div>

            <div className="rajasthan-process-step">
              <span>02</span>
              <div>
                <h3>Water collection</h3>
                <p>
                  Runoff water moves towards the Khadin area.
                </p>
              </div>
            </div>

            <div className="rajasthan-process-step">
              <span>03</span>
              <div>
                <h3>Water storage</h3>
                <p>
                  An earthen embankment holds the collected water.
                </p>
              </div>
            </div>

            <div className="rajasthan-process-step">
              <span>04</span>
              <div>
                <h3>Soil moisture</h3>
                <p>
                  Water enters the soil and increases
                  moisture in the farming area.
                </p>
              </div>
            </div>

            <div className="rajasthan-process-step">
              <span>05</span>
              <div>
                <h3>Crop cultivation</h3>
                <p>
                  Farmers grow suitable crops using
                  the moisture stored in the soil.
                </p>
              </div>
            </div>

          </div>

          <div className="rajasthan-example">
            <h3>🌾 Simple example</h3>
            <p>
              After the rainy season, farmers can grow
              suitable Rabi crops in Khadin fields
              using the moisture stored in the soil.
            </p>
          </div>
        </section>

        {/* 09. SEASONAL FARMING */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">09. Seasonal farming</span>
          <h2>How do farmers follow different farming seasons in Rajasthan?</h2>

          <p>
            Farmers grow crops according to rainfall,
            temperature and water availability.
            The main cropping seasons are Kharif and Rabi.
            Some short-duration crops are also grown
            during the Zaid season where water is available.
          </p>

          <div className="rajasthan-feature-grid">
            <div className="rajasthan-feature">
              <span>🌧️</span>
              <h3>Kharif season</h3>
              <p>
                Kharif crops are sown during the monsoon.
                Bajra, Jowar, Guar and Moth bean are examples.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>❄️</span>
              <h3>Rabi season</h3>
              <p>
                Rabi crops are sown after the monsoon.
                Wheat, Gram, Mustard and Barley are examples.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>☀️</span>
              <h3>Zaid season</h3>
              <p>
                Short-duration crops such as vegetables
                and melons can be grown where irrigation
                water is available.
              </p>
            </div>
          </div>

          <p>
            Seasonal planning helps farmers select crops
            according to available water and local weather.
          </p>
        </section>

        {/* 10. DRYLAND FARMING */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">10. Dryland farming</span>
          <h2>What is the importance of dryland farming in Rajasthan?</h2>

          <p>
            Dryland farming means growing crops mainly
            with the help of rainfall where irrigation
            water is limited or not regularly available.
          </p>

          <p>
            It is very important in Rajasthan because
            many areas receive low and uncertain rainfall.
            Farmers select crops that can grow under
            these conditions.
          </p>

          <ul className="rajasthan-list">
            <li>
              Bajra and Guar are useful crops for many
              dry farming areas.
            </li>
            <li>
              Farmers prepare the soil to collect
              and conserve rainwater.
            </li>
            <li>
              Crop sowing is planned according to
              the arrival of rainfall.
            </li>
            <li>
              Organic matter helps improve the soil's
              ability to hold moisture.
            </li>
            <li>
              Mixed cropping can reduce the risk
              of depending on only one crop.
            </li>
          </ul>

          <div className="rajasthan-note">
            <strong>Remember:</strong> Dryland farming
            does not mean crops need no water.
            It means farmers mainly depend on rainfall
            and use water carefully.
          </div>
        </section>

        {/* 11. SEEDS */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">11. Traditional seeds</span>
          <h2>How do farmers select and preserve traditional seeds?</h2>

          <p>
            Traditional seeds are local crop varieties
            that farmers have grown and selected over
            many generations.
          </p>

          <p>
            In dry areas of Rajasthan, farmers have
            preserved seeds that are suitable for
            local rainfall, soil and temperature.
          </p>

          <ul className="rajasthan-list">
            <li>
              Farmers select healthy plants from
              their fields.
            </li>
            <li>
              Mature and good-quality seeds are
              separated from damaged seeds.
            </li>
            <li>
              Seeds are dried properly before storage.
            </li>
            <li>
              Dry containers and traditional storage
              methods help protect seeds from moisture.
            </li>
            <li>
              Local seeds are selected according
              to the needs of the next growing season.
            </li>
          </ul>

          <p>
            Seed preservation protects local crop diversity
            and keeps traditional farming knowledge alive.
          </p>
        </section>

        {/* 12. SOIL MANAGEMENT */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">12. Soil and natural resource management</span>
          <h2>How do farmers protect soil and natural resources in Rajasthan?</h2>

          <p>
            Soil and water are important resources for farming.
            In dry areas, farmers need to protect soil moisture
            and prevent soil from being carried away by wind
            and water.
          </p>

          <div className="rajasthan-feature-grid">
            <div className="rajasthan-feature">
              <span>🐄</span>
              <h3>Farmyard manure</h3>
              <p>
                Cow dung and animal waste are used
                to add organic matter to the soil.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🍂</span>
              <h3>Compost</h3>
              <p>
                Decomposed plant waste helps improve
                soil structure and fertility.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🌿</span>
              <h3>Crop residues</h3>
              <p>
                Suitable crop remains can help protect
                the soil surface and add organic matter.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🌳</span>
              <h3>Tree planting</h3>
              <p>
                Trees and plants help reduce wind erosion
                and protect the land.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>💧</span>
              <h3>Water conservation</h3>
              <p>
                Ponds, tanks and other structures
                help collect rainwater.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🌾</span>
              <h3>Crop rotation</h3>
              <p>
                Growing different crops in a planned
                order helps maintain soil health.
              </p>
            </div>
          </div>
        </section>

        {/* 13. ANIMAL HUSBANDRY */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">13. Animal husbandry</span>
          <h2>What is the role of animal husbandry in Rajasthan agriculture?</h2>

          <p>
            Animal husbandry means raising and caring
            for animals such as cows, buffaloes, sheep,
            goats and camels.
          </p>

          <p>
            It is an important part of rural life in Rajasthan.
            In many dry areas, livestock provides income
            and support when crop production is low.
          </p>

          <div className="rajasthan-feature-grid">
            <div className="rajasthan-feature">
              <span>🐪</span>
              <h3>Camels</h3>
              <p>
                Camels are well adapted to desert conditions
                and have traditionally helped with transport
                and other rural activities.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🐑</span>
              <h3>Sheep</h3>
              <p>
                Sheep are raised for wool, meat
                and income in many areas.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🐐</span>
              <h3>Goats</h3>
              <p>
                Goats are raised for milk, meat
                and other products.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🐄</span>
              <h3>Cattle</h3>
              <p>
                Cattle provide milk, manure
                and support for farm work.
              </p>
            </div>
          </div>

          <p>
            Livestock also provides manure that can be
            used to improve soil fertility.
          </p>
        </section>

        {/* 14. CHALLENGES */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">14. Agricultural problems</span>
          <h2>What are the major agricultural problems in Rajasthan?</h2>

          <p>
            Farmers in Rajasthan face many challenges
            because of dry weather, limited water
            and difficult farming conditions.
          </p>

          <ul className="rajasthan-list">
            <li>
              <strong>Low rainfall:</strong> Many areas
              receive very little rainfall.
            </li>
            <li>
              <strong>Drought:</strong> Long periods
              without rain can damage crops.
            </li>
            <li>
              <strong>Water shortage:</strong> Groundwater
              and surface water may be limited.
            </li>
            <li>
              <strong>Soil erosion:</strong> Strong winds
              can carry away dry topsoil.
            </li>
            <li>
              <strong>High temperature:</strong> Extreme
              heat can affect crop growth.
            </li>
            <li>
              <strong>Land degradation:</strong> Poor
              land management can reduce soil quality.
            </li>
            <li>
              <strong>Market problems:</strong> Farmers
              may face difficulty in selling their crops
              at good prices.
            </li>
            <li>
              <strong>Storage problems:</strong> Poor
              storage can cause damage to harvested crops.
            </li>
          </ul>

          <p>
            Better water management, suitable crop selection,
            soil protection and market support can help
            reduce these problems.
          </p>
        </section>

        {/* 15. MODERN IMPROVEMENTS */}
        <section className="rajasthan-card">
          <span className="rajasthan-number">15. Modern improvements and sustainable agriculture</span>
          <h2>How can modern methods improve agriculture in Rajasthan?</h2>

          <p>
            Modern farming methods can help farmers
            use limited water and land more effectively.
            Traditional knowledge can also be combined
            with modern technology.
          </p>

          <div className="rajasthan-feature-grid">
            <div className="rajasthan-feature">
              <span>💧</span>
              <h3>Drip irrigation</h3>
              <p>
                It supplies water near plant roots
                and can reduce water wastage.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🌧️</span>
              <h3>Rainwater harvesting</h3>
              <p>
                Rainwater is collected and stored
                for future use.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🌱</span>
              <h3>Improved seeds</h3>
              <p>
                Suitable quality seeds can improve
                crop growth and production.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🚜</span>
              <h3>Farm machines</h3>
              <p>
                Machines can save time and reduce
                physical work during farming.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>🧪</span>
              <h3>Soil testing</h3>
              <p>
                Soil testing helps farmers understand
                the nutrient needs of their fields.
              </p>
            </div>

            <div className="rajasthan-feature">
              <span>♻️</span>
              <h3>Sustainable farming</h3>
              <p>
                Crop rotation, organic matter and
                careful water use protect natural resources.
              </p>
            </div>
          </div>

          <p>
            These improvements can help farmers increase
            production while protecting soil and water
            for future generations.
          </p>
        </section>

        {/* 16. CONCLUSION */}
        <section className="rajasthan-card rajasthan-conclusion">
          <span className="rajasthan-number">16. Conclusion</span>
          <div className="rajasthan-conclusion-icon">🌾</div>

          <h2>What have we learned about agriculture in Rajasthan?</h2>

          <p>
            Agriculture in Rajasthan is shaped by its dry climate,
            limited rainfall and different soil conditions.
            Farmers grow crops such as Bajra, Jowar, Wheat,
            Gram, Guar and Mustard.
          </p>

          <p>
            Traditional water conservation methods like
            Johads, Tankas, Kunds and the Khadin system
            show how people have managed water for many years.
          </p>

          <p>
            Animal husbandry is also an important part
            of rural life. It provides income, food
            and support to farming families.
          </p>

          <p>
            By protecting traditional knowledge and using
            suitable modern methods, farmers can save water,
            improve soil health and support sustainable
            agriculture in Rajasthan.
          </p>

          <div className="rajasthan-final-message">
            <strong>
              Traditional water knowledge and careful farming
              are important for a sustainable agricultural
              future in Rajasthan.
            </strong>
          </div>
        </section>

        {/* BACK TO REGIONS */}
        <div className="rajasthan-back">
          <Link to="/regions">
            ← Back to Regions
          </Link>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="rajasthan-footer">
        <div className="rajasthan-footer-content">
          <h2>IAKIS</h2>

          <p>
            Preserving India's Indigenous Agricultural Knowledge
            for future generations.
          </p>

          <div className="rajasthan-footer-bottom">
            © 2026 IAKIS | Academic project
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Rajasthan;
