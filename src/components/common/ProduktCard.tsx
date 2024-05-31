import { Product } from "@interface/Product";
import NoImage from "@components/icons/NoImage";
import StarIcon from "@components/icons/StarIcon";
import QuantityButton from "@components/buttons/QuantityButton";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, updateQuantity } from "@redux/slices/cartSlice";
import { RootState } from "@redux/store";

const ProductCard = ({ product }: { product: Product }) => {
  const quantity = useSelector((state: RootState) => {
    const item = state.cart.items.find((item) => item.id === product.id);
    return item ? item.quantity : 0;
  });
  const [showQuantityButton, setShowQuantityButton] = useState(false);
  const dispatch = useDispatch();

  const increaseQuantity = () => {
    dispatch(updateQuantity({ id: product.id, quantity: quantity + 1 }));
    console.log(`Increased quantity of ${product.title} to ${quantity + 1}`);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      dispatch(updateQuantity({ id: product.id, quantity: quantity - 1 }));
      console.log(`Decreased quantity of ${product.title} to ${quantity - 1}`);
    } else {
      dispatch(updateQuantity({ id: product.id, quantity: 0 }));
      setShowQuantityButton(false);
    }
  };

  const handleAddToCart = () => {
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        quantity: quantity + 1,
        image: product.image as string,
      })
    );
    setShowQuantityButton(true);
    console.log(
      `Added ${quantity}st ${product.title} with id: ${product.id} to cart`
    );
  };

  return (
    <div className="product-card">
      <div className="image-container">
        {product.image ? (
          <img
            className="product-image"
            src={product.image}
            alt={product.title}
          />
        ) : (
          <NoImage />
        )}
      </div>
      <div className="product-info">
        <div className="card-header">
          <h3 className="title">{product.title}</h3>
        </div>
        <p className="description">{product.description}</p>
        <p className="stock">{product.stock} st i lager</p>
        <p className="pack-size">{product.packSize} st/förp</p>
        <p className="rating">
          {product.rating} <StarIcon />
        </p>
        <p className="price-container">
          <span className="price">{product.price}</span> sek/förp <br />
          {product.pricePerUnit && (
            <span className="price-peice">{product.pricePerUnit} sek/st</span>
          )}
        </p>
      </div>
      <div className="cta-container">
        {quantity > 0 ? (
          <QuantityButton
            quantity={quantity}
            increaseQuantity={increaseQuantity}
            decreaseQuantity={decreaseQuantity}
          />
        ) : (
          <button className="buy-btn" onClick={handleAddToCart}>
            Köp
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
