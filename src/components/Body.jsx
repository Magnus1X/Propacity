import React from 'react'
import './Body.css'

const Body = () => {
  return (
    <>
      <div className='fullbody'>
        <div className='firsthalf'>
          <h1>
            Know the Reel <br />
            story in <span style={{ color: 'red' }}>seconds.</span>
          </h1>
          <button>Get Started</button>
        </div>
        <div className='secondhalf'>
          <video src=""></video>
        </div>
      </div>
    </>
  )
}

export default Body
