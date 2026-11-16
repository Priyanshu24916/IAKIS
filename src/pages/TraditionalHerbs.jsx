
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./TraditionalHerbs.css";

import logo from "./assets/iakis-logo.png";
import herbsImage from "./assets/traditional-herbs.jpg";

function TraditionalHerbs() {
  return (
    <div className="app organic-page millets-page traditional-herbs-page">

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
          <span className="millet-tag">Traditional Indian plants</span>

          <h1>Learn more about traditional herbs</h1>

          <p>
            Discover the importance, types, traditional uses, cultivation
            methods and benefits of important herbs used in India.
          </p>

          <a href="#introduction" className="millet-start-btn">
            Start learning
          </a>
        </div>

        <div className="millet-hero-image">
          <img src={herbsImage} alt="Traditional herbs and medicinal plants" />
        </div>
      </header>

      {/* Main content */}
      <main className="millet-content">

        {/* 01 */}
        <section className="millet-card" id="introduction">
          <span className="millet-number">01</span>
          <h2>What are traditional herbs?</h2>

          <p>
            Traditional herbs are plants that people have used for many years
            in their daily lives. They are commonly used in traditional health
            practices, food, home care and cultural activities.
          </p>

          <p>
            In India, many families have grown and used herbs in their homes
            and gardens. Some common examples are Tulsi, Neem, Aloe vera,
            Mint, Ginger and Turmeric.
          </p>

          <p>
            These plants are an important part of India's traditional
            knowledge.
          </p>

          <div className="millet-highlight">
            <strong>Did you know?</strong>
            <p>
              Many traditional herbs are grown in home gardens and have been
              used by Indian families for generations.
            </p>
          </div>
        </section>

        {/* 02 */}
        <section className="millet-card">
          <span className="millet-number">02</span>
          <h2>What is the importance of traditional herbs?</h2>

          <p>
            Traditional herbs are important because they are connected with
            our food, culture, traditional knowledge and daily life.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Traditional knowledge</h3>
              <p>
                Herbs help preserve knowledge that has been passed from one
                generation to another.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Food and cooking</h3>
              <p>
                Many herbs are used as spices, flavouring ingredients and
                parts of traditional dishes.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Home gardening</h3>
              <p>
                Useful herbs can be grown in home gardens and small spaces.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Plant diversity</h3>
              <p>
                Growing different herbs helps maintain a variety of useful
                plants.
              </p>
            </div>
          </div>
        </section>

        {/* 03 */}
        <section className="millet-card">
          <span className="millet-number">03</span>
          <h2>What are the main types of traditional herbs?</h2>

          <p>
            India has many traditional herbs. Each plant has its own features
            and uses.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Tulsi</h3>
              <p>
                It is a common garden plant and is used in traditional
                practices and herbal preparations.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Neem</h3>
              <p>
                Its leaves, seeds and bark have different traditional uses.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Aloe vera</h3>
              <p>
                Its leaves contain a clear gel that is commonly used in
                skin-care products.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Turmeric</h3>
              <p>
                It is a common kitchen spice and is also used in traditional
                preparations.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Ginger</h3>
              <p>
                It is widely used in cooking and traditional home
                preparations.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Mint</h3>
              <p>
                Its leaves are used in chutney, drinks and many food items.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Amla</h3>
              <p>
                It is a fruit known for its vitamin C content.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Ashwagandha</h3>
              <p>
                It is a well-known plant used in traditional Ayurvedic
                preparations.
              </p>
            </div>
          </div>
        </section>

        {/* 04 */}
        <section className="millet-card">
          <span className="millet-number">04</span>
          <h2>What are the medicinal and traditional uses of herbs?</h2>

          <p>
            Many herbs have been used in Indian traditional health practices
            for generations. Different parts of plants, such as leaves, roots,
            flowers, seeds and bark, may be used in traditional preparations.
          </p>

          <ul>
            <li>
              Tulsi leaves are used in traditional herbal drinks.
            </li>
            <li>
              Neem leaves have traditional uses in home and personal-care
              practices.
            </li>
            <li>
              Aloe vera gel is commonly used in skin-care products.
            </li>
            <li>
              Ginger is used in food and traditional drinks.
            </li>
            <li>
              Turmeric is used in cooking and traditional preparations.
            </li>
            <li>
              Amla is used in food and traditional herbal products.
            </li>
          </ul>

          <div className="millet-highlight">
            <strong>Important health note</strong>
            <p>
              Traditional use does not always mean that a plant can treat or
              cure a disease. Some herbs may cause side effects or interact
              with medicines. Medical advice is important before using herbs
              for health problems.
            </p>
          </div>
        </section>

        {/* 05 */}
        <section className="millet-card">
          <span className="millet-number">05</span>
          <h2>What climate is suitable for growing traditional herbs?</h2>

          <p>
            Different herbs need different weather conditions. Many herbs
            grow well in warm climates, but some also grow in cooler
            conditions.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Tulsi</h3>
              <p>
                It grows well in warm weather and sunlight.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Neem</h3>
              <p>
                It grows well in warm and tropical climates.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Aloe vera</h3>
              <p>
                It can grow in warm and dry conditions.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Mint</h3>
              <p>
                It generally grows well in cooler conditions with enough
                moisture.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Ginger and Turmeric</h3>
              <p>
                They grow well in warm and humid conditions.
              </p>
            </div>
          </div>

          <p>
            Most herbs need suitable sunlight, air and water for healthy
            growth. Farmers should select plants according to their local
            climate.
          </p>
        </section>

        {/* 06 */}
        <section className="millet-card">
          <span className="millet-number">06</span>
          <h2>Which soil is suitable for growing traditional herbs?</h2>

          <p>
            Different herbs can grow in different types of soil. However,
            most herbs grow well in soil that is rich in organic matter and
            has proper drainage.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Loamy soil</h3>
              <p>
                It is suitable for many herbs because it holds moisture and
                allows extra water to drain.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Sandy loam soil</h3>
              <p>
                It is useful for plants like Aloe vera because water can drain
                easily.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Rich garden soil</h3>
              <p>
                It supports the growth of Tulsi, Mint and many other herbs.
              </p>
            </div>
          </div>

          <p>
            Soil should not remain full of water for a long time. Too much
            water can damage plant roots. Adding well-decomposed compost can
            improve soil quality and support healthy plant growth.
          </p>
        </section>

        {/* 07 */}
        <section className="millet-card">
          <span className="millet-number">07</span>
          <h2>In which season are traditional herbs grown in India?</h2>

          <p>
            Many traditional herbs can be grown in different seasons in India.
            The suitable season depends on the plant and local weather.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Tulsi</h3>
              <p>
                It can be grown in warm weather and in suitable conditions
                throughout much of the year.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Mint</h3>
              <p>
                It generally grows well in cooler and mild weather.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Ginger</h3>
              <p>
                It is commonly planted during the rainy season in suitable
                regions.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Turmeric</h3>
              <p>
                It is generally planted during the rainy season.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Aloe vera</h3>
              <p>
                It can grow in warm conditions and is suitable for many dry
                regions.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Neem</h3>
              <p>
                It is generally planted during the rainy season when soil
                moisture is available.
              </p>
            </div>
          </div>

          <p>
            Farmers and gardeners should follow local planting
            recommendations for better growth.
          </p>
        </section>

        {/* 08 */}
        <section className="millet-card">
          <span className="millet-number">08</span>
          <h2>How is the land prepared for growing traditional herbs?</h2>

          <p>
            Proper land preparation helps herbs grow healthy roots and leaves.
            Before planting, the soil should be made loose and suitable for
            plant growth.
          </p>

          <div className="millet-process">
            <div className="millet-process-step">
              <h3>01. Cleaning</h3>
              <p>
                Remove unwanted plants, stones and waste from the field.
              </p>
            </div>

            <div className="millet-process-step">
              <h3>02. Digging</h3>
              <p>
                Loosen the soil so that roots can grow easily.
              </p>
            </div>

            <div className="millet-process-step">
              <h3>03. Adding compost</h3>
              <p>
                Mix well-decomposed compost into the soil.
              </p>
            </div>

            <div className="millet-process-step">
              <h3>04. Levelling</h3>
              <p>
                Make the land level for proper water movement.
              </p>
            </div>

            <div className="millet-process-step">
              <h3>05. Preparing beds</h3>
              <p>
                Prepare raised beds where needed, especially for plants that
                need good drainage.
              </p>
            </div>
          </div>
        </section>

        {/* 09 */}
        <section className="millet-card">
          <span className="millet-number">09</span>
          <h2>How are traditional herbs planted and propagated?</h2>

          <p>
            Traditional herbs can be grown through seeds, cuttings, roots,
            suckers and other plant parts. The method depends on the type of
            herb.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Seeds</h3>
              <p>
                Tulsi is commonly grown from seeds.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Stem cuttings</h3>
              <p>
                Mint can be grown from healthy stem cuttings.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Offsets</h3>
              <p>
                Aloe vera is commonly propagated through small plants called
                offsets.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Rhizomes</h3>
              <p>
                Ginger and Turmeric are grown from healthy underground
                rhizomes.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Seedlings</h3>
              <p>
                Some herbs are first grown in a nursery and later planted in
                the main field.
              </p>
            </div>
          </div>

          <p>
            Healthy planting material helps plants grow properly and reduces
            the chance of poor crop establishment.
          </p>
        </section>

        {/* 10 */}
        <section className="millet-card">
          <span className="millet-number">10</span>
          <h2>How much water do traditional herbs need?</h2>

          <p>
            Different herbs need different amounts of water. Proper watering
            is important for healthy growth.
          </p>

          <ul>
            <li>
              Tulsi needs regular watering, but its soil should not remain
              waterlogged.
            </li>
            <li>
              Mint needs more regular moisture than many other herbs.
            </li>
            <li>
              Aloe vera needs less water and should be grown in well-drained
              soil.
            </li>
            <li>
              Ginger and Turmeric need sufficient moisture, especially during
              active growth.
            </li>
            <li>
              Neem plants need watering during early growth, but established
              trees can tolerate dry conditions.
            </li>
          </ul>

          <div className="millet-highlight">
            <strong>Water management tip</strong>
            <p>
              Water should be given according to soil moisture and weather.
              Too much water can cause root damage and plant diseases.
            </p>
          </div>
        </section>

        {/* 11 */}
        <section className="millet-card">
          <span className="millet-number">11</span>
          <h2>Which nutrients and fertilizers are needed for traditional herbs?</h2>

          <p>
            Herbs need nutrients for healthy roots, stems and leaves. The
            amount of nutrients depends on the plant and the condition of
            the soil.
          </p>

          <div className="millet-nutrients">
            <div>
              <h3>Nitrogen</h3>
              <p>
                It supports healthy leaf and stem growth.
              </p>
            </div>

            <div>
              <h3>Phosphorus</h3>
              <p>
                It helps root development.
              </p>
            </div>

            <div>
              <h3>Potassium</h3>
              <p>
                It supports overall plant health and water regulation.
              </p>
            </div>

            <div>
              <h3>Organic matter</h3>
              <p>
                Compost and well-decomposed farmyard manure improve soil
                structure and provide nutrients.
              </p>
            </div>
          </div>

          <p>
            Farmers and gardeners can use organic manure and suitable
            fertilizers according to plant needs. Excessive fertilizer
            should be avoided because it may harm plant growth and soil health.
          </p>
        </section>

        {/* 12 */}
        <section className="millet-card">
          <span className="millet-number">12</span>
          <h2>What are the major pests and diseases of traditional herbs?</h2>

          <p>
            Traditional herbs can also be affected by insects, pests and
            plant diseases. These problems may damage leaves, roots and stems.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Aphids</h3>
              <p>
                Small insects that suck sap from young leaves and shoots.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Mealybugs</h3>
              <p>
                Small insects that feed on plant sap and may weaken plants.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Leaf spot</h3>
              <p>
                It causes spots on leaves and may reduce healthy leaf growth.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Root rot</h3>
              <p>
                It damages roots and can cause plants to wilt.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Powdery mildew</h3>
              <p>
                It appears as a white powder-like layer on plant surfaces.
              </p>
            </div>
          </div>

          <p>
            Farmers should check plants regularly. Removing infected parts,
            maintaining proper spacing, avoiding excess watering and using
            suitable plant protection methods can help control these problems.
          </p>
        </section>

        {/* 13 */}
        <section className="millet-card">
          <span className="millet-number">13</span>
          <h2>What are the traditional practices used in herb cultivation?</h2>

          <p>
            Indian farmers and families have used traditional methods to grow
            and protect useful plants for many generations.
          </p>

          <ul>
            <li>
              <strong>Home gardening:</strong> Growing Tulsi, Mint and Aloe
              vera near homes.
            </li>
            <li>
              <strong>Organic manure:</strong> Using cow dung manure and
              compost to improve soil.
            </li>
            <li>
              <strong>Seed saving:</strong> Collecting healthy seeds for
              future planting.
            </li>
            <li>
              <strong>Natural pest management:</strong> Using locally known
              methods to reduce pest problems.
            </li>
            <li>
              <strong>Mixed planting:</strong> Growing different useful plants
              together where suitable.
            </li>
            <li>
              <strong>Traditional knowledge:</strong> Learning about plant
              care and uses from older family members and local communities.
            </li>
          </ul>

          <div className="millet-highlight">
            <strong>Traditional knowledge</strong>
            <p>
              These practices help preserve local knowledge and encourage
              the careful use of natural resources.
            </p>
          </div>
        </section>

        {/* 14 */}
        <section className="millet-card">
          <span className="millet-number">14</span>
          <h2>When and how are traditional herbs harvested and stored?</h2>

          <p>
            Herbs should be harvested at the correct time to maintain their
            quality. The harvesting method depends on the plant part being
            collected.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Leaves</h3>
              <p>
                Tulsi and Mint leaves can be collected when plants have enough
                healthy growth.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Aloe vera</h3>
              <p>
                Mature and healthy outer leaves are usually selected.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Roots</h3>
              <p>
                Roots are collected when the plant reaches the suitable stage
                of maturity.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Rhizomes</h3>
              <p>
                Ginger and Turmeric are harvested when their underground
                parts are mature.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Fruits</h3>
              <p>
                Amla fruits are collected when they reach the proper stage
                of maturity.
              </p>
            </div>
          </div>

          <p>
            After harvesting, plant parts should be cleaned properly. Leaves
            and other plant materials meant for drying should be dried in
            suitable clean conditions. They should be stored in clean, dry
            and closed containers to protect them from moisture, dust and
            insects.
          </p>
        </section>

        {/* 15 */}
        <section className="millet-card">
          <span className="millet-number">15</span>
          <h2>What are the uses and benefits of traditional herbs?</h2>

          <p>
            Traditional herbs have many uses in Indian homes, food and
            cultural practices.
          </p>

          <div className="millet-feature-grid">
            <div className="millet-feature">
              <h3>Food</h3>
              <p>
                Ginger, Mint and Turmeric are commonly used in cooking.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Traditional preparations</h3>
              <p>
                Tulsi, Ginger and other herbs are used in traditional drinks
                and preparations.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Personal care</h3>
              <p>
                Aloe vera and Neem are used in some skin-care and
                personal-care products.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Gardening</h3>
              <p>
                Many herbs are grown in home gardens for their useful leaves
                and other plant parts.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Cultural importance</h3>
              <p>
                Some plants, such as Tulsi, have a special place in Indian
                traditions.
              </p>
            </div>

            <div className="millet-feature">
              <h3>Plant diversity</h3>
              <p>
                Growing different herbs helps maintain a variety of useful
                plants.
              </p>
            </div>
          </div>

          <div className="millet-highlight">
            <strong>Remember</strong>
            <p>
              The benefits depend on the plant and how it is used. Herbs
              should not be considered a replacement for proper medical
              treatment.
            </p>
          </div>
        </section>

        {/* 16 */}
        <section className="millet-card">
          <span className="millet-number">16</span>
          <h2>What are the challenges and sustainable practices in herb cultivation?</h2>

          <p>
            Growing traditional herbs can be useful, but farmers also face
            some challenges.
          </p>

          <h3>Main challenges</h3>
          <ul>
            <li>
              Lack of good-quality seeds and planting materials.
            </li>
            <li>
              Insects and plant diseases.
            </li>
            <li>
              Uncertain rainfall and changing weather.
            </li>
            <li>
              Poor soil quality and water shortage.
            </li>
            <li>
              Lack of proper knowledge about growing and storing herbs.
            </li>
            <li>
              Difficulty in finding suitable markets for some herbs.
            </li>
          </ul>

          <h3>Sustainable practices</h3>
          <ul>
            <li>
              Use healthy seeds and planting materials.
            </li>
            <li>
              Grow herbs according to local soil and climate.
            </li>
            <li>
              Use compost and well-decomposed organic manure.
            </li>
            <li>
              Save water through proper irrigation.
            </li>
            <li>
              Avoid unnecessary use of chemical fertilizers and pesticides.
            </li>
            <li>
              Use crop rotation and mixed planting where suitable.
            </li>
            <li>
              Protect local herb varieties and traditional plant knowledge.
            </li>
            <li>
              Harvest plants carefully to avoid unnecessary damage.
            </li>
          </ul>

          <div className="millet-highlight">
            <strong>Key message</strong>
            <p>
              These practices help protect soil, water and plant diversity
              while supporting long-term herb cultivation.
            </p>
          </div>
        </section>

        {/* Separate conclusion */}
        <section className="millet-card millet-conclusion">
          <h2>Conclusion</h2>

          <p>
            Traditional herbs are an important part of Indian agriculture,
            culture and daily life. Plants such as Tulsi, Neem, Aloe vera,
            Ginger, Turmeric and Amla have been used in traditional practices
            for many generations.
          </p>

          <p>
            They are useful in food, home gardening, personal care and
            traditional preparations. Growing these plants also helps preserve
            local plant diversity and traditional knowledge.
          </p>

          <p>
            By using healthy planting materials, proper watering, organic
            manure and sustainable farming methods, we can protect traditional
            herbs for future generations.
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

export default TraditionalHerbs;
