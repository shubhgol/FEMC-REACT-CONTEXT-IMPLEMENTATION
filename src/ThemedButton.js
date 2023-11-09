import React, { useContext } from "react";
import Button from "./Button";
import ThemeContext from "./ThemeContext";

const ThemedButton = () => {
  const { themeColor, setThemeColor } = useContext(ThemeContext);

  console.log(">>>>>>thth", themeColor);
  return (
    <>
      <Button style={{ background: themeColor }}>Theme Button</Button>
      <Button
        style={{ cursor: "pointer" }}
        onClickHandler={() => setThemeColor("yellow")}
      >
        Change Theme Color
      </Button>
    </>
  );
};

export default ThemedButton;
