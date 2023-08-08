import React from 'react'
import Footer from '../components/Footer'

const Contact = () => {
  return (
    <>
      <section className="contact-page">
        <div className="container">
            <div className="contact-div">
                <div className="contact-div__text">
                <h2>Need additional information?</h2>
              <p>
                A multifaceted professional skilled in multiple fields of
                research, development as well as a learning specialist. Over 15
                years of experience.
              </p>
              <a href="/">
              <i className="fa-solid fa-phone"></i>&nbsp; +91 8485736470
              </a>
              <a href="/">
                <i className="fa-solid fa-envelope"></i>&nbsp;
                carrental@mail.com
              </a>
              <a href="/">
                <i className="fa-solid fa-location-dot"></i>&nbsp; Varanasi,
                India
              </a>
                </div>
                <div className="contact-div__form">
                    <form>
                        <label>
                            Full Name  <b>*</b>
                        </label>
                            <input type="text" placeholder='e.g:rohit'/>
                        <label>
                            Email <b>*</b>
                        </label>
                        <input type="email" placeholder='abc@gmail.com' />
                        <label>
                            Tell us about it <b>*</b>
                        </label>
                        <textarea cols="30" rows="10" placeholder='write here...'></textarea>
                        <button type='submit'>
                        <i className="fa-solid fa-envelope-open-text"></i>&nbsp; Send
                            Message 
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <div className="book-banner">
            <div className="book-banner__overlay">
                <div className="container">
                    <div className="text-content">
                    <h2>Book a car by getting in touch with us</h2>
                    <span>
                      <i className="fa-solid fa-phone"></i>
                      <h3>+91 57475869498</h3>
                    </span>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
      </section>
    </>
  )
}

export default Contact
