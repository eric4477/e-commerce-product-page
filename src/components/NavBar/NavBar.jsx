import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav">
        <div className="left-nav">
          <button type="button" className="menu-btn" aria-label="menu">
            <img src="/icon-menu.svg" alt="menu" />
          </button>
          <div className="logo">
            <img src="/logo.svg" alt="logo" />
          </div>
          <ul className="nav-links">
            <a href="#colections">
              <li>Collections</li>
            </a>
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
