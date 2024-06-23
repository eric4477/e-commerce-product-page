import "./MenuOverlay.css";
import { useEffect, useRef } from "react";

function MenuOverlay({ showMenu, toggleMenu, setShowMenu }) {
  const menuRef = useRef(null);
  // Effect to add click outside listener when menu is open
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
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
  );
}

export default MenuOverlay;
