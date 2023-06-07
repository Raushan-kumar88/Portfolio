import React, {useState } from 'react'
import './navbar.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from "react-icons/fa"
// import {MdOutlineDarkMode,MdOutlineLightMode} from 'react-icons/md'
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


//   const [activeSection, setActiveSection] = useState('');

//   useEffect(() => {
//     const handleScroll = () => {
//       const sections = document.querySelectorAll('section');
//       const scrollPosition = window.scrollY;

//       sections.forEach((section) => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;

//         if (
//           scrollPosition >= sectionTop - 50 && // Adjust offset as needed
//           scrollPosition < sectionTop + sectionHeight - 50 // Adjust offset as needed
//         ) {
//           setActiveSection(section.id);
//         }
//       });
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);


// const [isDarkMode, setIsDarkMode] = useState(false);

// useEffect(() => {
//   const root = window.document.documentElement;
//   if (isDarkMode) {
//     root.classList.add('dark-mode');
//   } else {
//     root.classList.remove('dark-mode');
//   }
// }, [isDarkMode]);

// const toggleMode = () => {
//   setIsDarkMode(!isDarkMode);
// };




  return (
    <div className={color ? "header header-bg" : "header" }>
        <Link to="/">
            <h1>Portfolio</h1>
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/project">Project</Link>
            </li><li>
                <Link to="/about" >About</Link>
            </li><li>
                <Link to="/contact" >Contact</Link>
            </li>
            {/* <li onClick={toggleMode}>
            <Link to="" >{isDarkMode ? <MdOutlineLightMode/> : <MdOutlineDarkMode/>}</Link>
            </li> */}
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