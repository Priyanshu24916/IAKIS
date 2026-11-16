import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Kerala.css";

import logo from "./assets/iakis-logo.png";
import keralaImage from "./assets/kerala.jpg";

function Kerala() {
  return (
    <div className="app organic-page kerala-page">

      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="IAKIS logo" />
          </Link>
        </div>
      </nav>

      {/* HERO HEADER */}
      <header className="kerala-header">
        <div className="kerala-header-content">
          <span className="kerala-tag">
            Traditional agriculture in India
          </span>

          <h1>Agriculture in Kerala</h1>

          <p>
            Explore the traditional farming methods, major crops,
            water management systems, local seeds and agricultural
            knowledge of Kerala.
          </p>

          <a href="#kerala-introduction" className="kerala-start-btn">
            Start learning ↓
          </a>
        </div>

        <div className="kerala-hero-image">
          <img src={keralaImage} alt="Agricultural fields in Kerala" />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="kerala-content">

        {/* 01. INTRODUCTION */}
        <section className="kerala-card" id="kerala-introduction">
          <span className="kerala-number">01. Introduction</span>
          <h2>What is the importance of agriculture in Kerala?</h2>

          <p>
            Agriculture is an important part of life in Kerala.
            Many people depend on farming for food, income
            and employment.
          </p>

          <p>
            Kerala has a warm and humid climate with good rainfall.
            Its land includes coastal areas, plains, hills
            and mountain regions. These different conditions
            support many types of crops.
          </p>

          <p>
            Farmers grow crops such as Rice, Coconut, Rubber,
            Black Pepper, Cardamom, Tea, Coffee, Banana
            and Tapioca.
          </p>

          <p>
            Traditional farming in Kerala uses local knowledge,
            natural resources, mixed cropping and different
            methods of water management.
          </p>

          <div className="kerala-example">
            <h3>🌾 Simple example</h3>
            <p>
              In many parts of Kerala, farmers grow Coconut,
              Banana and Black Pepper together on the same farm.
            </p>
          </div>
        </section>

        {/* 02. HISTORY */}
        <section className="kerala-card">
          <span className="kerala-number">02. History of farming</span>
          <h2>How has traditional farming developed in Kerala?</h2>

          <p>
            Farming in Kerala has a long history.
            People have used local knowledge to grow crops
            according to the climate, soil and land conditions.
          </p>

          <p>
            In earlier times, farmers mainly depended on
            traditional tools, local seeds, family labour
            and natural resources.
          </p>

          <ul className="kerala-list">
            <li>
              Wooden ploughs and simple tools were used
              to prepare agricultural fields.
            </li>
            <li>
              Cattle and buffaloes helped farmers
              in different farming activities.
            </li>
            <li>
              Farmers saved healthy seeds for the
              next growing season.
            </li>
            <li>
              Cow dung, leaves and plant waste were
              used to prepare natural manure.
            </li>
            <li>
              Ponds, wells, canals and traditional
              water systems supported farming.
            </li>
          </ul>

          <p>
            These practices helped farming communities
            use local resources and pass farming knowledge
            from one generation to another.
          </p>
        </section>

        {/* 03. CLIMATE */}
        <section className="kerala-card">
          <span className="kerala-number">03. Climate and geography</span>
          <h2>What are the climate and geographical conditions of Kerala?</h2>

          <p>
            Kerala is located in the south-western part of India.
            The Arabian Sea lies to its west, while the Western
            Ghats are found along its eastern side.
          </p>

          <p>
            Kerala has a tropical climate. The state receives
            rainfall mainly from the south-west monsoon and
            the north-east monsoon.
          </p>

          <div className="kerala-feature-grid">
            <div className="kerala-feature">
              <span>☀️</span>
              <h3>Summer</h3>
              <p>
                Summers are generally warm and humid.
                Farmers need to manage soil moisture
                during dry periods.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🌧️</span>
              <h3>Monsoon</h3>
              <p>
                Kerala receives heavy rainfall during
                the monsoon season. It supports many
                crops and farming activities.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🌿</span>
              <h3>Winter</h3>
              <p>
                The weather is generally mild.
                Different crops continue to grow
                according to local conditions.
              </p>
            </div>
          </div>

          <div className="kerala-note">
            <strong>Important point:</strong> Rainfall and
            temperature are not the same in every part
            of Kerala. Coastal areas, midlands and hills
            have different farming conditions.
          </div>
        </section>

        {/* 04. SOIL */}
        <section className="kerala-card">
          <span className="kerala-number">04. Soil types</span>
          <h2>What types of soil are found in Kerala?</h2>

          <p>
            Kerala has different soil types because of
            its rainfall, landforms, rivers and natural
            conditions. Soil type affects the crops
            that farmers can grow.
          </p>

          <div className="kerala-feature-grid">
            <div className="kerala-feature">
              <h3>Coastal alluvial soil</h3>
              <p>
                It is found near the coast.
                Coconut and other suitable crops
                are grown in these areas.
              </p>
            </div>

            <div className="kerala-feature">
              <h3>Laterite soil</h3>
              <p>
                It is common in many midland areas.
                Coconut, Rubber and other crops
                are grown with proper soil care.
              </p>
            </div>

            <div className="kerala-feature">
              <h3>Red soil</h3>
              <p>
                It is found in some southern areas.
                Banana, Coconut and other crops
                can grow in suitable conditions.
              </p>
            </div>

            <div className="kerala-feature">
              <h3>Hill soil</h3>
              <p>
                It is found in hilly regions.
                It supports crops such as Coffee,
                Pepper and other plantation crops.
              </p>
            </div>

            <div className="kerala-feature">
              <h3>Alluvial soil</h3>
              <p>
                It is found in river valleys and lowlands.
                Rice, Banana and vegetables are grown
                in suitable areas.
              </p>
            </div>

            <div className="kerala-feature">
              <h3>Kari and saline soil</h3>
              <p>
                These soils occur in some low-lying
                and coastal areas. Special farming
                methods are needed to manage them.
              </p>
            </div>
          </div>

          <div className="kerala-example">
            <h3>Important point</h3>
            <p>
              Adding organic matter, preventing soil erosion
              and selecting suitable crops help maintain
              soil health.
            </p>
          </div>
        </section>

        {/* 05. MAJOR CROPS */}
        <section className="kerala-card">
          <span className="kerala-number">05. Major crops</span>
          <h2>What are the major crops grown in Kerala?</h2>

          <p>
            Kerala grows food crops, plantation crops,
            spices, fruits and tuber crops. Crop selection
            depends on rainfall, soil, land and local conditions.
          </p>

          <h3 className="kerala-subheading">Food and fruit crops</h3>

          <div className="kerala-variety-grid">
            <div className="kerala-variety">
              <h3>1. Rice</h3>
              <p>
                Rice is an important food crop of Kerala.
                It is mainly grown in lowland areas
                such as Kuttanad and Palakkad.
              </p>
            </div>

            <div className="kerala-variety">
              <h3>2. Banana</h3>
              <p>
                Banana is grown in many parts of Kerala.
                It is used as food and also has
                cultural importance.
              </p>
            </div>

            <div className="kerala-variety">
              <h3>3. Tapioca</h3>
              <p>
                Tapioca is an important tuber crop.
                Its roots are used as food in many
                households.
              </p>
            </div>

            <div className="kerala-variety">
              <h3>4. Vegetables</h3>
              <p>
                Farmers grow vegetables such as
                Brinjal, Okra, Tomato and different
                leafy vegetables.
              </p>
            </div>
          </div>

          <h3 className="kerala-subheading">Plantation and spice crops</h3>

          <div className="kerala-variety-grid">
            <div className="kerala-variety">
              <h3>5. Coconut</h3>
              <p>
                Coconut is one of the most important
                crops of Kerala. It is used for food,
                oil and many household products.
              </p>
            </div>

            <div className="kerala-variety">
              <h3>6. Rubber</h3>
              <p>
                Rubber is an important plantation crop.
                Its latex is used to make different
                rubber products.
              </p>
            </div>

            <div className="kerala-variety">
              <h3>7. Black Pepper</h3>
              <p>
                Black Pepper is an important spice crop.
                Kerala is well known for its traditional
                pepper cultivation.
              </p>
            </div>

            <div className="kerala-variety">
              <h3>8. Cardamom</h3>
              <p>
                Cardamom is mainly grown in the
                high-range areas. It is used as
                a spice and flavouring agent.
              </p>
            </div>

            <div className="kerala-variety">
              <h3>9. Tea</h3>
              <p>
                Tea is grown in the high ranges
                of Kerala. Its leaves are processed
                to prepare tea.
              </p>
            </div>

            <div className="kerala-variety">
              <h3>10. Coffee</h3>
              <p>
                Coffee is grown mainly in the
                highland regions. It is an important
                plantation crop.
              </p>
            </div>
          </div>

          <div className="kerala-note">
            <strong>Remember:</strong> Rice, Coconut, Rubber,
            Black Pepper, Cardamom, Tea and Coffee are
            important crops of Kerala.
          </div>
        </section>

        {/* 06. TRADITIONAL FARMING */}
        <section className="kerala-card">
          <span className="kerala-number">06. Traditional farming methods</span>
          <h2>What traditional farming methods are used in Kerala?</h2>

          <p>
            Traditional farming in Kerala uses local
            knowledge and natural resources. Farmers
            grow different crops according to the
            land, climate and available water.
          </p>

          <ul className="kerala-list">
            <li>
              <strong>Mixed cropping:</strong> Different
              crops are grown together on the same farm.
            </li>
            <li>
              <strong>Homestead farming:</strong> Farmers
              grow fruits, vegetables, spices and other
              crops around their homes.
            </li>
            <li>
              <strong>Organic manure:</strong> Cow dung,
              compost and plant waste are used to
              improve soil fertility.
            </li>
            <li>
              <strong>Local seeds:</strong> Farmers
              preserve suitable local seeds for
              future cultivation.
            </li>
            <li>
              <strong>Traditional tools:</strong> Simple
              tools and animal power were used
              for different farm activities.
            </li>
            <li>
              <strong>Water management:</strong> Ponds,
              wells and canals help supply water
              to agricultural fields.
            </li>
          </ul>

          <p>
            These methods help farmers use land,
            water and other resources carefully.
          </p>
        </section>

        {/* 07. WATER CONSERVATION */}
        <section className="kerala-card">
          <span className="kerala-number">07. Traditional water management</span>
          <h2>How do traditional water management systems work in Kerala?</h2>

          <p>
            Water is very important for agriculture in Kerala.
            Farmers use rainfall, rivers, ponds, wells
            and canals to meet the water needs of crops.
          </p>

          <div className="kerala-variety-grid">
            <div className="kerala-variety">
              <h3>1. Ponds</h3>
              <p>
                Traditional ponds collect and store
                rainwater. They can support irrigation
                and other household needs.
              </p>
            </div>

            <div className="kerala-variety">
              <h3>2. Wells</h3>
              <p>
                Wells provide groundwater for
                household use and small-scale
                farming activities.
              </p>
            </div>

            <div className="kerala-variety">
              <h3>3. Canals</h3>
              <p>
                Canals carry water from rivers
                and other sources to agricultural
                fields.
              </p>
            </div>

            <div className="kerala-variety">
              <h3>4. Rainwater harvesting</h3>
              <p>
                Rainwater is collected from rooftops
                and other surfaces for later use.
              </p>
            </div>
          </div>

          <p>
            Proper water storage and careful use
            help farmers manage water during
            periods of low rainfall.
          </p>

          <div className="kerala-note">
            <strong>Important point:</strong> Regular cleaning
            and maintenance of ponds, wells and canals
            help keep water sources useful.
          </div>
        </section>

        {/* 08. POKKALI AND KAIPAD */}
        <section className="kerala-card">
          <span className="kerala-number">08. Pokkali and Kaipad farming systems</span>
          <h2>What are the traditional Pokkali and Kaipad farming systems?</h2>

          <p>
            Pokkali and Kaipad are special traditional
            rice farming systems found in the coastal
            areas of Kerala.
          </p>

          <p>
            These systems are designed to manage
            waterlogged land and the effect of
            saline water. Farmers use local knowledge
            and suitable rice varieties.
          </p>

          <div className="kerala-feature-grid">
            <div className="kerala-feature">
              <span>🌾</span>
              <h3>Pokkali farming</h3>
              <p>
                Pokkali rice is grown in coastal
                waterlogged areas, mainly in parts
                of Ernakulam, Alappuzha and Thrissur.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🌱</span>
              <h3>Kaipad farming</h3>
              <p>
                Kaipad is a traditional rice farming
                system found mainly in the coastal
                areas of northern Kerala.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🦐</span>
              <h3>Rice and fish farming</h3>
              <p>
                In some Pokkali areas, rice cultivation
                is followed by fish or prawn farming.
              </p>
            </div>
          </div>

          <p>
            These systems show how farming communities
            have learned to work with local water
            and soil conditions.
          </p>

          <div className="kerala-example">
            <h3>🌾 Simple example</h3>
            <p>
              In some Pokkali fields, farmers grow
              rice during the suitable season and
              use the fields for prawn farming later.
            </p>
          </div>
        </section>

        {/* 09. SEASONAL FARMING */}
        <section className="kerala-card">
          <span className="kerala-number">09. Seasonal farming</span>
          <h2>How do farmers follow different farming seasons in Kerala?</h2>

          <p>
            Farmers in Kerala plan crop activities
            according to rainfall, temperature and
            water availability.
          </p>

          <div className="kerala-feature-grid">
            <div className="kerala-feature">
              <span>🌧️</span>
              <h3>Virippu season</h3>
              <p>
                This is the first main rice-growing
                season. It generally begins with
                the south-west monsoon.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🌾</span>
              <h3>Mundakan season</h3>
              <p>
                This is another important rice-growing
                season. It is mainly followed after
                the main monsoon period.
              </p>
            </div>

            <div className="kerala-feature">
              <span>☀️</span>
              <h3>Puncha season</h3>
              <p>
                This is the third rice-growing season
                in suitable areas. It is generally
                grown during the drier months.
              </p>
            </div>
          </div>

          <p>
            The exact timing of these seasons can
            change according to the district,
            local weather and water conditions.
          </p>
        </section>

        {/* 10. MIXED CROPPING */}
        <section className="kerala-card">
          <span className="kerala-number">10. Mixed cropping and homestead farming</span>
          <h2>What is the importance of mixed cropping in Kerala?</h2>

          <p>
            Mixed cropping means growing two or more
            crops together on the same piece of land.
            It is a common practice in many parts of Kerala.
          </p>

          <p>
            Homestead farming is another traditional
            practice. Farmers grow different crops
            around their houses according to available
            space and local conditions.
          </p>

          <div className="kerala-feature-grid">
            <div className="kerala-feature">
              <span>🥥</span>
              <h3>Coconut</h3>
              <p>
                Coconut trees are grown as the
                main crop in many homestead farms.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🌶️</span>
              <h3>Black Pepper</h3>
              <p>
                Pepper vines are grown with support
                from suitable trees.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🍌</span>
              <h3>Banana</h3>
              <p>
                Banana plants are grown in open
                spaces between other crops.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🍍</span>
              <h3>Pineapple</h3>
              <p>
                Pineapple is grown as an intercrop
                in suitable plantations.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🌿</span>
              <h3>Spices</h3>
              <p>
                Ginger, Turmeric and other spices
                are grown in suitable spaces.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🥭</span>
              <h3>Fruit trees</h3>
              <p>
                Mango and Jackfruit trees provide
                food and additional farm income.
              </p>
            </div>
          </div>

          <div className="kerala-note">
            <strong>Remember:</strong> Mixed cropping
            makes better use of available land and
            helps farmers earn income from different crops.
          </div>
        </section>

        {/* 11. TRADITIONAL SEEDS */}
        <section className="kerala-card">
          <span className="kerala-number">11. Traditional seeds and varieties</span>
          <h2>How do farmers select and preserve traditional seeds in Kerala?</h2>

          <p>
            Traditional seeds are local crop varieties
            that farmers have grown and selected
            over many generations.
          </p>

          <p>
            Kerala has different local rice varieties
            and other crop varieties that are suitable
            for different soil and water conditions.
          </p>

          <ul className="kerala-list">
            <li>
              Farmers select healthy plants
              from their fields.
            </li>
            <li>
              Good-quality and mature seeds
              are separated after harvesting.
            </li>
            <li>
              Seeds are dried properly before storage.
            </li>
            <li>
              Dry containers are used to protect
              seeds from moisture.
            </li>
            <li>
              Local rice varieties such as Pokkali
              are grown in suitable coastal conditions.
            </li>
          </ul>

          <p>
            Seed preservation protects local crop
            diversity and keeps traditional farming
            knowledge alive.
          </p>
        </section>

        {/* 12. NATURAL MANURE */}
        <section className="kerala-card">
          <span className="kerala-number">12. Organic manure and natural resources</span>
          <h2>How do farmers use natural manure to improve soil in Kerala?</h2>

          <p>
            Natural manure is important in traditional
            farming. It adds organic matter to the soil
            and helps maintain soil health.
          </p>

          <div className="kerala-feature-grid">
            <div className="kerala-feature">
              <span>🐄</span>
              <h3>Cow dung</h3>
              <p>
                Cow dung is used to prepare farmyard
                manure for agricultural fields.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🍂</span>
              <h3>Compost</h3>
              <p>
                Decomposed leaves and plant waste
                help improve soil quality.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🌿</span>
              <h3>Green manure</h3>
              <p>
                Green plants are added to the soil
                to increase organic matter.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🥥</span>
              <h3>Coconut waste</h3>
              <p>
                Coconut leaves and other suitable
                farm waste can be used for composting.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🌱</span>
              <h3>Crop residues</h3>
              <p>
                Suitable crop remains can be returned
                to the soil as organic matter.
              </p>
            </div>

            <div className="kerala-feature">
              <span>♻️</span>
              <h3>Farm recycling</h3>
              <p>
                Reusing farm waste helps reduce
                waste and supports natural farming.
              </p>
            </div>
          </div>
        </section>

        {/* 13. ANIMAL HUSBANDRY */}
        <section className="kerala-card">
          <span className="kerala-number">13. Animal husbandry and integrated farming</span>
          <h2>What is the role of animal husbandry in Kerala agriculture?</h2>

          <p>
            Animal husbandry means raising and caring
            for animals such as cows, buffaloes, goats,
            poultry and ducks.
          </p>

          <p>
            Animals support rural families by providing
            milk, eggs, meat, manure and additional income.
          </p>

          <div className="kerala-feature-grid">
            <div className="kerala-feature">
              <span>🐄</span>
              <h3>Cattle</h3>
              <p>
                Cows and buffaloes provide milk
                and farmyard manure.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🐐</span>
              <h3>Goats</h3>
              <p>
                Goats are raised for milk, meat
                and additional income.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🐔</span>
              <h3>Poultry</h3>
              <p>
                Poultry farming provides eggs,
                meat and income to rural families.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🦆</span>
              <h3>Ducks</h3>
              <p>
                Duck rearing is common in some
                wetland farming areas.
              </p>
            </div>
          </div>

          <p>
            Integrated farming combines crops,
            animals and sometimes fish farming.
            It helps farmers use farm resources
            in a better way.
          </p>
        </section>

        {/* 14. CHALLENGES */}
        <section className="kerala-card">
          <span className="kerala-number">14. Agricultural problems</span>
          <h2>What are the major agricultural problems in Kerala?</h2>

          <p>
            Farmers in Kerala face different challenges
            because of changing weather, land conditions,
            rising costs and market problems.
          </p>

          <ul className="kerala-list">
            <li>
              <strong>Heavy rainfall:</strong> Heavy rain
              can cause floods and damage crops.
            </li>
            <li>
              <strong>Soil erosion:</strong> Heavy rain
              can remove fertile topsoil, especially
              in hilly areas.
            </li>
            <li>
              <strong>Waterlogging:</strong> Too much
              water can damage crops in lowland fields.
            </li>
            <li>
              <strong>Climate change:</strong> Changes
              in rainfall and temperature can affect
              crop production.
            </li>
            <li>
              <strong>High farming costs:</strong> Seeds,
              labour, fertilizers and other inputs
              can be expensive.
            </li>
            <li>
              <strong>Labour shortage:</strong> Farmers
              may face difficulty in finding enough
              workers for farm activities.
            </li>
            <li>
              <strong>Market problems:</strong> Changes
              in crop prices can affect farmers' income.
            </li>
            <li>
              <strong>Wild animal damage:</strong>
              Wild animals can damage crops in
              some farming areas.
            </li>
          </ul>

          <p>
            Better planning, crop protection, soil
            conservation and suitable farming methods
            can help reduce these problems.
          </p>
        </section>

        {/* 15. MODERN IMPROVEMENTS */}
        <section className="kerala-card">
          <span className="kerala-number">15. Modern improvements and sustainable agriculture</span>
          <h2>How can modern methods improve agriculture in Kerala?</h2>

          <p>
            Modern farming methods can help farmers
            improve crop production and manage
            natural resources more carefully.
            Traditional knowledge can also be combined
            with modern technology.
          </p>

          <div className="kerala-feature-grid">
            <div className="kerala-feature">
              <span>💧</span>
              <h3>Drip irrigation</h3>
              <p>
                It supplies water near plant roots
                and can reduce water wastage.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🌧️</span>
              <h3>Rainwater harvesting</h3>
              <p>
                Rainwater is collected and stored
                for use during dry periods.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🌱</span>
              <h3>Improved seeds</h3>
              <p>
                Good-quality and suitable seeds
                can support healthy crop growth.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🚜</span>
              <h3>Farm machines</h3>
              <p>
                Machines can save time and reduce
                physical work during farming.
              </p>
            </div>

            <div className="kerala-feature">
              <span>🧪</span>
              <h3>Soil testing</h3>
              <p>
                Soil testing helps farmers understand
                the nutrient needs of their fields.
              </p>
            </div>

            <div className="kerala-feature">
              <span>♻️</span>
              <h3>Sustainable farming</h3>
              <p>
                Crop diversity, organic matter and
                careful water use help protect nature.
              </p>
            </div>
          </div>

          <p>
            These improvements can help farmers
            increase production while protecting
            soil, water and the environment.
          </p>
        </section>

        {/* 16. CONCLUSION */}
        <section className="kerala-card kerala-conclusion">
          <span className="kerala-number">16. Conclusion</span>
          <div className="kerala-conclusion-icon">🌾</div>

          <h2>What have we learned about agriculture in Kerala?</h2>

          <p>
            Agriculture in Kerala is shaped by its
            tropical climate, good rainfall, different
            soil types and varied land conditions.
            Farmers grow crops such as Rice, Coconut,
            Rubber, Black Pepper, Cardamom, Tea and Coffee.
          </p>

          <p>
            Traditional farming methods like mixed cropping,
            homestead farming, Pokkali and Kaipad systems
            show how people have used local knowledge
            to manage land and water.
          </p>

          <p>
            Animal husbandry and integrated farming
            also support rural families by providing
            food, manure and additional income.
          </p>

          <p>
            By protecting traditional knowledge and
            using suitable modern methods, farmers
            can improve soil health, manage water
            and support sustainable agriculture in Kerala.
          </p>

          <div className="kerala-final-message">
            <strong>
              Traditional farming knowledge and careful
              use of natural resources are important
              for a sustainable agricultural future in Kerala.
            </strong>
          </div>
        </section>

        {/* BACK TO REGIONS */}
        <div className="kerala-back">
          <Link to="/regions">
            ← Back to Regions
          </Link>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="kerala-footer">
        <div className="kerala-footer-content">
          <h2>IAKIS</h2>

          <p>
            Preserving India's Indigenous Agricultural Knowledge
            for future generations.
          </p>

          <div className="kerala-footer-bottom">
            © 2026 IAKIS | Academic project
          </div>
        </div>
      </footer>

    </div>
  );
}

export default Kerala;