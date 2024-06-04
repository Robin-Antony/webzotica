import React, {useRef} from 'react'
import ScrollTrigger from 'react-scroll-trigger';

function HeroComponent({heading,paragraph,bgsvg,bgimg}) {
  
  return (
    <div className=' d-flex w-100  bg-container' style={{ backgroundImage: `url(${bgsvg})` }}>
        <div className="d-flex justify-content-center align-items-center hero-content-container">
            <div className='w-75 hero-content'>
                <h1>{heading}</h1>
                <div className='underline1'></div>
                <p>{paragraph}</p>
                <a type="button" className="btn" href="">Contact Us</a>

            </div>
        </div>
        <div className='d-flex justify-content-center align-items-center hero-img-container'>
            <div className=" hero-bg-img"style={{ backgroundImage: `url(${bgimg})` }}>
        
            </div>
        </div>
      
    </div>
  )
}

export default HeroComponent
