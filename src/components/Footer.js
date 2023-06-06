import React from 'react'
import './footer.css'
import {Link} from 'react-router-dom'
import {
    FaHome,
    FaPhone,
    FaMailBulk,
    FaFacebook,
    FaInstagram,
    FaTwitter,
    FaLinkedin
    } from 'react-icons/fa'
const Footer=()=> {
  return (
    <div className='footer'>
        <div className="footer-container">
            <div className="left">
                <div className="location">
                    <FaHome className='icon' size={20} style={{color:"#fff",marginRight:"1rem"}} />
                    <div>
                        <p>Nh-62 mogra Pali Road Jiet college</p>
                        <p>Jodhpur,Rajasthan</p>
                    </div>
                </div>
                    <div className='phone'>
                           <h4> <FaPhone size={20} style={{color:"#fff",marginRight:"1rem"}} className='icon' />
                           +91 8920543134</h4>
                    </div>
                    <div className='email'>
                           <h4> <FaMailBulk size={20} style={{color:"#fff",marginRight:"1rem"}} className='icon' />
                           Email: raushanbrahampur@gmail.com</h4>
                    </div>
                
            </div>
            <div className="right">
                <h4>About the Company</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                Natus fugiat sequi ullam. Nihil, repellendus maxime facilis exercitationem 
                voluptatibus harum necessitatibus.</p>

                <div className="social">
                <Link to=""><FaFacebook size={26} style={{color:"#fff",marginRight:"1rem"}} /></Link>
                <Link to=""><FaTwitter size={26} style={{color:"#fff",marginRight:"1rem"}} /></Link>
                <Link to=""><FaLinkedin size={26} style={{color:"#fff",marginRight:"1rem"}} /></Link>
                
                <Link to=""><FaInstagram size={26} style={{color:"#fff",marginRight:"1rem"}} /></Link>

                </div>

            </div>
        </div>
    </div>
  )
}

export default Footer