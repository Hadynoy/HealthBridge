import { createContext } from "react";

export const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const value = {
    // You can add shared state or functions here
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
