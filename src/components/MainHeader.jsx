import React from 'react'
import Image from '../Images/main_header.png'
import { Link } from 'react-router-dom'

const Mainheader = () => {
  return (
    <header className='main__header'>
      <div className="container main__header-container">
        <div className="main__header-left">
          <h4>#100 Days of Workout</h4>
          <h1>Join the legends of the Fitness World</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ea tenetur ratione, laborum sed, nesciunt magni esse obcaecati consequatur quibusdam nemo. Tempore, pariatur unde neque dignissimos quis harum aperiam officiis.
          </p>
          <Link to='/Plans' className='btn lg' >Get Started</Link>
        </div>
        <div className="main__header-right">
          <div className="main__header-circle"></div>
          <div className="main__header-image">
            <img src={Image} alt="images" />
          </div>
        </div>
      </div>

    </header>
  )
}

export default Mainheader