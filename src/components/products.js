import one from "../asset/images/one.jpg";
import two from "../asset/images/two.jpg";
import three from "../asset/images/three.jpg";

function Products() {
  return (
    <div class="products">
      <div class="box">
        <img src={one} alt="Fogg Wood Extreme" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div class="box">
        <img src={two} alt="Villain" />
        <p>Fogg Wood Extreme, Eau De Parfum, Long-lasting Perfume, 100ml</p>
      </div>
      <div class="box">
        <img src={three} alt="Designer Club" />
        <p>
          Designer Club-Be Spoke by Perfume Lounge Men's Perfume | Premium Long
          Lasting Perfume
        </p>
      </div>
    </div>
  );
}

export default Products;
