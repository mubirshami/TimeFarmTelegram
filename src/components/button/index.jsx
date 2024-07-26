import React from "react";
import "./index.css";
const Button = ({ text, icon, onClick }) => {
  return (
    <button className="button" onClick={onClick}>
      {text} {icon && <img src={icon} alt="icon" className="button-icon" />}
    </button>
  );
};

export default Button;
