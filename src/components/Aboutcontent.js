import React from 'react'
import './aboutcontent.css'
import {Link} from 'react-router-dom'

const Aboutcontent = () => {
  return (
    <div className='about'>
        <div className="left">
            <h1>Who Am I ? </h1>
            <p>Im i react front-end developer. I create resposive secure websites for my clients.</p>
            <Link to="/contact">
                <button className='btn'>Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src="https://images.unsplash.com/photo-1579820010410-c10411aaaa88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1197&q=80" alt="true" className='img' />
                </div>
                <div className="img-stack bottom">
                    <img src="https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="true" className='img' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutcontent