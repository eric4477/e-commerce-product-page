import { createContext, useState } from "react";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [itemCount, setItemCount] = useState(0);
  const [addedItems, setAddedItems] = useState(false);
  const [showCart, setShowCart] = useState(false);

  const handleMinusClick = () => {
    setItemCount((prev) => {
      if (prev === 0) {
        return 0;
      }
      return prev - 1;
    });
  };

  const contextValue = {
    itemCount,
    setItemCount,
    addedItems,
    setAddedItems,
    handleMinusClick,
    showCart,
    setShowCart,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
