import React from 'react';
import phonePng from '../img/contact-phone.png';
import mailPng from '../img/contact-mail.png';
import locationPng from '../img/contact-location.png';
import sendMailPng from '../img/mail.png';
import { useState } from 'react';
import {db, collection, addDoc} from '../firebase/config';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [project, setProject] = useState('');
  const [message, setMessage] = useState('');
  const [hasSuccessfullySent, setHasSuccessfullySent] = useState(false);

  const sendMsg = (e) => {
    e.preventDefault();

    addDoc(collection(db, "messages"), 
        { name, email, project, message})
        .then(d => {
            setHasSuccessfullySent(true);
        })
        .catch(err => console.log(err));
  }

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

            <form className="input" onSubmit={sendMsg}>
                <div>
                    <input type="text" placeholder='Your name' onChange={(e) => setName(e.target.value)} required/>
                    <input type="email" placeholder='Your email' onChange={(e) => setEmail(e.target.value)} required/>
                </div>
                <input type="text" placeholder='Project' onChange={(e) => setProject(e.target.value)} required/>
                <textarea name="" id="" cols="30" rows="10" placeholder='Type your message here...' onChange={(e) => setMessage(e.target.value)} required></textarea>
                <button type="submit" className={hasSuccessfullySent? "has-successfully-sent": ""}>Send Message <img src={sendMailPng} alt="" /></button>
            </form>
        </div>
    </div>
  )
}

export default Contact