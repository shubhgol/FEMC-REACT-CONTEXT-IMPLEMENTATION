import { useState } from "react";
import "./styles.css";
import { ThemeContextProvider } from "./ThemeContext";
import ThemedButton from "./ThemedButton";
export default function App() {
  const [themeColor, setThemeColor] = useState("blue");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <ThemeContextProvider
        value={{ themeColor, setThemeColor: setThemeColor }}
      >
        <ThemedButton />
      </ThemeContextProvider>
    </div>
  );
}
