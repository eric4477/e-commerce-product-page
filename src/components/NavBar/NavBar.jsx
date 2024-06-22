import { useState, useRef, useEffect } from "react";
import "./NavBar.css";

function NavBar() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);
  // Function to toggle menu
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  // Effect to add click outside listener when menu is open
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        console.log(menuRef.current);
        setShowMenu(false);
      }
    };

    if (showMenu) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showMenu]);

  return (
    <>
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

      <div className={`menu-overlay ${showMenu ? "menu-overlay-open" : ""}`}>
        <div ref={menuRef} className="menu-items-container">
          <button
            onClick={toggleMenu}
            type="button"
            className="menu-btn"
            aria-label="menu"
          >
            <img src="/icon-close.svg" alt="close" />
          </button>
          <ul className="menu-items">
            <li onClick={toggleMenu}>
              <a href="#collections">Collections</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#men">Men</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#woman">Woman</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#about">About</a>
            </li>
            <li onClick={toggleMenu}>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
      <div className="border" />
    </>
  );
}

export default NavBar;
