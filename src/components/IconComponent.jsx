import React, {useRef} from 'react'
import ScrollTrigger from 'react-scroll-trigger'

function IconComponent(props) {

  const { tech } = props
  return (
      <section className=" tch-container container  d-flex justify-content-around flex-wrap cls_relative ">
        <br /> 
      {tech.map(tech => (
          
          <div className=" icon-container" key={tech.name}>
              <div className='d-flex justify-content-center'>
                  
                  <img className='w-100 text-center' src={tech.image} alt="" />
              </div>
              <h5 className='text-center'>{tech.name}</h5>
          </div>
      ))}
          
        
      
      </section>

    
  )
}

export default IconComponent
