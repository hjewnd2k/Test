import React from "react";
import "./style.css";

const Header = () => {
  return (
    <div className="header">
      <h1 className="header-title">title</h1>
      <div className="header-content">
        <span>label</span>
        <select>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <input type="text" />
        <button>Search</button>
      </div>
    </div>
  );
};

export default Header;
