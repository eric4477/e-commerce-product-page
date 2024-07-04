import { createContext, useState } from "react";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [itemCount, setItemCount] = useState(0);
  const [addedItems, setAddedItems] = useState(false);

  const handleMinusClick = () => {
    setItemCount((prev) => {
      if (prev === 0) {
        setAddedItems(false);
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
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
