import ProductCard from "@components/common/ProduktCard";
import products from "@dummy-data/products.json";
import { Product } from "@interface/Product";
import Hero from "@assets/hero.png";

const Landing: React.FC = () => {
  return (
    <section className="landing">
      <div className="hero-container">
        <img src={Hero} alt="Hero image" />
      </div>

      <div className="preview">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Landing;
