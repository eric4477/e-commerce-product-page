import { createContext, useState } from "react";
export const StoreContext = createContext(null);
const StoreContextProvider = (props) => {
  const [itemCount, setItemCount] = useState(0);

  const contextValue = {
    itemCount,
    setItemCount,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;
