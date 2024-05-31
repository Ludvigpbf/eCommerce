
interface QuantityButtonProps {
  quantity: number;
  increaseQuantity: () => void;
  decreaseQuantity: () => void;
}

const QuantityButton: React.FC<QuantityButtonProps> = ({
  quantity,
  increaseQuantity,
  decreaseQuantity,
}) => {
  return (
    <div className="quantity-btn-container">
      <button className="decrease" onClick={decreaseQuantity}>
        -
      </button>
      <span className="preview-quantity">{quantity}</span>
      <button className="increase" onClick={increaseQuantity}>
        +
      </button>
    </div>
  );
};

export default QuantityButton;
