import React from 'react'
import './header.css';
// import { BiChevronRight } from "react-icons/bi";
function Header() {
  return (
    <div className='header'>
        <div className="header_left">
{/* <BiChevronRight /> */}
<p className='email'>Email Adddres</p>
<p className='phone'>phone addres</p>
        </div>
        <div className="header_right">

        </div>
    </div>
  )
}

export default Header