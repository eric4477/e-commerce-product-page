import "./NavBar.css";
import { useContext, useState } from "react";
import MenuOverlay from "../MenuOverlay/MenuOverlay";
import Cart from "../Cart/Cart";
import { StoreContext } from "../../context/StoreContextProvider";

function NavBar() {
  const { addedItems, itemCount, showCart, setShowCart } =
    useContext(StoreContext);

  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

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
          {showCart && itemCount > 0 && <Cart />}
          <div className="profile">
            <img src="/image-avatar.png" alt="profile" />
          </div>
        </div>
      </nav>

      <div className="border" />
    </>
  );
}

export default NavBar;
