import React from 'react'
import './scrollup.css'
import { Link } from 'react-scroll';

function Scrollup() {
    window.addEventListener("scroll", function () {
        const scrollUp = this.document.querySelector(".scrollup");
        if (this.scrollY >= 560) scrollUp.classList.add("show-scroll");
        else scrollUp.classList.remove("show-scroll")
    });
  return (
    <Link to="home" 
    spy={true} 
    smooth={true} 
    offset={0} 
    duration={100} className="scrollup">
        <i className="uil uil-arrow-up scrollup__icon"></i>
    </Link>
  )
}

export default Scrollup