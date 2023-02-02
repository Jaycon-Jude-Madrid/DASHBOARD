import "./navbar.scss";
import Cart from "../Cart/Cart";
import AjMadz from "../../Images/AjMadz.jpg";
import { useProductContext } from "../../Hooks/useProductContext";
const Navbar = () => {
  const { cart } = useProductContext();
  return (
    <div className="navbar">
      <div className="navbarWrapper">
        <div className="items">
          <div className="item">
            <Cart />
            <div className="counter">{cart.length}</div>
          </div>

          <div className="item">
            Admin | Jaycon Jude C. Madrid
            <img src={AjMadz} alt="avatar" className="avatar" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
