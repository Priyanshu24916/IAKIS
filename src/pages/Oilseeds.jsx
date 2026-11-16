
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./Oilseeds.css";

import logo from "./assets/iakis-logo.png";
import oilseedsImage from "./assets/oilseeds.jpg";

function Oilseeds() {
  return (
    <div className="app organic-page millets-page oilseeds-page">

      {/* Navbar */}
      <nav className="millet-navbar">
        <Link to="/">
          <img src={logo} alt="IAKIS logo" />
        </Link>
        <div className="millet-nav-links">
          <Link to="/">Home</Link>
          <Link to="/crops">Crops</Link>
        </div>
      </nav>

      {/* Hero section */}
      <header className="millet-header">
        <div className="millet-header-content">
          <span className="millet-tag">Traditional Indian crops</span>
          <h1>Oilseeds</h1>
          <p>
            Oilseed crops are an important part of Indian agriculture.
            They provide edible oils, animal feed, and raw materials
            for many industries. Learn about their features, varieties,
            cultivation methods, uses, and importance.
          </p>
          <a href="#oilseeds-content" className="millet-learn-btn">
            Start learning
          </a>
        </div>

        <div className="millet-header-image">
          <img src={oilseedsImage} alt="Different oilseed crops" />
        </div>
      </header>

      {/* Main content */}
      <main className="millet-content" id="oilseeds-content">

        {/* 01. Introduction */}
        <section className="millet-card">
          <span className="millet-number">01. Introduction</span>
          <h2>What are oilseeds?</h2>
          <p>
            Oilseeds are seeds that contain a good amount of oil. These
            seeds are grown mainly to produce edible and industrial oils.
            Oil is extracted from their seeds through different methods.
          </p>
          <p>
            In India, important oilseed crops include mustard, groundnut,
            soybean, sesame, sunflower, linseed, castor, and safflower.
            They are grown in different regions and seasons according
            to local climate and soil conditions.
          </p>
          <div className="millet-highlight">
            <strong>Key point:</strong> Oilseeds are important sources
            of vegetable oil, protein-rich oil cakes, and income for farmers.
          </div>
        </section>

        {/* 02. Main features */}
        <section className="millet-card">
          <span className="millet-number">02. Main features</span>
          <h2>What are the main features of oilseed crops?</h2>
          <p>
            Oilseed crops have different shapes, sizes, and growing
            habits, but they share some common features.
          </p>
          <div className="millet-feature-grid">
            <div className="millet-feature-item">
              <h3>Oil-rich seeds</h3>
              <p>Their seeds contain oil that can be extracted for different uses.</p>
            </div>
            <div className="millet-feature-item">
              <h3>Different growing seasons</h3>
              <p>Some oilseeds grow in the rainy season, while others grow in winter.</p>
            </div>
            <div className="millet-feature-item">
              <h3>Multiple uses</h3>
              <p>They provide cooking oil, animal feed, and industrial materials.</p>
            </div>
            <div className="millet-feature-item">
              <h3>Economic value</h3>
              <p>They support farmers, oil mills, traders, and rural industries.</p>
            </div>
          </div>
        </section>

        {/* 03. Types and varieties */}
        <section className="millet-card">
          <span className="millet-number">03. Types and varieties</span>
          <h2>What are the major types and varieties of oilseed crops?</h2>
          <p>
            India grows many types of oilseed crops. Each crop has
            different varieties that are suitable for particular
            regions and growing conditions.
          </p>
          <div className="millet-variety-grid">
            <div className="millet-variety-item">
              <h3>Mustard</h3>
              <p>Popular winter oilseed crop used for mustard oil.</p>
            </div>
            <div className="millet-variety-item">
              <h3>Groundnut</h3>
              <p>Also called peanut, it is an important oil and food crop.</p>
            </div>
            <div className="millet-variety-item">
              <h3>Soybean</h3>
              <p>A protein-rich crop used for oil, food, and animal feed.</p>
            </div>
            <div className="millet-variety-item">
              <h3>Sesame</h3>
              <p>An ancient oilseed crop known for its small, oil-rich seeds.</p>
            </div>
            <div className="millet-variety-item">
              <h3>Sunflower</h3>
              <p>Grown for its seeds, which produce light-coloured edible oil.</p>
            </div>
            <div className="millet-variety-item">
              <h3>Other oilseeds</h3>
              <p>Linseed, castor, and safflower are also important oilseed crops.</p>
            </div>
          </div>
        </section>

        {/* 04. Climate */}
        <section className="millet-card">
          <span className="millet-number">04. Climate</span>
          <h2>What climate is suitable for growing oilseed crops?</h2>
          <p>
            Different oilseed crops need different climatic conditions.
            Most of them grow well in warm conditions with suitable
            sunlight and rainfall.
          </p>
          <ul>
            <li><strong>Mustard:</strong> Grows well in a cool and dry winter season.</li>
            <li><strong>Groundnut:</strong> Needs a warm climate and moderate rainfall.</li>
            <li><strong>Soybean:</strong> Grows well in warm and humid conditions.</li>
            <li><strong>Sesame:</strong> Prefers warm weather and does not tolerate waterlogging.</li>
            <li><strong>Sunflower:</strong> Can grow in different seasons with enough sunlight.</li>
          </ul>
        </section>

        {/* 05. Soil requirements */}
        <section className="millet-card">
          <span className="millet-number">05. Soil requirements</span>
          <h2>Which soil is suitable for oilseed cultivation?</h2>
          <p>
            Oilseed crops can grow in different types of soil. However,
            well-drained and fertile soil gives better growth and yield.
          </p>
          <ul>
            <li>Groundnut grows well in sandy loam and well-drained soils.</li>
            <li>Mustard grows well in loamy and alluvial soils.</li>
            <li>Soybean performs well in fertile loamy and black soils.</li>
            <li>Sesame can grow in light and well-drained soils.</li>
            <li>Sunflower grows in many soils, but it needs good drainage.</li>
          </ul>
          <div className="millet-highlight">
            <strong>Remember:</strong> Waterlogged soil can damage roots
            and reduce crop production.
          </div>
        </section>

        {/* 06. Traditional farming */}
        <section className="millet-card">
          <span className="millet-number">06. Traditional farming</span>
          <h2>How were oilseed crops traditionally cultivated?</h2>
          <p>
            Traditional oilseed farming used local seeds, farmyard manure,
            animal power, and natural methods of pest control. Farmers
            selected seeds from healthy plants and saved them for the
            next growing season.
          </p>
          <p>
            Bullocks were commonly used for ploughing, and farmers used
            traditional tools for sowing and harvesting. Organic materials
            such as compost and crop residues helped maintain soil fertility.
          </p>
        </section>

        {/* 07. Cultivation process */}
        <section className="millet-card">
          <span className="millet-number">07. Cultivation process</span>
          <h2>How are oilseed crops cultivated?</h2>
          <p>
            Oilseed cultivation includes several steps. Farmers should
            select the right crop and variety according to their local
            climate, soil, and available water.
          </p>
          <div className="millet-process">
            <div className="millet-process-item">
              <span>01</span>
              <div><h3>Land preparation</h3><p>Plough and level the field to prepare a suitable seedbed.</p></div>
            </div>
            <div className="millet-process-item">
              <span>02</span>
              <div><h3>Seed selection</h3><p>Choose healthy and good-quality seeds of suitable varieties.</p></div>
            </div>
            <div className="millet-process-item">
              <span>03</span>
              <div><h3>Sowing</h3><p>Sow seeds at the recommended time, depth, and spacing.</p></div>
            </div>
            <div className="millet-process-item">
              <span>04</span>
              <div><h3>Crop care</h3><p>Manage weeds, water, nutrients, pests, and diseases.</p></div>
            </div>
            <div className="millet-process-item">
              <span>05</span>
              <div><h3>Harvesting</h3><p>Harvest the crop when seeds or pods reach maturity.</p></div>
            </div>
          </div>
        </section>

        {/* 08. Water requirements */}
        <section className="millet-card">
          <span className="millet-number">08. Water requirements</span>
          <h2>How much water do oilseed crops need?</h2>
          <p>
            Water needs depend on the crop, soil, weather, and stage
            of growth. Some oilseed crops depend mainly on rainfall,
            while others need irrigation for better production.
          </p>
          <ul>
            <li>Groundnut needs sufficient moisture during flowering and pod formation.</li>
            <li>Mustard needs water at important stages such as flowering and seed development.</li>
            <li>Soybean needs good soil moisture during germination and pod development.</li>
            <li>Sesame is sensitive to excess water and waterlogging.</li>
            <li>Sunflower needs suitable moisture during flowering and seed filling.</li>
          </ul>
        </section>

        {/* 09. Traditional knowledge */}
        <section className="millet-card">
          <span className="millet-number">09. Traditional knowledge</span>
          <h2>What traditional knowledge is used in oilseed farming?</h2>
          <p>
            Farmers have developed useful knowledge through years of
            experience. They observe rainfall, soil conditions, and
            local seasons before selecting crops and deciding sowing time.
          </p>
          <ul>
            <li>Saving seeds from healthy and productive plants.</li>
            <li>Using farmyard manure and compost to improve soil.</li>
            <li>Growing different crops in rotation to maintain soil health.</li>
            <li>Using neem-based preparations and other traditional methods for pest management.</li>
            <li>Storing dried seeds in clean and dry containers.</li>
          </ul>
        </section>

        {/* 10. Uses and benefits */}
        <section className="millet-card">
          <span className="millet-number">10. Uses and benefits</span>
          <h2>What are the major uses and benefits of oilseeds?</h2>
          <p>
            Oilseeds are useful in daily life, agriculture, food
            production, and many industries.
          </p>
          <div className="millet-feature-grid">
            <div className="millet-feature-item">
              <h3>Cooking oil</h3>
              <p>Oilseeds provide oils used for cooking and food preparation.</p>
            </div>
            <div className="millet-feature-item">
              <h3>Animal feed</h3>
              <p>Oil cakes and meals are used as protein-rich animal feed.</p>
            </div>
            <div className="millet-feature-item">
              <h3>Industrial use</h3>
              <p>Some oils are used in soaps, paints, cosmetics, and other products.</p>
            </div>
            <div className="millet-feature-item">
              <h3>Farmer income</h3>
              <p>Oilseed production provides income and employment opportunities.</p>
            </div>
          </div>
        </section>

        {/* 11. Nutrition */}
        <section className="millet-card">
          <span className="millet-number">11. Nutrition</span>
          <h2>What is the nutritional value of oilseeds?</h2>
          <p>
            Many oilseeds contain healthy fats, protein, vitamins,
            minerals, and other useful nutrients. Their exact nutritional
            value differs from one crop to another.
          </p>
          <ul>
            <li>Groundnut contains oil, protein, and energy.</li>
            <li>Sesame provides oil, protein, calcium, and other minerals.</li>
            <li>Soybean is rich in plant protein and also contains oil.</li>
            <li>Sunflower seeds contain oil, vitamin E, and minerals.</li>
            <li>Mustard seeds contain oil and are used as a spice.</li>
          </ul>
        </section>

        {/* 12. Challenges */}
        <section className="millet-card">
          <span className="millet-number">12. Challenges</span>
          <h2>What are the major challenges in oilseed cultivation?</h2>
          <p>
            Oilseed farmers face several problems that can affect crop
            growth, quality, and income.
          </p>
          <ul>
            <li>Irregular rainfall and drought conditions.</li>
            <li>Insect pests and diseases that damage crops.</li>
            <li>Low soil fertility and poor drainage.</li>
            <li>High cost of seeds, fertilizers, and farm inputs.</li>
            <li>Price changes and limited market facilities.</li>
            <li>Post-harvest losses due to improper drying and storage.</li>
          </ul>
        </section>

        {/* 13. Conservation */}
        <section className="millet-card">
          <span className="millet-number">13. Conservation</span>
          <h2>How can traditional oilseed varieties be conserved?</h2>
          <p>
            Conservation helps protect local varieties and useful
            agricultural knowledge. Traditional varieties may have
            qualities that are valuable for local farming conditions.
          </p>
          <ul>
            <li>Save healthy seeds from suitable plants.</li>
            <li>Maintain community seed banks.</li>
            <li>Grow local varieties along with improved varieties where suitable.</li>
            <li>Protect traditional seed knowledge and farming practices.</li>
            <li>Store seeds safely to protect them from moisture and insects.</li>
          </ul>
        </section>

        {/* 14. Regional importance */}
        <section className="millet-card">
          <span className="millet-number">14. Regional importance</span>
          <h2>Which oilseed crops are important in different regions of India?</h2>
          <p>
            Oilseed crops are grown across India according to regional
            climate, soil, and farming conditions.
          </p>
          <ul>
            <li><strong>Rajasthan:</strong> Mustard, sesame, and groundnut are important crops.</li>
            <li><strong>Gujarat:</strong> Groundnut and castor are widely grown.</li>
            <li><strong>Madhya Pradesh:</strong> Soybean is an important crop.</li>
            <li><strong>Uttar Pradesh:</strong> Mustard and other oilseeds are cultivated.</li>
            <li><strong>Andhra Pradesh and Telangana:</strong> Groundnut and sunflower are grown.</li>
          </ul>
        </section>

        {/* 15. Sustainable agriculture */}
        <section className="millet-card">
          <span className="millet-number">15. Sustainable agriculture</span>
          <h2>How can oilseed farming become more sustainable?</h2>
          <p>
            Sustainable oilseed farming protects soil, water, biodiversity,
            and farmer income. It uses natural resources carefully and
            reduces unnecessary chemical use.
          </p>
          <ul>
            <li>Use crop rotation and mixed cropping where suitable.</li>
            <li>Apply compost and well-decomposed farmyard manure.</li>
            <li>Use water-saving irrigation methods.</li>
            <li>Follow integrated pest management practices.</li>
            <li>Choose suitable varieties for local conditions.</li>
            <li>Reduce post-harvest losses through proper drying and storage.</li>
          </ul>
        </section>

       
{/* 16. Conclusion */}
<section className="millet-card millet-conclusion">
  <span className="millet-number">16. Conclusion</span>

  <div className="conclusion-icon">🌻</div>

  <h2>What have we learned about oilseeds?</h2>

  <p>
    Oilseed crops are an important part of Indian agriculture.
    They provide edible oils, protein-rich by-products, and
    raw materials for many industries. Crops such as mustard,
    groundnut, soybean, sesame, and sunflower support food
    security and farmer income.
  </p>

  <p>
    Different oilseed crops grow in different climatic and soil
    conditions. Traditional farming knowledge, suitable varieties,
    balanced nutrients, and proper water management help farmers
    improve crop production.
  </p>

  <p>
    Protecting traditional varieties and adopting sustainable
    farming practices can conserve natural resources and support
    agricultural biodiversity.
  </p>

  <div className="conclusion-highlight">
    Oilseeds are important for food security, farmer income,
    traditional agriculture, and a sustainable future.
  </div>
</section>

<div className="millet-back-wrapper">
  <Link to="/crops" className="millet-back-btn">
    ← Back to crops
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

export default Oilseeds;
