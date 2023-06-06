import React from 'react'
import './workcard.css'
import Workcard from './Workcard'
import WorkCarddata from './WorkCarddata'
import { Link } from 'react-router-dom'
const Work = () => {
  return (
    <div className='work-container'>
        <h1 className='project-heading'>Projects</h1>
        <ndiv className="project-container">
            {WorkCarddata.map((val,ind)=>{
                return(
                    <Workcard 
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    text={val.text}
                    view={val.view}
                    source={val.source}
                     />
                )
            }) }

            <details style={{color:'white',cursor:'pointer'}}>
              <Link to='https://legacy.reactjs.org/'>More Details</Link>
            </details>
        </ndiv>
    </div>
  )
}

export default Work