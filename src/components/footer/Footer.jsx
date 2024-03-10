import './footer.css'
import { Link } from 'react-scroll'

function Footer() {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Kupeczki</h1>

            <ul className="footer__list">
                <li>
                    <Link to="about"
          spy={true}
          smooth={true}
          offset={20}
          duration={100} className="footer__link">About</Link>
                </li>

                <li>
                    <Link to="portfolio"
          spy={true}
          smooth={true}
          offset={20}
          duration={100} className="footer__link">Projects</Link>
                </li>

               {/*  <li>
                    <a href="#testimonials" className="footer__link">Testimonials</a>
                </li> */}
            </ul>

            <div className="footer__social">
                <a href="https://www.facebook.com/kupeczki.gabor/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-facebook"></i>
                </a>
                <a href="https://www.instagram.com/kupeczkigabor/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-instagram"></i>
                </a>
                <a href="https://www.linkedin.com/in/g%C3%A1bor-kupeczki-b947532b4/" className="footer__social-link" target="_blank">
                    <i className="bx bxl-linkedin"></i>
                </a>
            </div>

            <span className="footer__copy">&#169; Gábor Kupeczki. All rights reserved</span>
        </div>
    </footer>
  )
}

export default Footer