import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'

function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_gbs7pmj', 'template_27uxi4o', form.current, {
        publicKey: 'Q2VyaS_qihZeHVBrx',
      })
      e.target.reset()
  };

  return (
    <section className="contact section" id="contact">
        <h2 className="section__title">Get in touch</h2>
        <span className="section__subtitle">Contact Me</span>

        <div className="contact__container container grid">
            <div className="contact__content">
                <h3 className="contact__title">Talk to me</h3>
                <div className="contact__info">
                    <div className="contact__card">
                        <i className="bx bx-mail-send contact__card-icon"></i>

                        <h3 className="contact__card-title">Email</h3>
                        <span className="contact__card-data">gabor.kupeczki@gmail.com</span>

                        <a href="mailto:gabor.kupeczki@gmail.com" target='blank' className="contact__button">Write to me{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-whatsapp contact__card-icon"></i>

                        <h3 className="contact__card-title">Whatsapp</h3>
                        <span className="contact__card-data">+3620-218-5505</span>

                        <a href="https://api.whatsapp.com/send?phone=36202185505&text=Hello, more information!" target='blank' className="contact__button">Write to me{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>

                    <div className="contact__card">
                        <i className="bx bxl-messenger contact__card-icon"></i>

                        <h3 className="contact__card-title">Messenger</h3>
                        <span className="contact__card-data">gabor.kupeczki</span>

                        <a href="https://www.messenger.com/t/100000679375533/" target='blank' className="contact__button">Write to me{" "} <i className="bx bx-right-arrow-alt contact__button-icon"></i></a>
                    </div>
                </div>
            </div>

            <div className="contact__content">
                <h3 className="contact__title">Write to me</h3>

                <form ref={form} onSubmit={sendEmail} className="contact__form">
                    <div className="contact__form-div">
                        <label className="contact__form-tag">Name</label>
                        <input type="text" name='name' className='contact__form-input' placeholder='Insert your name'/>
                    </div>

                    <div className="contact__form-div">
                        <label className="contact__form-tag">Mail</label>
                        <input type="email" name='email' className='contact__form-input' placeholder='Insert your email'/>
                    </div>

                    <div className="contact__form-div contact__form-area">
                        <label className="contact__form-tag">Text</label>
                        <textarea name="project" cols="30" rows="10" className='contact__form-input' placeholder='Write to me'></textarea>
                    </div>
                    <button className="button button--flex">
                        Send Message
                    </button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contact