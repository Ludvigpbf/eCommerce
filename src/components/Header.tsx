import { Link } from "react-router-dom";
import UserIcon from "./icons/UserIcon";
import SearchIcon from "./icons/SearchIcon";
import CartIcon from "./icons/CartIcon";
import Dropdown from "./common/DropdownMenu";
import DropdownCart from "@components/common/DropdownCart";
import { useSelector } from "react-redux";
import { RootState } from "@redux/store";
import { CartItem } from "@redux/slices/cartSlice";

const Header: React.FC = () => {
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const totalItems = cartItems.reduce(
    (total: number, item: CartItem) => total + item.quantity,
    0
  );
  return (
    <header className="header">
      <div className="header-banner">
        <Link to="mail:contact@flycktcoding.com">
          kundservice@komplagret.se
        </Link>
      </div>
      <div className="header-content">
        <h1>Kompliment Lagret</h1>
      </div>
      <div className="menu-container">
        {
          <div className="icon-container">
            <SearchIcon />
          </div>
        }
        <div className="icon-container">
          <UserIcon />
          <Dropdown
            links={[
              { to: "/logga-in", label: "Logga in" },
              { to: "/registrera", label: "Skapa konto" },
            ]}
          />
        </div>
        <div className="icon-container">
          <CartIcon /> {totalItems > 0 && <span className="total-items">{totalItems}</span>}
          <DropdownCart />
        </div>
      </div>
      <nav className="nav-desktop">
        <ul>
          <li>
            <Link to="/">Hem</Link>
          </li>
          <li>
            <Link to="/produkter">Produkter</Link>
          </li>
          <li>
            <Link to="/om-oss">Om oss</Link>
          </li>
          <li>
            <Link to="/kontakt">Kontakt</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
