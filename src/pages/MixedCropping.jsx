
import { Link } from "react-router-dom";
import "./MixedCropping.css";
import logo from "./assets/iakis-logo.png";

function MixedCropping() {
  return (
    <div className="detail-page mixed-page">
      <nav className="navbar mixed-navbar">
        <div className="logo">
          <Link to="/">
            <img src={logo} alt="IAKIS Logo" />
          </Link>
        </div>
      </nav>

      <header className="detail-header">
        <h1>Mixed cropping</h1>
        <p>
          Understanding the traditional practice of growing different crops
          together in the same field.
        </p>
      </header>

      <main className="detail-content mixed-content">
        <section className="detail-card">
          <h2>1. What is mixed cropping?</h2>
          <p>
            Mixed cropping is a farming method in which two or more crops are
            grown together in the same field during the same season. Farmers
            use this method to reduce the risk of crop failure and make better
            use of available land and resources.
          </p>
          <p>
            In mixed cropping, crops are generally grown without a fixed row
            pattern. This makes it different from intercropping, where crops
            are planted in planned rows.
          </p>
        </section>

        <section className="detail-card">
          <h2>2. History and traditional background</h2>
          <p>
            Mixed cropping is an old farming practice followed by farmers in
            different parts of India. Traditional farmers used their knowledge
            of local soil, rainfall and seasons to grow different crops
            together.
          </p>
          <p>
            This method helped farming families manage uncertain rainfall and
            reduce their dependence on a single crop.
          </p>
        </section>

        <section className="detail-card">
          <h2>3. When and where is it practised?</h2>
          <p>
            Mixed cropping is practised during different agricultural seasons,
            depending on the local climate, soil and water availability.
          </p>
          <p>
            It is followed in several parts of India, including areas of Bihar,
            Uttar Pradesh, Rajasthan, Madhya Pradesh and other states.
          </p>
        </section>

        <section className="detail-card">
          <h2>4. How does mixed cropping work?</h2>
          <p>
            Farmers select two or more crops that can grow in the same field.
            They sow the seeds together or close to each other, depending on
            local farming practices.
          </p>
          <p>
            Different crops may use sunlight, water and nutrients in different
            ways. The aim is to grow more than one crop and reduce the risk of
            losing the entire harvest.
          </p>
        </section>

        <section className="detail-card">
          <h2>5. Types of mixed cropping</h2>
          <ul>
            <li>Cereal crops grown with pulses.</li>
            <li>Millets grown with pulse crops.</li>
            <li>Oilseed crops grown with other suitable crops.</li>
            <li>Different food crops grown together according to local conditions.</li>
          </ul>
          <p>
            The choice of crops depends on the region, season, soil and
            availability of water.
          </p>
        </section>

        <section className="detail-card">
          <h2>6. Materials and resources used</h2>
          <ul>
            <li>Seeds of selected crops.</li>
            <li>Healthy and suitable soil.</li>
            <li>Water from rainfall or irrigation.</li>
            <li>Farmyard manure and compost.</li>
            <li>Organic materials for improving soil quality.</li>
          </ul>
        </section>

        <section className="detail-card">
          <h2>7. Tools and equipment</h2>
          <ul>
            <li>Plough for preparing the field.</li>
            <li>Seed drill or traditional sowing tools.</li>
            <li>Hoe for removing weeds.</li>
            <li>Spade and sickle for field work and harvesting.</li>
            <li>Sprinklers or other irrigation equipment, where needed.</li>
          </ul>
        </section>

        <section className="detail-card">
          <h2>8. Step-by-step process</h2>
          <ol>
            <li>
              <strong>Study the field:</strong> Check the soil, rainfall and
              available water.
            </li>
            <li>
              <strong>Select crops:</strong> Choose crops that can grow well
              together in the same season.
            </li>
            <li>
              <strong>Prepare the land:</strong> Plough the field and make the
              soil ready for sowing.
            </li>
            <li>
              <strong>Sow the seeds:</strong> Plant the selected seeds using a
              suitable traditional or modern method.
            </li>
            <li>
              <strong>Care for the crops:</strong> Manage weeds, water and
              nutrients as required.
            </li>
            <li>
              <strong>Harvest the crops:</strong> Harvest each crop when it is
              ready.
            </li>
          </ol>
        </section>

        <section className="detail-card">
          <h2>9. Mixed cropping cycle – simple diagram</h2>
          <div className="mixed-cycle">
            <div>Field preparation</div>
            <span>↓</span>
            <div>Crop selection</div>
            <span>↓</span>
            <div>Sowing different crops</div>
            <span>↓</span>
            <div>Crop care and growth</div>
            <span>↓</span>
            <div>Harvesting</div>
            <span>↓</span>
            <div>Next season planning</div>
          </div>
        </section>

        <section className="detail-card">
          <h2>10. Examples from India</h2>
          <ul>
            <li>
              <strong>Maize and pulses:</strong> These crops may be grown
              together in suitable farming areas.
            </li>
            <li>
              <strong>Sorghum and pigeon pea:</strong> This combination is
              practised in some dryland farming regions.
            </li>
            <li>
              <strong>Millets and pulses:</strong> Farmers may grow suitable
              millet and pulse crops together in rain-fed areas.
            </li>
          </ul>
          <p>
            These are examples of crop combinations. Actual practices differ
            according to local conditions.
          </p>
        </section>

        <section className="detail-card">
          <h2>11. Main features</h2>
          <ul>
            <li>Two or more crops are grown in the same field.</li>
            <li>Crops are grown during the same season.</li>
            <li>There is usually no fixed row arrangement.</li>
            <li>Crop selection depends on local conditions.</li>
            <li>It helps reduce dependence on a single crop.</li>
          </ul>
        </section>

        <section className="detail-card">
          <h2>12. Uses and applications</h2>
          <ul>
            <li>Growing different food crops on the same land.</li>
            <li>Reducing the risk of complete crop failure.</li>
            <li>Making use of available farmland.</li>
            <li>Supporting household food needs.</li>
            <li>Maintaining crop diversity in farming systems.</li>
          </ul>
        </section>

        <section className="detail-card">
          <h2>13. Why is mixed cropping important?</h2>
          <p>
            Mixed cropping is important because it gives farmers more than one
            crop to depend on. If one crop performs poorly due to weather or
            pests, another crop may still provide some harvest.
          </p>
          <p>
            It also helps maintain crop diversity and supports traditional
            farming knowledge.
          </p>
        </section>

        <section className="detail-card">
          <h2>14. Benefits of mixed cropping</h2>
          <ul>
            <li>Reduces the risk of total crop loss.</li>
            <li>Provides more than one type of crop.</li>
            <li>Helps make use of available land.</li>
            <li>Can improve soil cover.</li>
            <li>Supports crop diversity.</li>
            <li>May provide a more stable harvest in uncertain conditions.</li>
          </ul>
        </section>

        <section className="detail-card">
          <h2>15. Limitations and challenges</h2>
          <ul>
            <li>Crops may compete for water, sunlight and nutrients.</li>
            <li>Choosing suitable crop combinations requires knowledge.</li>
            <li>Harvesting different crops can take more time.</li>
            <li>Using large machines may be difficult in some mixed fields.</li>
            <li>Managing pests and diseases may become more complex.</li>
          </ul>
        </section>

        <section className="detail-card">
          <h2>16. Conclusion</h2>
          <p>
            Mixed cropping is a traditional farming practice in which different
            crops are grown together in the same field. It helps farmers reduce
            the risk of crop failure, maintain crop diversity and make better
            use of their land. With proper crop selection and management, this
            method can support sustainable agriculture.
          </p>
        </section>

        <section className="detail-card knowledge-note">
          <h2>IAKIS KNOWLEDGE NOTE</h2>
          <p>
            Mixed cropping reflects the traditional knowledge of farmers who
            select crops according to their local environment. Recording these
            practices helps preserve India's agricultural heritage.
          </p>
        </section>

        <div className="detail-back">
          <Link to="/practices">← Back to traditional practices</Link>
        </div>
          </main>

      {/* IAKIS Footer */}
      <footer>
        <h3>Indigenous Agricultural Knowledge Portal</h3>
        <p>
          Digital documentation of India's traditional agricultural knowledge.
        </p>
        <p className="copyright">
          © 2026 IAKIS | Academic Project
        </p>
      </footer>

    </div>
  );
}

export default MixedCropping;
