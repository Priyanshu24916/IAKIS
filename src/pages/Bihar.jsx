
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Bihar.css";

import logo from "./assets/iakis-logo.png";
import biharImage from "./assets/bihar.jpg";

function Bihar() {
  return (
    <div className="app organic-page bihar-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="IAKIS logo" />
          </Link>
        </div>
      </nav>

      {/* HERO HEADER */}
      <header className="bihar-header">
        <div className="bihar-header-content">
          <span className="bihar-tag">
            Traditional agriculture in India
          </span>

          <h1>Agriculture in Bihar</h1>

          <p>
            Explore the traditional farming methods, major crops,
            soil types, water management systems and agricultural
            knowledge of Bihar.
          </p>

          <a href="#bihar-introduction" className="bihar-start-btn">
            Start learning ↓
          </a>
        </div>

        <div className="bihar-hero-image">
          <img src={biharImage} alt="Agricultural fields in Bihar" />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="bihar-content">

        {/* 01. INTRODUCTION */}
        <section className="bihar-card" id="bihar-introduction">
          <span className="bihar-number">01. Introduction</span>
          <h2>What is the importance of agriculture in Bihar?</h2>

          <p>
            Agriculture is one of the most important activities
            in Bihar. A large number of people depend on farming
            for their livelihood. It provides food, employment
            and income to many families.
          </p>

          <p>
            Bihar has fertile land, rivers and suitable conditions
            for growing different crops. Rice, wheat, maize,
            pulses and vegetables are some of the major crops
            grown in the state.
          </p>

          <p>
            Farming in Bihar mainly depends on seasonal rainfall
            and irrigation. Farmers also use traditional knowledge
            and local farming methods to grow crops.
          </p>

          <p>
            Traditional agricultural practices are an important
            part of Bihar's rural life and farming history.
          </p>

          <div className="bihar-example">
            <h3>🌾 Simple example</h3>
            <p>
              Rice is widely grown during the rainy season,
              while wheat is commonly grown during the winter season.
            </p>
          </div>
        </section>

        {/* 02. HISTORY */}
        <section className="bihar-card">
          <span className="bihar-number">02. History of farming</span>
          <h2>How has traditional farming developed in Bihar?</h2>

          <p>
            Farming has been practised in Bihar for many
            generations. People living near rivers and fertile
            plains have depended on agriculture for food and income.
          </p>

          <p>
            In earlier times, farmers mainly used bullocks,
            wooden ploughs and traditional tools to prepare
            their fields. They saved seeds from their harvest
            for the next growing season.
          </p>

          <ul className="bihar-list">
            <li>
              Farmers selected seeds according to local soil
              and weather conditions.
            </li>
            <li>
              Bullocks were commonly used for ploughing fields.
            </li>
            <li>
              Cow dung and natural waste were used as manure.
            </li>
            <li>
              Traditional irrigation methods helped supply
              water to agricultural fields.
            </li>
            <li>
              Farming knowledge was passed from parents
              and elders to younger generations.
            </li>
          </ul>

          <p>
            These traditional methods helped farming communities
            use local resources and develop their own agricultural
            practices.
          </p>
        </section>

        {/* 03. CLIMATE */}
        <section className="bihar-card">
          <span className="bihar-number">03. Climate and geography</span>
          <h2>What are the climate and geographical conditions of Bihar?</h2>

          <p>
            Bihar is located in eastern India. Most of the state
            has flat and fertile plains. The Ganga River flows
            through the state and supports agriculture in many areas.
          </p>

          <p>
            Bihar has a mainly subtropical climate with hot
            summers, a rainy monsoon season and cool winters.
            These seasons support the growth of different crops.
          </p>

          <div className="bihar-feature-grid">
            <div className="bihar-feature">
              <span>☀️</span>
              <h3>Summer</h3>
              <p>
                Summers are generally hot and dry.
                Some crops need irrigation during this period.
              </p>
            </div>

            <div className="bihar-feature">
              <span>🌧️</span>
              <h3>Monsoon</h3>
              <p>
                Rainfall during the monsoon supports
                the cultivation of Kharif crops.
              </p>
            </div>

            <div className="bihar-feature">
              <span>❄️</span>
              <h3>Winter</h3>
              <p>
                Cool winter weather is suitable for
                growing wheat and other Rabi crops.
              </p>
            </div>
          </div>

          <div className="bihar-note">
            <strong>Important point:</strong> Floods and uneven
            rainfall can affect farming in some parts of Bihar.
            Conditions also differ between districts.
          </div>
        </section>

        {/* 04. SOIL */}
        <section className="bihar-card">
          <span className="bihar-number">04. Soil types</span>
          <h2>What types of soil are found in Bihar?</h2>

          <p>
            Bihar has different types of soil. The soil found
            in an area depends on its location, river deposits
            and natural conditions.
          </p>

          <div className="bihar-feature-grid">
            <div className="bihar-feature">
              <h3>New alluvial soil</h3>
              <p>
                This soil is deposited by rivers during floods.
                It is generally fertile and supports crop growth.
              </p>
            </div>

            <div className="bihar-feature">
              <h3>Old alluvial soil</h3>
              <p>
                It is found in older river plains and supports
                different crops with proper soil management.
              </p>
            </div>

            <div className="bihar-feature">
              <h3>Terai soil</h3>
              <p>
                This soil is found in northern parts of Bihar
                near the Nepal border. It is often moist.
              </p>
            </div>

            <div className="bihar-feature">
              <h3>Southern upland soil</h3>
              <p>
                Some southern areas have older and less fertile
                soils that need proper care and nutrients.
              </p>
            </div>
          </div>

          <div className="bihar-example">
            <h3>Important point</h3>
            <p>
              Soil testing, organic manure and suitable crop
              selection help farmers maintain soil fertility.
            </p>
          </div>
        </section>

        {/* 05. MAJOR CROPS */}
        <section className="bihar-card">
          <span className="bihar-number">05. Major crops</span>
          <h2>What are the major crops grown in Bihar?</h2>

          <p>
            Bihar grows many food crops, cash crops and
            horticultural crops. The choice of crop depends
            on rainfall, soil, irrigation and local conditions.
          </p>

          <h3 className="bihar-subheading">Food crops</h3>

          <div className="bihar-variety-grid">
            <div className="bihar-variety">
              <h3>1. Rice</h3>
              <p>
                Rice is an important Kharif crop in Bihar.
                It is mainly grown during the rainy season
                and is a major food crop for the people.
              </p>
            </div>

            <div className="bihar-variety">
              <h3>2. Wheat</h3>
              <p>
                Wheat is an important Rabi crop. It is
                generally sown after the rainy season
                and harvested in spring.
              </p>
            </div>

            <div className="bihar-variety">
              <h3>3. Maize</h3>
              <p>
                Maize is grown in different seasons in Bihar.
                It is used as food, animal feed and for
                other agricultural purposes.
              </p>
            </div>

            <div className="bihar-variety">
              <h3>4. Pulses</h3>
              <p>
                Lentil, gram, arhar and other pulses are grown
                in suitable areas. They provide protein
                and improve crop diversity.
              </p>
            </div>
          </div>

          <h3 className="bihar-subheading">Other important crops</h3>

          <div className="bihar-variety-grid">
            <div className="bihar-variety">
              <h3>5. Sugarcane</h3>
              <p>
                Sugarcane is an important cash crop in
                several parts of Bihar. It is used
                to produce sugar and jaggery.
              </p>
            </div>

            <div className="bihar-variety">
              <h3>6. Jute</h3>
              <p>
                Jute is grown in some areas with suitable
                rainfall and soil conditions. Its fibre
                is used to make bags and ropes.
              </p>
            </div>

            <div className="bihar-variety">
              <h3>7. Oilseeds</h3>
              <p>
                Mustard and other oilseed crops are grown
                for their seeds, which are used to produce
                cooking oil.
              </p>
            </div>

            <div className="bihar-variety">
              <h3>8. Vegetables and fruits</h3>
              <p>
                Potato, onion, tomato, cauliflower, litchi
                and mango are important horticultural
                products of Bihar.
              </p>
            </div>
          </div>

          <div className="bihar-note">
            <strong>Remember:</strong> Rice, wheat and maize
            are among the major food crops of Bihar.
            Litchi and mango are important fruit crops.
          </div>
        </section>

        {/* 06. TRADITIONAL METHODS */}
        <section className="bihar-card">
          <span className="bihar-number">06. Traditional farming methods</span>
          <h2>What traditional farming methods are used in Bihar?</h2>

          <p>
            Traditional farming methods are practices that
            farmers have used for many years. These methods
            are based on local experience, natural resources
            and available farming tools.
          </p>

          <ul className="bihar-list">
            <li>
              <strong>Traditional ploughing:</strong> Bullocks
              were commonly used to prepare agricultural fields.
            </li>
            <li>
              <strong>Seed selection:</strong> Farmers saved
              healthy seeds for the next season.
            </li>
            <li>
              <strong>Organic manure:</strong> Cow dung,
              compost and plant waste were used to improve soil.
            </li>
            <li>
              <strong>Mixed cropping:</strong> Different
              crops were sometimes grown together.
            </li>
            <li>
              <strong>Rainfall-based farming:</strong> Farmers
              planned sowing according to seasonal rainfall.
            </li>
            <li>
              <strong>Traditional tools:</strong> Local tools
              were used for sowing, weeding and harvesting.
            </li>
          </ul>

          <p>
            Many farmers still use some of these practices
            along with modern machines, seeds and farming methods.
          </p>
        </section>

        {/* 07. AHAR PYNE */}
        <section className="bihar-card">
          <span className="bihar-number">07. Ahar-Pyne system</span>
          <h2>What is the traditional Ahar-Pyne water management system?</h2>

          <p>
            The Ahar-Pyne system is a traditional water
            harvesting and irrigation system used in Bihar.
            It has been especially important in parts of
            southern Bihar.
          </p>

          <p>
            This system collects and stores rainwater and
            river water so that it can be used for agriculture.
            It is made up of two main parts.
          </p>

          <div className="bihar-feature-grid">
            <div className="bihar-feature">
              <span>💧</span>
              <h3>Ahar</h3>
              <p>
                An Ahar is a traditional water storage
                structure. It collects water for later use
                in agricultural fields.
              </p>
            </div>

            <div className="bihar-feature">
              <span>🌊</span>
              <h3>Pyne</h3>
              <p>
                A Pyne is a channel that carries water
                from rivers or other sources towards
                fields and storage structures.
              </p>
            </div>
          </div>

          <p>
            Together, Ahars and Pynes help collect, carry
            and store water. They are useful for irrigation,
            especially when rainfall is not sufficient.
          </p>

          <div className="bihar-example">
            <h3>🌾 Simple example</h3>
            <p>
              During the rainy season, water can be carried
              through Pynes and stored in Ahars. Farmers
              can use this stored water for their fields later.
            </p>
          </div>

          <div className="bihar-note">
            <strong>Remember:</strong> Ahar means a water
            storage structure, while Pyne means a water channel.
            Both are important parts of this traditional system.
          </div>
        </section>

        {/* 08. IRRIGATION */}
        <section className="bihar-card">
          <span className="bihar-number">08. Traditional irrigation</span>
          <h2>How have farmers traditionally managed irrigation in Bihar?</h2>

          <p>
            Irrigation means supplying water to crops when
            rainfall is not enough. Farmers in Bihar have
            used different traditional methods to provide
            water to their fields.
          </p>

          <ul className="bihar-list">
            <li>
              <strong>Wells:</strong> Water was drawn from
              wells and used for nearby agricultural fields.
            </li>
            <li>
              <strong>Ponds:</strong> Rainwater was collected
              in ponds and used when needed.
            </li>
            <li>
              <strong>Canals:</strong> Water channels carried
              water from rivers and other sources to fields.
            </li>
            <li>
              <strong>Ahar-Pyne:</strong> This system helped
              collect, store and distribute water.
            </li>
            <li>
              <strong>Traditional water lifting:</strong>
              Farmers used different local devices to lift
              water from wells and water bodies.
            </li>
          </ul>

          <p>
            Today, farmers also use pumps, tube wells and
            modern irrigation systems. The method depends
            on water availability and farming needs.
          </p>
        </section>

        {/* 09. SEASONAL FARMING */}
        <section className="bihar-card">
          <span className="bihar-number">09. Seasonal farming</span>
          <h2>How do farmers follow different farming seasons in Bihar?</h2>

          <p>
            Farmers in Bihar grow different crops according
            to the seasons. The main cropping seasons are
            Kharif, Rabi and Zaid.
          </p>

          <div className="bihar-feature-grid">
            <div className="bihar-feature">
              <span>🌧️</span>
              <h3>Kharif season</h3>
              <p>
                Kharif crops are generally sown with the
                arrival of the monsoon. Rice and maize
                are important examples.
              </p>
            </div>

            <div className="bihar-feature">
              <span>❄️</span>
              <h3>Rabi season</h3>
              <p>
                Rabi crops are generally sown after the
                monsoon. Wheat, gram and lentil are
                common examples.
              </p>
            </div>

            <div className="bihar-feature">
              <span>☀️</span>
              <h3>Zaid season</h3>
              <p>
                Zaid crops are grown between Rabi and
                Kharif seasons. Watermelon, cucumber
                and some vegetables are examples.
              </p>
            </div>
          </div>

          <p>
            Proper seasonal planning helps farmers use
            available land, water and weather conditions
            more effectively.
          </p>
        </section>

        {/* 10. CROP ROTATION */}
        <section className="bihar-card">
          <span className="bihar-number">10. Crop rotation and mixed cropping</span>
          <h2>Why are crop rotation and mixed cropping important in Bihar?</h2>

          <p>
            Crop rotation means growing different crops
            on the same field in a planned order. Mixed
            cropping means growing two or more crops
            together in the same field.
          </p>

          <div className="bihar-variety-grid">
            <div className="bihar-variety">
              <h3>Crop rotation</h3>
              <p>
                Farmers may grow rice in the rainy season
                and wheat or pulses in the winter season.
                This helps use the field in different seasons.
              </p>
            </div>

            <div className="bihar-variety">
              <h3>Mixed cropping</h3>
              <p>
                Farmers may grow suitable combinations
                of cereals and pulses together. This can
                reduce the risk of depending on one crop.
              </p>
            </div>
          </div>

          <h3 className="bihar-subheading">Benefits of these practices</h3>

          <ul className="bihar-list">
            <li>They help maintain soil fertility.</li>
            <li>They support better use of land and resources.</li>
            <li>They can reduce the risk of total crop failure.</li>
            <li>They increase the variety of crops grown.</li>
            <li>Legume crops can add nitrogen to the soil.</li>
          </ul>

          <div className="bihar-note">
            <strong>Important point:</strong> Crop combinations
            should be selected according to local soil, season
            and water conditions.
          </div>
        </section>

        {/* 11. SEEDS */}
        <section className="bihar-card">
          <span className="bihar-number">11. Traditional seeds</span>
          <h2>How do farmers select and preserve traditional seeds?</h2>

          <p>
            Seeds are the starting point of crop production.
            Traditionally, farmers in Bihar saved seeds from
            healthy plants for the next growing season.
          </p>

          <ul className="bihar-list">
            <li>
              Farmers selected healthy and mature plants
              from their fields.
            </li>
            <li>
              Good-quality seeds were separated from
              damaged or unhealthy seeds.
            </li>
            <li>
              Seeds were dried properly before storage.
            </li>
            <li>
              They were stored in dry and clean containers
              to protect them from moisture and insects.
            </li>
            <li>
              Farmers selected varieties according to
              local weather and soil conditions.
            </li>
          </ul>

          <p>
            Seed preservation helps protect local crop
            varieties and reduces the need to buy seeds
            for every growing season.
          </p>

          <div className="bihar-example">
            <h3>🌱 Simple example</h3>
            <p>
              A farmer may select healthy rice plants,
              save their mature seeds and store them
              for the next sowing season.
            </p>
          </div>
        </section>

        {/* 12. ORGANIC MANURE */}
        <section className="bihar-card">
          <span className="bihar-number">12. Organic manure and natural resources</span>
          <h2>How do traditional farmers improve soil fertility?</h2>

          <p>
            Soil fertility is important for healthy crop growth.
            Traditional farmers have used natural materials
            to add nutrients to the soil and improve its condition.
          </p>

          <div className="bihar-feature-grid">
            <div className="bihar-feature">
              <span>🐄</span>
              <h3>Farmyard manure</h3>
              <p>
                It is prepared mainly from animal dung,
                urine and bedding materials.
              </p>
            </div>

            <div className="bihar-feature">
              <span>🍂</span>
              <h3>Compost</h3>
              <p>
                It is made by allowing plant waste
                and other organic materials to decompose.
              </p>
            </div>

            <div className="bihar-feature">
              <span>🌿</span>
              <h3>Green manure</h3>
              <p>
                Some green plants are grown and mixed
                into the soil to improve its fertility.
              </p>
            </div>

            <div className="bihar-feature">
              <span>🌾</span>
              <h3>Crop residues</h3>
              <p>
                Suitable leftover plant materials can
                be returned to the soil as organic matter.
              </p>
            </div>
          </div>

          <p>
            These materials help improve soil structure,
            add organic matter and support useful soil organisms.
          </p>
        </section>

        {/* 13. RIVERS AND WATER */}
        <section className="bihar-card">
          <span className="bihar-number">13. Rivers and water resources</span>
          <h2>How do rivers and water resources support agriculture in Bihar?</h2>

          <p>
            Bihar has many rivers that support agriculture
            and rural life. The Ganga is the main river
            of the state. Other important rivers include
            the Kosi, Gandak, Son, Bagmati and Punpun.
          </p>

          <p>
            River water and groundwater are important
            sources of irrigation. River deposits also
            help form fertile alluvial soil in many areas.
          </p>

          <div className="bihar-feature-grid">
            <div className="bihar-feature">
              <span>🌊</span>
              <h3>River water</h3>
              <p>
                Rivers provide water for irrigation
                through suitable canals and systems.
              </p>
            </div>

            <div className="bihar-feature">
              <span>🌱</span>
              <h3>Fertile soil</h3>
              <p>
                River deposits help maintain fertile
                soil in many parts of the plains.
              </p>
            </div>

            <div className="bihar-feature">
              <span>💧</span>
              <h3>Groundwater</h3>
              <p>
                Wells and tube wells provide water
                for irrigation in many farming areas.
              </p>
            </div>
          </div>

          <div className="bihar-note">
            <strong>Important point:</strong> Rivers are useful
            for farming, but floods can also damage crops,
            houses and agricultural land.
          </div>
        </section>

        {/* 14. AGRICULTURAL PROBLEMS */}
        <section className="bihar-card">
          <span className="bihar-number">14. Agricultural problems</span>
          <h2>What are the major agricultural problems in Bihar?</h2>

          <p>
            Farmers in Bihar face several problems that
            can affect crop production and income.
            These problems differ from one region to another.
          </p>

          <ul className="bihar-list">
            <li>
              <strong>Floods:</strong> Heavy rainfall and
              overflowing rivers can damage crops and fields.
            </li>
            <li>
              <strong>Drought:</strong> Lack of rainfall
              can reduce crop growth and production.
            </li>
            <li>
              <strong>Waterlogging:</strong> Too much water
              in fields can damage some crops.
            </li>
            <li>
              <strong>Small landholdings:</strong> Many
              farmers have small and divided agricultural fields.
            </li>
            <li>
              <strong>Limited irrigation:</strong> Some
              areas do not have reliable irrigation facilities.
            </li>
            <li>
              <strong>Storage problems:</strong> Poor storage
              can cause damage after harvesting.
            </li>
            <li>
              <strong>Market difficulties:</strong> Farmers
              may face problems in selling crops at good prices.
            </li>
            <li>
              <strong>Soil problems:</strong> Soil erosion
              and loss of nutrients can affect production.
            </li>
          </ul>

          <p>
            Better irrigation, storage facilities, flood
            management, farming guidance and market support
            can help reduce these problems.
          </p>
        </section>

        {/* 15. MODERN IMPROVEMENTS */}
        <section className="bihar-card">
          <span className="bihar-number">15. Modern improvements and sustainable agriculture</span>
          <h2>How can modern methods improve agriculture in Bihar?</h2>

          <p>
            Modern farming methods can improve crop production
            when they are used according to local conditions.
            Traditional knowledge can also be combined with
            modern technology.
          </p>

          <div className="bihar-feature-grid">
            <div className="bihar-feature">
              <span>🚜</span>
              <h3>Farm machines</h3>
              <p>
                Tractors, seed drills and harvesters
                can reduce manual work and save time.
              </p>
            </div>

            <div className="bihar-feature">
              <span>🌱</span>
              <h3>Improved seeds</h3>
              <p>
                Suitable quality seeds can help improve
                crop growth and production.
              </p>
            </div>

            <div className="bihar-feature">
              <span>💧</span>
              <h3>Better irrigation</h3>
              <p>
                Drip irrigation, sprinklers and improved
                water management can save water.
              </p>
            </div>

            <div className="bihar-feature">
              <span>🧪</span>
              <h3>Soil testing</h3>
              <p>
                Soil testing helps farmers understand
                nutrient needs and use fertilizers properly.
              </p>
            </div>

            <div className="bihar-feature">
              <span>📱</span>
              <h3>Digital information</h3>
              <p>
                Mobile services can provide weather
                updates and useful farming information.
              </p>
            </div>

            <div className="bihar-feature">
              <span>♻️</span>
              <h3>Sustainable farming</h3>
              <p>
                Crop rotation, compost and careful
                water use help protect natural resources.
              </p>
            </div>
          </div>

          <p>
            The use of suitable modern methods along with
            traditional knowledge can help farmers improve
            production and protect the environment.
          </p>
        </section>

        {/* 16. CONCLUSION */}
        <section className="bihar-card bihar-conclusion">
          <span className="bihar-number">16. Conclusion</span>
          <div className="bihar-conclusion-icon">🌾</div>

          <h2>What have we learned about agriculture in Bihar?</h2>

          <p>
            Agriculture is an important part of life in Bihar.
            The state's fertile soil, rivers and traditional
            farming knowledge support the growth of many crops.
          </p>

          <p>
            Traditional practices like the Ahar-Pyne system
            show how farmers have managed water and natural
            resources for many years.
          </p>

          <p>
            These traditional practices are still useful today.
            By combining traditional knowledge with modern
            farming methods, farmers can improve crop production,
            save water and protect soil health.
          </p>

          <p>
            Our traditional agricultural knowledge is valuable,
            and we should protect it for future generations.
          </p>

          <div className="bihar-final-message">
            <strong>
              Traditional knowledge and modern farming together
              can support a better and more sustainable future
              for agriculture in Bihar.
            </strong>
          </div>
        </section>

        {/* BACK TO REGIONS */}
        <div className="bihar-back">
          <Link to="/regions">
            ← Back to Regions
          </Link>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="bihar-footer">
        <div className="bihar-footer-content">
          <h2>IAKIS</h2>

          <p>
            Preserving India's Indigenous Agricultural Knowledge
            for future generations.
          </p>

          <div className="bihar-footer-bottom">
            © 2026 IAKIS | Academic project
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Bihar;
