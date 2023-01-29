import "./navbar.scss";
import Cart from "../Cart/Cart";
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
            <img
              src="https://images.pexels.com/photos/14922901/pexels-photo-14922901.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
