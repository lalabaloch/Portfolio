import React from 'react'
import './Contact.css'
import mail from'../../Component/assets/mail.png'
import location from'../../Component/assets/location.jpg'
import call from'../../Component/assets/call.png'
export default function Contact() {
  const onsubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "2456e75e-b4ec-434b-9911-076ee746b155");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
    
      setTimeout(() => {
        alert("Success: ");
      }, 2000);
    }
    else{
      setTimeout(() => {
        alert("Failed: ");
      }, 2000);
    }
  };


  return (
    <div id='contact' className='contact'>
      <div className='contact-tittle'>
        <h1>Get in touch</h1>
      </div>
      <div className='contact-section'>
      <div className='contact-left'>
        <h1>Let's talk</h1>
        <p>I'm currently avaliable to take a new project, so feel free to send me a message about anything that you want on. You contact anytime.</p>
        <div className='contact-details'>
        <div className='contact-detail'>
          <img src={mail} alt=''/><p>balochowais242@gmail.com</p>
          </div>
          <div className='contact-detail'>
          <img src={call} alt=''/><p>03702079568</p>
          </div>
          <div className='contact-detail'>
          <img src={location} alt=''/><p>Pakistan,Karachi</p>
          </div>
        </div>
        </div>
        <div >
        <form onSubmit={onsubmit} className='contact-right'>
          <label htmlFor=''>Your Name</label>
          <input type='text'placeholder='Enter your name' name='name' required/>
          <label htmlFor=''>Enter Email</label>
          <input type='email'placeholder='Enter your email' name='email' required/>
          <label htmlFor=''>Write your message here</label>
          <textarea name='message' rows={8} placeholder='Enter your message' required></textarea>
          <button  type='submit' className='contact-submit'>Submit now</button>
        </form>
        </div>
      </div>
      
    </div>
  )
};