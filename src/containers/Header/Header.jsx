import "./Header.css";
import { useContext, useState } from "react";
import MenuOverlay from "../../components/MenuOverlay/MenuOverlay";
import Cart from "../../components/Cart/Cart";
import { StoreContext } from "../../context/StoreContextProvider";

function Header() {
  const { addedItems, itemCount } = useContext(StoreContext);

  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };
  // Function to toggle cart
  const toggleCart = () => {
    setShowCart(!showCart);
  };

  return (
    <>
      <MenuOverlay
        showMenu={showMenu}
        toggleMenu={toggleMenu}
        setShowMenu={setShowMenu}
      />
      <nav className="nav">
        <div className="left-nav">
          <button
            onClick={toggleMenu}
            type="button"
            className="menu-btn"
            aria-label="menu"
          >
            <img src="/icon-menu.svg" alt="menu" />
          </button>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <ul className="nav-links">
            <li>
              <a href="#collections">Collections</a>
            </li>
            <li>
              <a href="#men">Men</a>
            </li>
            <li>
              <a href="#woman">Woman</a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="right-nav">
          <div className="add-to-cart">
            {itemCount > 0 && addedItems && (
              <span className="count-items">{itemCount}</span>
            )}
            <button onClick={toggleCart} type="button" aria-label="Add to cart">
              <img src="/icon-cart.svg" alt="cart icon" />
            </button>
          </div>
          {showCart && <Cart />}
          <div className="profile">
            <img src="/image-avatar.png" alt="profile" />
          </div>
        </div>
      </nav>

      <div className="border" />
    </>
  );
}

export default Header;
