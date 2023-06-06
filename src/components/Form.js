import React from 'react'
import './form.css'
const Form = () => {
  return (
    <div className='form'>
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" placeholder='' />
            <label htmlFor="">Your Email</label>
            <input type="email" placeholder='' />
            <label htmlFor="">Subject</label>
            <input type="text" placeholder='' />
            <label htmlFor="">Message</label>
            <textarea name="" id="" cols="" placeholder='type your message here.' rows="6"></textarea>
            <button type='submit' className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form