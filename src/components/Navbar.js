import React, { useEffect, useState } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa"
const Navbar=()=> {
    const[click,setClick]=useState(false);
    const[color ,setColor]=useState(false);

    const colorChange=()=>{
        if(window.scrollY>100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };

    window.addEventListener("scroll",colorChange);

    const handleClick = () =>{
    setClick(!click);
  }


  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      const scrollPosition = window.scrollY;

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (
          scrollPosition >= sectionTop - 50 && // Adjust offset as needed
          scrollPosition < sectionTop + sectionHeight - 50 // Adjust offset as needed
        ) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);







  return (
    <div className={color ? "header header-bg" : "header" }>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/" className={activeSection === 'section1' ? 'active' : ''}>Home</Link>
            </li>
            <li>
                <Link to="/project" className={activeSection === 'section1' ? 'active' : ''}>Project</Link>
            </li><li>
                <Link to="/about" >About</Link>
            </li><li>
                <Link to="/contact" >Contact</Link>
            </li>
        </ul>
        <div className='hambrger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color:"#fff"}} />
        ): 
        (
          <FaBars size={20} style={{color:"#fff"}} />
        )}
        </div>
    </div>
  )
}

export default Navbar