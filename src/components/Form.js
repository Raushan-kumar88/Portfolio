import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './form.css'
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s1hmayd', 'template_d124qkb', form.current, 'CuWO16Mwf4iTjeL9I')
      .then((result) => {
          console.log(result.text);
          toast.success("Message sent");

      }, (error) => {
          console.log(error.text);
          toast.error("Check all fields");
      });
      e.target.reset();
  };
  return (
    <div className='form'>
        <form action="" ref={form} onSubmit={sendEmail}>
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='' name="user_name" required />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='' name="user_email" required />
            <label htmlFor="">Subject</label>
            <input type="text" name="user_subject" placeholder='' required />
            <label htmlFor="">Message</label>
            <textarea name="message" id="" cols="" placeholder='type your message here.' rows="6"></textarea>
            <button type='submit' className='btn' value="Send">Submit</button>
        </form>
        <ToastContainer/>
    </div>
  )
}

export default Form