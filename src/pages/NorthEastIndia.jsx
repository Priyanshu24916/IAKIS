
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./NorthEastIndia.css";

import logo from "./assets/iakis-logo.png";
import northEastImage from "./assets/north-east-india.jpg";

function NorthEastIndia() {
  return (
    <div className="app organic-page north-east-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="IAKIS logo" />
          </Link>
        </div>
      </nav>

      {/* HERO HEADER */}
      <header className="north-east-header">
        <div className="north-east-header-content">
          <span className="north-east-tag">
            Traditional agriculture in India
          </span>

          <h1>Agriculture in North East India</h1>

          <p>
            Explore the traditional farming methods, major crops,
            terrace farming, Jhum cultivation, water management
            systems and agricultural knowledge of North East India.
          </p>

          <a href="#north-east-introduction" className="north-east-start-btn">
            Start learning ↓
          </a>
        </div>

        <div className="north-east-hero-image">
          <img src={northEastImage} alt="Agricultural fields in North East India" />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="north-east-content">

        {/* 01. INTRODUCTION */}
        <section className="north-east-card" id="north-east-introduction">
          <span className="north-east-number">01. Introduction</span>
          <h2>What is the importance of agriculture in North East India?</h2>

          <p>
            Agriculture is an important part of life in North East India.
            Many people depend on farming for food, income and livelihood.
            The region includes eight states: Assam, Arunachal Pradesh,
            Manipur, Meghalaya, Mizoram, Nagaland, Sikkim and Tripura.
          </p>

          <p>
            The region has hills, valleys, plains, forests and rivers.
            These natural conditions support different types of farming.
            Farmers grow rice, maize, millets, pulses, vegetables and fruits.
          </p>

          <p>
            Tea, rubber, ginger, oranges and pineapple are also important
            crops in different parts of the region. Farming methods
            change according to the land, climate and rainfall.
          </p>

          <p>
            Traditional knowledge, local seeds and community practices
            have helped farmers grow crops in this region for generations.
          </p>

          <div className="north-east-example">
            <h3>🌾 Simple example</h3>
            <p>
              Rice is a major food crop in many parts of North East India.
              Assam is also well known for its tea production.
            </p>
          </div>
        </section>

        {/* 02. HISTORY */}
        <section className="north-east-card">
          <span className="north-east-number">02. History of farming</span>
          <h2>How has traditional farming developed in North East India?</h2>

          <p>
            Farming in North East India has a long history.
            People developed different farming methods according
            to the hills, forests, rainfall and local conditions.
          </p>

          <p>
            In earlier times, farmers depended on local seeds,
            traditional tools, animal power and natural resources.
            They also developed methods to manage land and water.
          </p>

          <ul className="north-east-list">
            <li>
              Traditional tools were used to prepare fields
              and grow crops.
            </li>
            <li>
              Farmers saved seeds from healthy plants
              for the next growing season.
            </li>
            <li>
              Animal waste and plant materials were used
              to improve soil fertility.
            </li>
            <li>
              Terrace farming helped people grow crops
              on hilly land.
            </li>
            <li>
              Jhum cultivation was practised in some
              hill and forest areas.
            </li>
            <li>
              Community knowledge helped people manage
              farming activities and natural resources.
            </li>
          </ul>

          <p>
            These practices show how farming communities
            learned to use their local resources carefully.
          </p>
        </section>

        {/* 03. CLIMATE */}
        <section className="north-east-card">
          <span className="north-east-number">03. Climate and geography</span>
          <h2>What are the climate and geographical conditions of North East India?</h2>

          <p>
            North East India is located in the north-eastern
            part of the country. It has hills, mountains,
            river valleys and plains. The Brahmaputra and
            Barak river systems are important for the region.
          </p>

          <p>
            Many areas receive heavy rainfall during the monsoon.
            However, rainfall and temperature are different
            from one place to another.
          </p>

          <div className="north-east-feature-grid">
            <div className="north-east-feature">
              <span>🌧️</span>
              <h3>Heavy rainfall</h3>
              <p>
                Many areas receive high rainfall during
                the monsoon season, which supports crop growth.
              </p>
            </div>

            <div className="north-east-feature">
              <span>⛰️</span>
              <h3>Hilly areas</h3>
              <p>
                Hills and mountains are common in states
                such as Meghalaya, Nagaland and Mizoram.
              </p>
            </div>

            <div className="north-east-feature">
              <span>🌊</span>
              <h3>River valleys</h3>
              <p>
                River valleys and plains provide suitable
                land for growing rice and other crops.
              </p>
            </div>

            <div className="north-east-feature">
              <span>🌿</span>
              <h3>Different climates</h3>
              <p>
                Lowland areas are generally warmer,
                while higher areas have cooler conditions.
              </p>
            </div>
          </div>

          <div className="north-east-note">
            <strong>Important point:</strong> Rainfall and temperature
            are not the same throughout the region. Farmers select
            crops according to their local climate and land conditions.
          </div>
        </section>

        {/* 04. SOIL */}
        <section className="north-east-card">
          <span className="north-east-number">04. Soil types</span>
          <h2>What types of soil are found in North East India?</h2>

          <p>
            North East India has different soil types because
            of its rivers, hills, forests and rainfall.
            Soil type affects the crops that farmers can grow.
          </p>

          <div className="north-east-feature-grid">
            <div className="north-east-feature">
              <h3>Alluvial soil</h3>
              <p>
                It is found in river valleys and plains.
                It is suitable for rice, vegetables
                and other crops.
              </p>
            </div>

            <div className="north-east-feature">
              <h3>Red soil</h3>
              <p>
                It is found in several upland areas.
                Adding organic matter can improve
                its fertility.
              </p>
            </div>

            <div className="north-east-feature">
              <h3>Mountain soil</h3>
              <p>
                It is found in hilly areas.
                Its depth and quality change
                according to the slope.
              </p>
            </div>

            <div className="north-east-feature">
              <h3>Forest soil</h3>
              <p>
                It develops in forest areas and may
                contain organic matter from fallen
                leaves and plants.
              </p>
            </div>

            <div className="north-east-feature">
              <h3>Laterite soil</h3>
              <p>
                It occurs in some areas with heavy
                rainfall. Proper soil management
                is important for crop growth.
              </p>
            </div>
          </div>

          <div className="north-east-example">
            <h3>Important point</h3>
            <p>
              Adding organic matter, preventing soil erosion
              and choosing suitable crops help maintain
              soil health.
            </p>
          </div>
        </section>

        {/* 05. MAJOR CROPS */}
        <section className="north-east-card">
          <span className="north-east-number">05. Major crops</span>
          <h2>What are the major crops grown in North East India?</h2>

          <p>
            North East India grows different food crops,
            fruits, vegetables and commercial crops.
            Crop selection depends on rainfall, soil,
            land and local conditions.
          </p>

          <h3 className="north-east-subheading">Food crops</h3>

          <div className="north-east-variety-grid">
            <div className="north-east-variety">
              <h3>1. Rice</h3>
              <p>
                Rice is one of the most important food crops
                in the region. It is grown in plains,
                valleys and suitable hill areas.
              </p>
            </div>

            <div className="north-east-variety">
              <h3>2. Maize</h3>
              <p>
                Maize is grown in different parts
                of the region. It is used as food
                and animal feed.
              </p>
            </div>

            <div className="north-east-variety">
              <h3>3. Millets</h3>
              <p>
                Different types of millets are grown
                in some areas. They are useful food crops
                for local communities.
              </p>
            </div>

            <div className="north-east-variety">
              <h3>4. Pulses</h3>
              <p>
                Pulses are an important source of protein.
                They are also included in mixed
                and traditional farming systems.
              </p>
            </div>
          </div>

          <h3 className="north-east-subheading">Fruits and cash crops</h3>

          <div className="north-east-variety-grid">
            <div className="north-east-variety">
              <h3>5. Tea</h3>
              <p>
                Assam is famous for tea production.
                Tea is an important commercial crop
                of the region.
              </p>
            </div>

            <div className="north-east-variety">
              <h3>6. Ginger</h3>
              <p>
                Ginger is grown in several states.
                It is used as a spice and has
                commercial value.
              </p>
            </div>

            <div className="north-east-variety">
              <h3>7. Rubber</h3>
              <p>
                Rubber is grown as a commercial crop
                in suitable areas, including parts
                of Tripura.
              </p>
            </div>

            <div className="north-east-variety">
              <h3>8. Orange</h3>
              <p>
                Oranges are grown in several hill areas.
                They provide food and income to farmers.
              </p>
            </div>

            <div className="north-east-variety">
              <h3>9. Pineapple</h3>
              <p>
                Pineapple grows well in suitable
                warm and humid conditions.
              </p>
            </div>

            <div className="north-east-variety">
              <h3>10. Banana</h3>
              <p>
                Banana is grown in many areas
                and is used as a food and fruit crop.
              </p>
            </div>
          </div>

          <div className="north-east-note">
            <strong>Remember:</strong> Rice, Maize, Tea,
            Ginger, Orange and Pineapple are important
            crops of different parts of North East India.
          </div>
        </section>

        {/* 06. TRADITIONAL FARMING */}
        <section className="north-east-card">
          <span className="north-east-number">06. Traditional farming methods</span>
          <h2>What traditional farming methods are used in North East India?</h2>

          <p>
            Traditional farming in North East India is shaped
            by hills, forests, rainfall and local needs.
            Farmers use different methods to grow crops
            and manage natural resources.
          </p>

          <ul className="north-east-list">
            <li>
              <strong>Terrace farming:</strong> Steps are
              made on hill slopes to create flat fields
              for growing crops.
            </li>
            <li>
              <strong>Jhum cultivation:</strong> This is
              a traditional shifting cultivation method
              practised in some areas.
            </li>
            <li>
              <strong>Mixed cropping:</strong> Two or more
              crops are grown together in the same field.
            </li>
            <li>
              <strong>Local seeds:</strong> Farmers use
              seeds that are suitable for local conditions.
            </li>
            <li>
              <strong>Organic manure:</strong> Cow dung,
              compost and plant waste are used to improve soil.
            </li>
            <li>
              <strong>Crop rotation:</strong> Different crops
              are grown in sequence to maintain soil health.
            </li>
          </ul>

          <p>
            These methods show the importance of traditional
            knowledge in farming communities.
          </p>
        </section>

        {/* 07. WATER CONSERVATION */}
        <section className="north-east-card">
          <span className="north-east-number">07. Traditional water management</span>
          <h2>How do traditional water management methods work in North East India?</h2>

          <p>
            Water is important for farming in North East India.
            Farmers use rainfall, streams, rivers and local
            water systems to provide water to their fields.
          </p>

          <div className="north-east-variety-grid">
            <div className="north-east-variety">
              <h3>1. Rainwater harvesting</h3>
              <p>
                Rainwater is collected and stored
                for later use in farming and other needs.
              </p>
            </div>

            <div className="north-east-variety">
              <h3>2. Small ponds</h3>
              <p>
                Ponds store rainwater and can provide
                water for farming and animals.
              </p>
            </div>

            <div className="north-east-variety">
              <h3>3. Water channels</h3>
              <p>
                Small channels carry water from streams
                to nearby agricultural fields.
              </p>
            </div>

            <div className="north-east-variety">
              <h3>4. Community systems</h3>
              <p>
                People work together to manage and share
                local water resources.
              </p>
            </div>
          </div>

          <p>
            These methods help farmers use local water
            resources and manage water according to
            their farming needs.
          </p>

          <div className="north-east-note">
            <strong>Important point:</strong> Water channels,
            ponds and other local structures need regular
            care and maintenance to work properly.
          </div>
        </section>

        {/* 08. TERRACE FARMING */}
        <section className="north-east-card">
          <span className="north-east-number">08. Terrace farming system</span>
          <h2>What is the traditional terrace farming system?</h2>

          <p>
            Terrace farming is an important farming method
            in many hilly parts of North East India.
            Farmers make flat steps on hill slopes
            to create land for growing crops.
          </p>

          <p>
            These steps slow down the flow of rainwater
            and help reduce soil erosion. Rice and
            other suitable crops can be grown on terraces.
          </p>

          <div className="north-east-process">

            <div className="north-east-process-step">
              <span>01</span>
              <div>
                <h3>Selecting the slope</h3>
                <p>
                  Farmers select a suitable hill slope
                  for making terraces.
                </p>
              </div>
            </div>

            <div className="north-east-process-step">
              <span>02</span>
              <div>
                <h3>Making steps</h3>
                <p>
                  The slope is shaped into a series
                  of flat steps.
                </p>
              </div>
            </div>

            <div className="north-east-process-step">
              <span>03</span>
              <div>
                <h3>Preparing the soil</h3>
                <p>
                  The soil is prepared and organic
                  manure may be added.
                </p>
              </div>
            </div>

            <div className="north-east-process-step">
              <span>04</span>
              <div>
                <h3>Growing crops</h3>
                <p>
                  Farmers grow crops suitable for
                  the local soil and climate.
                </p>
              </div>
            </div>

            <div className="north-east-process-step">
              <span>05</span>
              <div>
                <h3>Managing water</h3>
                <p>
                  Water is managed carefully to support
                  crop growth and protect the soil.
                </p>
              </div>
            </div>

          </div>

          <div className="north-east-example">
            <h3>🌾 Simple example</h3>
            <p>
              Terrace farming is practised in hilly areas
              of states such as Nagaland, Meghalaya,
              Sikkim and Arunachal Pradesh.
            </p>
          </div>
        </section>

        {/* 09. SEASONAL FARMING */}
        <section className="north-east-card">
          <span className="north-east-number">09. Seasonal farming</span>
          <h2>How do farmers follow different farming seasons in North East India?</h2>

          <p>
            Farmers grow crops according to rainfall,
            temperature and water availability.
            The main cropping seasons are Kharif and Rabi.
            Some short-duration crops are also grown
            during the summer season.
          </p>

          <div className="north-east-feature-grid">
            <div className="north-east-feature">
              <span>🌧️</span>
              <h3>Kharif season</h3>
              <p>
                Kharif crops are grown during the monsoon.
                Rice, Maize and pulses are examples
                of crops grown in this season.
              </p>
            </div>

            <div className="north-east-feature">
              <span>❄️</span>
              <h3>Rabi season</h3>
              <p>
                Rabi crops are grown during the cooler months.
                Wheat, Mustard, Peas and some vegetables
                are examples.
              </p>
            </div>

            <div className="north-east-feature">
              <span>☀️</span>
              <h3>Summer season</h3>
              <p>
                Vegetables and other short-duration crops
                can be grown where suitable water
                is available.
              </p>
            </div>
          </div>

          <p>
            Seasonal planning helps farmers select crops
            according to available water and local weather.
          </p>
        </section>

        {/* 10. JHUM CULTIVATION */}
        <section className="north-east-card">
          <span className="north-east-number">10. Jhum cultivation</span>
          <h2>What is the importance of Jhum cultivation in North East India?</h2>

          <p>
            Jhum cultivation is a traditional form of
            shifting cultivation practised in some parts
            of North East India. Farmers prepare a selected
            area of land, grow crops and later move to
            another area.
          </p>

          <p>
            The earlier field is left unused for some time
            so that natural vegetation can grow again.
            This recovery period is important for the land.
          </p>

          <ul className="north-east-list">
            <li>
              Farmers select a suitable area for cultivation.
            </li>
            <li>
              Vegetation is cleared using traditional methods.
            </li>
            <li>
              The land is prepared for sowing seeds.
            </li>
            <li>
              Different crops may be grown together.
            </li>
            <li>
              Crops are harvested when they become ready.
            </li>
            <li>
              The field is left to recover before
              it is used again.
            </li>
          </ul>

          <div className="north-east-note">
            <strong>Remember:</strong> A long recovery period
            helps the land regain its natural condition.
            Very short recovery periods can reduce soil fertility
            and affect forests.
          </div>
        </section>

        {/* 11. SEEDS */}
        <section className="north-east-card">
          <span className="north-east-number">11. Traditional seeds</span>
          <h2>How do farmers select and preserve traditional seeds?</h2>

          <p>
            Traditional seeds are local crop varieties
            that farmers have selected and grown over
            many generations.
          </p>

          <p>
            In North East India, farmers preserve seeds
            that are suitable for local climate, rainfall
            and farming conditions.
          </p>

          <ul className="north-east-list">
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
              Dry containers help protect seeds
              from moisture.
            </li>
            <li>
              Local seeds are selected according
              to the needs of the next growing season.
            </li>
            <li>
              Farmers share seeds and farming knowledge
              within their communities.
            </li>
          </ul>

          <p>
            Seed preservation protects local crop diversity
            and keeps traditional farming knowledge alive.
          </p>
        </section>

        {/* 12. SOIL MANAGEMENT */}
        <section className="north-east-card">
          <span className="north-east-number">12. Soil and natural resource management</span>
          <h2>How do farmers protect soil and natural resources in North East India?</h2>

          <p>
            Soil, forests and water are important resources
            for farming. Farmers use different methods
            to protect the land, maintain soil fertility
            and reduce soil erosion.
          </p>

          <div className="north-east-feature-grid">
            <div className="north-east-feature">
              <span>🐄</span>
              <h3>Farmyard manure</h3>
              <p>
                Animal waste is used to add organic matter
                and nutrients to the soil.
              </p>
            </div>

            <div className="north-east-feature">
              <span>🍂</span>
              <h3>Compost</h3>
              <p>
                Decomposed plant waste helps improve
                soil structure and fertility.
              </p>
            </div>

            <div className="north-east-feature">
              <span>🌿</span>
              <h3>Crop residues</h3>
              <p>
                Suitable crop remains help protect
                the soil surface and add organic matter.
              </p>
            </div>

            <div className="north-east-feature">
              <span>🌳</span>
              <h3>Tree planting</h3>
              <p>
                Trees and plants help protect soil
                and support the natural environment.
              </p>
            </div>

            <div className="north-east-feature">
              <span>⛰️</span>
              <h3>Contour farming</h3>
              <p>
                Farming along the natural shape of the land
                helps reduce water flow on slopes.
              </p>
            </div>

            <div className="north-east-feature">
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
        <section className="north-east-card">
          <span className="north-east-number">13. Animal husbandry</span>
          <h2>What is the role of animal husbandry in North East India agriculture?</h2>

          <p>
            Animal husbandry means raising and caring
            for animals such as cows, pigs, goats,
            sheep and poultry birds.
          </p>

          <p>
            It is an important part of rural life in
            North East India. Animals provide food,
            income and support to farming families.
          </p>

          <div className="north-east-feature-grid">
            <div className="north-east-feature">
              <span>🐄</span>
              <h3>Cattle</h3>
              <p>
                Cows and other cattle provide milk
                and farmyard manure.
              </p>
            </div>

            <div className="north-east-feature">
              <span>🐖</span>
              <h3>Pigs</h3>
              <p>
                Pig rearing is an important source
                of income in several communities.
              </p>
            </div>

            <div className="north-east-feature">
              <span>🐐</span>
              <h3>Goats and sheep</h3>
              <p>
                These animals provide meat and income
                for rural families.
              </p>
            </div>

            <div className="north-east-feature">
              <span>🐓</span>
              <h3>Poultry</h3>
              <p>
                Chickens and other birds provide
                eggs and meat.
              </p>
            </div>
          </div>

          <p>
            Animal waste can also be used as manure
            to improve soil fertility.
          </p>
        </section>

        {/* 14. CHALLENGES */}
        <section className="north-east-card">
          <span className="north-east-number">14. Agricultural problems</span>
          <h2>What are the major agricultural problems in North East India?</h2>

          <p>
            Farmers in North East India face different
            challenges because of heavy rainfall,
            hilly land and transport difficulties.
          </p>

          <ul className="north-east-list">
            <li>
              <strong>Heavy rainfall:</strong> Too much
              rain can damage crops and cause floods.
            </li>
            <li>
              <strong>Soil erosion:</strong> Fast-flowing
              rainwater can remove fertile soil
              from hill slopes.
            </li>
            <li>
              <strong>Floods:</strong> Flooding can damage
              fields, crops, houses and roads.
            </li>
            <li>
              <strong>Landslides:</strong> Heavy rainfall
              can cause landslides in hilly areas.
            </li>
            <li>
              <strong>Small farms:</strong> Many farmers
              have small pieces of agricultural land.
            </li>
            <li>
              <strong>Transport problems:</strong> Poor
              road access can make it difficult to take
              crops to markets.
            </li>
            <li>
              <strong>Storage problems:</strong> Lack
              of proper storage can lead to crop losses.
            </li>
            <li>
              <strong>Limited technology:</strong> Some
              farmers have limited access to modern
              tools and facilities.
            </li>
          </ul>

          <p>
            Better roads, storage, soil protection
            and farming support can help reduce
            these problems.
          </p>
        </section>

        {/* 15. MODERN IMPROVEMENTS */}
        <section className="north-east-card">
          <span className="north-east-number">15. Modern improvements and sustainable agriculture</span>
          <h2>How can modern methods improve agriculture in North East India?</h2>

          <p>
            Modern farming methods can help farmers
            improve crop production and protect
            natural resources. Traditional knowledge
            can also be combined with modern technology.
          </p>

          <div className="north-east-feature-grid">
            <div className="north-east-feature">
              <span>🌱</span>
              <h3>Improved seeds</h3>
              <p>
                Good-quality seeds can help farmers
                grow healthy crops and improve production.
              </p>
            </div>

            <div className="north-east-feature">
              <span>💧</span>
              <h3>Modern irrigation</h3>
              <p>
                Drip and sprinkler systems help
                use water carefully where suitable.
              </p>
            </div>

            <div className="north-east-feature">
              <span>🚜</span>
              <h3>Farm machines</h3>
              <p>
                Suitable machines can save time
                and reduce hard work during farming.
              </p>
            </div>

            <div className="north-east-feature">
              <span>🧪</span>
              <h3>Soil testing</h3>
              <p>
                Soil testing helps farmers understand
                the nutrient needs of their fields.
              </p>
            </div>

            <div className="north-east-feature">
              <span>📦</span>
              <h3>Better storage</h3>
              <p>
                Proper storage and transport help
                reduce losses after harvesting.
              </p>
            </div>

            <div className="north-east-feature">
              <span>♻️</span>
              <h3>Sustainable farming</h3>
              <p>
                Crop rotation, organic manure and
                soil conservation help protect
                natural resources.
              </p>
            </div>
          </div>

          <p>
            These improvements can help farmers increase
            production while protecting soil, water
            and forests for future generations.
          </p>
        </section>

        {/* 16. CONCLUSION */}
        <section className="north-east-card north-east-conclusion">
          <span className="north-east-number">16. Conclusion</span>
          <div className="north-east-conclusion-icon">🌾</div>

          <h2>What have we learned about agriculture in North East India?</h2>

          <p>
            Agriculture in North East India is shaped by
            its hills, valleys, forests, rivers and rainfall.
            Farmers grow crops such as Rice, Maize, Millets,
            Pulses, Tea, Ginger and different fruits.
          </p>

          <p>
            Traditional farming methods like terrace farming,
            Jhum cultivation, mixed cropping and local seed
            preservation show how people have used their
            knowledge for many generations.
          </p>

          <p>
            Animal husbandry is also an important part
            of rural life. It provides food, income
            and support to farming families.
          </p>

          <p>
            By protecting soil, water and forests and using
            suitable modern methods, farmers can improve
            farming and support sustainable agriculture
            in North East India.
          </p>

          <div className="north-east-final-message">
            <strong>
              Traditional knowledge and careful use of natural
              resources are important for a sustainable
              agricultural future in North East India.
            </strong>
          </div>
        </section>

        {/* BACK TO REGIONS */}
        <div className="north-east-back">
          <Link to="/regions">
            ← Back to Regions
          </Link>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="north-east-footer">
        <div className="north-east-footer-content">
          <h2>IAKIS</h2>

          <p>
            Preserving India's Indigenous Agricultural Knowledge
            for future generations.
          </p>

          <div className="north-east-footer-bottom">
            © 2026 IAKIS | Academic project
          </div>
        </div>
      </footer>

    </div>
  );
}

export default NorthEastIndia;
