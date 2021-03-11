import React from 'react';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import '../App.css';
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
    <container>
    <div className="payment">
    <form onSubmit={sendEmail}>
        <h1>Inquiries</h1> <br/> <br/> 
      <label>Name</label>
      <input className="payment" type="text" name="name" />
      <label>Email</label>
      <input className="payment" type="email" name="email" />
      <label>Message</label>
      <textarea className="payment" name="message" />
      <input type="submit" value="Send Message" />
    </form>
    </div>
    </container>
  );
}