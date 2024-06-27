import { useState } from "react";
import "./NavBar.css";
import MenuOverlay from "../MenuOverlay/MenuOverlay";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  // Function to toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
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
          <button type="button" aria-label="Add to cart">
            <img src="/icon-cart.svg" alt="cart icon" />
          </button>
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
