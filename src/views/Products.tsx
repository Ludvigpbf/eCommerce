import ProductCard from "@components/common/ProduktCard";
import products from "@dummy-data/products.json";
import { Product } from "@interface/Product";

const Products: React.FC = () => {
  return (
    <section className="products">
      <h1>Produkter</h1>
      <div className="preview">
        {products.map((product: Product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
