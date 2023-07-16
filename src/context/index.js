import { createContext, useContext } from "react";

export const AppContext = createContext({});

export const useAppContext = () => useContext(AppContext);

export const AppContextProvider = ({ children, value }) => {
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
