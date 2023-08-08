import React, { useState,useEffect } from 'react'
import NissanCar from "../images/cars-big/Nissan.jpg";
import BMWcar from "../images/cars-big/bmw.jpg";
import KiaCar from "../images/cars-big/kia.jpg";
import XUV500Car from "../images/cars-big/xuv500.jpg";
import TharCar from "../images/cars-big/thar.jpg";
import InnovaCar from "../images/cars-big/innova.jpg";

const BookCar = () => {

    const[modal,setModal]=useState(false)   //classname=active-modals

    const[carType,setCarType]=useState("");
    const[pickUp,setPickUp]=useState("");
    const[dropOff,setDropOff]=useState("");
    const[pickTime,setPickTime]=useState("");
    const [dropTime, setDropTime] = useState("");
    const [carImg, setCarImg] = useState("");


 

    //personal Infos useState hook
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [phone, setPhone] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [zipcode, setZipCode] = useState("");

    // takinf value of personal info

    const handleName=(e)=>{
        setName(e.target.value);
    };

    const handleLastName = (e) => {
        setLastName(e.target.value);
      };
    
      const handlePhone = (e) => {
        setPhone(e.target.value);
      };
    
      const handleAge = (e) => {
        setAge(e.target.value);
      };
    
      const handleEmail = (e) => {
        setEmail(e.target.value);
      };
    
      const handleAddress = (e) => {
        setAddress(e.target.value);
      };
    
      const handleCity = (e) => {
        setCity(e.target.value);
      };
    
      const handleZip = (e) => {
        setZipCode(e.target.value);
      };


    //taking inputs

    const handleCar=(e)=>{
        setCarType(e.target.value);
        setCarImg(e.target.value);
    }

    const handlePick=(e)=>{
        setPickUp(e.target.value);
    }

    const handleDrop = (e) => {
        setDropOff(e.target.value);
      };
    
      const handlePickTime = (e) => {
        setPickTime(e.target.value);
      };
    
      const handleDropTime = (e) => {
        setDropTime(e.target.value);
      };
//Car images based on name

      let imgUrl;
      switch(carImg){
        case "Nissan":
      imgUrl = NissanCar;
      break;
    case "BMW 520D":
      imgUrl = BMWcar;
      break;
    case "Kia Sonet":
      imgUrl = KiaCar;
      break;
    case "XUV500":
      imgUrl = XUV500Car;
      break;
    case "thar":
      imgUrl = TharCar;
      break;
    case "Innova":
      imgUrl = InnovaCar;
      break;
    default:
      imgUrl = "";
      }

    const openModal=(e)=>{
        e.preventDefault();
        const errorMsg=document.querySelector(".error-message");
        if(
            pickUp === ""||
            dropOff ===""||
            pickTime ===""||
            dropTime ===""||
            carType ===""
        ){
            errorMsg.style.display="flex";
        }else{
            setModal(!modal);
            const modalDiv= document.querySelector(".booking-modal");
            modalDiv.scroll(0,0);
            errorMsg.style.display="none";
        }
    }

     // confirm modal booking
  const confirmBooking = (e) => {
    e.preventDefault();
    setModal(!modal);
    const doneMsg = document.querySelector(".booking-done");
    doneMsg.style.display = "flex";
  };

    // hide message
    const hideMessage = () => {
        const doneMsg = document.querySelector(".booking-done");
        doneMsg.style.display = "none";
      };

      
  return (
    <>
      <section id="booking-section" className="book-section">
                {/* overlay */}
                <div
          onClick={openModal}
          className={`modal-overlay ${modal ? "active-modal" : ""}`}
        ></div>

        <div className="container">
          <div className="book-content">
            <div className="book-content__box">
              <h2>Book a car</h2>

              <p className="error-message">
                All fields required! <i className="fa-solid fa-xmark"></i>
              </p>

              <p className="booking-done">
                Check your email to confirm an order.{" "}
                <i onClick={hideMessage} className="fa-solid fa-xmark"></i>
              </p>

              <form className="box-form">
                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-car"></i> &nbsp; Select Your Car
                    Type <b>*</b>
                  </label>
                  <select value={carType} onChange={handleCar}>
                  
                    <option>Select your car type</option>
                    <option value="Nissan">Nissan</option>
                    <option value="BMW520D">BMW 520D</option>
                    <option value="kia Sonet">kia Sonet</option>
                    <option value="XUV500">
                      XUV500
                    </option>
                    <option value="Thar 2021">Thar 2021</option>
                    <option value="Mahindra Innova">Mahindra Innova</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Pick-up{" "}
                    <b>*</b>
                  </label>
                  <select value={pickUp} onChange={handlePick}>
                  
                    <option>Select pick up location</option>
                    <option>Lucknow</option>
                    <option>Delhi</option>
                    <option>Gurgoan</option>
                    <option>Noida</option>
                    <option>Chandigarh</option>
                  </select>
                </div>

                <div className="box-form__car-type">
                  <label>
                    <i className="fa-solid fa-location-dot"></i> &nbsp; Drop-of{" "}
                    <b>*</b>
                  </label>
                  <select value={dropOff} onChange={handleDrop}>
                  
                    <option>Select drop off location</option>
                    <option>Lucknow</option>
                    <option>Delhi</option>
                    <option>Gurgoan</option>
                    <option>Noida</option>
                    <option>Chandigarh</option>
                  </select>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="picktime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Pick-up <b>*</b>
                  </label>
                  <input
                    id="picktime"
                    value={pickTime}
                    onChange={handlePickTime}
                    type="date"
                  ></input>
                </div>

                <div className="box-form__car-time">
                  <label htmlFor="droptime">
                    <i className="fa-regular fa-calendar-days "></i> &nbsp;
                    Drop-of <b>*</b>
                  </label>
                  <input
                    id="droptime"
                    value={dropTime}
                    onChange={handleDropTime}
                    type="date"
                  ></input>
                </div>

                <button onClick={openModal} type="submit">
                
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ************************Modal ***************************/}

      <div className={`booking-modal ${modal ? "active-modal" : ""}`}>
      <div>
        {/* title */}
        <div className="booking-modal__title">
          <h2>Complete Reservation</h2>
          <i onClick={openModal} className="fa-solid fa-xmark"></i>
        </div>
        {/* message */}
        <div className="booking-modal__message">
          <h4>
            <i className="fa-solid fa-circle-info"></i> Upon completing this
            reservation enquiry, you will receive:
          </h4>
          <p>
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        {/* car info */}
        <div className="booking-modal__car-info">
          <div className="dates-div">
            <div className="booking-modal__car-info__dates">
              <h5>Location & Date</h5>
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Pick-Up Date & Time</h6>
                  <p>
                    {pickTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-location-dot"></i>
                <div>
                  <h6>Drop-Off Date & Time</h6>
                  <p>
                    {dropTime} /{" "}
                    <input type="time" className="input-time"></input>
                  </p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Pick-Up Location</h6>
                  <p>{pickUp}</p>
                </div>
              </span>
            </div>

            <div className="booking-modal__car-info__dates">
              <span>
                <i className="fa-solid fa-calendar-days"></i>
                <div>
                  <h6>Drop-Off Location</h6>
                  <p>{dropOff}</p>
                </div>
              </span>
            </div>
          </div>
          <div className="booking-modal__car-info__model">
            <h5>
              <span>Car -</span> {carType}
              
            </h5>
            {imgUrl && <img src={imgUrl} alt="car_img" />}
          </div>
        </div>
        {/* personal info */}
        <div className="booking-modal__person-info">
          <h4>Personal Information</h4>
          <form className="info-form">
            <div className="info-form__2col">
              <span>
                <label>
                  First Name <b>*</b>
                </label>
                <input
                  value={name}
                  onChange={handleName}
                  type="text"
                  placeholder="Enter your first name"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Last Name <b>*</b>
                </label>
                <input
                  value={lastName}
                  onChange={handleLastName}
                  type="text"
                  placeholder="Enter your last name"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>

              <span>
                <label>
                  Phone Number <b>*</b>
                </label>
                <input
                  value={phone}
                  onChange={handlePhone}
                  type="tel"
                  placeholder="Enter your phone number"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Age <b>*</b>
                </label>
                <input
                  value={age}
                  onChange={handleAge}
                  type="number"
                  placeholder="18"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__1col">
              <span>
                <label>
                  Email <b>*</b>
                </label>
                <input
                  value={email}
                  onChange={handleEmail}
                  type="email"
                  placeholder="Enter your email address"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Address <b>*</b>
                </label>
                <input
                  value={address}
                  onChange={handleAddress}
                  type="text"
                  placeholder="Enter your street address"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <div className="info-form__2col">
              <span>
                <label>
                  City <b>*</b>
                </label>
                <input
                  value={city}
                  onChange={handleCity}
                  type="text"
                  placeholder="Enter your city"
                ></input>
                <p className="error-modal">This field is required.</p>
              </span>

              <span>
                <label>
                  Zip Code <b>*</b>
                </label>
                <input
                  value={zipcode}
                  onChange={handleZip}
                  type="text"
                  placeholder="Enter your zip code"
                ></input>
                <p className="error-modal ">This field is required.</p>
              </span>
            </div>

            <span className="info-form__checkbox">
              <input type="checkbox"></input>
              <p>Please send me latest news and updates</p>
            </span>

            <div className="reserve-button">
              <button onClick={confirmBooking}>Reserve Now</button>
              
            </div>
          </form>
        </div>
      </div>
     </div> 
    </>
  )
}

export default BookCar
