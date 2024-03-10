import React from 'react'
import { Link } from 'react-scroll'

function Data() {
  return (
    <div className="home__data">
        <h1 className="home__title">Gábor Kupeczki</h1>
        <h3 className="home__subtitle">Frontend Web Developer</h3>
        <p className="home__description">As a Frontend Web Developer, I excel at crafting modern, user-friendly, and aesthetically pleasing web interfaces. With comprehensive technical expertise, creativity, and dedication, I am capable of delivering high-quality, responsive, and optimized websites that meet the needs and expectations of clients.</p>

        <Link to="contact" 
                        spy={true} 
                        smooth={true} 
                        offset={-60} 
                        duration={100} className="button button--flex">
            Say Hello
        </Link>
    </div>
  )
}

export default Data