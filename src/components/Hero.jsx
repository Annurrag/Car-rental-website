import React from 'react'
import BgShape from '../images/hero/hero-bg.png';
import HeroCar from "../images/hero/car2.png";
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <>
      <section id="home" className="hero-section">
        <div className="container">
          <img className="bg-shape" src={BgShape} alt="bg-shape" />
          <div className="hero-content">
            <div className="hero-content__text">
              <h4>Need a Car?</h4>
              <h1>
              Self drive car rentals in <span>India</span>
              </h1>
              <p>
              Welcome to Road Runners , the fastest growing car rental booking Service Company in India, committed to provide door-to-door best car rental services to the travellers.
              </p>
              <div className="hero-content__text__btns">
                <Link
                //   onClick={bookBtn}
                  className="hero-content__text__btns__book-ride"
                  to="/"
                >
                  Book Ride &nbsp; <i className="fa-solid fa-circle-check"></i>
                </Link>
                <Link className="hero-content__text__btns__learn-more" to="/">
                  Learn More &nbsp; <i className="fa-solid fa-angle-right"></i>
                </Link>
              </div>
            </div>

            {/* img */}
            <img
              src={HeroCar}
              alt="car-img"
              className="hero-content__car-img"
            />
          </div>
        </div>
        <div
        //   onClick={scrollToTop}
        //   className={`scroll-up ${goUp ? "show-scroll" : ""}`}
        >
          <i className="fa-solid fa-angle-up"></i>
        </div>

      </section>
    </>
  )
}

export default Hero
