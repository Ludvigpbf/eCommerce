import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import NoImage from "@components/icons/NoImage";

const DropdownCart: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = cartItems
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div className="dropdown-cart">
      <ul className="dropdown-cart-ul">
        <h3>Varukorg</h3>
        {/*    <li className="dropdown-cart-li">
          <Link className="dropdown-cart-link" to="/varukorg">
            Varukorg
          </Link>
        </li> */}
        {cartItems.map((item) => (
          <li key={item.id} className="dropdown-cart-li cart-item">
            <div className="item-img-cont">
              {item.image ? (
                <img className="item-image" src={item.image} alt={item.name} />
              ) : (
                <NoImage />
              )}
            </div>
            <div className="item-info">
              <p>{item.name}</p>
              <div className="item-cost">
                <p>Pris: {item.price}</p>
                <p>antal: {item.quantity}</p>
                <p>Total: {item.price * item.quantity}</p>
              </div>
            </div>
          </li>
        ))}
        <li className="dropdown-cart-li">
          <div className="total">Totalt: {totalAmount} sek</div>
        </li>
        <li className="dropdown-cart-li">
          <Link className="dropdown-cart-link" to="/kassa">
            Till kassan
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownCart;
