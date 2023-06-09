import React, { useEffect } from 'react'
import './prices.css'
import {Link} from 'react-router-dom'
const Prices = props => {

    useEffect(() => {
        const textElement = document.querySelector('.text-animation');
        textElement.classList.add('animate');
      }, []);

  return (
    <div className='pricing'>
        <div className="card-container">
            <div className="card">
                <h3>- Basic -</h3>
                <span className="bar"></span>
                <p className="btc">$ 100</p>
                <p>- 3 Days -</p>
                <p>- 3 Pages -</p>
                <p>- 3 Featured -</p>
                <p>- 3 Responsive Design -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3 className='text-animation'>- Premium -</h3>
                <span className="bar"></span>
                <p className="btc">$ 200</p>
                <p>- 2 Days -</p>
                <p>- 5 Pages -</p>
                <p>- 3 Featured -</p>
                <p>- 3 Responsive Design -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>
            <div className="card">
                <h3>- Business -</h3>
                <span className="bar"></span>
                <p className="btc">$ 300</p>
                <p>- 5 Days -</p>
                <p>- 8 Pages -</p>
                <p>- 3 Featured -</p>
                <p>- 3 Responsive Design -</p>
                <Link to="/contact" className='btn'>PURCHASE NOW</Link>
            </div>
        </div>
    </div>
  )
}


export default Prices