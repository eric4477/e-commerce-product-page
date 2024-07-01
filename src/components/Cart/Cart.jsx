import "./Cart.css";
import { useContext } from "react";
import { StoreContext } from "../../context/StoreContextProvider";
function Cart() {
  const { itemCount, setItemCount, handleMinusClick } =
    useContext(StoreContext);
  const handleCheckout = () => {
    setItemCount(0);
  };
  return (
    <div className="cart">
      <div className="cart-header">
        <h4>Cart</h4>
      </div>
      <div className="border" />
      <div className="cart-product">
        <div className="cart-product-img">
          <img src="/image-product-1-thumbnail.jpg" alt="Product Image" />
        </div>
        <div className="cart-product-info">
          <p>Fall Limited Edition Sneakers</p>
          <p>
            $125.00 x {itemCount} <span>${125 * itemCount}.00</span>
          </p>
        </div>
        <button onClick={handleMinusClick} className="delete-product-btn">
          <img src="/icon-delete.svg" alt="remove" />
        </button>
      </div>
      <div className="checkout">
        <button onClick={handleCheckout} className="checkout-btn" type="button">
          Checkout
        </button>
      </div>
    </div>
  );
}

export default Cart;
