
import { Link } from "react-router-dom";
import "../App.css";
import "./SeedPreservation.css";
import logo from "./assets/iakis-logo.png";

function SeedPreservation() {
  return (
    <div className="app seed-page">

      {/* NAVIGATION */}
      <nav className="navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="IAKIS Logo" />
          </Link>
        </div>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/practices">Practices</Link>
          <Link to="/crops">Crops</Link>
          <Link to="/regions">Regions</Link>
          <Link to="/about">About</Link>
        </div>
      </nav>

      {/* PAGE HEADER */}
      <section className="detail-header">
        <p className="section-label">Traditional agricultural practice</p>
        <h1>Seed Preservation</h1>
        <p>
          Learn how farmers select, clean, dry and store healthy seeds
          for future farming. Explore traditional methods, materials,
          storage practices, examples and benefits of seed preservation.
        </p>
      </section>

      <main className="detail-content">

        {/* 1. INTRODUCTION */}
        <section className="detail-card conclusion-card">
          <div className="detail-icon">🌱</div>
          <p className="section-label">01. Introduction</p>
          <h2>What is seed preservation?</h2>

          <p>
            Seed preservation is the practice of selecting, collecting,
            cleaning, drying and safely storing good-quality seeds for
            future planting. Farmers save seeds from healthy and mature
            crops so that they can use them in the next growing season.
          </p>

          <p>
            Seeds are important because they are the starting point of
            crop production. If seeds are damaged by moisture, insects
            or poor storage, they may lose their ability to germinate.
            Proper preservation helps keep seeds healthy and suitable
            for future use.
          </p>

          <p>
            Farmers have followed seed-saving practices for many
            generations. They often select seeds from plants that
            grow well under local soil and climate conditions.
          </p>

          <div className="simple-example">
            <h3>Simple example</h3>
            <p>
              A farmer selects healthy and fully mature paddy plants
              before harvesting. The seeds are dried properly and
              stored in a clean, dry container for the next season.
            </p>
          </div>
        </section>

        {/* 2. HISTORY */}
        <section className="detail-card">
          <p className="section-label">02. Background</p>
          <h2>History and traditional background of seed preservation</h2>

          <p>
            Seed preservation is one of the oldest farming practices.
            When people started growing crops, they learned to keep
            some seeds from one harvest for planting in the next season.
            This helped farming communities continue growing food.
          </p>

          <p>
            In traditional Indian farming, families often selected
            seeds from healthy plants and stored them at home. They
            used earthen pots, bamboo baskets, cloth bags and other
            locally available containers. Different communities
            developed their own methods according to local conditions.
          </p>

          <p>
            This knowledge was passed from parents and experienced
            farmers to younger generations. Today, farmers may combine
            these traditional methods with improved drying, cleaning
            and scientific storage practices.
          </p>

          <div className="simple-example">
            <h3>Traditional example</h3>
            <p>
              In many Indian villages, farmers have stored paddy,
              wheat and pulses in dry containers or traditional
              storage structures to protect seeds until the next
              planting season.
            </p>
          </div>
        </section>

        {/* 3. TIME AND PLACE */}
        <section className="detail-card">
          <p className="section-label">03. Time and place</p>
          <h2>When and where is seed preservation practiced?</h2>

          <h3 className="detail-subheading">When is it practiced?</h3>
          <p>
            Seed preservation usually begins near harvest time.
            Farmers identify healthy crops and select mature seeds.
            After harvesting, seeds are cleaned, dried and stored.
            They are kept safely until the next sowing season.
          </p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon">🌧️</div>
              <h3>After Kharif crops</h3>
              <p>
                Seeds of suitable crops such as paddy, maize and
                pulses may be selected and stored after harvest.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">❄️</div>
              <h3>After Rabi crops</h3>
              <p>
                Farmers may save healthy wheat, gram and mustard
                seeds for future planting.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">📦</div>
              <h3>Before sowing</h3>
              <p>
                Stored seeds are checked before planting to
                make sure they are healthy and suitable.
              </p>
            </div>
          </div>

          <h3 className="detail-subheading">Where is it practiced?</h3>
          <p>
            Seed preservation is practiced in farming villages,
            agricultural households and seed storage centres.
            It is useful in different parts of India where farmers
            grow crops and save suitable seeds for future seasons.
          </p>

          <p>
            In Bihar, farmers may preserve seeds of paddy, wheat,
            maize, gram and other locally grown crops. The storage
            method depends on the type of seed, local climate and
            available storage facilities.
          </p>
        </section>

        {/* 4. IMPORTANCE */}
        <section className="detail-card">
          <p className="section-label">04. Importance</p>
          <h2>Why is seed preservation important?</h2>

          <p>
            Seed preservation helps farmers maintain a supply of
            seeds for future farming. It reduces the need to buy
            seeds every season and allows farmers to keep varieties
            that perform well in their local conditions.
          </p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon">🌾</div>
              <h3>Future planting</h3>
              <p>
                Stored seeds can be used for sowing in the
                next crop season.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">💰</div>
              <h3>Lower seed costs</h3>
              <p>
                Saving suitable seeds can reduce the amount
                farmers spend on buying seeds.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌱</div>
              <h3>Local varieties</h3>
              <p>
                Farmers can continue growing useful local
                varieties that suit their region.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🤝</div>
              <h3>Seed exchange</h3>
              <p>
                Farmers can exchange suitable seeds and
                farming knowledge with one another.
              </p>
            </div>
          </div>
        </section>

        {/* 5. WORKING METHOD */}
        <section className="detail-card">
          <p className="section-label">05. Working method</p>
          <h2>How does seed preservation work?</h2>

          <p>
            Seed preservation works through a series of careful
            activities. Farmers select healthy seeds, remove unwanted
            materials, dry them properly and store them in suitable
            containers. Each activity helps protect seed quality.
          </p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon">🌿</div>
              <h3>Seed selection</h3>
              <p>
                Seeds are selected from healthy, mature and
                suitable plants.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🧹</div>
              <h3>Cleaning</h3>
              <p>
                Dust, damaged seeds and unwanted materials
                are removed.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">☀️</div>
              <h3>Drying</h3>
              <p>
                Seeds are dried properly to reduce excess
                moisture before storage.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🏺</div>
              <h3>Safe storage</h3>
              <p>
                Dry seeds are kept in clean and suitable
                containers.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🔍</div>
              <h3>Regular checking</h3>
              <p>
                Stored seeds are checked for insects,
                moisture and damage.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌱</div>
              <h3>Future sowing</h3>
              <p>
                Suitable seeds are tested and used for
                planting in the next season.
              </p>
            </div>
          </div>
        </section>

        {/* 6. TYPES OF SEEDS */}
        <section className="detail-card">
          <p className="section-label">06. Seed types</p>
          <h2>What types of seeds can farmers preserve?</h2>

          <p>
            Farmers can preserve seeds of many food and field crops.
            The choice depends on the crop variety, seed quality,
            storage conditions and future farming needs.
          </p>

          <div className="resource-list">
            <div className="resource-item">
              <span>01</span>
              <div>
                <h3>Cereal seeds</h3>
                <p>
                  Paddy, wheat, maize and millets are important
                  cereal crops. Suitable seeds may be saved
                  after proper selection and drying.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>02</span>
              <div>
                <h3>Pulse seeds</h3>
                <p>
                  Gram, lentil, pigeon pea and green gram seeds
                  may be preserved for future cultivation.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>03</span>
              <div>
                <h3>Oilseed crops</h3>
                <p>
                  Mustard, sesame and other suitable oilseed
                  crops can provide seeds for future sowing.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>04</span>
              <div>
                <h3>Vegetable seeds</h3>
                <p>
                  Seeds of suitable vegetables such as
                  pumpkin, okra and beans can be collected
                  from healthy mature plants.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>05</span>
              <div>
                <h3>Local crop varieties</h3>
                <p>
                  Farmers may preserve locally adapted
                  varieties that are useful for their
                  soil and climate conditions.
                </p>
              </div>
            </div>
          </div>

          <div className="detail-note">
            <strong>Important:</strong> Not every crop seed can be
            saved in the same way. Some hybrid seeds may not produce
            plants with the same qualities in the next generation.
          </div>
        </section>

        {/* 7. SEED SELECTION */}
        <section className="detail-card">
          <p className="section-label">07. Seed selection</p>
          <h2>How do farmers select healthy seeds?</h2>

          <p>
            Good seed selection is an important part of preservation.
            Farmers observe their crops and choose seeds from healthy
            plants that have grown well. They avoid seeds from plants
            showing serious disease, damage or poor growth.
          </p>

          <h3 className="detail-subheading">Main points for selecting seeds</h3>
          <ul>
            <li>Select seeds from healthy and mature plants.</li>
            <li>Choose seeds that are fully developed and well formed.</li>
            <li>Avoid seeds damaged by insects or diseases.</li>
            <li>Remove broken, shrivelled and discoloured seeds.</li>
            <li>Select varieties suitable for local soil and climate.</li>
            <li>Keep different crop varieties separately identified.</li>
          </ul>

          <div className="simple-example">
            <h3>Simple example</h3>
            <p>
              A farmer growing paddy may select seeds from healthy
              plants with well-developed grains. The selected grains
              are kept separate from damaged or immature grains.
            </p>
          </div>
        </section>

        {/* 8. CLEANING AND DRYING */}
        <section className="detail-card">
          <p className="section-label">08. Cleaning and drying</p>
          <h2>How are seeds cleaned and dried?</h2>

          <p>
            After selection, seeds are cleaned to remove dust,
            pieces of leaves, stones and damaged seeds. Cleaning
            makes storage easier and helps farmers identify
            unwanted materials.
          </p>

          <p>
            Seeds are then dried carefully to reduce excess moisture.
            Drying may be done in a clean and suitable place using
            sunlight or other safe methods. Seeds should not be
            overheated, because too much heat can damage their
            ability to germinate.
          </p>

          <h3 className="detail-subheading">Common activities</h3>
          <ul>
            <li>Remove unwanted plant materials and dirt.</li>
            <li>Separate damaged and immature seeds.</li>
            <li>Spread seeds in a clean, thin layer for drying.</li>
            <li>Protect seeds from rain, animals and contamination.</li>
            <li>Allow seeds to cool before putting them into containers.</li>
          </ul>
        </section>

        {/* 9. STORAGE */}
        <section className="detail-card">
          <p className="section-label">09. Storage method</p>
          <h2>How are seeds stored safely?</h2>

          <p>
            After proper drying, seeds are stored in clean,
            dry and suitable containers. The storage place
            should be cool, dry and protected from rain,
            insects and rodents.
          </p>

          <div className="resource-list">
            <div className="resource-item">
              <span>01</span>
              <div>
                <h3>Earthen pots</h3>
                <p>
                  Traditional farmers use clean earthen pots
                  for storing some types of dry seeds.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>02</span>
              <div>
                <h3>Bamboo baskets</h3>
                <p>
                  Bamboo baskets and other traditional
                  structures are used in some regions.
                  They need suitable protection from moisture
                  and insects.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>03</span>
              <div>
                <h3>Cloth bags</h3>
                <p>
                  Clean and dry cloth bags may be used for
                  suitable seeds when the storage area
                  is dry and protected.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>04</span>
              <div>
                <h3>Airtight containers</h3>
                <p>
                  Properly dried seeds can be stored in
                  suitable airtight containers to reduce
                  moisture entry.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>05</span>
              <div>
                <h3>Seed storage bags</h3>
                <p>
                  Suitable seed bags are used by farmers
                  and seed centres for keeping seeds
                  separately and safely.
                </p>
              </div>
            </div>
          </div>

          <div className="detail-note">
            Seeds must be properly dried before airtight storage.
            Trapping moisture inside a sealed container can cause
            mould and damage.
          </div>
        </section>

        {/* 10. PROTECTION */}
        <section className="detail-card">
          <p className="section-label">10. Seed protection</p>
          <h2>How do farmers protect stored seeds from insects and moisture?</h2>

          <p>
            Insects, moisture and rodents can damage stored seeds.
            Farmers protect seeds by keeping storage areas clean,
            using suitable containers and checking stored seeds
            regularly.
          </p>

          <p>
            Traditional practices in some regions include using
            locally known plant materials or dry storage methods.
            However, any material used for protection should be
            suitable for the seed and should not reduce its quality
            or germination.
          </p>

          <h3 className="detail-subheading">Important protection methods</h3>
          <ul>
            <li>Dry seeds properly before storage.</li>
            <li>Keep storage containers clean and dry.</li>
            <li>Protect seeds from rain and water leakage.</li>
            <li>Keep storage areas free from rodents and insects.</li>
            <li>Check seeds regularly for mould, smell and damage.</li>
            <li>Keep old and new seed lots separately labelled.</li>
          </ul>
        </section>

        {/* 11. TRADITIONAL MATERIALS */}
        <section className="detail-card">
          <p className="section-label">11. Traditional resources</p>
          <h2>What traditional materials are used for seed storage?</h2>

          <p>
            Different farming communities use materials that are
            easily available in their areas. These materials are
            selected according to local experience, crop type and
            storage conditions.
          </p>

          <div className="resource-list">
            <div className="resource-item">
              <span>01</span>
              <div>
                <h3>Earthen pots</h3>
                <p>
                  Clean earthen pots are used in some villages
                  to store dry seeds.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>02</span>
              <div>
                <h3>Bamboo containers</h3>
                <p>
                  Baskets and containers made from bamboo
                  are used in some traditional storage systems.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>03</span>
              <div>
                <h3>Dry leaves</h3>
                <p>
                  Certain dry leaves are traditionally used
                  in some regions during storage. Their use
                  depends on local practice and seed safety.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>04</span>
              <div>
                <h3>Cloth and jute bags</h3>
                <p>
                  These locally available materials are used
                  for keeping suitable seeds in dry places.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>05</span>
              <div>
                <h3>Mud storage structures</h3>
                <p>
                  Some farming communities use traditional
                  mud-based structures for storing grains
                  and seeds.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 12. STEP BY STEP */}
        <section className="detail-card">
          <p className="section-label">12. Step-by-step method</p>
          <h2>How is seed preservation done step by step?</h2>

          <p>
            Seed preservation follows a series of activities
            from crop selection to final storage. The exact
            method may change according to the crop and region.
          </p>

          <div className="step-list">
            <div className="step-item">
              <span>01</span>
              <div>
                <h3>Select healthy crops</h3>
                <p>
                  Identify healthy and mature plants that
                  show good growth and suitable crop qualities.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>02</span>
              <div>
                <h3>Collect mature seeds</h3>
                <p>
                  Collect seeds at the correct stage of maturity
                  so they are properly developed.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>03</span>
              <div>
                <h3>Separate good seeds</h3>
                <p>
                  Remove damaged, diseased, immature and
                  unwanted seeds from the collected material.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>04</span>
              <div>
                <h3>Clean the seeds</h3>
                <p>
                  Remove dust, stones, leaves and other
                  unwanted materials.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>05</span>
              <div>
                <h3>Dry the seeds properly</h3>
                <p>
                  Reduce excess moisture by using a suitable
                  drying method without overheating the seeds.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>06</span>
              <div>
                <h3>Choose storage containers</h3>
                <p>
                  Select clean and dry containers suitable
                  for the type of seed being stored.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>07</span>
              <div>
                <h3>Label and store seeds</h3>
                <p>
                  Write the crop name, variety and collection
                  date on the container or label. Store it
                  in a suitable dry place.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>08</span>
              <div>
                <h3>Check stored seeds</h3>
                <p>
                  Check regularly for insects, moisture,
                  mould and other signs of damage.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>09</span>
              <div>
                <h3>Test before sowing</h3>
                <p>
                  Check seed germination with a small sample
                  before using the seeds for planting.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>10</span>
              <div>
                <h3>Use seeds in the next season</h3>
                <p>
                  Use suitable and healthy seeds for sowing
                  according to the crop season and local conditions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 13. PROCESS CYCLE */}
        <section className="detail-card">
          <p className="section-label">13. Process cycle</p>
          <h2>What is the seed preservation process cycle?</h2>

          <p>
            The seed preservation cycle shows how farmers collect
            seeds after harvesting, prepare them for storage and
            use them again for future cultivation. The cycle
            continues from one crop season to another.
          </p>

          <div className="seed-flow">
            <div className="flow-box">
              <div className="flow-icon">🌿</div>
              <h3>Healthy crop selection</h3>
              <p>Select healthy and mature plants.</p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-box">
              <div className="flow-icon">🌾</div>
              <h3>Seed collection</h3>
              <p>Collect mature seeds from selected crops.</p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-box">
              <div className="flow-icon">🧹</div>
              <h3>Cleaning and sorting</h3>
              <p>Remove dust and damaged seeds.</p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-box">
              <div className="flow-icon">☀️</div>
              <h3>Proper drying</h3>
              <p>Reduce excess moisture safely.</p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-box">
              <div className="flow-icon">🏺</div>
              <h3>Safe storage</h3>
              <p>Keep seeds in clean and suitable containers.</p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-box">
              <div className="flow-icon">🔍</div>
              <h3>Regular checking</h3>
              <p>Check seeds for insects and moisture.</p>
            </div>

            <div className="flow-arrow">↓</div>

            <div className="flow-box">
              <div className="flow-icon">🌱</div>
              <h3>Future sowing</h3>
              <p>Use suitable seeds for the next crop season.</p>
            </div>
          </div>
        </section>

        {/* 14. INDIAN EXAMPLES */}
        <section className="detail-card">
          <p className="section-label">14. Indian examples</p>
          <h2>What are some traditional seed preservation methods in India?</h2>

          <p>
            Different parts of India have their own seed-saving
            traditions. Farmers use local knowledge and available
            materials to select and store seeds.
          </p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon">🌾</div>
              <h3>Paddy seed saving</h3>
              <p>
                Farmers select healthy paddy plants and save
                suitable grains for the next planting season.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🏺</div>
              <h3>Traditional containers</h3>
              <p>
                In many villages, dry seeds are kept in
                earthen pots and other local storage containers.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌿</div>
              <h3>Local variety conservation</h3>
              <p>
                Farming communities save suitable local
                crop varieties and share them with other farmers.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🤝</div>
              <h3>Community seed exchange</h3>
              <p>
                Farmers exchange suitable seeds with
                neighbours and farming communities.
              </p>
            </div>
          </div>

          <div className="simple-example">
            <h3>Example from Bihar</h3>
            <p>
              A farmer in Bihar may select healthy paddy or
              wheat seeds after harvest, dry them properly
              and store them in a clean container for the
              next sowing season.
            </p>
          </div>
        </section>

        {/* 15. BENEFITS */}
        <section className="detail-card">
          <p className="section-label">15. Benefits</p>
          <h2>What are the benefits of seed preservation?</h2>

          <p>
            Seed preservation supports farming by helping farmers
            keep a supply of suitable seeds. It also helps maintain
            local crop varieties and traditional agricultural knowledge.
          </p>

          <ul>
            <li><strong>Seed availability:</strong> Farmers can keep seeds for future planting.</li>
            <li><strong>Cost saving:</strong> Suitable saved seeds can reduce seed purchase costs.</li>
            <li><strong>Local adaptation:</strong> Farmers can maintain varieties suited to local conditions.</li>
            <li><strong>Seed exchange:</strong> Communities can share useful seeds with one another.</li>
            <li><strong>Knowledge protection:</strong> Traditional seed selection and storage knowledge can continue.</li>
            <li><strong>Crop diversity:</strong> Saving different local varieties can support agricultural diversity.</li>
            <li><strong>Farm independence:</strong> Farmers may depend less on outside seed sources for suitable crops.</li>
          </ul>
        </section>

        {/* 16. CHALLENGES */}
        <section className="detail-card limitation-card">
          <p className="section-label">16. Challenges</p>
          <h2>What are the challenges of seed preservation?</h2>

          <p>
            Seed preservation needs proper care and suitable
            storage conditions. If seeds are not selected,
            dried or stored correctly, their quality may decrease.
          </p>

          <ul>
            <li><strong>Moisture:</strong> Excess moisture can cause mould and seed damage.</li>
            <li><strong>Insects:</strong> Storage insects can damage seeds and reduce their quality.</li>
            <li><strong>Rodents:</strong> Rats and mice may eat or damage stored seeds.</li>
            <li><strong>Poor drying:</strong> Seeds with too much moisture may not remain safe during storage.</li>
            <li><strong>Loss of germination:</strong> Seed germination can decrease during long or unsuitable storage.</li>
            <li><strong>Storage space:</strong> Some farmers may not have proper storage facilities.</li>
            <li><strong>Variety mixing:</strong> Different seed varieties may get mixed if they are not labelled and stored separately.</li>
          </ul>

          <div className="detail-note">
            Proper seed selection, drying, labelling and regular
            checking can help reduce many of these problems.
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="detail-card conclusion-card">
          <p className="section-label">Conclusion</p>
          <h2>Importance of preserving seeds for the future</h2>

          <p>
            Seed preservation is an important traditional farming
            practice. It helps farmers save suitable seeds, protect
            local crop varieties and prepare for future growing seasons.
          </p>

          <p>
            By selecting healthy seeds, drying them properly and
            storing them safely, farmers can maintain seed quality
            for future use. Combining traditional knowledge with
            suitable scientific methods can make seed preservation
            more effective.
          </p>
        </section>

        {/* KNOWLEDGE NOTE */}
        <section className="knowledge-note">
          <p className="section-label">IAKIS Knowledge Note</p>
          <h2>Preserving seeds, protecting farming traditions</h2>
          <p>
            Seeds carry the history and knowledge of farming
            communities. Farmers preserve useful seeds and local
            varieties through careful selection, storage and exchange.
            IAKIS aims to document this knowledge so that students,
            researchers, farmers and future generations can understand
            and protect India's traditional seed-saving practices.
          </p>
        </section>

        {/* BACK BUTTON */}
        <div className="seed-back-wrap">
          <Link to="/practices" className="detail-back">
            ← Back to Traditional Practices
          </Link>
        </div>

      </main>

      {/* FOOTER */}
      <footer className="seed-footer">
        <h2>Indigenous agricultural knowledge portal</h2>
        <p>Digital documentation of India's traditional agricultural knowledge.</p>
        <div className="footer-bottom">
          © 2026 IAKIS | Academic Project
        </div>
      </footer>

    </div>
  );
}

export default SeedPreservation;
