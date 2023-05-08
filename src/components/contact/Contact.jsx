import React from 'react'
import './Contact.css'
import {MdEmail} from 'react-icons/md'
import{BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'
const Contact = () => {
  const form=useRef();
  const sendEmail=(e)=>{
    e.preventDefault();
    emailjs.sendForm('service_ts2osjd','template_q25v6ck',form.current,'Au3rglQYrJyVcslMQ')
    e.target.reset();
  };
  return (
    <section id='contact'>
      <h5>GET</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__icon'/>
            <h4>Email</h4>
            <h5>ekambehl@gmail.com</h5>
            <a target='_blank' href='mailto:ekambehl@gmail.com'>Send a message</a>
          </article>
          
          <article className='contact__option'>
            <BsWhatsapp className='contact__icon'/>
            <h4>WhatsApp</h4>
            
            <a target='_blank' href='https://api.whatsapp.com/send?phone=+61413799987'>Send me a message!!</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='name' placeholder='Your Name' required/>
          <input type='email' name='email' placeholder='Your email' required/>
          <textarea name='message' id="" cols="30" rows="10" placeholder='Message' required></textarea>
          <button type='submit' className='btn btn-primary' >Send</button>
        </form>
      </div>
    </section>
  )
}

export default Contact