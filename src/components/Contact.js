import React from 'react';
import phonePng from '../img/contact-phone.png';
import mailPng from '../img/contact-mail.png';
import locationPng from '../img/contact-location.png';
import sendMailPng from '../img/mail.png';

const Contact = () => {
  return (
    <div className="contact" id="contact">
        <h1 className="header">Contact</h1>
        <small className="sub-header">Get in Touch</small>
        <div className="wrapper">
            
            <div className='contact-links'>
                <div>
                    <img src={phonePng} alt="" />
                    <div>
                        <h3>Call Me</h3>
                        <a href="tel:+916009383347">+916009383347</a>
                    </div>
                </div>

                <div>
                    <img src={mailPng} alt="" />
                    <div>
                        <h3>Email</h3>
                        <a href="mailto:rabintech123@gmail.com">rabintech123@gmail.com</a>
                    </div>
                </div>

                <div>
                    <img src={locationPng} alt="" />
                    <div>
                        <h3>Location</h3>
                        <a>Yelahanka, Bangalore</a>
                    </div>
                </div>
                
            </div>

            <div className="input">
                <div>
                    <input type="text" placeholder='Your name'/>
                    <input type="email" placeholder='Your email'/>
                </div>
                <input type="text" placeholder='Project'/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Type your message here...'></textarea>
                <button>Send Message  <img src={sendMailPng} alt="" /></button>
            </div>
        </div>
    </div>
  )
}

export default Contact