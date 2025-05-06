import React from 'react'
import './Body.css'
import { Link } from 'react-router-dom'

const Body = () => {
  return (
    <div className='fullbody'>
      <div className='firsthalf'>
        <h1>
          Know the Reel <br />
          story in <span style={{ color: 'red' }}>seconds.</span>
        </h1>
        <Link to="/GettingStarted"><button>Get Started</button></Link>
      </div>
      <div className='secondhalf'>
        <video src="" />
      </div>
    </div>
  )
}
export default Body
