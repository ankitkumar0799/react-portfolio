import React from 'react'
import './contact.css'
import { MdOutlineMail } from 'react-icons/md'
import { AiFillLinkedin } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com'





const Contact=()=> {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
   

    emailjs.sendForm('service_m8fasvy', 'template_wdx0tbo', form.current, 'xfCSYL-15-YTfyQyS')
    e.target.reset()

  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__conatinier">
        <div className="contact__options">
          <article className="contact__option">
          <MdOutlineMail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>ankitkuswaha07@gmail.com</h5>
            <a href="maillto:ankitkuswaha07@gmail.com" target="_blank">Send A Massage</a>

          </article>


          <article className="contact__option">
          <AiFillLinkedin className="contact__option-icon"/>
            <h4>Linkedin</h4>
            <h5>Ankit Kumar</h5>
            <a href="https://www.linkedin.com/in/ankit-kumar-aa11a2265/" target="_blank">Send A Massage</a>

          </article>


          <article className="contact__option">
          <MdOutlineMail className="contact__option-icon"/>
            <h4>What's App</h4>
            <h5>+91 8744976308</h5>
            <a href=" https://api.whatsapp.com/send?phone=+918744976308" target="_blank">Send A Massage</a>

          </article>
        </div>
        {/* HERE IS THE END POINT OF CONTACT OPTIONS */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
            <input type="email" name="email" placeholder="Your Email" required/>
            <textarea name="massage"  rows="7" placeholder='Your Message' required></textarea>
            <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
      </section>
  )
}

export default Contact