// import React, { useState, useEffect } from 'react'
import './heroimg.css'
import { Link } from 'react-router-dom'
import { useTypewriter, Cursor } from 'react-simple-typewriter'
// import IntroImg from '../assets/'
const HeroImg = ()=> {
//   const [text, setText] = useState("")
// const [fullText, setFullText] = useState(
//     "HI, I'M FREELANCER."
//   )
// const [index, setIndex] = useState(0)

// useEffect(() => {
//     if (index < fullText.length) {
//       setTimeout(() => {
//         setText(text + fullText[index])
//         setIndex(index + 1)
//       }, 40)
//     }
//   }, [index])


// const {text} = useTypewriter(
//   {
//     words:['DEVELOPER','DESIGNER','FREELANCER'],
//     loop:{},
//     typeSpeed:120,
//     deleteSpeed:80,
//   }
// );
const [text] = useTypewriter({
    words: ['FREELANCER', 'DESIGNER', 'DEVELOPER!'],
    loop: {},
    typeSpeed:120,
    deleteSpeed:80,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })



  return (
    <div className='hero'>
      <div className="mask">
        <img className='into-img' src="https://www.yalgaar.io/Content/themes/Admin/img/login_full_bg.jpg" alt="intro" />
      </div>
      <div className="content">
      {/* <span>{text}</span> */}
        <p>HI, I'M <span style={{fontWeight:'bold',color:'green'}}>{text}</span>
          <span style={{color:'red'}}><Cursor cursorStyle='<' /></span>
        </p>
        <h1>React Developer.</h1>
        <div className='demo'>
          <Link to="/project" className='btn'>Projects</Link>
          <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg