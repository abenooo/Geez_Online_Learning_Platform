import React from "react";
import "./header.css";
import { BiChevronDown, BiPhone, BiMailSend } from "react-icons/bi";
function Header() {
  return (
    <div className="header">
      <div className="header_left">
        {/* <BiChevronRight /> */}
        <div className="language">
          <p>EN</p>
          <BiChevronDown
            style={{ color: "white", marginTop: "12px", paddingLeft: "10px" }}
          />
        </div>
        <div className="email">
          <BiMailSend style={{marginTop:'15px', marginRight: "10px" }} />
          <p>abenezerkifle000@gmail.com</p>
        </div>
        <div className="phone">
          <BiPhone style={{ marginTop: "13px", marginRight: "10px" ,marginLeft:'20px' }} />
          <p>+251910979060</p>
        </div>
      </div>

      <div className="header_right"></div>
    </div>
  );
}

export default Header;
