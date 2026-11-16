
import { Link } from "react-router-dom";
import "../App.css";
import "./OrganicFarming.css";
import logo from "./assets/iakis-logo.png";

function OrganicFarming() {
  return (
   <div className="app organic-page">

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
        <p className="section-label">
          Traditional agricultural practice
        </p>

        <h1>Organic farming</h1>

        <p>
          Learn how farmers grow crops by using natural materials,
          healthy soil management and careful use of farm resources.
          Explore its methods, materials, process, examples and benefits.
        </p>
      </section>

      <main className="detail-content">

        {/* 1. INTRODUCTION */}
        <section className="detail-card conclusion-card">
          <div className="detail-icon">🌱</div>

          <p className="section-label">01. Introduction</p>
          <h2>What is organic farming?</h2>

          <p>
            Organic farming is a method of growing crops that focuses
            on maintaining healthy soil, protecting the environment
            and using natural resources carefully. Farmers use
            materials such as compost, cow dung manure, crop waste
            and other permitted organic inputs to support plant growth.
          </p>

          <p>
            In this method, farmers do not depend mainly on
            synthetic chemical fertilizers and pesticides. They use
            methods such as crop rotation, composting, mixed cropping
            and biological pest control. Organic farming follows
            specific rules about which materials can be used.
          </p>

          <p>
            The main aim is to produce crops while taking care of
            the soil, water, plants, animals and the surrounding
            environment.
          </p>

          <div className="simple-example">
            <h3>Simple example</h3>
            <p>
              A farmer collects cow dung and dry leaves, prepares
              compost from them and adds it to the field. This
              compost adds organic matter to the soil and helps
              improve its condition.
            </p>
          </div>
        </section>

        {/* 2. HISTORY */}
        <section className="detail-card">
          <p className="section-label">02. Background</p>
          <h2>History and traditional background</h2>

          <p>
            Before modern chemical fertilizers became common,
            many farming communities used locally available
            materials to maintain their fields. They used animal
            manure, leaves, crop remains and household organic
            waste as part of farming.
          </p>

          <p>
            Farmers also learned from nature and their own
            experience. They observed the seasons, soil, rainfall
            and crop growth. This knowledge was shared between
            family members and passed from one generation to another.
          </p>

          <p>
            Modern organic farming developed into a more organized
            farming system with specific production standards.
            Today, organic farming may combine traditional knowledge
            with scientific methods and approved organic inputs.
          </p>

          <div className="simple-example">
            <h3>Traditional example</h3>
            <p>
              In many Indian villages, farmers have used cow dung,
              farm waste and compost to add organic matter to
              agricultural fields.
            </p>
          </div>
        </section>

        {/* 3. WHEN AND WHERE */}
        <section className="detail-card">
          <p className="section-label">03. Time and place</p>
          <h2>When and where is organic farming practiced?</h2>

          <h3 className="detail-subheading">When is it practiced?</h3>

          <p>
            Organic farming can be practiced throughout the year.
            The time of sowing and harvesting depends on the crop,
            season, rainfall and local climate. Farmers prepare
            compost and manage soil before or during the crop season.
          </p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon">🌧️</div>
              <h3>Kharif season</h3>
              <p>
                Many crops are grown during the rainy season.
                Examples include paddy, maize and pulses.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">❄️</div>
              <h3>Rabi season</h3>
              <p>
                Crops such as wheat, mustard and gram are
                commonly grown during the cooler months.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">☀️</div>
              <h3>Zaid season</h3>
              <p>
                Some short-duration crops, such as vegetables
                and cucurbits, are grown between the main seasons
                where water is available.
              </p>
            </div>
          </div>

          <h3 className="detail-subheading">Where is it practiced?</h3>

          <p>
            Organic farming can be practiced in villages, farms,
            orchards, vegetable fields and other agricultural areas.
            It is suitable for different regions when the methods
            and crops are selected according to local conditions.
          </p>

          <p>
            In India, organic farming is practiced in different
            states, including Sikkim, Uttarakhand, Rajasthan,
            Madhya Pradesh, among others. Sikkim is known for becoming
            India's first fully organic state.
          </p>

          <p>
            In Bihar, farmers can use organic methods for crops
            such as vegetables, pulses, paddy and wheat. The exact
            method depends on soil, water and local farming conditions.
          </p>
        </section>

        {/* 4. HOW IT WORKS */}
        <section className="detail-card">
          <p className="section-label">04. Working method</p>
          <h2>How does organic farming work?</h2>

          <p>
            Organic farming works by combining different activities
            that support soil fertility and crop growth. It does
            not depend on only one material or technique.
          </p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon">🌍</div>
              <h3>Healthy soil</h3>
              <p>
                Farmers add suitable organic matter and take
                care of soil structure and fertility.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">♻️</div>
              <h3>Recycling</h3>
              <p>
                Plant waste and animal waste can be converted
                into useful compost.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌾</div>
              <h3>Crop rotation</h3>
              <p>
                Different crops are grown in sequence to support
                soil management and reduce repeated crop problems.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🐞</div>
              <h3>Pest control</h3>
              <p>
                Farmers monitor pests and use suitable biological
                and approved control methods.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">💧</div>
              <h3>Water management</h3>
              <p>
                Water is used carefully according to crop needs
                and local availability.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌱</div>
              <h3>Crop diversity</h3>
              <p>
                Growing different crops can support a more
                diverse farming system.
              </p>
            </div>
          </div>
        </section>

        {/* 5. MATERIALS */}
        <section className="detail-card">
          <p className="section-label">05. Required resources</p>
          <h2>Materials and resources used</h2>

          <p>
            Organic farming uses different natural and approved
            materials. The choice depends on the crop, soil and
            organic farming standards.
          </p>

          <div className="resource-list">

            <div className="resource-item">
              <span>01</span>
              <div>
                <h3>Farmyard manure</h3>
                <p>
                  It is prepared from animal dung, urine and
                  bedding materials. After proper decomposition,
                  it can add organic matter and nutrients to the soil.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>02</span>
              <div>
                <h3>Compost</h3>
                <p>
                  Compost is made by allowing plant waste,
                  leaves and other biodegradable materials
                  to decompose under suitable conditions.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>03</span>
              <div>
                <h3>Vermicompost</h3>
                <p>
                  Vermicompost is produced with the help of
                  earthworms. It is made from suitable
                  decomposed organic materials.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>04</span>
              <div>
                <h3>Crop residues</h3>
                <p>
                  Stems, leaves and other remains left after
                  harvesting can be reused as mulch or compost
                  materials where suitable.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>05</span>
              <div>
                <h3>Green manure</h3>
                <p>
                  Some plants, such as dhaincha, are grown and
                  mixed into the soil to add organic matter.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>06</span>
              <div>
                <h3>Organic seeds</h3>
                <p>
                  Farmers use suitable seeds and planting
                  materials that follow the required organic
                  production standards.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>07</span>
              <div>
                <h3>Natural pest management materials</h3>
                <p>
                  Approved plant-based products and biological
                  control materials may be used to manage pests.
                  Their use must follow organic standards.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>08</span>
              <div>
                <h3>Farm tools and equipment</h3>
                <p>
                  Spades, sickles, hoes, seed drills, watering
                  equipment and compost tools may be used for
                  different farm activities.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 6. STEP BY STEP PROCESS */}
        <section className="detail-card">
          <p className="section-label">06. Step-by-step method</p>
          <h2>How is organic farming done?</h2>

          <p>
            The following steps explain a general organic crop
            production process. Actual activities may change
            according to the crop and region.
          </p>

          <div className="step-list">

            <div className="step-item">
              <span>01</span>
              <div>
                <h3>Understand the soil</h3>
                <p>
                  First, the farmer observes the field and checks
                  soil condition. Soil testing can help identify
                  nutrient needs and other problems.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>02</span>
              <div>
                <h3>Prepare the field</h3>
                <p>
                  The land is prepared by removing unwanted
                  materials and making the soil suitable for
                  sowing. The amount of soil disturbance depends
                  on the farming method.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>03</span>
              <div>
                <h3>Prepare and add organic manure</h3>
                <p>
                  The farmer prepares or collects well-decomposed
                  compost or manure and applies it according to
                  crop and soil requirements.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>04</span>
              <div>
                <h3>Select suitable seeds</h3>
                <p>
                  Healthy seeds suitable for the local climate
                  and season are selected. The farmer follows
                  the applicable organic seed requirements.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>05</span>
              <div>
                <h3>Sow the seeds</h3>
                <p>
                  Seeds are planted at a suitable depth and
                  spacing. Proper spacing gives plants enough
                  room to grow.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>06</span>
              <div>
                <h3>Manage water and weeds</h3>
                <p>
                  The farmer provides water according to crop
                  needs and controls weeds through suitable
                  methods such as hand weeding or mulching.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>07</span>
              <div>
                <h3>Protect the crop</h3>
                <p>
                  The field is checked regularly for pests and
                  diseases. Farmers use suitable preventive
                  and approved control methods when needed.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>08</span>
              <div>
                <h3>Harvest the crop</h3>
                <p>
                  Crops are harvested when they reach the
                  correct stage of maturity. The produce is
                  handled and stored properly.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>09</span>
              <div>
                <h3>Reuse farm materials</h3>
                <p>
                  Suitable plant remains can be used for
                  composting or mulching. This helps recycle
                  useful materials on the farm.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 7. PROCESS CYCLE */}
        <section className="detail-card">
          <p className="section-label">07. Process diagram</p>
          <h2>Organic farming process cycle</h2>

          <p>
            Organic farming follows a repeated cycle. Materials
            from one crop can become useful resources for the
            next crop when they are handled properly.
          </p>

          <div className="farming-flow">

            <div className="flow-box">
              <div className="flow-icon">🌍</div>
              <h3>1. Soil preparation</h3>
              <p>Prepare and understand the field.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-box">
              <div className="flow-icon">♻️</div>
              <h3>2. Add compost</h3>
              <p>Add suitable organic matter.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-box">
              <div className="flow-icon">🌱</div>
              <h3>3. Sowing</h3>
              <p>Plant suitable crop seeds.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-box">
              <div className="flow-icon">💧</div>
              <h3>4. Crop care</h3>
              <p>Manage water, weeds and pests.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-box">
              <div className="flow-icon">🌾</div>
              <h3>5. Harvest</h3>
              <p>Collect mature crops.</p>
            </div>

          </div>

          <div className="simple-example">
            <h3>How does the cycle continue?</h3>
            <p>
              After harvesting, suitable plant remains can be
              collected and used for compost or mulch. Compost
              is then added to the soil for a future crop.
              In this way, useful farm materials can be recycled.
            </p>
          </div>
        </section>

        {/* 8. EXAMPLES */}
        <section className="detail-card">
          <p className="section-label">08. Real-life examples</p>
          <h2>Examples of organic farming in India</h2>

          <div className="resource-list">

            <div className="resource-item">
              <span>01</span>
              <div>
                <h3>Sikkim</h3>
                <p>
                  Sikkim became India's first fully organic
                  state in 2016. Its experience is an important
                  example of state-level support for organic
                  farming.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>02</span>
              <div>
                <h3>Uttarakhand</h3>
                <p>
                  Organic farming activities are carried out
                  in different areas of Uttarakhand. Farmers
                  grow crops according to mountain and local
                  farming conditions.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>03</span>
              <div>
                <h3>Madhya Pradesh</h3>
                <p>
                  Different farming groups and farmers in
                  Madhya Pradesh practice organic and natural
                  resource-based methods for selected crops.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>04</span>
              <div>
                <h3>Bihar</h3>
                <p>
                  In Bihar, compost, farmyard manure and
                  crop-residue management can be used in
                  crop production. Farmers may adapt these
                  methods for vegetables, pulses and other
                  local crops.
                </p>
              </div>
            </div>

          </div>

          <p className="detail-note">
            Note: These are examples of regions where organic
            farming activities or related methods are found.
            The exact farming practices differ from one area
            and farm to another.
          </p>
        </section>

        {/* 9. FEATURES */}
        <section className="detail-card">
          <p className="section-label">09. Key features</p>
          <h2>Main features of organic farming</h2>

          <div className="feature-grid">

            <div className="feature-box">
              <div className="feature-icon">🌱</div>
              <h3>Organic inputs</h3>
              <p>
                It uses compost, manure and other permitted
                organic materials.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌍</div>
              <h3>Soil care</h3>
              <p>
                It focuses on maintaining soil organic matter
                and soil health.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">♻️</div>
              <h3>Recycling</h3>
              <p>
                Useful farm waste can be reused through
                composting and mulching.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌾</div>
              <h3>Crop rotation</h3>
              <p>
                Different crops may be grown in sequence
                to support soil and crop management.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🐞</div>
              <h3>Biological control</h3>
              <p>
                Useful organisms and approved biological
                methods can help manage pests.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">📚</div>
              <h3>Traditional knowledge</h3>
              <p>
                Local farming experience can support the
                choice of suitable practices.
              </p>
            </div>

          </div>
        </section>

        {/* 10. USES */}
        <section className="detail-card">
          <p className="section-label">10. Uses and applications</p>
          <h2>Where and how is organic farming used?</h2>

          <p>
            Organic farming methods can be used in different
            types of agricultural activities. The exact method
            depends on the crop, land and available resources.
          </p>

          <div className="uses-grid">

            <div className="use-box">
              <span>🌾</span>
              <h3>Food crops</h3>
              <p>
                Used for growing crops such as wheat, rice,
                pulses and other food grains.
              </p>
            </div>

            <div className="use-box">
              <span>🥕</span>
              <h3>Vegetables</h3>
              <p>
                Organic methods can be used to grow vegetables
                in fields and kitchen gardens.
              </p>
            </div>

            <div className="use-box">
              <span>🍎</span>
              <h3>Fruits</h3>
              <p>
                Organic methods may be used in orchards
                and fruit cultivation.
              </p>
            </div>

            <div className="use-box">
              <span>🌿</span>
              <h3>Plant products</h3>
              <p>
                These methods can also be used for selected
                spices, herbs and other plant products.
              </p>
            </div>

          </div>
        </section>

        {/* 11. IMPORTANCE */}
        <section className="detail-card importance-card">
          <p className="section-label">11. Importance</p>
          <h2>Why is organic farming important?</h2>

          <ul>
            <li>
              <strong>Soil health:</strong> Organic matter
              helps improve soil structure and supports
              soil organisms.
            </li>

            <li>
              <strong>Resource recycling:</strong> Plant
              and animal waste can be converted into useful
              farming materials.
            </li>

            <li>
              <strong>Environmental care:</strong> Proper
              organic practices can help reduce some forms
              of pollution and support biodiversity.
            </li>

            <li>
              <strong>Traditional knowledge:</strong>
              It provides a way to document and use useful
              knowledge developed by farming communities.
            </li>

            <li>
              <strong>Crop diversity:</strong> Crop rotation
              and mixed farming can support a more diverse
              agricultural system.
            </li>
          </ul>
        </section>

        {/* 12. BENEFITS */}
        <section className="detail-card">
          <p className="section-label">12. Advantages</p>
          <h2>Benefits of organic farming</h2>

          <div className="benefit-grid">

            <div className="benefit-box">
              <h3>🌱 Better soil condition</h3>
              <p>
                Compost and manure add organic matter
                and can improve soil structure.
              </p>
            </div>

            <div className="benefit-box">
              <h3>♻️ Less farm waste</h3>
              <p>
                Suitable plant and animal waste can be
                reused instead of being thrown away.
              </p>
            </div>

            <div className="benefit-box">
              <h3>🐝 Biodiversity support</h3>
              <p>
                Diverse crops and suitable farm practices
                can provide support to different organisms.
              </p>
            </div>

            <div className="benefit-box">
              <h3>📚 Knowledge preservation</h3>
              <p>
                Traditional farming methods can be recorded
                and shared with future generations.
              </p>
            </div>

          </div>
        </section>

        {/* 13. LIMITATIONS */}
        <section className="detail-card limitation-card">
          <p className="section-label">13. Limitations</p>
          <h2>Challenges of organic farming</h2>

          <p>
            Organic farming has many benefits, but farmers
            may also face some difficulties while using it.
          </p>

          <ul>
            <li>
              <strong>More labour:</strong> Activities such
              as compost preparation and manual weeding
              may require extra work.
            </li>

            <li>
              <strong>Need for knowledge:</strong> Farmers
              need proper knowledge about soil, compost,
              crop rotation and pest management.
            </li>

            <li>
              <strong>Input availability:</strong> Suitable
              organic materials may not always be available
              in sufficient quantity.
            </li>

            <li>
              <strong>Certification:</strong> Farmers who
              want to sell produce as certified organic
              must follow the required standards and records.
            </li>

            <li>
              <strong>Yield changes:</strong> Crop yield
              may change during the transition to organic
              methods and depends on local conditions.
            </li>
          </ul>
        </section>

        {/* 14. CONCLUSION */}
        <section className="detail-card">
          <p className="section-label">14. Conclusion</p>
          <h2>What have we learned?</h2>

          <p>
            Organic farming is a method of crop production
            that focuses on soil health, careful use of
            resources and suitable natural farming practices.
            It uses materials such as compost, manure and
            crop residues along with methods such as crop
            rotation and biological pest management.
          </p>

          <p>
            It is not just about avoiding certain chemicals.
            It requires planning, knowledge, proper soil
            management and careful crop protection.
          </p>

          <p>
            By understanding and documenting organic farming,
            students and future generations can learn how
            farming communities use local resources and
            traditional knowledge in agriculture.
          </p>
        </section>

        {/* KNOWLEDGE NOTE */}
        <section className="knowledge-note">
          <p className="section-label">IAKIS knowledge note</p>

          <h2>Preserving traditional agricultural knowledge</h2>

          <p>
            Every farming practice carries knowledge about
            soil, climate, crops and local resources.
            IAKIS aims to document this knowledge so that
            students, researchers and future generations
            can learn from it.
          </p>
        </section>

        {/* BACK BUTTON */}
        <div className="detail-back">
          <Link to="/practices">
            ← Back to Traditional Practices
          </Link>
        </div>

      </main>

      {/* FOOTER */}
      <footer>
        <h3>Indigenous agricultural knowledge portal</h3>

        <p>
          Digital documentation of India's traditional
          agricultural knowledge.
        </p>

        <p className="copyright">
          © 2026 IAKIS | Academic Project
        </p>
      </footer>

    </div>
  );
}

export default OrganicFarming;
