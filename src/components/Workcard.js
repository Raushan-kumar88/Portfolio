import React from 'react'
import './workcard.css'
import {NavLink} from 'react-router-dom'
import { Link } from 'react-router-dom'
const Workcard = (props) => {
  return (
    <div className="project-card">
                <img src={props.imgsrc} alt="im" />
                <h2 className='project-title'>{props.title}</h2>
                <div className="pro-details">
                    <p>{props.text}</p>
                    <div className="pro-btns">
                        <NavLink target='blank' to={props.view} className="btn">
                            View
                        </NavLink>
                        {/* <NavLink to={props.source} className="btn">
                            Source
                        </NavLink> */}
                        <img src="" alt="" />
                        {/* <NavLink to='/login' className="btn">
                            Source
                        </NavLink> */}
                        <Link className='btn' to='/login'>Source</Link>
                    </div>
                </div>
            </div>
  )
}

export default Workcard