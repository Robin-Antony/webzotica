import React, {useRef} from 'react'
import ContainerCompoentTop from './ContainerCompoentTop'

function IconComponent(props) {

  const { tech } = props
  return (
    <div className=' heroS hero-bg-svg'>
      <section className=" tch-container container  d-flex justify-content-center flex-wrap">
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
    </div>
    
  )
}

export default IconComponent
