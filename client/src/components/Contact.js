import React from 'react';
import {useRef} from 'react';
import '../Contact.css';
import emailjs from '@emailjs/browser';

import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
function Contact() {
  const form = useRef ();
  const sendEmail = (e) => {
    e.preventDefault();

  emailjs.sendForm('service_ckdjrra', 'template_tozn4cf', form.current, 'PWvWBrMH8bGGVTIk1')
  .then((result) => {
      console.log(result.text);
  }, (error) => {
      console.log(error.text);
  });
  e.target.reset();
};

    const item = {
        name: "Location 1",
        location: {
          lat: 33.825116, 
          lng: 10.101350,
        },
      };
    
      const mapStyles = {
        height: "400px",
        width: "100%",
      };
    
      const defaultCenter = {
        lat: 33.825116,  
        lng: 10.101350,
      };
    
  return (
    <div className="contact">
 <div className="wrapper" style={{backgroundImage: 'url("/background.jpg")'}}>
        <div className="inner">
          <form action ref={form} onSubmit={sendEmail} >
            <h3>Contact us</h3>
            <div className="form-group">
              <div className="form-wrapper">
                <label htmlFor  >First Name</label>
                <input type="text"  name="user_name"  className="form-control" />
              </div>
              <div className="form-wrapper">
                <label htmlFor>Last Name</label>
                <input type="text"  name="user_name"   className="form-control" />
              </div>
            </div>
            <div className="form-wrapper">
              <label htmlFor>Email</label>
              <input type="email" name="user_email"  className="form-control" />
            </div>
            
            <div className="checkbox">
            <label htmlFor>Message</label>
             <textarea  className="form-control"  rows="4" cols="33" name="message" >       </textarea>
               
            
            </div>
            <button type="submit" value="Send" >submit </button>
          </form>
        </div>
      </div>
    
<div className="aboutUsElement">
        <LoadScript googleMapsApiKey="AIzaSyC-9HBtGH2Tn5omz6Y4g9B29Jg5EVVx2xE">
          <GoogleMap
            mapContainerStyle={mapStyles}
            zoom={15}
            center={defaultCenter}
          >
            <Marker key={item.name} position={item.location} />
          </GoogleMap>
        </LoadScript>
      </div>
    </div>
  
  )
};

export default Contact