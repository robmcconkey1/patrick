import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_2kHYvHjk5SCVOzTSpxTcS");


export default function ContactUs() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_d1tlxo8', 'template_a1ys97m', e.target, 'user_2kHYvHjk5SCVOzTSpxTcS')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (

    <form className="contact-form" onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="name" />
      <label>Email</label>
      <input type="email" name="email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send Message" />
    </form>
  
  );
}