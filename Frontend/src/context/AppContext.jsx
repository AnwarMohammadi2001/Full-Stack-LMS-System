import { createContext } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
  const value = {
    // Your shared values go here
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
