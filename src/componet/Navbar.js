import React from "react";
import "./navbar.css";
function Navbar() {
  return (
    <div className="navbar">
      {/* LOGO */}
      <div className="logo">
        <h2 className="logo_txt">Geez</h2>
        <input className="search"/>
      </div>
    </div>
  );
}

export default Navbar;
