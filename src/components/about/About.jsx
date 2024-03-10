import "./about.css";
import AboutImg from "../../assets/MyPhoto.jpg";
import CV from "../../assets/Kupeczki-CV.pdf";
import Info from './Info';

function About() {
  return (
    <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My Introduction</span>

        <div className="about__container container grid">
            <img src={AboutImg} alt="" className="about__img" />

            <div className="about__data">
                <Info />

                <p className="about__description">I recently finished a junior frontend developertraining, igniting my passion for new technologies.With a creative mindset, I bring fresh ideas toprojects and excel both solo and in teams. Known for adaptability and problem-solving, I strive for excellence, making me a valuable asset. Excited to continue advancing in frontend development,confident in my positive impact on future projects.</p>

                <a download="" href={CV} className="button button--flex">
                    Download CV
                  
<svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.5 3H12H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H7.5M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V9.75V12V19C19 20.1046 18.1046 21 17 21H16.5" stroke="var(--container-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M12 12V20M12 20L9.5 17.5M12 20L14.5 17.5" stroke="var(--container-color)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
</svg>
                </a>
            </div>
        </div>
    </section>
  )
}

export default About