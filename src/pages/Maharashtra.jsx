
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Maharashtra.css";

import logo from "./assets/iakis-logo.png";
import maharashtraImage from "./assets/maharashtra.jpg";

function Maharashtra() {
  return (
    <div className="app organic-page maharashtra-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="IAKIS logo" />
          </Link>
        </div>
      </nav>

      {/* HERO HEADER */}
      <header className="maharashtra-header">
        <div className="maharashtra-header-content">
          <span className="maharashtra-tag">
            Traditional agriculture in India
          </span>

          <h1>Agriculture in Maharashtra</h1>

          <p>
            Explore the traditional farming methods, major crops,
            water management systems, soil types and agricultural
            knowledge of Maharashtra.
          </p>

          <a href="#maharashtra-introduction" className="maharashtra-start-btn">
            Start learning ↓
          </a>
        </div>

        <div className="maharashtra-hero-image">
          <img src={maharashtraImage} alt="Agricultural fields in Maharashtra" />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="maharashtra-content">

        {/* 01. INTRODUCTION */}
        <section className="maharashtra-card" id="maharashtra-introduction">
          <span className="maharashtra-number">01. Introduction</span>
          <h2>What is the importance of agriculture in Maharashtra?</h2>

          <p>
            Agriculture is an important part of life in Maharashtra.
            Many people depend on farming and animal rearing
            for their livelihood.
          </p>

          <p>
            Maharashtra has different types of land, soil and climate.
            Some areas receive heavy rainfall, while other areas
            face water shortages and dry conditions.
          </p>

          <p>
            Farmers grow crops such as Cotton, Sugarcane, Soybean,
            Jowar, Bajra, Rice, Wheat and pulses. Fruits such as
            Mango, Grapes and Oranges are also important.
          </p>

          <p>
            Traditional farming knowledge helps farmers manage
            soil, rainfall, water and crops according to
            local conditions.
          </p>

          <div className="maharashtra-example">
            <h3>🌾 Simple example</h3>
            <p>
              Farmers in the Vidarbha region grow Cotton and
              Soybean, while Rice is an important crop
              in the Konkan region.
            </p>
          </div>
        </section>

        {/* 02. HISTORY */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">02. History of farming</span>
          <h2>How has traditional farming developed in Maharashtra?</h2>

          <p>
            Farming in Maharashtra has a long history.
            People living in villages have developed different
            methods to grow crops according to local soil,
            rainfall and climate.
          </p>

          <p>
            In earlier times, farmers depended on local seeds,
            animal power, traditional tools and seasonal rainfall.
            They also used natural materials to maintain soil fertility.
          </p>

          <ul className="maharashtra-list">
            <li>
              Bullocks were used for ploughing and
              other agricultural work.
            </li>
            <li>
              Wooden ploughs and traditional tools
              were used to prepare fields.
            </li>
            <li>
              Farmers saved seeds from healthy crops
              for the next growing season.
            </li>
            <li>
              Cow dung and crop waste were used
              to improve soil fertility.
            </li>
            <li>
              Wells, ponds, tanks and canals helped
              provide water for farming.
            </li>
          </ul>

          <p>
            Over time, tractors, improved seeds, irrigation
            systems and modern farming methods became
            more common in the state.
          </p>
        </section>

        {/* 03. CLIMATE */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">03. Climate and geography</span>
          <h2>What are the climate and geographical conditions of Maharashtra?</h2>

          <p>
            Maharashtra is located in western India.
            The Western Ghats, also known as the Sahyadri Range,
            pass through the western part of the state.
            The Deccan Plateau covers a large inland area.
          </p>

          <p>
            The Konkan region receives heavy rainfall,
            while many parts of Marathwada and Vidarbha
            receive less rainfall.
          </p>

          <div className="maharashtra-feature-grid">
            <div className="maharashtra-feature">
              <span>☀️</span>
              <h3>Summer</h3>
              <p>
                Summers are generally hot.
                High temperatures can increase
                the need for irrigation.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🌧️</span>
              <h3>Monsoon</h3>
              <p>
                Most rainfall occurs during the monsoon.
                Farmers plan their sowing according to rainfall.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>❄️</span>
              <h3>Winter</h3>
              <p>
                Winter weather supports crops
                such as Wheat, Gram and other Rabi crops.
              </p>
            </div>
          </div>

          <div className="maharashtra-note">
            <strong>Important point:</strong> Rainfall is not
            the same across Maharashtra. The Konkan region
            receives more rainfall than many inland areas.
          </div>
        </section>

        {/* 04. SOIL */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">04. Soil types</span>
          <h2>What types of soil are found in Maharashtra?</h2>

          <p>
            Maharashtra has different soil types because
            of changes in rainfall, landforms and natural conditions.
            Soil type affects which crops farmers can grow.
          </p>

          <div className="maharashtra-feature-grid">
            <div className="maharashtra-feature">
              <h3>Black soil</h3>
              <p>
                It is common in many parts of the Deccan Plateau.
                It holds moisture well and is suitable
                for crops such as Cotton and Soybean.
              </p>
            </div>

            <div className="maharashtra-feature">
              <h3>Laterite soil</h3>
              <p>
                It is found in many high-rainfall areas.
                Rice and Cashew are grown in suitable areas.
              </p>
            </div>

            <div className="maharashtra-feature">
              <h3>Red soil</h3>
              <p>
                It is found in some parts of the state.
                Its fertility depends on local conditions
                and soil management.
              </p>
            </div>

            <div className="maharashtra-feature">
              <h3>Alluvial soil</h3>
              <p>
                It is found in some river valleys
                and can support different crops.
              </p>
            </div>

            <div className="maharashtra-feature">
              <h3>Coastal soil</h3>
              <p>
                Coastal areas have different soil conditions.
                Rice, Coconut and other crops are grown
                in suitable locations.
              </p>
            </div>
          </div>

          <div className="maharashtra-example">
            <h3>Important point</h3>
            <p>
              Adding organic matter, preventing soil erosion
              and choosing suitable crops help maintain
              soil health.
            </p>
          </div>
        </section>

        {/* 05. MAJOR CROPS */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">05. Major crops</span>
          <h2>What are the major crops grown in Maharashtra?</h2>

          <p>
            Maharashtra grows different food crops, pulses,
            oilseeds and cash crops. Crop selection depends
            on rainfall, soil, irrigation and local conditions.
          </p>

          <h3 className="maharashtra-subheading">Food crops</h3>

          <div className="maharashtra-variety-grid">
            <div className="maharashtra-variety">
              <h3>1. Jowar</h3>
              <p>
                Jowar is an important millet crop.
                It is grown in many dry and semi-dry areas.
              </p>
            </div>

            <div className="maharashtra-variety">
              <h3>2. Bajra</h3>
              <p>
                Bajra grows well in areas with limited rainfall.
                It is an important food crop in dry regions.
              </p>
            </div>

            <div className="maharashtra-variety">
              <h3>3. Rice</h3>
              <p>
                Rice is mainly grown in the Konkan region
                and other areas with suitable rainfall and water.
              </p>
            </div>

            <div className="maharashtra-variety">
              <h3>4. Wheat</h3>
              <p>
                Wheat is an important Rabi crop.
                It is grown during the winter season.
              </p>
            </div>
          </div>

          <h3 className="maharashtra-subheading">Pulses and cash crops</h3>

          <div className="maharashtra-variety-grid">
            <div className="maharashtra-variety">
              <h3>5. Cotton</h3>
              <p>
                Cotton is an important cash crop.
                Its fibre is used by the textile industry.
              </p>
            </div>

            <div className="maharashtra-variety">
              <h3>6. Sugarcane</h3>
              <p>
                Sugarcane is grown mainly in irrigated areas.
                It is used to produce sugar and other products.
              </p>
            </div>

            <div className="maharashtra-variety">
              <h3>7. Soybean</h3>
              <p>
                Soybean is an important oilseed crop.
                It is widely grown in parts of Vidarbha
                and Marathwada.
              </p>
            </div>

            <div className="maharashtra-variety">
              <h3>8. Tur</h3>
              <p>
                Tur is an important pulse crop.
                It is also known as Pigeon Pea.
              </p>
            </div>

            <div className="maharashtra-variety">
              <h3>9. Gram</h3>
              <p>
                Gram is mainly grown during the winter season.
                It is an important source of protein.
              </p>
            </div>

            <div className="maharashtra-variety">
              <h3>10. Groundnut</h3>
              <p>
                Groundnut is an oilseed crop.
                Its seeds are used to produce cooking oil.
              </p>
            </div>
          </div>

          <div className="maharashtra-note">
            <strong>Remember:</strong> Cotton, Sugarcane,
            Soybean, Jowar, Rice and Tur are important crops
            of Maharashtra. The state is also known
            for Mangoes, Grapes and Oranges.
          </div>
        </section>

        {/* 06. TRADITIONAL FARMING */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">06. Traditional farming methods</span>
          <h2>What traditional farming methods are used in Maharashtra?</h2>

          <p>
            Traditional farming in Maharashtra is based on
            local experience and natural resources.
            Farmers have used different methods according
            to soil, rainfall and water availability.
          </p>

          <ul className="maharashtra-list">
            <li>
              <strong>Animal power:</strong> Bullocks were
              used for ploughing and other farm work.
            </li>
            <li>
              <strong>Local seeds:</strong> Farmers selected
              seeds that could grow in local conditions.
            </li>
            <li>
              <strong>Mixed cropping:</strong> Different
              suitable crops were grown together in a field.
            </li>
            <li>
              <strong>Crop rotation:</strong> Different crops
              were grown in the same field in different seasons.
            </li>
            <li>
              <strong>Organic manure:</strong> Cow dung
              and compost were used to improve soil.
            </li>
            <li>
              <strong>Rainwater collection:</strong> Ponds
              and tanks were used to store rainwater.
            </li>
          </ul>

          <p>
            These practices helped farming communities
            use their land and natural resources carefully.
          </p>
        </section>

        {/* 07. WATER CONSERVATION */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">07. Traditional water conservation</span>
          <h2>How do traditional water conservation methods work in Maharashtra?</h2>

          <p>
            Water is important for farming in Maharashtra.
            Some areas receive heavy rainfall, while other
            areas face water shortages. Traditional water
            conservation methods help collect and save water.
          </p>

          <div className="maharashtra-variety-grid">
            <div className="maharashtra-variety">
              <h3>1. Village tanks</h3>
              <p>
                Village tanks collect and store rainwater.
                They can support local water needs.
              </p>
            </div>

            <div className="maharashtra-variety">
              <h3>2. Farm ponds</h3>
              <p>
                Farm ponds store rainwater for use
                during dry periods and between rainfall.
              </p>
            </div>

            <div className="maharashtra-variety">
              <h3>3. Check dams</h3>
              <p>
                Small check dams slow down flowing water
                and help increase groundwater recharge.
              </p>
            </div>

            <div className="maharashtra-variety">
              <h3>4. Percolation tanks</h3>
              <p>
                They store water and allow it to slowly
                enter the ground, helping recharge wells.
              </p>
            </div>
          </div>

          <p>
            These structures help farmers and villages
            manage water during periods of low rainfall.
          </p>

          <div className="maharashtra-note">
            <strong>Important point:</strong> Water conservation
            structures need regular cleaning and maintenance
            to work properly.
          </div>
        </section>

        {/* 08. IRRIGATION */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">08. Traditional irrigation systems</span>
          <h2>How have farmers managed irrigation in Maharashtra?</h2>

          <p>
            Farmers in Maharashtra have used wells, tanks,
            canals and small water storage structures
            to provide water to their fields.
            The irrigation method depends on local water sources.
          </p>

          <div className="maharashtra-process">

            <div className="maharashtra-process-step">
              <span>01</span>
              <div>
                <h3>Water collection</h3>
                <p>
                  Rainwater is collected in ponds,
                  tanks and other structures.
                </p>
              </div>
            </div>

            <div className="maharashtra-process-step">
              <span>02</span>
              <div>
                <h3>Water storage</h3>
                <p>
                  Stored water is kept for use
                  when rainfall is low.
                </p>
              </div>
            </div>

            <div className="maharashtra-process-step">
              <span>03</span>
              <div>
                <h3>Moving water</h3>
                <p>
                  Wells, canals and channels help
                  carry water towards agricultural fields.
                </p>
              </div>
            </div>

            <div className="maharashtra-process-step">
              <span>04</span>
              <div>
                <h3>Using water</h3>
                <p>
                  Farmers use available water
                  for crops when needed.
                </p>
              </div>
            </div>

          </div>

          <div className="maharashtra-example">
            <h3>🌾 Simple example</h3>
            <p>
              Dams and their canal networks provide irrigation
              water to agricultural areas in different parts
              of Maharashtra.
            </p>
          </div>
        </section>

        {/* 09. SEASONAL FARMING */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">09. Seasonal farming</span>
          <h2>How do farmers follow different farming seasons in Maharashtra?</h2>

          <p>
            Farmers grow crops according to rainfall,
            temperature and water availability.
            The main cropping seasons are Kharif, Rabi
            and Zaid.
          </p>

          <div className="maharashtra-feature-grid">
            <div className="maharashtra-feature">
              <span>🌧️</span>
              <h3>Kharif season</h3>
              <p>
                Kharif crops are sown during the monsoon.
                Rice, Cotton, Soybean and Tur are examples.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>❄️</span>
              <h3>Rabi season</h3>
              <p>
                Rabi crops are grown during the winter.
                Wheat, Gram and Rabi Jowar are examples.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>☀️</span>
              <h3>Zaid season</h3>
              <p>
                Short-duration crops such as vegetables
                and watermelons can be grown where
                irrigation water is available.
              </p>
            </div>
          </div>

          <p>
            Seasonal planning helps farmers select crops
            according to local weather and available water.
          </p>
        </section>

        {/* 10. CROP ROTATION */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">10. Crop rotation and mixed farming</span>
          <h2>Why are crop rotation and mixed farming important in Maharashtra?</h2>

          <p>
            Crop rotation and mixed farming help farmers
            use their land better. These methods can also
            reduce the risk of depending on only one crop.
          </p>

          <ul className="maharashtra-list">
            <li>
              <strong>Crop rotation:</strong> Growing
              different crops one after another in the same field.
            </li>
            <li>
              <strong>Mixed cropping:</strong> Growing
              two or more suitable crops together.
            </li>
            <li>
              <strong>Legume crops:</strong> Pulses such
              as Tur and Gram can help improve soil fertility.
            </li>
            <li>
              <strong>Risk reduction:</strong> Growing
              different crops can reduce the risk of crop failure.
            </li>
            <li>
              <strong>Better land use:</strong> Different
              crops use soil nutrients and space in different ways.
            </li>
          </ul>

          <div className="maharashtra-example">
            <h3>🌾 Simple example</h3>
            <p>
              Farmers may grow Soybean during the Kharif season
              and Gram during the Rabi season where
              soil and water conditions are suitable.
            </p>
          </div>
        </section>

        {/* 11. SEEDS */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">11. Traditional seeds</span>
          <h2>How do farmers select and preserve traditional seeds?</h2>

          <p>
            Traditional seeds are local crop varieties
            that farmers have grown and selected over
            many generations.
          </p>

          <p>
            Farmers select seeds according to local
            soil, rainfall, climate and farming needs.
            Seed saving helps protect local crop diversity.
          </p>

          <ul className="maharashtra-list">
            <li>
              Farmers select healthy plants from
              their fields.
            </li>
            <li>
              Good-quality seeds are separated
              from damaged or weak seeds.
            </li>
            <li>
              Seeds are dried properly before storage.
            </li>
            <li>
              Clean and dry storage places help
              protect seeds from moisture.
            </li>
            <li>
              Local seeds are selected according
              to the needs of the next growing season.
            </li>
          </ul>

          <p>
            These practices help maintain local crop varieties
            and keep traditional farming knowledge alive.
          </p>
        </section>

        {/* 12. SOIL MANAGEMENT */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">12. Soil and natural resource management</span>
          <h2>How do farmers protect soil and natural resources in Maharashtra?</h2>

          <p>
            Soil and water are important resources for farming.
            Farmers use different methods to maintain soil
            fertility, reduce soil erosion and save water.
          </p>

          <div className="maharashtra-feature-grid">
            <div className="maharashtra-feature">
              <span>🐄</span>
              <h3>Farmyard manure</h3>
              <p>
                Cow dung and animal waste are used
                to add organic matter to the soil.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🍂</span>
              <h3>Compost</h3>
              <p>
                Decomposed plant waste helps improve
                soil structure and fertility.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🌿</span>
              <h3>Green manure</h3>
              <p>
                Some plants are grown and mixed
                into the soil to improve soil health.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🌳</span>
              <h3>Tree planting</h3>
              <p>
                Trees and plants help protect land
                and reduce soil erosion.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>💧</span>
              <h3>Water conservation</h3>
              <p>
                Farm ponds and rainwater harvesting
                help collect and save water.
              </p>
            </div>

            <div className="maharashtra-feature">
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
        <section className="maharashtra-card">
          <span className="maharashtra-number">13. Animal husbandry</span>
          <h2>What is the role of animal husbandry in Maharashtra agriculture?</h2>

          <p>
            Animal husbandry means raising and caring
            for animals such as cows, buffaloes, goats,
            sheep and poultry birds.
          </p>

          <p>
            It is an important part of rural life in Maharashtra.
            Animals provide milk, manure, food and
            additional income to farming families.
          </p>

          <div className="maharashtra-feature-grid">
            <div className="maharashtra-feature">
              <span>🐄</span>
              <h3>Cattle</h3>
              <p>
                Cows and bullocks provide milk, manure
                and support for farm work.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🐃</span>
              <h3>Buffaloes</h3>
              <p>
                Buffaloes are mainly raised
                for milk production.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🐐</span>
              <h3>Goats</h3>
              <p>
                Goats are raised for milk, meat
                and additional income.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🐑</span>
              <h3>Sheep</h3>
              <p>
                Sheep are raised for wool, meat
                and other products.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🐔</span>
              <h3>Poultry</h3>
              <p>
                Poultry farming provides eggs,
                meat and income.
              </p>
            </div>
          </div>

          <p>
            Animal dung is also useful for preparing
            organic manure for agricultural fields.
          </p>
        </section>

        {/* 14. CHALLENGES */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">14. Agricultural problems</span>
          <h2>What are the major agricultural problems in Maharashtra?</h2>

          <p>
            Farmers in Maharashtra face many challenges
            because of irregular rainfall, water shortages
            and changing farming conditions.
          </p>

          <ul className="maharashtra-list">
            <li>
              <strong>Irregular rainfall:</strong> Uneven
              monsoon rainfall can damage crops.
            </li>
            <li>
              <strong>Drought:</strong> Some regions
              face long periods of water shortage.
            </li>
            <li>
              <strong>Groundwater shortage:</strong>
              Excessive use of groundwater can lower
              water levels.
            </li>
            <li>
              <strong>Soil erosion:</strong> Heavy rainfall
              and poor land management can remove
              fertile topsoil.
            </li>
            <li>
              <strong>Pests and diseases:</strong> Crop
              pests and diseases can reduce production.
            </li>
            <li>
              <strong>High farming costs:</strong> Seeds,
              fertilisers, labour and machinery can
              increase farming expenses.
            </li>
            <li>
              <strong>Market problems:</strong> Changes
              in crop prices can affect farmers' income.
            </li>
            <li>
              <strong>Water management:</strong> Limited
              water affects crop production in dry regions.
            </li>
          </ul>

          <p>
            Better water management, suitable crop selection,
            soil protection and market support can help
            reduce these problems.
          </p>
        </section>

        {/* 15. MODERN IMPROVEMENTS */}
        <section className="maharashtra-card">
          <span className="maharashtra-number">15. Modern improvements and sustainable agriculture</span>
          <h2>How can modern methods improve agriculture in Maharashtra?</h2>

          <p>
            Modern farming methods can help farmers
            improve crop production and use natural
            resources more carefully. Traditional
            knowledge can also be combined with
            modern technology.
          </p>

          <div className="maharashtra-feature-grid">
            <div className="maharashtra-feature">
              <span>💧</span>
              <h3>Drip irrigation</h3>
              <p>
                It supplies water near plant roots
                and can reduce water wastage.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🌧️</span>
              <h3>Rainwater harvesting</h3>
              <p>
                Rainwater is collected and stored
                for future use.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🌱</span>
              <h3>Improved seeds</h3>
              <p>
                Suitable quality seeds can support
                better crop growth and production.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🚜</span>
              <h3>Farm machines</h3>
              <p>
                Tractors and other machines can save
                time and reduce physical work.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>🧪</span>
              <h3>Soil testing</h3>
              <p>
                Soil testing helps farmers understand
                the nutrient needs of their fields.
              </p>
            </div>

            <div className="maharashtra-feature">
              <span>♻️</span>
              <h3>Sustainable farming</h3>
              <p>
                Crop rotation, organic matter and
                careful water use help protect
                natural resources.
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
        <section className="maharashtra-card maharashtra-conclusion">
          <span className="maharashtra-number">16. Conclusion</span>
          <div className="maharashtra-conclusion-icon">🌾</div>

          <h2>What have we learned about agriculture in Maharashtra?</h2>

          <p>
            Agriculture is an important part of Maharashtra's
            economy and rural life. The state has different
            farming regions, and each region grows crops
            according to its soil, climate and water availability.
          </p>

          <p>
            Farmers grow crops such as Cotton, Sugarcane,
            Soybean, Jowar, Bajra, Rice and pulses.
            Traditional methods such as crop rotation,
            seed saving and organic manure are still useful.
          </p>

          <p>
            Water conservation methods, farm ponds and
            irrigation systems help farmers manage
            water in different regions of the state.
          </p>

          <p>
            By protecting traditional knowledge and using
            suitable modern methods, farmers can improve
            soil health, save water and support sustainable
            agriculture in Maharashtra.
          </p>

          <div className="maharashtra-final-message">
            <strong>
              Traditional knowledge and modern farming
              methods can work together for a better
              agricultural future in Maharashtra.
            </strong>
          </div>
        </section>

        {/* BACK TO REGIONS */}
        <div className="maharashtra-back">
          <Link to="/regions">
            ← Back to Regions
          </Link>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="maharashtra-footer">
        <div className="maharashtra-footer-content">
          <h2>IAKIS</h2>

          <p>
            Preserving India's Indigenous Agricultural Knowledge
            for future generations.
          </p>

          <div className="maharashtra-footer-bottom">
            © 2026 IAKIS | Academic project
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Maharashtra;
