import { createContext } from "react";

const ThemeContext = createContext({
  themeColor: "blue",
  setThemeColor: () => {}
});

export default ThemeContext;

export const ThemeContextProvider = ThemeContext.Provider;
