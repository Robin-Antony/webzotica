import React, {useRef} from 'react'
import ScrollTrigger from 'react-scroll-trigger';

function FlexReverseComponent({heading,paragraph,bgimg}) {

  return (
      <div className=' d-flex w-100 bg-container'>
          <div  className='d-flex justify-content-center align-items-center hero-img-container'>
            
              <div className=" hero-bg-img" style={{ backgroundImage: `url(${bgimg})` }}>
          
              </div>
            
          </div>
         
          <div className="d-flex justify-content-center align-items-center hero-content-container">
              <div className='w-75 hero-content'>
                  <h1>{heading}</h1>
                  <p>{paragraph}</p>
              </div>
          </div>
    
      </div>
  )
}

export default FlexReverseComponent
