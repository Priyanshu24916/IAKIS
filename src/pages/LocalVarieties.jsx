
import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import "./LocalVarieties.css";

import logo from "./assets/iakis-logo.png";
import localVarietiesImage from "./assets/local-varieties.jpg";

function LocalVarieties() {
  return (
    <div className="app organic-page millets-page local-varieties-page">

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

          <h1>Local varieties</h1>

          <p>
            Explore India's traditional crop varieties, indigenous
            seeds, local farming knowledge, genetic diversity and
            their importance in sustainable agriculture.
          </p>

          <a href="#local-introduction" className="millet-start-btn">
            Start learning ↓
          </a>
        </div>

        <div className="millet-hero-image">
          <img
            src={localVarietiesImage}
            alt="Traditional Indian crop varieties and indigenous seeds"
          />
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="millet-content">

        {/* 01. INTRODUCTION */}
        <section className="millet-card" id="local-introduction">
          <span className="millet-number">01. Introduction</span>
          <h2>What are local crop varieties?</h2>

          <p>
            Local crop varieties are traditional types of crops
            that have been grown and maintained by farmers in a
            particular region for many years. They are also known
            as indigenous varieties or traditional varieties.
          </p>

          <p>
            These varieties have developed through natural
            adaptation and farmers' selection over many generations.
            Farmers select seeds from healthy plants that give good
            yields, taste better, survive local weather or resist
            certain pests and diseases.
          </p>

          <p>
            Local varieties are an important part of India's
            agricultural heritage. They help maintain crop diversity
            and preserve traditional farming knowledge.
          </p>

          <div className="millet-example">
            <h3>🌱 Simple example</h3>
            <p>
              Kalanamak is a traditional aromatic rice variety
              associated with Uttar Pradesh. It is known for its
              special aroma and traditional importance.
            </p>
          </div>
        </section>

        {/* 02. MAIN CHARACTERISTICS */}
        <section className="millet-card">
          <span className="millet-number">02. Main characteristics</span>
          <h2>What are the main characteristics of local crop varieties?</h2>

          <p>
            Local crop varieties have several important
            characteristics that make them valuable for farmers,
            consumers and agricultural biodiversity.
          </p>

          <div className="millet-feature-grid">

            <div className="millet-feature">
              <span>🌦️</span>
              <h3>Local adaptation</h3>
              <p>
                Many varieties are suited to the climate and soil
                conditions of the regions where they have been
                grown for generations.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌱</span>
              <h3>Genetic diversity</h3>
              <p>
                Different varieties may have different plant
                heights, grain colours, shapes and maturity periods.
              </p>
            </div>

            <div className="millet-feature">
              <span>🏡</span>
              <h3>Traditional importance</h3>
              <p>
                They are connected with local food habits,
                farming practices and cultural traditions.
              </p>
            </div>

            <div className="millet-feature">
              <span>🔬</span>
              <h3>Natural variation</h3>
              <p>
                Plants may show differences in growth, appearance
                and other inherited characteristics.
              </p>
            </div>

            <div className="millet-feature">
              <span>👨‍🌾</span>
              <h3>Farmer selection</h3>
              <p>
                Farmers have selected and maintained these seeds
                over many generations.
              </p>
            </div>

            <div className="millet-feature">
              <span>⭐</span>
              <h3>Special qualities</h3>
              <p>
                Some varieties are known for their taste, aroma,
                cooking quality or ability to tolerate difficult
                growing conditions.
              </p>
            </div>

          </div>
        </section>

        {/* 03. IMPORTANCE */}
        <section className="millet-card">
          <span className="millet-number">03. Importance</span>
          <h2>Why are local crop varieties important?</h2>

          <p>
            Local varieties are important because they protect
            agricultural biodiversity and support sustainable
            farming. They also provide useful genetic resources
            for future agriculture.
          </p>

          <ul className="millet-list">
            <li>
              <strong>Crop diversity:</strong> They help preserve
              different types of traditional crops.
            </li>

            <li>
              <strong>Future crop improvement:</strong> They provide
              useful genetic characteristics for plant breeding.
            </li>

            <li>
              <strong>Environmental adaptation:</strong> Some
              varieties can tolerate drought, floods, poor soils
              or other local stresses.
            </li>

            <li>
              <strong>Food traditions:</strong> They help maintain
              traditional foods and regional cooking practices.
            </li>

            <li>
              <strong>Farmer choices:</strong> They provide different
              seed options according to local farming needs.
            </li>

            <li>
              <strong>Food security:</strong> Growing different
              varieties reduces dependence on only a few crops.
            </li>
          </ul>

          <div className="millet-note">
            <strong>Remember:</strong> Growing different crop
            varieties helps protect agricultural biodiversity
            and provides useful resources for future generations.
          </div>
        </section>

        {/* 04. MAJOR EXAMPLES */}
        <section className="millet-card">
          <span className="millet-number">04. Major examples</span>
          <h2>Which are some important local crop varieties in India?</h2>

          <p>
            India has thousands of traditional crop varieties.
            Different regions are known for their special rice,
            wheat, millet, pulse, fruit and vegetable varieties.
          </p>

          <div className="millet-variety-grid">

            <div className="millet-variety">
              <h3>1. Kalanamak rice</h3>
              <p>
                Kalanamak is a traditional aromatic rice variety
                associated with Uttar Pradesh. It is known for
                its distinctive aroma and grain quality.
              </p>
            </div>

            <div className="millet-variety">
              <h3>2. Joha rice</h3>
              <p>
                Joha is a traditional aromatic rice of Assam.
                It is valued for its fragrance and special
                cooking qualities.
              </p>
            </div>

            <div className="millet-variety">
              <h3>3. Gobindobhog rice</h3>
              <p>
                Gobindobhog is a traditional short-grain
                aromatic rice variety of West Bengal.
                It is used in several regional dishes.
              </p>
            </div>

            <div className="millet-variety">
              <h3>4. Navara rice</h3>
              <p>
                Navara is a traditional rice variety of Kerala.
                It is known for its special place in traditional
                food and Ayurvedic practices.
              </p>
            </div>

            <div className="millet-variety">
              <h3>5. Pokkali rice</h3>
              <p>
                Pokkali is a traditional rice variety grown
                in the saline coastal areas of Kerala.
                It is known for its ability to grow in
                challenging coastal conditions.
              </p>
            </div>

            <div className="millet-variety">
              <h3>6. Bhalia wheat</h3>
              <p>
                Bhalia wheat is a traditional wheat type
                associated with the Bhal region of Gujarat.
                It is known for its suitability to local
                dryland farming conditions.
              </p>
            </div>

            <div className="millet-variety">
              <h3>7. Malda mango</h3>
              <p>
                Malda is a well-known mango type associated
                with Bihar and West Bengal. It is valued
                for its sweet taste and fruit quality.
              </p>
            </div>

            <div className="millet-variety">
              <h3>8. Mapillai Samba rice</h3>
              <p>
                Mapillai Samba is a traditional rice variety
                of Tamil Nadu. It is known for its red grains
                and traditional food importance.
              </p>
            </div>

          </div>

          <div className="millet-note">
            <strong>Important point:</strong> These examples show
            how different Indian regions maintain crop varieties
            according to their local traditions and growing conditions.
          </div>
        </section>

        {/* 05. DIFFERENCE BETWEEN VARIETIES */}
        <section className="millet-card">
          <span className="millet-number">05. Difference between varieties</span>
          <h2>How are local varieties different from improved crop varieties?</h2>

          <p>
            Local varieties and improved varieties are different
            in their development, characteristics and uses.
            Both are important for Indian agriculture.
          </p>

          <div className="millet-table-wrap">
            <table className="millet-table">
              <thead>
                <tr>
                  <th>Local varieties</th>
                  <th>Improved varieties</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Maintained by farmers over generations.</td>
                  <td>Developed through scientific plant breeding.</td>
                </tr>

                <tr>
                  <td>Often adapted to particular local conditions.</td>
                  <td>Developed for specific agricultural goals.</td>
                </tr>

                <tr>
                  <td>May show greater genetic variation.</td>
                  <td>Usually have more uniform characteristics.</td>
                </tr>

                <tr>
                  <td>May have special taste, aroma or cultural value.</td>
                  <td>Often selected for yield, quality or resistance.</td>
                </tr>

                <tr>
                  <td>Frequently maintained through traditional seed saving.</td>
                  <td>Seeds may be obtained through formal seed systems.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="millet-example">
            <h3>Important point</h3>
            <p>
              Improved varieties can increase crop production,
              while local varieties help conserve valuable genetic
              diversity. Both can contribute to sustainable agriculture.
            </p>
          </div>
        </section>

        {/* 06. CLIMATE AND SOIL ADAPTATION */}
        <section className="millet-card">
          <span className="millet-number">06. Climate and soil adaptation</span>
          <h2>How do local varieties adapt to different environmental conditions?</h2>

          <p>
            Local varieties often develop useful characteristics
            through natural selection and farmers' repeated selection
            of seeds over many generations.
          </p>

          <ul className="millet-list">
            <li>
              <strong>Flood tolerance:</strong> Some traditional
              rice varieties can survive seasonal flooding.
            </li>

            <li>
              <strong>Drought tolerance:</strong> Some millet
              varieties can grow under low rainfall conditions.
            </li>

            <li>
              <strong>Soil adaptation:</strong> Certain varieties
              perform well in particular soil types.
            </li>

            <li>
              <strong>Growth duration:</strong> Some varieties
              have shorter or longer maturity periods according
              to local farming conditions.
            </li>

            <li>
              <strong>Environmental survival:</strong> Their
              inherited characteristics may help them perform
              under certain local stresses.
            </li>
          </ul>

          <p>
            These characteristics help farmers select crops
            according to their local environment. However,
            not every local variety can tolerate every
            environmental problem.
          </p>
        </section>

        {/* 07. ROLE OF FARMERS */}
        <section className="millet-card">
          <span className="millet-number">07. Role of farmers</span>
          <h2>How do farmers develop and maintain local crop varieties?</h2>

          <p>
            Farmers play an important role in developing and
            maintaining local varieties. They observe their crops
            every season and select seeds from plants with
            desirable characteristics.
          </p>

          <div className="millet-process">

            <div className="millet-process-step">
              <span>01</span>
              <div>
                <h3>Plant selection</h3>
                <p>
                  Farmers identify healthy plants with desirable
                  characteristics in the field.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>02</span>
              <div>
                <h3>Seed collection</h3>
                <p>
                  Seeds are collected from selected plants
                  when they become fully mature.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>03</span>
              <div>
                <h3>Seed cleaning</h3>
                <p>
                  Damaged, diseased and unwanted seeds are
                  separated from healthy seeds.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>04</span>
              <div>
                <h3>Seed storage</h3>
                <p>
                  Selected seeds are dried and stored properly
                  for the next growing season.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>05</span>
              <div>
                <h3>Seed exchange</h3>
                <p>
                  Farmers may share traditional seeds with
                  other farmers in their communities.
                </p>
              </div>
            </div>

            <div className="millet-process-step">
              <span>06</span>
              <div>
                <h3>Repeated selection</h3>
                <p>
                  Farmers grow these seeds again and continue
                  selecting plants with useful characteristics.
                </p>
              </div>
            </div>

          </div>

          <div className="millet-note">
            <strong>Remember:</strong> Farmers are important
            conservers of agricultural biodiversity because
            they maintain and select traditional seeds.
          </div>
        </section>

        {/* 08. SEED SELECTION AND STORAGE */}
        <section className="millet-card">
          <span className="millet-number">08. Seed selection and storage</span>
          <h2>How are local seeds selected and stored?</h2>

          <p>
            Traditional seed selection and storage are important
            for maintaining the quality of local varieties.
            Proper handling helps seeds remain suitable for
            the next growing season.
          </p>

          <h3 className="millet-subheading">Seed selection</h3>

          <ul className="millet-list">
            <li>Select healthy plants with desirable characteristics.</li>
            <li>Choose fully mature and well-developed seeds.</li>
            <li>Remove damaged, diseased and unwanted seeds.</li>
            <li>Keep different varieties separately to avoid mixing.</li>
          </ul>

          <h3 className="millet-subheading">Seed storage</h3>

          <ul className="millet-list">
            <li>Clean seeds properly before storage.</li>
            <li>Dry seeds to a safe moisture level.</li>
            <li>Store them in clean, dry and suitable containers.</li>
            <li>Protect seeds from insects, rodents and moisture.</li>
            <li>Check stored seeds regularly.</li>
          </ul>

          <div className="millet-example">
            <h3>Did you know?</h3>
            <p>
              Seeds stored with excess moisture may develop
              mould and lose their ability to germinate.
              Proper drying is therefore very important.
            </p>
          </div>
        </section>

        {/* 09. CONSERVATION */}
        <section className="millet-card">
          <span className="millet-number">09. Conservation</span>
          <h2>What is the conservation of local crop varieties?</h2>

          <p>
            Conservation means protecting and maintaining
            traditional crop varieties so that they remain
            available for present and future generations.
          </p>

          <div className="millet-variety-grid">

            <div className="millet-variety">
              <h3>1. In-situ and on-farm conservation</h3>
              <p>
                Local varieties are grown and maintained in
                their natural farming environments. Farmers
                continue cultivating, selecting and exchanging
                traditional seeds.
              </p>
            </div>

            <div className="millet-variety">
              <h3>2. Ex-situ conservation</h3>
              <p>
                Seeds and other plant genetic materials are
                collected and stored outside their original
                farming environments, such as in seed banks
                and gene banks.
              </p>
            </div>

          </div>

          <div className="millet-note">
            <strong>Important difference:</strong> On-farm
            conservation keeps varieties growing in farmers'
            fields, while ex-situ conservation provides
            long-term protection in special storage facilities.
          </div>
        </section>

        {/* 10. COMMUNITY SEED BANKS */}
        <section className="millet-card">
          <span className="millet-number">10. Community seed banks</span>
          <h2>What are community seed banks and how do they help farmers?</h2>

          <p>
            Community seed banks are local systems where farmers
            collect, store, maintain and share traditional seeds.
            They are usually managed by farming communities,
            farmer groups or local organisations.
          </p>

          <div className="millet-feature-grid">

            <div className="millet-feature">
              <span>🌾</span>
              <h3>Seed conservation</h3>
              <p>
                They help protect traditional and valuable
                crop varieties.
              </p>
            </div>

            <div className="millet-feature">
              <span>🤝</span>
              <h3>Seed sharing</h3>
              <p>
                Farmers can exchange seeds with other members
                of their communities.
              </p>
            </div>

            <div className="millet-feature">
              <span>🌱</span>
              <h3>Seed availability</h3>
              <p>
                They help farmers obtain seeds before
                the sowing season.
              </p>
            </div>

            <div className="millet-feature">
              <span>📚</span>
              <h3>Traditional knowledge</h3>
              <p>
                They help preserve knowledge about local
                crops and farming methods.
              </p>
            </div>

            <div className="millet-feature">
              <span>🛡️</span>
              <h3>Rare varieties</h3>
              <p>
                They support the protection of rare
                and valuable local varieties.
              </p>
            </div>

            <div className="millet-feature">
              <span>👨‍🌾</span>
              <h3>Farmer support</h3>
              <p>
                They help farming communities maintain
                control over their local seed resources.
              </p>
            </div>

          </div>
        </section>

        {/* 11. GENETIC DIVERSITY */}
        <section className="millet-card">
          <span className="millet-number">11. Genetic diversity</span>
          <h2>Why is genetic diversity important in local crop varieties?</h2>

          <p>
            Genetic diversity means the presence of different
            inherited characteristics within a crop species.
            These differences may be seen in plant height,
            grain colour, maturity period, taste and resistance
            to environmental stresses.
          </p>

          <div className="millet-nutrients">

            <div>
              <h3>Crop improvement</h3>
              <p>
                Provides useful characteristics for developing
                improved crop varieties.
              </p>
            </div>

            <div>
              <h3>Climate adaptation</h3>
              <p>
                Helps agriculture respond to changing
                environmental conditions.
              </p>
            </div>

            <div>
              <h3>Disease resistance</h3>
              <p>
                Provides potential sources of resistance
                to pests and diseases.
              </p>
            </div>

            <div>
              <h3>Crop protection</h3>
              <p>
                Reduces dependence on a limited number
                of crop varieties.
              </p>
            </div>

            <div>
              <h3>Research resources</h3>
              <p>
                Provides valuable genetic materials
                for scientific research.
              </p>
            </div>

            <div>
              <h3>Future agriculture</h3>
              <p>
                Supports the long-term survival
                of agricultural biodiversity.
              </p>
            </div>

          </div>

          <div className="millet-example">
            <h3>Simple example</h3>
            <p>
              Different rice varieties may have different
              grain colours, aromas, maturity periods and
              abilities to tolerate environmental stress.
              These differences are part of genetic diversity.
            </p>
          </div>
        </section>

        {/* 12. NUTRITIONAL, ECONOMIC AND CULTURAL IMPORTANCE */}
        <section className="millet-card">
          <span className="millet-number">12. Nutritional, economic and cultural importance</span>
          <h2>What are the nutritional, economic and cultural benefits of local varieties?</h2>

          <p>
            Local varieties provide benefits beyond agricultural
            production. They support food diversity, farmers'
            income and traditional cultural practices.
          </p>

          <div className="millet-feature-grid">

            <div className="millet-feature">
              <span>🥗</span>
              <h3>Nutritional importance</h3>
              <p>
                Some traditional varieties contain valuable
                nutrients and may have special nutritional
                qualities. Their nutritional value differs
                from one variety to another.
              </p>
            </div>

            <div className="millet-feature">
              <span>💰</span>
              <h3>Economic importance</h3>
              <p>
                Special varieties may receive higher market
                prices because of their taste, aroma,
                quality or local demand.
              </p>
            </div>

            <div className="millet-feature">
              <span>🎉</span>
              <h3>Cultural importance</h3>
              <p>
                Many traditional crops are connected with
                regional food habits, festivals, recipes
                and local customs.
              </p>
            </div>

            <div className="millet-feature">
              <span>🍚</span>
              <h3>Food diversity</h3>
              <p>
                They provide different types of grains,
                pulses, vegetables and fruits for people's diets.
              </p>
            </div>

          </div>

          <p>
            These benefits make local varieties valuable
            resources for farmers, consumers and society.
          </p>
        </section>

        {/* 13. THREATS */}
        <section className="millet-card">
          <span className="millet-number">13. Threats</span>
          <h2>What are the major threats to traditional crop varieties?</h2>

          <p>
            Many local crop varieties are disappearing because
            of changes in modern agricultural practices,
            farming systems and food habits.
          </p>

          <ul className="millet-list">

            <li>
              <strong>Replacement by modern varieties:</strong>
              Farmers may replace traditional seeds with
              commercially available varieties.
            </li>

            <li>
              <strong>Monocropping:</strong>
              Growing only one or a few crop varieties
              reduces agricultural diversity.
            </li>

            <li>
              <strong>Changing food habits:</strong>
              Reduced demand for traditional crops can
              discourage their cultivation.
            </li>

            <li>
              <strong>Climate change:</strong>
              Changing rainfall and temperature can affect
              traditional farming systems.
            </li>

            <li>
              <strong>Loss of traditional knowledge:</strong>
              Younger generations may not continue
              traditional seed-saving practices.
            </li>

            <li>
              <strong>Urbanisation:</strong>
              Agricultural land is sometimes converted
              for buildings, roads and industries.
            </li>

            <li>
              <strong>Lack of market support:</strong>
              Farmers may find it difficult to sell
              traditional crop products at suitable prices.
            </li>

          </ul>

          <div className="millet-note">
            <strong>Important term – Genetic erosion:</strong>
            Genetic erosion means the loss of genetic diversity
            in crops. It reduces the genetic resources available
            for future agriculture.
          </div>
        </section>

        {/* 14. GOVERNMENT INITIATIVES */}
        <section className="millet-card">
          <span className="millet-number">14. Government initiatives</span>
          <h2>What steps are taken by the Indian government to conserve traditional crop varieties?</h2>

          <p>
            The Indian government and agricultural institutions
            have introduced different initiatives to protect
            traditional seeds and agricultural biodiversity.
          </p>

          <div className="millet-variety-grid">

            <div className="millet-variety">
              <h3>1. ICAR-NBPGR</h3>
              <p>
                The Indian Council of Agricultural Research –
                National Bureau of Plant Genetic Resources
                collects, studies, documents and conserves
                plant genetic resources.
              </p>
            </div>

            <div className="millet-variety">
              <h3>2. National Gene Bank</h3>
              <p>
                It stores seeds and other plant genetic
                materials for long-term conservation
                and future use.
              </p>
            </div>

            <div className="millet-variety">
              <h3>3. PPV&FR Act, 2001</h3>
              <p>
                The Protection of Plant Varieties and Farmers'
                Rights Act protects the rights of plant breeders
                and farmers and provides a system for registering
                eligible farmers' varieties.
              </p>
            </div>

            <div className="millet-variety">
              <h3>4. Community seed banks</h3>
              <p>
                These support farming communities in
                conserving and exchanging traditional seeds.
              </p>
            </div>

            <div className="millet-variety">
              <h3>5. Awareness programmes</h3>
              <p>
                Agricultural institutions encourage farmers
                to understand and conserve indigenous crop
                varieties.
              </p>
            </div>

          </div>

          <div className="millet-note">
            <strong>Remember:</strong> Conservation requires
            the combined efforts of farmers, researchers,
            agricultural institutions and government organisations.
          </div>
        </section>

        {/* 15. PROMOTION AND CONSERVATION */}
        <section className="millet-card">
          <span className="millet-number">15. Promotion and conservation</span>
          <h2>How can local crop varieties be promoted for future generations?</h2>

          <p>
            Local varieties can be protected and promoted
            through the combined efforts of farmers, researchers,
            government institutions and consumers.
          </p>

          <ul className="millet-list">

            <li>
              Encourage farmers to continue growing
              traditional varieties.
            </li>

            <li>
              Establish more community seed banks.
            </li>

            <li>
              Organise seed exchange programmes among farmers.
            </li>

            <li>
              Provide training on seed selection and storage.
            </li>

            <li>
              Document traditional farming knowledge.
            </li>

            <li>
              Conduct research to understand the useful
              characteristics of local varieties.
            </li>

            <li>
              Develop better marketing facilities for
              traditional agricultural products.
            </li>

            <li>
              Create awareness among students and consumers
              about indigenous seeds.
            </li>

            <li>
              Encourage sustainable farming practices
              and crop diversity.
            </li>

          </ul>

          <div className="millet-example">
            <h3>Important point</h3>
            <p>
              Farmers should receive suitable technical
              and economic support so that conserving
              traditional varieties remains beneficial
              for them.
            </p>
          </div>
        </section>

        {/* 16. CONCLUSION */}
        <section className="millet-card millet-conclusion">
          <span className="millet-number">16. Conclusion</span>

          <div className="millet-conclusion-icon">🌾</div>

          <h2>What have we learned about local crop varieties?</h2>

          <p>
            Local crop varieties are an important part of
            India's agricultural heritage. They represent
            the traditional knowledge, experience and farming
            practices developed by farmers over many generations.
          </p>

          <p>
            They help conserve genetic diversity, support
            local food traditions and provide useful
            characteristics for future crop improvement.
            Some varieties are also valuable because of
            their special taste, nutritional qualities
            and adaptation to local growing conditions.
          </p>

          <p>
            However, many traditional varieties are at risk
            of disappearing due to changing agricultural
            practices, reduced cultivation and loss of
            traditional farming knowledge.
          </p>

          <p>
            Therefore, farmers, scientists, agricultural
            institutions and government organisations should
            work together to conserve and promote these
            valuable resources.
          </p>

          <div className="millet-final-message">
            <strong>
              Protecting local crop varieties means protecting
              our agricultural biodiversity, traditional
              knowledge and food resources for future generations.
            </strong>
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

export default LocalVarieties;
