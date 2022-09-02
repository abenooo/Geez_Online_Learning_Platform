import React from "react";
import "./header.css";
// import { BiChevronRight } from "react-icons/bi";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        {/* <BiChevronRight /> */}
        <div>
          <p className="language">EN</p>
        </div>
        <div>
          <p className="email">Email Adddres</p>
        </div>
        <div>
          <p className="phone">Phone</p>
        </div>
      </div>

      <div className="header_right"></div>
    </div>
  );
}

export default Header;
