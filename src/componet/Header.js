import React from "react";
import "./header.css";
import { BiChevronDown, BiPhone, BiMailSend } from "react-icons/bi";
import { RiTwitterLine,RiInstagramLine,RiFacebookCircleLine, RiPinterestLine,RiLinkedinLine,RiRedditLine } from "react-icons/ri";
function Header() {
  return (
    <div className="header">
        {/* left header */}
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
          <BiPhone style={{ marginTop: "13px", marginRight: "10px" ,marginLeft:'10px' }} />
          <p>+251910979060</p>
        </div>
      </div>
{/* right header */}
      <div className="header_right">
      <RiTwitterLine className="header_right_icon " />
      <RiInstagramLine className="header_right_icon "/>
      <RiFacebookCircleLine className="header_right_icon "/> 
      <RiPinterestLine className="header_right_icon "/>
      <RiLinkedinLine className="header_right_icon "/>
      <RiRedditLine className="header_right_icon "/>
      </div>
    </div>
  );
}

export default Header;
