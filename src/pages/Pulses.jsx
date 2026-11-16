
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Pulses.css";

import logo from "./assets/iakis-logo.png";
import pulsesImage from "./assets/pulses.jpg";

function Pulses() {
  return (
    <div className="app organic-page millets-page pulses-page">

      {/* Navbar */}
      <nav className="navbar">
        <Link to="/" className="logo">
          <img src={logo} alt="IAKIS logo" />
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/crops">Crops</Link>
        </div>
      </nav>

      {/* Hero section */}
      <header className="millet-header">
        <div className="millet-header-content">
          <span className="millet-tag">Traditional Indian crops</span>

          <h1> Pulses </h1>

          <p>
            Explore the importance, types, cultivation methods, nutritional
            value and traditional knowledge of pulses in Indian agriculture.
          </p>

          <a href="#introduction" className="millet-start-btn">
            Start learning
          </a>
        </div>

        <div className="millet-hero-image">
          <img src={pulsesImage} alt="Different types of pulses" />
        </div>
      </header>

      {/* Main content */}
      <main className="millet-content">

        {/* 01 */}
        <section className="millet-card" id="introduction">
          <span className="millet-number">01</span>
          <h2>What are pulses?</h2>

          <p>
            Pulses are the dry edible seeds of legume plants. They are an
            important part of our daily food and are rich in plant protein,
            fibre, vitamins and minerals.
          </p>

          <p>
            Common examples of pulses include chickpeas, lentils, pigeon peas,
            green gram, black gram, kidney beans and peas. They are grown by
            farmers in different parts of India.
          </p>

          <div className="millet-highlight">
            <strong>Did you know?</strong>
            <p>
              Pulses are different from many other crops because legume plants
              can work with soil bacteria to add nitrogen to the soil.
            </p>
          </div>
        </section>

        {/* 02 */}
        <section className="millet-card">
          <span className="millet-number">02</span>
          <h2>What is the importance of pulses?</h2>

          <p>
            Pulses are important for both human health and agriculture. They
            provide affordable protein and help farmers maintain soil
            fertility.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Food security</h3>
              <p>
                Pulses provide nutritious food and help meet the protein needs
                of many families.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Soil fertility</h3>
              <p>
                Many pulse plants work with helpful bacteria that fix
                atmospheric nitrogen in the soil.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Farmer income</h3>
              <p>
                Pulses provide farmers with an additional crop and can improve
                farm income when market conditions are suitable.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Crop rotation</h3>
              <p>
                Growing pulses between cereal crops can support better crop
                rotation and soil management.
              </p>
            </div>
          </div>
        </section>

        {/* 03 */}
        <section className="millet-card">
          <span className="millet-number">03</span>
          <h2>What are the main types of pulses?</h2>

          <p>
            India grows many types of pulses. Each type has different
            characteristics, growing conditions and food uses.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Chickpea (chana)</h3>
              <p>
                Chickpea is widely grown in India. It is used in dal, flour,
                snacks and many traditional dishes.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Pigeon pea (arhar)</h3>
              <p>
                Pigeon pea is a major pulse crop. Its seeds are commonly used
                to prepare dal.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Green gram (moong)</h3>
              <p>
                Green gram is a short-duration crop. Its whole seeds, split
                seeds and sprouts are used as food.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Black gram (urad)</h3>
              <p>
                Black gram is used in dal, idli, dosa and other food
                preparations.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Lentil (masoor)</h3>
              <p>
                Lentil is mainly grown in the winter season and is commonly
                used to prepare dal.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Field pea</h3>
              <p>
                Field pea is grown for its dry seeds and is used in different
                food preparations.
              </p>
            </div>
          </div>
        </section>

        {/* 04 */}
        <section className="millet-card">
          <span className="millet-number">04</span>
          <h2>What climate is suitable for pulse cultivation?</h2>

          <p>
            Different pulses need different weather conditions. Most pulses
            grow well in warm conditions, but some varieties are better suited
            to cool winter weather.
          </p>

          <ul>
            <li>
              <strong>Temperature:</strong> Many pulses grow well in moderate
              temperatures. The suitable range depends on the crop and its
              growth stage.
            </li>
            <li>
              <strong>Rainfall:</strong> Pulses generally need less water than
              many other major crops, but they need enough moisture for
              germination and growth.
            </li>
            <li>
              <strong>Sunlight:</strong> Most pulse crops need good sunlight
              for healthy plant growth.
            </li>
            <li>
              <strong>Weather:</strong> Too much rain and waterlogging can
              damage many pulse crops.
            </li>
          </ul>

          <div className="millet-highlight">
            <strong>Important point</strong>
            <p>
              Weather requirements are different for chickpea, pigeon pea,
              lentil, green gram and other pulse crops.
            </p>
          </div>
        </section>

        {/* 05 */}
        <section className="millet-card">
          <span className="millet-number">05</span>
          <h2>Which soil is suitable for pulse cultivation?</h2>

          <p>
            Pulses can grow in different types of soil, but well-drained soil
            with suitable fertility is generally preferred. The best soil
            depends on the pulse crop.
          </p>

          <ul>
            <li>
              <strong>Loamy soil:</strong> It supports good root growth and
              holds enough moisture while allowing extra water to drain.
            </li>
            <li>
              <strong>Clay loam soil:</strong> It can be suitable for some
              pulses when drainage is proper.
            </li>
            <li>
              <strong>Sandy loam soil:</strong> It can support pulse growth
              when enough moisture and nutrients are available.
            </li>
          </ul>

          <p>
            Soil should not remain waterlogged for long periods. Poor drainage
            can damage roots and increase the risk of diseases.
          </p>
        </section>

        {/* 06 */}
        <section className="millet-card">
          <span className="millet-number">06</span>
          <h2>In which season are pulses grown in India?</h2>

          <p>
            Pulses are grown in different seasons in India. The growing season
            depends on the crop, region, rainfall and local climate.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Kharif season</h3>
              <p>
                Some pulses, such as pigeon pea, green gram and black gram,
                are grown during the rainy season.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Rabi season</h3>
              <p>
                Chickpea, lentil and field pea are important winter-season
                pulse crops in many parts of India.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Summer season</h3>
              <p>
                Short-duration green gram and some other pulses can be grown
                during summer where irrigation is available.
              </p>
            </div>
          </div>

          <p>
            Farmers select the crop and sowing time according to local
            agricultural recommendations.
          </p>
        </section>

        {/* 07 */}
        <section className="millet-card">
          <span className="millet-number">07</span>
          <h2>How is the land prepared for pulse cultivation?</h2>

          <p>
            Proper field preparation helps seeds germinate and roots grow
            properly. Farmers prepare the land according to soil condition
            and the type of pulse being grown.
          </p>

          <div className="millet-process">
            <div className="millet-process-step">
              <h3>01. Ploughing</h3>
              <p>
                The field is ploughed when needed to loosen the soil and
                prepare it for sowing.
              </p>
            </div>

            <div className="millet-process-step">
              <h3>02. Breaking soil clods</h3>
              <p>
                Large soil clods are broken to make the field suitable for
                seed placement.
              </p>
            </div>

            <div className="millet-process-step">
              <h3>03. Levelling</h3>
              <p>
                The field is levelled where required to support proper water
                movement.
              </p>
            </div>

            <div className="millet-process-step">
              <h3>04. Adding organic matter</h3>
              <p>
                Well-decomposed farmyard manure or compost may be added to
                improve soil condition.
              </p>
            </div>
          </div>
        </section>

        {/* 08 */}
        <section className="millet-card">
          <span className="millet-number">08</span>
          <h2>How are pulse seeds selected and treated before sowing?</h2>

          <p>
            Good-quality seeds help farmers get healthy and uniform crop
            growth. Farmers should select suitable seeds before sowing.
          </p>

          <ul>
            <li>
              Choose clean, healthy and mature seeds of a suitable variety.
            </li>
            <li>
              Remove damaged, broken and diseased seeds.
            </li>
            <li>
              Use seeds that have good germination capacity.
            </li>
            <li>
              Treat seeds with recommended fungicides or bio-agents when
              advised for the crop and local conditions.
            </li>
            <li>
              Rhizobium inoculation can help suitable pulse crops form
              nitrogen-fixing root nodules.
            </li>
          </ul>

          <div className="millet-highlight">
            <strong>Remember</strong>
            <p>
              Seed treatment products and their doses should always follow
              agricultural recommendations and product instructions.
            </p>
          </div>
        </section>

        {/* 09 */}
        <section className="millet-card">
          <span className="millet-number">09</span>
          <h2>What are the main methods of pulse cultivation?</h2>

          <p>
            Pulse crops can be grown using different sowing methods. Farmers
            select a method according to the crop, field condition and
            available equipment.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Line sowing</h3>
              <p>
                Seeds are placed in rows at a suitable distance. This makes
                intercultural operations and weeding easier.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Broadcasting</h3>
              <p>
                Seeds are scattered over the prepared field. This method is
                simple but may result in uneven plant spacing.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Seed drilling</h3>
              <p>
                A seed drill places seeds at a suitable depth and spacing,
                helping achieve more uniform sowing.
              </p>
            </div>
          </div>

          <p>
            Correct seed rate, spacing and sowing depth are important for
            healthy plant growth.
          </p>
        </section>

        {/* 10 */}
        <section className="millet-card">
          <span className="millet-number">10</span>
          <h2>How is water managed in pulse cultivation?</h2>

          <p>
            Pulses generally need less water than many cereal crops. However,
            they still require sufficient moisture at important growth stages.
          </p>

          <ul>
            <li>
              Provide enough moisture during seed germination and early
              plant growth.
            </li>
            <li>
              Irrigation may be needed during flowering and pod development
              if the soil becomes too dry.
            </li>
            <li>
              Avoid excessive irrigation because waterlogging can damage
              pulse plants.
            </li>
            <li>
              Use proper drainage to remove extra water from the field.
            </li>
            <li>
              Mulching and suitable soil management can help conserve
              moisture in some farming systems.
            </li>
          </ul>

          <div className="millet-highlight">
            <strong>Water management tip</strong>
            <p>
              Irrigation should depend on rainfall, soil moisture, crop type
              and the growth stage of the plant.
            </p>
          </div>
        </section>

        {/* 11 */}
        <section className="millet-card">
          <span className="millet-number">11</span>
          <h2>Which nutrients and fertilizers are needed for pulses?</h2>

          <p>
            Pulse plants need nutrients for healthy roots, leaves, flowers
            and pods. Their nutrient requirement depends on soil fertility
            and the type of crop.
          </p>

          <div className="millet-nutrients">
            <div>
              <h3>Nitrogen</h3>
              <p>
                Pulses can obtain part of their nitrogen through biological
                nitrogen fixation when effective root nodules are formed.
                A suitable starter dose may still be recommended in some
                conditions.
              </p>
            </div>

            <div>
              <h3>Phosphorus</h3>
              <p>
                Phosphorus supports root development, energy transfer and
                overall plant growth.
              </p>
            </div>

            <div>
              <h3>Potassium</h3>
              <p>
                Potassium supports water regulation and helps plants maintain
                healthy growth.
              </p>
            </div>

            <div>
              <h3>Sulphur and micronutrients</h3>
              <p>
                Sulphur and certain micronutrients are also important.
                Their application depends on soil test results and crop needs.
              </p>
            </div>
          </div>

          <p>
            Farmers should use fertilizers according to soil testing and
            recommended doses instead of applying them without need.
          </p>
        </section>

        {/* 12 */}
        <section className="millet-card">
          <span className="millet-number">12</span>
          <h2>What are the major weeds, pests and diseases of pulses?</h2>

          <p>
            Weeds, insects and diseases can reduce pulse production. Regular
            field monitoring helps farmers identify problems at an early stage.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Weeds</h3>
              <p>
                Weeds compete with pulse plants for water, sunlight, nutrients
                and space. Timely weeding helps reduce this competition.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Pod borer</h3>
              <p>
                Pod borer larvae feed on flowers and developing pods and can
                cause serious crop damage.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Aphids and whiteflies</h3>
              <p>
                These insects suck plant sap. Some of them can also spread
                plant viruses.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Wilt and root rot</h3>
              <p>
                These diseases can damage roots and cause plants to wilt or
                die, especially under favourable conditions for infection.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Yellow mosaic disease</h3>
              <p>
                This viral disease affects some pulses and may cause yellow
                patches on leaves and reduced plant growth.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Leaf spots</h3>
              <p>
                Some fungal diseases cause spots on leaves and can reduce
                healthy plant growth.
              </p>
            </div>
          </div>

          <p>
            Farmers can use crop rotation, healthy seeds, resistant varieties,
            field sanitation and need-based plant protection measures.
          </p>
        </section>

        {/* 13 */}
        <section className="millet-card">
          <span className="millet-number">13</span>
          <h2>What are the traditional practices used in pulse farming?</h2>

          <p>
            Indian farmers have used traditional knowledge to grow pulses
            for generations. These practices are based on local climate,
            soil conditions and farming experience.
          </p>

          <ul>
            <li>
              <strong>Mixed cropping:</strong> Growing pulses with suitable
              crops can help farmers use available land and resources.
            </li>
            <li>
              <strong>Crop rotation:</strong> Growing pulses after cereal
              crops can support better crop diversity and soil management.
            </li>
            <li>
              <strong>Farmyard manure:</strong> Well-decomposed organic manure
              is traditionally used to improve soil condition.
            </li>
            <li>
              <strong>Local seed selection:</strong> Farmers may save healthy
              seeds from suitable plants for the next season.
            </li>
            <li>
              <strong>Traditional storage:</strong> Dry seeds are stored in
              clean and suitable storage structures to protect them from
              moisture and pests.
            </li>
          </ul>

          <div className="millet-highlight">
            <strong>Traditional knowledge</strong>
            <p>
              Traditional practices can be useful, but they should be selected
              according to local conditions and combined with suitable
              scientific recommendations.
            </p>
          </div>
        </section>

        {/* 14 */}
        <section className="millet-card">
          <span className="millet-number">14</span>
          <h2>When and how are pulses harvested and stored?</h2>

          <p>
            Pulses are harvested when most pods become mature and dry. The
            correct harvesting time depends on the crop and variety.
          </p>

          <div className="millet-process">
            <div className="millet-process-step">
              <h3>01. Checking maturity</h3>
              <p>
                Farmers check pod colour, dryness and seed maturity before
                harvesting.
              </p>
            </div>

            <div className="millet-process-step">
              <h3>02. Harvesting</h3>
              <p>
                Mature plants are cut or pulled from the field according to
                the crop and local practice.
              </p>
            </div>

            <div className="millet-process-step">
              <h3>03. Drying and threshing</h3>
              <p>
                Harvested plants are dried properly. Seeds are then separated
                from pods and plant material.
              </p>
            </div>

            <div className="millet-process-step">
              <h3>04. Cleaning and storage</h3>
              <p>
                Seeds are cleaned and dried to a safe moisture level before
                being stored in clean, dry and pest-protected containers.
              </p>
            </div>
          </div>

          <div className="millet-highlight">
            <strong>Storage tip</strong>
            <p>
              Moisture in stored pulses can encourage mould growth and insect
              damage. Always store properly dried seeds.
            </p>
          </div>
        </section>

        {/* 15 */}
        <section className="millet-card">
          <span className="millet-number">15</span>
          <h2>What are the uses and nutritional benefits of pulses?</h2>

          <p>
            Pulses are an important source of plant-based nutrition. They
            provide protein, dietary fibre, complex carbohydrates and
            important minerals.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Plant protein</h3>
              <p>
                Pulses provide protein that helps the body build and repair
                tissues.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Dietary fibre</h3>
              <p>
                Fibre supports digestion and helps maintain a healthy diet.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Minerals</h3>
              <p>
                Pulses provide minerals such as iron, potassium, magnesium
                and zinc in different amounts.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Energy</h3>
              <p>
                Pulses contain carbohydrates that provide energy to the body.
              </p>
            </div>
          </div>

          <p>
            Pulses are used to prepare dal, soups, curries, snacks, flour,
            sprouts and many traditional Indian dishes. Eating a variety of
            pulses with cereals can help provide a balanced range of nutrients.
          </p>
        </section>

        {/* 16 */}
        <section className="millet-card">
          <span className="millet-number">16</span>
          <h2>What are the challenges and sustainable practices in pulse farming?</h2>

          <p>
            Pulse farmers face several challenges that can affect crop growth
            and production. Sustainable farming practices can help reduce
            these problems and support long-term agriculture.
          </p>

          <h3>Main challenges</h3>
          <ul>
            <li>
              Irregular rainfall and drought can affect crop growth.
            </li>
            <li>
              Waterlogging can damage roots and increase disease problems.
            </li>
            <li>
              Insect pests and diseases can reduce yield.
            </li>
            <li>
              Poor-quality seeds and unsuitable sowing practices can affect
              plant establishment.
            </li>
            <li>
              Market price changes can create difficulties for farmers.
            </li>
          </ul>

          <h3>Sustainable farming practices</h3>
          <ul>
            <li>
              Grow suitable pulse varieties according to local climate and
              soil conditions.
            </li>
            <li>
              Follow crop rotation and suitable mixed-cropping practices.
            </li>
            <li>
              Use healthy seeds and recommended seed treatment.
            </li>
            <li>
              Apply fertilizers according to soil testing.
            </li>
            <li>
              Use water carefully and maintain proper field drainage.
            </li>
            <li>
              Monitor pests regularly and use integrated pest management.
            </li>
            <li>
              Add well-decomposed organic matter to improve soil health.
            </li>
          </ul>

          <div className="millet-highlight">
            <strong>Key message</strong>
            <p>
              Sustainable pulse farming protects soil, uses resources wisely
              and supports reliable crop production.
            </p>
          </div>
        </section>

        {/* Separate conclusion */}
        <section className="millet-card millet-conclusion">
          <h2>Conclusion</h2>

          <p>
            Pulses are an important part of Indian agriculture and daily food.
            They provide plant protein, fibre and minerals while supporting
            soil fertility through biological nitrogen fixation.
          </p>

          <p>
            By using healthy seeds, proper crop management, balanced nutrients,
            careful water use and sustainable farming practices, farmers can
            improve pulse production and protect natural resources.
          </p>

          <p>
            Traditional farming knowledge and modern agricultural methods
            together can help make pulse cultivation more productive and
            sustainable.
          </p>
        </section>

        {/* Back to crops */}
        <div className="millet-back">
          <Link to="/crops">← Back to crops</Link>
        </div>

      </main>

      {/* Footer */}
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

export default Pulses;
