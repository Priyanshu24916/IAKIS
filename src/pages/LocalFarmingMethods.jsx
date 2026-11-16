
import { Link } from "react-router-dom";
import "../App.css";
import "./LocalFarmingMethods.css";
import logo from "./assets/iakis-logo.png";

function LocalFarmingMethods() {
  return (
    <div className="app local-page">

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

        <h1>Local Farming Methods</h1>

        <p>
          Learn how farmers use local resources, traditional knowledge
          and simple farming practices according to their area's soil,
          climate and water supply. Explore their methods, resources,
          processes, examples and benefits.
        </p>
      </section>

      <main className="detail-content">

        {/* 1. INTRODUCTION */}
        <section className="detail-card conclusion-card">
          <div className="detail-icon">🌱</div>

          <p className="section-label">01. Introduction</p>
          <h2>What are local farming methods?</h2>

          <p>
            Local farming methods are agricultural practices followed
            by farmers according to the conditions of their own area.
            These methods depend on factors such as soil type, climate,
            rainfall, water supply, land shape and the crops that grow
            well in that region.
          </p>

          <p>
            Farmers use their local experience and knowledge to decide
            how to prepare the land, select seeds, manage water, protect
            crops and harvest produce. They often use resources that
            are easily available nearby, such as animal manure, crop
            remains, leaves, local seeds and farm tools.
          </p>

          <p>
            Local farming methods are not the same everywhere. A farmer
            in a dry area may use rainwater harvesting and moisture
            conservation, while a farmer in a region with heavy rainfall
            may use raised fields or proper drainage. In this way,
            farming practices change according to local needs.
          </p>

          <p>
            The main aim is to grow crops in a way that suits the local
            environment and makes useful use of available resources.
            These methods may include traditional practices, improved
            techniques or a combination of both.
          </p>

          <div className="simple-example">
            <h3>Simple example</h3>
            <p>
              A farmer living in a dry village collects rainwater in
              a small farm pond and uses it when crops need water.
              Another farmer living in a high-rainfall area makes
              drainage channels to remove extra water from the field.
              Both farmers choose methods according to their local
              conditions.
            </p>
          </div>
        </section>

        {/* 2. BACKGROUND */}
        <section className="detail-card">
          <p className="section-label">02. Background</p>
          <h2>How have local farming methods developed over time?</h2>

          <p>
            Local farming methods developed through the experience
            of farming communities over many generations. In the past,
            farmers had to depend mainly on nearby natural resources
            and their understanding of the land, weather, crops and
            seasons.
          </p>

          <p>
            Farmers observed which crops grew well in different soils,
            when rainfall usually arrived and how much water crops
            needed. They also learned how to protect crops from
            common pests, store seeds and use animal and plant waste.
            Useful knowledge was shared among family members and
            other farmers.
          </p>

          <p>
            Over time, farmers improved their methods through
            experience. For example, they developed ways to store
            rainwater, prepare field bunds, grow different crops
            together and select seeds that performed well in local
            conditions.
          </p>

          <p>
            Today, local farming methods can also include scientific
            information, soil testing, improved seeds, weather
            information and modern farm equipment. Farmers may
            combine these facilities with traditional knowledge
            to make better decisions.
          </p>

          <div className="simple-example">
            <h3>Traditional example</h3>
            <p>
              In many Indian villages, farmers have traditionally
              used farmyard manure, crop remains and leaves to improve
              the soil. They have also observed local rainfall and
              seasons to decide the suitable time for sowing.
            </p>
          </div>
        </section>

        {/* 3. TIME AND PLACE */}
        <section className="detail-card">
          <p className="section-label">03. Time and place</p>
          <h2>When and where are local farming methods practiced?</h2>

          <h3 className="detail-subheading">When are they practiced?</h3>

          <p>
            Local farming methods are followed throughout the year.
            The activities depend on the crop, season, rainfall,
            temperature and availability of water. Farmers prepare
            their fields before sowing and continue crop care until
            harvesting and storage.
          </p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon">🌧️</div>
              <h3>Kharif season</h3>
              <p>
                This is the rainy season. Farmers commonly grow
                crops such as paddy, maize, millets and pulses.
                The methods depend on the amount of rainfall
                and drainage facilities.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">❄️</div>
              <h3>Rabi season</h3>
              <p>
                This is the winter growing season. Common crops
                include wheat, gram, mustard and peas. Farmers
                manage irrigation according to crop needs.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">☀️</div>
              <h3>Zaid season</h3>
              <p>
                This is the short season between Rabi and Kharif.
                Farmers may grow vegetables, cucumber, watermelon
                and other short-duration crops where water is
                available.
              </p>
            </div>
          </div>

          <h3 className="detail-subheading">Where are they practiced?</h3>

          <p>
            Local farming methods are practiced in villages,
            plains, hills, mountains, dry areas, coastal regions
            and river valleys. The methods differ because every
            region has its own soil, weather, water supply and
            farming needs.
          </p>

          <p>
            In hilly areas, farmers may use terrace farming to
            cultivate sloping land. In dry areas, they may collect
            rainwater and use methods that reduce water loss.
            In flood-prone areas, farmers may select crops that
            can grow under suitable local water conditions.
          </p>

          <p>
            In Bihar, farmers use different methods for growing
            paddy, wheat, maize, pulses and vegetables. The choice
            of crop and farming method depends on local soil,
            rainfall, irrigation and the condition of the land.
          </p>
        </section>

        {/* 4. SOIL AND CLIMATE */}
        <section className="detail-card">
          <p className="section-label">04. Local conditions</p>
          <h2>How do soil and climate influence local farming methods?</h2>

          <p>
            Soil and climate are two important factors that decide
            which farming methods are suitable for an area. Farmers
            need to understand these conditions before selecting
            crops and planning farm activities.
          </p>

          <h3 className="detail-subheading">Role of soil</h3>

          <p>
            Soil provides support, water and nutrients to plants.
            Different areas have different types of soil. Some soils
            hold more water, while others allow water to pass through
            quickly. Soil also differs in texture, depth, fertility
            and drainage.
          </p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon">🟤</div>
              <h3>Clay soil</h3>
              <p>
                Clay soil holds more water than sandy soil.
                Farmers need to manage drainage and avoid
                waterlogging where it can harm crops.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🏜️</div>
              <h3>Sandy soil</h3>
              <p>
                Sandy soil allows water to drain quickly.
                Farmers may add organic matter and use
                careful irrigation to conserve moisture.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌾</div>
              <h3>Loamy soil</h3>
              <p>
                Loamy soil contains a mixture of sand, silt
                and clay. It is suitable for many crops when
                its fertility and water conditions are good.
              </p>
            </div>
          </div>

          <h3 className="detail-subheading">Role of climate</h3>

          <p>
            Climate includes temperature, rainfall, humidity and
            seasonal weather conditions. These factors affect seed
            germination, plant growth, flowering and harvesting.
            Farmers select crops and sowing times according to
            the local climate.
          </p>

          <p>
            For example, paddy is commonly grown in areas with
            suitable rainfall or irrigation. Millets such as
            pearl millet can be suitable for many dry areas.
            Wheat is commonly grown during the cooler Rabi season
            in suitable regions.
          </p>

          <div className="simple-example">
            <h3>Simple example</h3>
            <p>
              A farmer in a dry region may grow drought-tolerant
              crops and use mulch to conserve soil moisture.
              A farmer in a high-rainfall region may make
              drainage channels to protect crops from excess water.
            </p>
          </div>
        </section>

        {/* 5. WORKING METHOD */}
        <section className="detail-card">
          <p className="section-label">05. Working method</p>
          <h2>How do local farming methods work?</h2>

          <p>
            Local farming methods work by matching farm activities
            with the natural conditions and available resources
            of an area. Farmers observe their fields and use
            local experience to decide what needs to be done.
          </p>

          <p>
            These methods do not depend on only one technique.
            Farmers may combine crop selection, soil preparation,
            water management, manure application, crop protection
            and seed storage according to their needs.
          </p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon">🌍</div>
              <h3>Understanding the land</h3>
              <p>
                Farmers observe soil type, field slope, drainage
                and other land conditions before choosing
                suitable farming activities.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌱</div>
              <h3>Suitable crop selection</h3>
              <p>
                Farmers select crops and varieties that can
                grow under local temperature, rainfall and
                soil conditions.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">💧</div>
              <h3>Water management</h3>
              <p>
                Water is collected, stored, supplied or drained
                according to the needs of crops and local
                water availability.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">♻️</div>
              <h3>Resource recycling</h3>
              <p>
                Suitable crop remains, leaves and animal waste
                may be reused as compost or mulch.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🐞</div>
              <h3>Crop protection</h3>
              <p>
                Farmers observe crops regularly and use suitable
                cultural, mechanical or biological methods
                to manage pests.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">📚</div>
              <h3>Local knowledge</h3>
              <p>
                Experience about seasons, seeds and farm
                activities helps farmers make decisions.
                Scientific advice can improve these decisions.
              </p>
            </div>
          </div>
        </section>

        {/* 6. LOCAL RESOURCES */}
        <section className="detail-card">
          <p className="section-label">06. Required resources</p>
          <h2>What local resources are used in farming?</h2>

          <p>
            Local farming uses resources that are available in
            or around the farming area. These resources may
            include soil, water, seeds, animal waste, plant
            materials, human labour and farm tools.
          </p>

          <p>
            Using nearby resources can reduce the need to bring
            every material from far away. However, resources
            must be used properly. For example, fresh animal
            manure should be handled and applied carefully,
            and water should not be wasted.
          </p>

          <div className="resource-list">

            <div className="resource-item">
              <span>01</span>
              <div>
                <h3>Local seeds</h3>
                <p>
                  Farmers may save and select seeds from crops
                  that perform well in their area. The seeds
                  should be healthy, mature and free from
                  visible damage or disease.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>02</span>
              <div>
                <h3>Animal manure</h3>
                <p>
                  Cow dung and other animal manure can be
                  decomposed and used as a source of organic
                  matter and plant nutrients.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>03</span>
              <div>
                <h3>Crop residues</h3>
                <p>
                  Stems, leaves and other suitable plant remains
                  can be used as mulch, compost material or
                  animal feed, depending on local needs.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>04</span>
              <div>
                <h3>Leaves and plant materials</h3>
                <p>
                  Dry leaves, green leaves and other suitable
                  plant materials can be used for composting
                  and soil covering.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>05</span>
              <div>
                <h3>Rainwater and local water sources</h3>
                <p>
                  Rainwater, ponds, wells, rivers and irrigation
                  channels may provide water for farming.
                  Their use depends on availability and local
                  water conditions.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>06</span>
              <div>
                <h3>Farm tools</h3>
                <p>
                  Spades, hoes, sickles, ploughs and other
                  suitable tools are used for preparing soil,
                  removing weeds and harvesting crops.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>07</span>
              <div>
                <h3>Human and animal labour</h3>
                <p>
                  Family members, farm workers and draught
                  animals may help in different farm activities.
                  The type of labour depends on the size of
                  the farm and available facilities.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>08</span>
              <div>
                <h3>Local knowledge and experience</h3>
                <p>
                  Knowledge about soil, rainfall, seasons,
                  seeds and crop care helps farmers choose
                  suitable practices for their area.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 7. CROP AND SEED SELECTION */}
        <section className="detail-card">
          <p className="section-label">07. Crop and seed selection</p>
          <h2>How do farmers select crops and seeds according to local conditions?</h2>

          <p>
            Crop and seed selection is an important part of local
            farming. A crop that grows well in one region may not
            perform equally well in another region. Therefore,
            farmers consider local soil, climate, rainfall,
            water supply and growing season before selecting
            crops and seeds.
          </p>

          <p>
            Farmers also consider how much time a crop takes
            to mature, whether it needs more or less water,
            and whether it can tolerate common local problems.
            They may select traditional varieties, improved
            varieties or other suitable seeds based on their
            needs and reliable advice.
          </p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon">🌧️</div>
              <h3>Rainfall</h3>
              <p>
                Farmers consider the amount and timing of
                rainfall before selecting crops for rainfed
                fields.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌡️</div>
              <h3>Temperature</h3>
              <p>
                Each crop needs a suitable temperature for
                germination and growth. Farmers select crops
                according to the local season.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌍</div>
              <h3>Soil type</h3>
              <p>
                Soil texture, fertility and drainage help
                farmers decide which crops are suitable
                for their fields.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">💧</div>
              <h3>Water availability</h3>
              <p>
                Farmers select crops according to available
                irrigation and the amount of water needed
                by the crop.
              </p>
            </div>
          </div>

          <h3 className="detail-subheading">How are good seeds selected?</h3>

          <p>
            Farmers select healthy seeds from reliable sources.
            Seeds should be mature, clean and free from visible
            damage. They should also be suitable for the local
            growing season and the intended crop.
          </p>

          <p>
            Seed germination can be tested before sowing.
            Farmers may place a small number of seeds in
            suitable moist conditions to check how many
            germinate. For important crops, they should
            follow recommended seed quality and treatment
            practices.
          </p>

          <div className="simple-example">
            <h3>Example from India</h3>
            <p>
              In many areas of Bihar, farmers grow paddy during
              the Kharif season and wheat during the Rabi season.
              The exact crop variety is selected according to
              local soil, water, season and farming advice.
            </p>
          </div>
        </section>

        {/* 8. SOIL MANAGEMENT */}
        <section className="detail-card">
          <p className="section-label">08. Soil management</p>
          <h2>How do farmers prepare and maintain soil for local farming?</h2>

          <p>
            Soil preparation makes the field suitable for sowing
            and plant growth. Farmers first observe the condition
            of their land. They may check soil texture, moisture,
            weeds, field slope and drainage before deciding
            how to prepare it.
          </p>

          <p>
            Depending on the crop and soil, farmers may plough
            the field, break large soil clods, level the land
            or make raised beds and field bunds. Not every field
            needs the same preparation. Excessive tillage should
            also be avoided because it can damage soil structure
            and increase erosion in some conditions.
          </p>

          <h3 className="detail-subheading">Common soil preparation methods</h3>

          <div className="resource-list">

            <div className="resource-item">
              <span>01</span>
              <div>
                <h3>Ploughing</h3>
                <p>
                  Ploughing loosens and turns the soil when
                  needed. It can help prepare the seedbed and
                  control some weeds. The depth and timing
                  depend on soil moisture and crop requirements.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>02</span>
              <div>
                <h3>Levelling</h3>
                <p>
                  Levelling makes the field surface more even.
                  It can help distribute irrigation water
                  properly and reduce unwanted water collection
                  in low areas.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>03</span>
              <div>
                <h3>Field bunding</h3>
                <p>
                  Small raised boundaries are made around or
                  within fields to slow water flow and reduce
                  runoff. They can help conserve rainwater
                  where the land and soil are suitable.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>04</span>
              <div>
                <h3>Raised beds</h3>
                <p>
                  Soil is arranged into raised planting beds.
                  They may improve drainage and make crop
                  management easier in suitable fields.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>05</span>
              <div>
                <h3>Mulching</h3>
                <p>
                  Suitable dry leaves, straw or other plant
                  materials are spread over the soil surface.
                  Mulching helps reduce moisture loss and
                  can suppress some weeds.
                </p>
              </div>
            </div>

          </div>

          <h3 className="detail-subheading">Maintaining soil condition</h3>

          <p>
            Farmers can maintain soil condition by adding
            suitable organic matter, growing different crops,
            preventing erosion and avoiding unnecessary soil
            disturbance. Soil testing can help identify
            nutrient problems and guide the use of suitable
            soil inputs.
          </p>

          <div className="simple-example">
            <h3>Simple example</h3>
            <p>
              A farmer uses straw as mulch around vegetable
              plants. It covers the soil, reduces direct
              sunlight on the soil surface and helps conserve
              moisture between irrigations.
            </p>
          </div>
        </section>

        {/* 9. WATER MANAGEMENT */}
        <section className="detail-card">
          <p className="section-label">09. Water management</p>
          <h2>How do farmers manage water according to local availability?</h2>

          <p>
            Water is necessary for seed germination, plant growth
            and crop production. However, the amount of water
            available is different in every region. Some areas
            receive heavy rainfall, while others receive very
            little rainfall. Therefore, farmers choose water
            management methods according to local conditions.
          </p>

          <p>
            Farmers may collect rainwater, store it in ponds,
            use wells or irrigation channels, and apply water
            directly to crops. They also try to prevent water
            loss through runoff, evaporation and unnecessary
            irrigation.
          </p>

          <div className="resource-list">

            <div className="resource-item">
              <span>01</span>
              <div>
                <h3>Rainwater harvesting</h3>
                <p>
                  Rainwater is collected from fields, rooftops
                  or other suitable surfaces and stored for
                  later use. It can provide extra water during
                  dry periods.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>02</span>
              <div>
                <h3>Farm ponds</h3>
                <p>
                  Small ponds are made to collect and store
                  rainwater or runoff. Stored water may be
                  used for irrigation when needed, depending
                  on local conditions.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>03</span>
              <div>
                <h3>Field bunds</h3>
                <p>
                  Bunds slow down the movement of rainwater
                  and help reduce soil erosion. They can
                  also help water enter the soil.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>04</span>
              <div>
                <h3>Traditional ponds and tanks</h3>
                <p>
                  Community ponds and local tanks can store
                  water for different uses. Their maintenance
                  helps support local water availability.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>05</span>
              <div>
                <h3>Drip and sprinkler irrigation</h3>
                <p>
                  Drip irrigation supplies water near plant
                  roots, while sprinkler irrigation sprays
                  water over crops. These systems can help
                  use irrigation water efficiently when
                  properly designed and managed.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>06</span>
              <div>
                <h3>Drainage channels</h3>
                <p>
                  Channels carry extra water away from fields.
                  They are useful in places where heavy rainfall
                  or excess irrigation can cause waterlogging.
                </p>
              </div>
            </div>

          </div>

          <div className="simple-example">
            <h3>Example</h3>
            <p>
              In a dry village, a farmer may collect rainwater
              in a farm pond and use it to irrigate vegetables
              during a dry period. In a high-rainfall area,
              farmers may make drainage channels to remove
              extra water from their fields.
            </p>
          </div>
        </section>

        {/* 10. SOIL FERTILITY */}
        <section className="detail-card">
          <p className="section-label">10. Soil fertility</p>
          <h2>How do farmers maintain soil fertility using local methods?</h2>

          <p>
            Soil fertility means the ability of soil to provide
            the nutrients needed by plants. Healthy and fertile
            soil supports good root growth and helps crops grow
            properly. Farmers maintain soil fertility by adding
            suitable nutrients and protecting the condition
            of the soil.
          </p>

          <p>
            Local methods often use materials available on or
            near the farm. These include animal manure, compost,
            crop residues and green manure. Farmers may also
            grow different crops in sequence to support better
            soil management.
          </p>

          <div className="feature-grid">
            <div className="feature-box">
              <div className="feature-icon">🐄</div>
              <h3>Farmyard manure</h3>
              <p>
                Properly decomposed animal dung and bedding
                materials add organic matter and nutrients
                to the soil.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">♻️</div>
              <h3>Compost</h3>
              <p>
                Decomposed plant and biodegradable materials
                can be added to the soil to improve its
                organic matter content.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌿</div>
              <h3>Green manure</h3>
              <p>
                Plants such as dhaincha can be grown and
                mixed into the soil to add organic matter.
                Some green manure crops also help add
                nitrogen through biological processes.
              </p>
            </div>

            <div className="feature-box">
              <div className="feature-icon">🌾</div>
              <h3>Crop rotation</h3>
              <p>
                Growing different crops in sequence can
                support soil management and help reduce
                repeated crop-related problems.
              </p>
            </div>
          </div>

          <p>
            Farmers should apply manure and other soil inputs
            in suitable amounts. Soil testing can help them
            understand which nutrients are needed. No single
            local material provides every nutrient in the
            correct amount for all crops.
          </p>

          <div className="simple-example">
            <h3>Example</h3>
            <p>
              A farmer grows a legume crop such as gram after
              another crop. Legume plants work with helpful
              soil bacteria that can fix nitrogen. The farmer
              may also use suitable compost to maintain
              soil organic matter.
            </p>
          </div>
        </section>

        {/* 11. CROP PROTECTION */}
        <section className="detail-card">
          <p className="section-label">11. Crop protection</p>
          <h2>How do farmers protect crops using local knowledge and resources?</h2>

          <p>
            Crops can be damaged by insects, diseases, weeds,
            birds, animals and unsuitable weather. Farmers
            protect their crops by observing the field regularly
            and taking action when a problem appears.
          </p>

          <p>
            Local knowledge can help farmers understand common
            crop problems and their seasonal occurrence.
            However, farmers should identify the actual cause
            before selecting a control method. Not every insect
            is harmful, because some insects help in pollination
            or naturally control pests.
          </p>

          <div className="resource-list">

            <div className="resource-item">
              <span>01</span>
              <div>
                <h3>Field observation</h3>
                <p>
                  Farmers check leaves, stems, flowers and
                  fruits for signs of insect damage or disease.
                  Early observation helps them take timely action.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>02</span>
              <div>
                <h3>Crop rotation</h3>
                <p>
                  Changing the crop grown in a field can help
                  break the life cycle of some crop-specific
                  pests and diseases.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>03</span>
              <div>
                <h3>Field sanitation</h3>
                <p>
                  Removing badly infected plant parts and
                  managing crop residues properly can reduce
                  some sources of pests and diseases.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>04</span>
              <div>
                <h3>Hand removal</h3>
                <p>
                  In small fields or gardens, farmers may
                  remove visible harmful insects, eggs or
                  affected plant parts by hand when suitable.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>05</span>
              <div>
                <h3>Natural enemies</h3>
                <p>
                  Helpful organisms such as ladybird beetles
                  and some parasitic wasps can control certain
                  crop pests. Farmers can protect these
                  beneficial organisms.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>06</span>
              <div>
                <h3>Suitable plant-based products</h3>
                <p>
                  Some approved plant-based products may be
                  used for pest management. Their preparation,
                  safety and application should follow
                  reliable agricultural advice.
                </p>
              </div>
            </div>

          </div>

          <div className="simple-example">
            <h3>Example</h3>
            <p>
              A farmer checks vegetable plants regularly.
              If a few leaves are badly affected by insects,
              the farmer may remove those leaves and seek
              advice about the pest before using a suitable
              control method.
            </p>
          </div>
        </section>

        {/* 12. STEP BY STEP PROCESS */}
        <section className="detail-card">
          <p className="section-label">12. Step-by-step method</p>
          <h2>How are local farming methods practiced step by step?</h2>

          <p>
            Local farming follows a series of activities from
            field observation to harvesting. The exact process
            changes according to the region, crop, season and
            available resources. The following steps explain
            a general process.
          </p>

          <div className="step-list">

            <div className="step-item">
              <span>01</span>
              <div>
                <h3>Observe local conditions</h3>
                <p>
                  First, the farmer observes the field, soil,
                  slope, rainfall pattern and water availability.
                  This helps in understanding the needs and
                  limitations of the land.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>02</span>
              <div>
                <h3>Select a suitable crop</h3>
                <p>
                  The farmer selects a crop that can grow under
                  the local soil and climate conditions.
                  Growing season, water requirement and
                  available market facilities may also be
                  considered.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>03</span>
              <div>
                <h3>Select healthy seeds</h3>
                <p>
                  Suitable seeds are selected from reliable
                  sources or properly stored seed lots.
                  The farmer checks seed quality and follows
                  recommended seed treatment when needed.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>04</span>
              <div>
                <h3>Prepare the field</h3>
                <p>
                  The field is prepared according to the crop
                  and soil condition. Farmers may plough,
                  level the land, prepare beds or make bunds
                  where suitable.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>05</span>
              <div>
                <h3>Use local soil resources</h3>
                <p>
                  Suitable compost, well-decomposed manure
                  or other recommended soil inputs are
                  applied according to soil and crop needs.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>06</span>
              <div>
                <h3>Sow or plant the crop</h3>
                <p>
                  Seeds or seedlings are planted at the
                  correct time, depth and spacing. Proper
                  planting helps plants receive enough
                  space, sunlight and nutrients.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>07</span>
              <div>
                <h3>Manage water and weeds</h3>
                <p>
                  Water is supplied according to crop needs
                  and local availability. Weeds are controlled
                  through suitable methods such as hand
                  weeding, hoeing or mulching.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>08</span>
              <div>
                <h3>Protect the growing crop</h3>
                <p>
                  Farmers regularly check for pests, diseases
                  and other problems. They use suitable
                  preventive and control methods when needed.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>09</span>
              <div>
                <h3>Harvest and store the produce</h3>
                <p>
                  Crops are harvested at the correct stage
                  of maturity. The produce is cleaned,
                  dried when required and stored in a
                  suitable place to reduce damage.
                </p>
              </div>
            </div>

            <div className="step-item">
              <span>10</span>
              <div>
                <h3>Reuse suitable farm materials</h3>
                <p>
                  After harvesting, suitable plant remains
                  can be reused for composting, mulching
                  or other farm purposes. The farmer then
                  plans for the next crop season.
                </p>
              </div>
            </div>

          </div>
        </section>

        {/* 13. PROCESS CYCLE */}
        <section className="detail-card">
          <p className="section-label">13. Process diagram</p>
          <h2>What is the local farming process cycle?</h2>

          <p>
            Local farming follows a repeated cycle of planning,
            field preparation, planting, crop care and harvesting.
            Farmers make changes in this cycle according to
            the season, soil, climate and available resources.
          </p>

          <div className="farming-flow">

            <div className="flow-box">
              <div className="flow-icon">🔍</div>
              <h3>1. Observe</h3>
              <p>Understand local soil, climate and water.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-box">
              <div className="flow-icon">🌍</div>
              <h3>2. Prepare</h3>
              <p>Prepare the field and manage soil.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-box">
              <div className="flow-icon">🌱</div>
              <h3>3. Plant</h3>
              <p>Select and plant suitable crops.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-box">
              <div className="flow-icon">💧</div>
              <h3>4. Care</h3>
              <p>Manage water, weeds and crop health.</p>
            </div>

            <div className="flow-arrow">→</div>

            <div className="flow-box">
              <div className="flow-icon">🌾</div>
              <h3>5. Harvest</h3>
              <p>Collect and store mature crops.</p>
            </div>

          </div>

          <div className="simple-example">
            <h3>How does the cycle continue?</h3>
            <p>
              After harvesting, farmers may save healthy seeds
              for the next season. Suitable crop remains can
              be used for compost or mulch. They also observe
              the field again and plan the next crop according
              to the coming season and available resources.
              In this way, the farming cycle continues.
            </p>
          </div>
        </section>

        {/* 14. EXAMPLES */}
        <section className="detail-card">
          <p className="section-label">14. Real-life examples</p>
          <h2>What are some examples of local farming methods in India?</h2>

          <p>
            India has different types of land, climate and water
            conditions. Therefore, farming methods vary from
            one region to another. The following examples show
            how farmers use methods according to their local
            environment.
          </p>

          <div className="resource-list">

            <div className="resource-item">
              <span>01</span>
              <div>
                <h3>Terrace farming in hilly areas</h3>
                <p>
                  In many hilly regions, farmers make step-like
                  fields on slopes. These terraces provide
                  flatter areas for cultivation and help slow
                  down water flow. Proper terrace design and
                  maintenance are important to reduce soil
                  erosion.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>02</span>
              <div>
                <h3>Rainwater harvesting in dry regions</h3>
                <p>
                  Farmers in water-scarce areas may collect
                  rainwater in ponds, tanks and other storage
                  structures. This water can be used for
                  irrigation or other farm needs when
                  available.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>03</span>
              <div>
                <h3>Rice cultivation in suitable lowland areas</h3>
                <p>
                  In regions with suitable rainfall, soil and
                  water supply, farmers grow paddy in lowland
                  fields. Field levelling and water management
                  help support crop growth.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>04</span>
              <div>
                <h3>Millet farming in dry areas</h3>
                <p>
                  In many dry and semi-dry regions, farmers
                  grow millets such as pearl millet and
                  finger millet. These crops can be suitable
                  for areas with limited rainfall, depending
                  on the variety and local conditions.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>05</span>
              <div>
                <h3>Agroforestry in farming areas</h3>
                <p>
                  Farmers grow trees along with crops or
                  around field boundaries. Suitable trees
                  can provide shade, fruits, fodder or wood.
                  Their selection and spacing should not
                  harm the main crops.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>06</span>
              <div>
                <h3>Rice-fish farming in suitable regions</h3>
                <p>
                  In some suitable areas, fish are raised
                  in or around paddy fields along with rice.
                  This system needs proper water depth,
                  field design and management to support
                  both rice and fish.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>07</span>
              <div>
                <h3>Mixed cropping in Indian villages</h3>
                <p>
                  Farmers grow two or more crops together
                  in the same field. For example, a suitable
                  combination of cereals and pulses may
                  be grown to use land and other resources
                  in different ways.
                </p>
              </div>
            </div>

            <div className="resource-item">
              <span>08</span>
              <div>
                <h3>Local farming practices in Bihar</h3>
                <p>
                  Farmers in Bihar grow crops such as paddy,
                  wheat, maize, pulses and vegetables according
                  to local conditions. They use field bunds,
                  irrigation channels, farmyard manure and
                  other suitable practices where available.
                </p>
              </div>
            </div>

          </div>

          <p className="detail-note">
            Note: These are examples of farming practices found
            in different parts of India. Every method may not
            be suitable for every region. Farmers need to
            select practices according to local conditions.
          </p>
        </section>

        {/* 15. BENEFITS AND IMPORTANCE */}
        <section className="detail-card importance-card">
          <p className="section-label">15. Benefits and importance</p>
          <h2>What are the benefits and importance of local farming methods?</h2>

          <p>
            Local farming methods are important because they
            help farmers make decisions according to the
            conditions of their own area. They encourage the
            proper use of available land, water, seeds and
            other farm resources.
          </p>

          <ul>
            <li>
              <strong>Suitable for local conditions:</strong>
              Farmers choose crops and methods according to
              local soil, climate, rainfall and water supply.
            </li>

            <li>
              <strong>Use of local resources:</strong>
              Materials such as manure, crop residues, leaves
              and locally available tools can be used wherever
              suitable.
            </li>

            <li>
              <strong>Water conservation:</strong>
              Methods such as rainwater harvesting, mulching
              and field bunding can help conserve water
              under suitable conditions.
            </li>

            <li>
              <strong>Soil protection:</strong>
              Proper field preparation, soil covering and
              erosion control methods help protect the soil.
            </li>

            <li>
              <strong>Crop diversity:</strong>
              Growing different crops according to local
              needs can support crop diversity and reduce
              dependence on a single crop.
            </li>

            <li>
              <strong>Traditional knowledge:</strong>
              Useful experience and knowledge developed
              by farming communities can be recorded
              and shared with future generations.
            </li>

            <li>
              <strong>Local livelihood:</strong>
              Farming supports food production and provides
              work and income opportunities for many
              rural families.
            </li>

            <li>
              <strong>Better local planning:</strong>
              Farmers can plan farm activities according
              to seasonal weather, available resources
              and local farming needs.
            </li>
          </ul>
        </section>

        {/* 16. CHALLENGES */}
        <section className="detail-card limitation-card">
          <p className="section-label">16. Limitations</p>
          <h2>What are the challenges of local farming methods?</h2>

          <p>
            Local farming methods can be useful, but farmers
            may also face different problems while using them.
            These problems depend on the region, available
            resources, farm size and changing environmental
            conditions.
          </p>

          <ul>
            <li>
              <strong>Limited water supply:</strong>
              Farmers in dry areas may not get enough water
              for irrigation, especially during long periods
              without rainfall.
            </li>

            <li>
              <strong>Changing climate:</strong>
              Unusual rainfall, higher temperatures, droughts
              and floods can affect traditional farming
              calendars and crop production.
            </li>

            <li>
              <strong>Small land holdings:</strong>
              Many farmers have small fields, which can
              make it difficult to use certain equipment
              or larger farming systems.
            </li>

            <li>
              <strong>Limited resources:</strong>
              Suitable seeds, manure, tools, irrigation
              facilities and other materials may not
              always be available in sufficient quantity.
            </li>

            <li>
              <strong>Need for updated knowledge:</strong>
              Traditional experience is useful, but farmers
              may also need scientific information about
              new pests, diseases, soil problems and
              improved farming techniques.
            </li>

            <li>
              <strong>Labour requirement:</strong>
              Some local methods require more manual work
              for field preparation, weeding, irrigation
              and harvesting.
            </li>

            <li>
              <strong>Soil and water problems:</strong>
              Soil erosion, declining fertility, waterlogging
              and groundwater shortage can make farming
              difficult.
            </li>

            <li>
              <strong>Market difficulties:</strong>
              Farmers may face problems in transporting,
              storing and selling their produce at a
              fair price.
            </li>
          </ul>

          <div className="simple-example">
            <h3>How can these challenges be reduced?</h3>
            <p>
              Farmers can improve their practices through
              soil testing, better water management, good
              quality seeds, suitable farm equipment and
              advice from agricultural experts. Combining
              useful traditional knowledge with scientific
              methods can help farmers make better decisions.
            </p>
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="detail-card">
          <p className="section-label">Conclusion</p>
          <h2>What have we learned about local farming methods?</h2>

          <p>
            Local farming methods are practices followed by
            farmers according to the conditions of their
            own area. Soil, climate, rainfall, water supply
            and available resources play an important role
            in deciding which methods are suitable.
          </p>

          <p>
            Farmers use local experience and knowledge to
            select crops, prepare fields, manage water,
            maintain soil fertility and protect crops.
            They may use resources such as local seeds,
            animal manure, crop remains and nearby water
            sources.
          </p>

          <p>
            Different regions of India follow different
            farming practices because their natural
            conditions are not the same. Terrace farming,
            rainwater harvesting, millet cultivation,
            agroforestry and other regional practices
            are examples of this diversity.
          </p>

          <p>
            Local farming methods are valuable because
            they connect agriculture with the environment
            and the experience of farming communities.
            By combining useful traditional knowledge
            with suitable scientific information, farmers
            can improve farm management and use resources
            more carefully.
          </p>
        </section>

        {/* KNOWLEDGE NOTE */}
        <section className="knowledge-note">
          <p className="section-label">IAKIS knowledge note</p>

          <h2>Preserving local agricultural knowledge</h2>

          <p>
            Every region has its own farming experience,
            methods and knowledge about soil, climate,
            water, seeds and crops. This knowledge has
            developed through the work and observations
            of farming communities over many generations.
          </p>

          <p>
            IAKIS aims to document and preserve this
            agricultural knowledge so that students,
            researchers, farmers and future generations
            can understand how farming practices change
            according to local conditions.
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

export default LocalFarmingMethods;
