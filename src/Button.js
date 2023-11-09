import React from "react";

const Button = ({ children, style, onClickHandler }) => {
  return (
    <button
      style={style}
      onClick={() => {
        if (typeof onClickHandler === "function") {
          onClickHandler();
        }
      }}
    >
      {children}
    </button>
  );
};

export default Button;
