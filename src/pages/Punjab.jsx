import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Punjab.css";

import logo from "./assets/iakis-logo.png";
import punjabImage from "./assets/punjab.jpg";

function Punjab() {
  return (
    <div className="app organic-page punjab-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="IAKIS logo" />
          </Link>
        </div>
      </nav>

      {/* HERO HEADER */}
      <header className="punjab-header">
        <div className="punjab-header-content">
          <span className="punjab-tag">
            Traditional agriculture in India
          </span>

          <h1>Agriculture in Punjab</h1>

          <p>
            Explore the traditional farming methods, major crops,
            irrigation systems, local seeds and agricultural
            knowledge of Punjab.
          </p>

          <a href="#punjab-introduction" className="punjab-start-btn">
            Start learning ↓
          </a>
        </div>

        <div className="punjab-hero-image">
          <img src={punjabImage} alt="Agricultural fields in Punjab" />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="punjab-content">

        {/* 01. INTRODUCTION */}
        <section className="punjab-card" id="punjab-introduction">
          <span className="punjab-number">01. Introduction</span>
          <h2>What is the importance of agriculture in Punjab?</h2>

          <p>
            Agriculture is an important part of life in Punjab.
            Many people depend on farming for food, income
            and employment.
          </p>

          <p>
            Punjab is located in north-western India.
            It has fertile plains and many rivers and canals.
            These natural resources support agricultural activities.
          </p>

          <p>
            Farmers mainly grow crops such as Wheat, Rice,
            Maize, Cotton, Sugarcane, Mustard and Pulses.
            Punjab is also known for its important role
            in India's food production.
          </p>

          <p>
            Traditional farming knowledge, irrigation methods
            and modern agricultural practices have helped
            farmers develop agriculture in the state.
          </p>

          <div className="punjab-example">
            <h3>🌾 Simple example</h3>
            <p>
              Wheat and Rice are two major crops of Punjab.
              Many farmers grow them in different seasons
              using irrigation facilities.
            </p>
          </div>
        </section>

        {/* 02. HISTORY */}
        <section className="punjab-card">
          <span className="punjab-number">02. History of farming</span>
          <h2>How has traditional farming developed in Punjab?</h2>

          <p>
            Punjab has a long history of agriculture.
            Fertile land, rivers and suitable weather
            have supported farming for many generations.
          </p>

          <p>
            In earlier times, farmers mainly depended on
            traditional tools, animal power, local seeds
            and seasonal rainfall.
          </p>

          <ul className="punjab-list">
            <li>
              Bullocks were used for ploughing
              and other farm activities.
            </li>
            <li>
              Wooden ploughs and simple tools
              were used to prepare fields.
            </li>
            <li>
              Farmers saved healthy seeds
              for the next growing season.
            </li>
            <li>
              Cow dung and crop waste were
              used as natural manure.
            </li>
            <li>
              Wells, ponds and canals helped
              provide water to agricultural fields.
            </li>
          </ul>

          <p>
            Over time, farming methods changed with
            the use of tractors, tube wells, improved
            seeds and modern agricultural machines.
          </p>
        </section>

        {/* 03. CLIMATE */}
        <section className="punjab-card">
          <span className="punjab-number">03. Climate and geography</span>
          <h2>What are the climate and geographical conditions of Punjab?</h2>

          <p>
            Punjab is located in the north-western part
            of India. It has mostly flat and fertile plains.
            The state has rivers, canals and agricultural land.
          </p>

          <p>
            Punjab has a mainly subtropical climate.
            Summers are hot, winters are cool and most
            rainfall occurs during the monsoon season.
          </p>

          <div className="punjab-feature-grid">
            <div className="punjab-feature">
              <span>☀️</span>
              <h3>Summer</h3>
              <p>
                Summers are hot and dry.
                Irrigation is important for crops
                during this period.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🌧️</span>
              <h3>Monsoon</h3>
              <p>
                Most rainfall occurs during the monsoon.
                It supports Kharif crops such as Rice and Maize.
              </p>
            </div>

            <div className="punjab-feature">
              <span>❄️</span>
              <h3>Winter</h3>
              <p>
                Winters are cool and support
                Rabi crops such as Wheat, Gram and Mustard.
              </p>
            </div>
          </div>

          <div className="punjab-note">
            <strong>Important point:</strong> Weather and
            rainfall can differ across Punjab. Farmers
            plan their crops according to local conditions
            and water availability.
          </div>
        </section>

        {/* 04. SOIL */}
        <section className="punjab-card">
          <span className="punjab-number">04. Soil types</span>
          <h2>What types of soil are found in Punjab?</h2>

          <p>
            Punjab has mainly alluvial soils formed by
            river deposits. These soils are generally
            fertile and support many agricultural crops.
          </p>

          <div className="punjab-feature-grid">
            <div className="punjab-feature">
              <h3>Sandy soil</h3>
              <p>
                It is found in some areas.
                It drains water quickly and needs
                proper water management.
              </p>
            </div>

            <div className="punjab-feature">
              <h3>Loamy soil</h3>
              <p>
                It contains sand, silt and clay.
                It supports many crops when
                properly managed.
              </p>
            </div>

            <div className="punjab-feature">
              <h3>Clayey soil</h3>
              <p>
                It holds more water than sandy soil.
                Proper drainage is important
                for healthy crop growth.
              </p>
            </div>

            <div className="punjab-feature">
              <h3>Alluvial soil</h3>
              <p>
                It is found in large parts of Punjab.
                It is suitable for Wheat, Rice
                and other crops.
              </p>
            </div>

            <div className="punjab-feature">
              <h3>Calcareous soil</h3>
              <p>
                It contains calcium compounds.
                Soil testing helps farmers manage
                its nutrient needs.
              </p>
            </div>
          </div>

          <div className="punjab-example">
            <h3>Important point</h3>
            <p>
              Soil testing, crop rotation and adding
              organic matter help maintain soil fertility.
            </p>
          </div>
        </section>

        {/* 05. MAJOR CROPS */}
        <section className="punjab-card">
          <span className="punjab-number">05. Major crops</span>
          <h2>What are the major crops grown in Punjab?</h2>

          <p>
            Punjab grows food crops, pulses, oilseeds
            and commercial crops. Crop selection depends
            on the season, soil and water availability.
          </p>

          <h3 className="punjab-subheading">Food crops</h3>

          <div className="punjab-variety-grid">
            <div className="punjab-variety">
              <h3>1. Wheat</h3>
              <p>
                Wheat is one of the most important
                Rabi crops of Punjab. It is mainly
                grown during the winter season.
              </p>
            </div>

            <div className="punjab-variety">
              <h3>2. Rice</h3>
              <p>
                Rice is an important Kharif crop.
                It is grown mainly during the
                monsoon season with irrigation.
              </p>
            </div>

            <div className="punjab-variety">
              <h3>3. Maize</h3>
              <p>
                Maize is grown in suitable areas.
                It is used as food and animal feed.
              </p>
            </div>

            <div className="punjab-variety">
              <h3>4. Barley</h3>
              <p>
                Barley is grown during winter
                in some areas. It is used for
                food and animal feed.
              </p>
            </div>
          </div>

          <h3 className="punjab-subheading">Pulses and commercial crops</h3>

          <div className="punjab-variety-grid">
            <div className="punjab-variety">
              <h3>5. Gram</h3>
              <p>
                Gram is an important pulse crop.
                It is grown mainly during the
                winter season.
              </p>
            </div>

            <div className="punjab-variety">
              <h3>6. Mustard</h3>
              <p>
                Mustard is an oilseed crop.
                Its seeds are used to produce
                cooking oil.
              </p>
            </div>

            <div className="punjab-variety">
              <h3>7. Cotton</h3>
              <p>
                Cotton is an important commercial
                crop. Its fibre is used by
                the textile industry.
              </p>
            </div>

            <div className="punjab-variety">
              <h3>8. Sugarcane</h3>
              <p>
                Sugarcane is grown in suitable
                areas. It is mainly used to
                produce sugar and jaggery.
              </p>
            </div>

            <div className="punjab-variety">
              <h3>9. Potato</h3>
              <p>
                Potato is an important vegetable
                crop. It is grown in the winter
                season in many areas.
              </p>
            </div>

            <div className="punjab-variety">
              <h3>10. Pulses</h3>
              <p>
                Crops such as Moong and Mash
                are grown in suitable areas
                and seasons.
              </p>
            </div>
          </div>

          <div className="punjab-note">
            <strong>Remember:</strong> Wheat, Rice, Maize,
            Cotton, Sugarcane and Mustard are important
            crops of Punjab.
          </div>
        </section>

        {/* 06. TRADITIONAL FARMING */}
        <section className="punjab-card">
          <span className="punjab-number">06. Traditional farming methods</span>
          <h2>What traditional farming methods are used in Punjab?</h2>

          <p>
            Traditional farming in Punjab is based on
            local knowledge, fertile soil and available
            water resources.
          </p>

          <ul className="punjab-list">
            <li>
              <strong>Animal power:</strong> Bullocks
              were used for ploughing and transport.
            </li>
            <li>
              <strong>Local seeds:</strong> Farmers
              selected and saved healthy seeds.
            </li>
            <li>
              <strong>Crop rotation:</strong> Different
              crops were grown in a planned order.
            </li>
            <li>
              <strong>Natural manure:</strong> Cow dung
              and compost were used to improve soil.
            </li>
            <li>
              <strong>Traditional irrigation:</strong>
              Wells and canals helped supply water.
            </li>
            <li>
              <strong>Mixed farming:</strong> Crops
              and livestock were managed together.
            </li>
          </ul>

          <p>
            These methods helped farming families
            use available resources and maintain
            agricultural activities.
          </p>
        </section>

        {/* 07. IRRIGATION */}
        <section className="punjab-card">
          <span className="punjab-number">07. Traditional irrigation systems</span>
          <h2>How do traditional irrigation systems work in Punjab?</h2>

          <p>
            Irrigation is very important in Punjab
            because rainfall alone is not enough
            for many crops.
          </p>

          <div className="punjab-variety-grid">
            <div className="punjab-variety">
              <h3>1. Wells</h3>
              <p>
                Wells were traditionally used to
                collect groundwater and supply
                water to nearby fields.
              </p>
            </div>

            <div className="punjab-variety">
              <h3>2. Persian wheel</h3>
              <p>
                It is a traditional water-lifting
                device used to bring water
                from wells to fields.
              </p>
            </div>

            <div className="punjab-variety">
              <h3>3. Canals</h3>
              <p>
                Canals carry water from rivers
                and reservoirs to agricultural
                areas.
              </p>
            </div>

            <div className="punjab-variety">
              <h3>4. Ponds</h3>
              <p>
                Village ponds collect rainwater
                and can support local water needs.
              </p>
            </div>
          </div>

          <p>
            These systems have supported farming
            in Punjab for many years. Modern irrigation
            methods are also widely used today.
          </p>

          <div className="punjab-note">
            <strong>Important point:</strong> Careful
            water use is necessary to protect
            groundwater for future generations.
          </div>
        </section>

        {/* 08. BAOLI AND WATER MANAGEMENT */}
        <section className="punjab-card">
          <span className="punjab-number">08. Traditional water management</span>
          <h2>How did traditional communities manage water in Punjab?</h2>

          <p>
            Water has always been important for
            agriculture and village life in Punjab.
            People developed different ways to
            collect, lift and distribute water.
          </p>

          <div className="punjab-process">

            <div className="punjab-process-step">
              <span>01</span>
              <div>
                <h3>Water collection</h3>
                <p>
                  Rainwater and water from nearby
                  sources were collected.
                </p>
              </div>
            </div>

            <div className="punjab-process-step">
              <span>02</span>
              <div>
                <h3>Water storage</h3>
                <p>
                  Ponds, wells and other structures
                  helped store water.
                </p>
              </div>
            </div>

            <div className="punjab-process-step">
              <span>03</span>
              <div>
                <h3>Water lifting</h3>
                <p>
                  Traditional devices such as
                  the Persian wheel helped lift
                  groundwater.
                </p>
              </div>
            </div>

            <div className="punjab-process-step">
              <span>04</span>
              <div>
                <h3>Water distribution</h3>
                <p>
                  Canals and field channels
                  carried water to agricultural land.
                </p>
              </div>
            </div>

            <div className="punjab-process-step">
              <span>05</span>
              <div>
                <h3>Crop irrigation</h3>
                <p>
                  Farmers supplied water to crops
                  according to their needs.
                </p>
              </div>
            </div>

          </div>

          <div className="punjab-example">
            <h3>🌾 Simple example</h3>
            <p>
              The Persian wheel was traditionally
              used to lift water from wells
              for irrigating nearby fields.
            </p>
          </div>
        </section>

        {/* 09. SEASONAL FARMING */}
        <section className="punjab-card">
          <span className="punjab-number">09. Seasonal farming</span>
          <h2>How do farmers follow different farming seasons in Punjab?</h2>

          <p>
            Farmers in Punjab grow crops according
            to temperature, rainfall and water availability.
            The main cropping seasons are Kharif and Rabi.
          </p>

          <div className="punjab-feature-grid">
            <div className="punjab-feature">
              <span>🌧️</span>
              <h3>Kharif season</h3>
              <p>
                Kharif crops are sown during
                the monsoon. Rice, Maize and Cotton
                are examples.
              </p>
            </div>

            <div className="punjab-feature">
              <span>❄️</span>
              <h3>Rabi season</h3>
              <p>
                Rabi crops are sown after
                the monsoon. Wheat, Gram and
                Mustard are examples.
              </p>
            </div>

            <div className="punjab-feature">
              <span>☀️</span>
              <h3>Zaid season</h3>
              <p>
                Short-duration crops such as
                vegetables and fodder can be
                grown during the summer period.
              </p>
            </div>
          </div>

          <p>
            Seasonal planning helps farmers
            select suitable crops and manage
            their fields throughout the year.
          </p>
        </section>

        {/* 10. CROP ROTATION */}
        <section className="punjab-card">
          <span className="punjab-number">10. Crop rotation and mixed farming</span>
          <h2>What is the importance of crop rotation in Punjab?</h2>

          <p>
            Crop rotation means growing different
            crops on the same field in a planned order.
            It helps farmers manage soil nutrients
            and reduce some crop problems.
          </p>

          <p>
            Mixed farming means keeping crops
            and livestock together. Both practices
            are useful parts of agriculture.
          </p>

          <div className="punjab-feature-grid">
            <div className="punjab-feature">
              <span>🌾</span>
              <h3>Wheat</h3>
              <p>
                Wheat is commonly grown
                during the Rabi season.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🌱</span>
              <h3>Rice</h3>
              <p>
                Rice is grown during
                the Kharif season in suitable fields.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🌿</span>
              <h3>Moong</h3>
              <p>
                Moong is a pulse crop that
                can be included in crop rotations.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🐄</span>
              <h3>Livestock</h3>
              <p>
                Animals provide manure
                and additional income to farmers.
              </p>
            </div>
          </div>

          <div className="punjab-note">
            <strong>Remember:</strong> Crop rotation
            helps maintain soil health and can
            reduce dependence on a single crop.
          </div>
        </section>

        {/* 11. SEEDS */}
        <section className="punjab-card">
          <span className="punjab-number">11. Traditional seeds and varieties</span>
          <h2>How do farmers select and preserve traditional seeds in Punjab?</h2>

          <p>
            Traditional seeds are local crop varieties
            that farmers have grown and selected
            over many generations.
          </p>

          <p>
            Farmers select seeds according to
            local soil, weather and crop requirements.
            Seed preservation helps protect crop diversity.
          </p>

          <ul className="punjab-list">
            <li>
              Farmers select healthy plants
              from their fields.
            </li>
            <li>
              Mature and good-quality seeds
              are separated after harvesting.
            </li>
            <li>
              Seeds are dried properly
              before storage.
            </li>
            <li>
              Dry containers help protect seeds
              from moisture and damage.
            </li>
            <li>
              Suitable local varieties are
              saved for future cultivation.
            </li>
          </ul>

          <p>
            These practices help farmers preserve
            useful seeds and traditional knowledge.
          </p>
        </section>

        {/* 12. SOIL MANAGEMENT */}
        <section className="punjab-card">
          <span className="punjab-number">12. Soil and natural resource management</span>
          <h2>How do farmers protect soil and natural resources in Punjab?</h2>

          <p>
            Soil and water are important resources
            for farming. Farmers need to maintain
            soil fertility and use water carefully.
          </p>

          <div className="punjab-feature-grid">
            <div className="punjab-feature">
              <span>🐄</span>
              <h3>Farmyard manure</h3>
              <p>
                Cow dung and animal waste
                add organic matter to the soil.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🍂</span>
              <h3>Compost</h3>
              <p>
                Decomposed plant waste helps
                improve soil structure.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🌾</span>
              <h3>Crop residues</h3>
              <p>
                Suitable crop remains can be
                returned to the soil.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🌱</span>
              <h3>Green manure</h3>
              <p>
                Green plants are added to the soil
                to improve organic matter.
              </p>
            </div>

            <div className="punjab-feature">
              <span>💧</span>
              <h3>Water management</h3>
              <p>
                Careful irrigation helps reduce
                unnecessary water use.
              </p>
            </div>

            <div className="punjab-feature">
              <span>♻️</span>
              <h3>Crop rotation</h3>
              <p>
                Growing different crops in order
                helps maintain soil health.
              </p>
            </div>
          </div>
        </section>

        {/* 13. ANIMAL HUSBANDRY */}
        <section className="punjab-card">
          <span className="punjab-number">13. Animal husbandry</span>
          <h2>What is the role of animal husbandry in Punjab agriculture?</h2>

          <p>
            Animal husbandry means raising and caring
            for animals such as cows, buffaloes,
            goats and poultry.
          </p>

          <p>
            It is an important part of rural life
            in Punjab. Livestock provides milk,
            manure and additional income to families.
          </p>

          <div className="punjab-feature-grid">
            <div className="punjab-feature">
              <span>🐄</span>
              <h3>Cows</h3>
              <p>
                Cows provide milk and manure
                for agricultural use.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🐃</span>
              <h3>Buffaloes</h3>
              <p>
                Buffaloes are important
                for milk production.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🐐</span>
              <h3>Goats</h3>
              <p>
                Goats are raised for milk,
                meat and income.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🐔</span>
              <h3>Poultry</h3>
              <p>
                Poultry farming provides eggs,
                meat and employment.
              </p>
            </div>
          </div>

          <p>
            Animal waste can also be used to prepare
            manure and improve soil fertility.
          </p>
        </section>

        {/* 14. CHALLENGES */}
        <section className="punjab-card">
          <span className="punjab-number">14. Agricultural problems</span>
          <h2>What are the major agricultural problems in Punjab?</h2>

          <p>
            Farmers in Punjab face different problems
            related to water, soil, weather and
            agricultural costs.
          </p>

          <ul className="punjab-list">
            <li>
              <strong>Groundwater shortage:</strong>
              Excessive use of groundwater has
              lowered water levels in many areas.
            </li>
            <li>
              <strong>Soil problems:</strong>
              Continuous farming and poor
              soil management can affect soil health.
            </li>
            <li>
              <strong>Crop dependence:</strong>
              Heavy dependence on Wheat and Rice
              can reduce crop diversity.
            </li>
            <li>
              <strong>Crop residue burning:</strong>
              Burning leftover crop material
              can cause air pollution.
            </li>
            <li>
              <strong>High farming costs:</strong>
              Seeds, fertilizers, machines
              and other inputs can be expensive.
            </li>
            <li>
              <strong>Climate change:</strong>
              Changes in temperature and rainfall
              can affect crop production.
            </li>
            <li>
              <strong>Market problems:</strong>
              Changes in crop prices can affect
              farmers' income.
            </li>
            <li>
              <strong>Labour shortage:</strong>
              Farmers may face difficulty
              finding enough workers.
            </li>
          </ul>

          <p>
            Crop diversification, careful water use,
            better soil management and market support
            can help reduce these problems.
          </p>
        </section>

        {/* 15. MODERN IMPROVEMENTS */}
        <section className="punjab-card">
          <span className="punjab-number">15. Modern improvements and sustainable agriculture</span>
          <h2>How can modern methods improve agriculture in Punjab?</h2>

          <p>
            Modern farming methods can help farmers
            save water, improve crop production
            and protect natural resources.
          </p>

          <div className="punjab-feature-grid">
            <div className="punjab-feature">
              <span>💧</span>
              <h3>Drip irrigation</h3>
              <p>
                It supplies water near plant roots
                and can reduce water wastage.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🌱</span>
              <h3>Direct seeded rice</h3>
              <p>
                Rice seeds are sown directly
                in the field without transplanting
                young plants.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🚜</span>
              <h3>Farm machines</h3>
              <p>
                Machines help farmers save time
                and reduce physical work.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🧪</span>
              <h3>Soil testing</h3>
              <p>
                Soil testing helps farmers
                understand the nutrient needs
                of their fields.
              </p>
            </div>

            <div className="punjab-feature">
              <span>🌾</span>
              <h3>Crop diversification</h3>
              <p>
                Growing different crops helps
                reduce dependence on only Wheat
                and Rice.
              </p>
            </div>

            <div className="punjab-feature">
              <span>♻️</span>
              <h3>Residue management</h3>
              <p>
                Machines and other methods
                can help manage crop residues
                without burning them.
              </p>
            </div>
          </div>

          <p>
            These improvements can support
            sustainable farming and protect
            soil and water for future generations.
          </p>
        </section>

        {/* 16. CONCLUSION */}
        <section className="punjab-card punjab-conclusion">
          <span className="punjab-number">16. Conclusion</span>
          <div className="punjab-conclusion-icon">🌾</div>

          <h2>What have we learned about agriculture in Punjab?</h2>

          <p>
            Agriculture in Punjab is supported by
            fertile plains, alluvial soil and
            irrigation facilities. Farmers grow
            crops such as Wheat, Rice, Maize,
            Cotton, Sugarcane and Mustard.
          </p>

          <p>
            Traditional farming methods, wells,
            canals and water-lifting systems show
            how farming communities have used
            local resources for many generations.
          </p>

          <p>
            Animal husbandry also supports rural
            families by providing milk, manure
            and additional income.
          </p>

          <p>
            By saving water, improving soil health,
            growing different crops and using
            suitable modern methods, farmers
            can support sustainable agriculture
            in Punjab.
          </p>

          <div className="punjab-final-message">
            <strong>
              Protecting soil and water while
              improving traditional farming knowledge
              is important for the agricultural future
              of Punjab.
            </strong>
          </div>
        </section>

        {/* BACK TO REGIONS */}
        <div className="punjab-back">
          <Link to="/regions">
            ← Back to Regions
          </Link>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="punjab-footer">
        <div className="punjab-footer-content">
          <h2>IAKIS</h2>

          <p>
            Preserving India's Indigenous Agricultural Knowledge
            for future generations.
          </p>

          <div className="punjab-footer-bottom">
            © 2026 IAKIS | Academic project
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Punjab;