import "./ProductInfo.css";
import { StoreContext } from "../../context/StoreContextProvider";
import { useContext } from "react";
import { BsCart3 } from "react-icons/bs";
function ProductInfo() {
  const {
    itemCount,
    setItemCount,
    setAddedItems,
    setShowCart,
    handleMinusClick,
  } = useContext(StoreContext);

  const handlePlusClick = () => {
    setItemCount((prev) => {
      setAddedItems(false);
      setShowCart(false);
      return prev + 1;
    });
  };

  const handleAddToCartClick = () => {
    if (itemCount > 0) {
      setAddedItems(true);
    }
  };
  return (
    <div className="product-info">
      <h3 className="subheading">SNEAKER COMPANY</h3>
      <h1 className="heading">Fall Limited Edition Sneakers</h1>
      <p className="desc">
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber outer sole, they&apos;ll withstand everything
        the weather can offer.
      </p>
      <div className="price-container">
        <div className="price">
          <p>$125.00</p>
        </div>
        <div className="price-label">50%</div>
      </div>
      <p className="price-discount">$250.00</p>
      <div className="btns-group">
        <div className="count-btn">
          <button onClick={handleMinusClick} type="button">
            <img src="/icon-minus.svg" alt="minus-btn" />
          </button>
          <span>{itemCount}</span>
          <button onClick={handlePlusClick} type="button">
            <img src="/icon-plus.svg" alt="plus-btn" />
          </button>
        </div>
        <button onClick={handleAddToCartClick} className="add-to-cart-btn">
          <BsCart3 />
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
