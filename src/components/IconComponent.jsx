import React, {useRef} from 'react'
import ScrollTrigger from 'react-scroll-trigger'

function IconComponent(props) {

  const techRef = useRef(null)

  const addTechAnimation = () => {
    if (techRef.current) {
      techRef.current.classList.add('tech-animation');
    }
  };
  
  const removeTechAnimation = ()=>{
    if(techRef.current){
      techRef.current.classList.remove("tech-animation");
    }
  }
  const { tech } = props
  return (
    <ScrollTrigger  onEnter={addTechAnimation} onExit={removeTechAnimation} className='tech-section'>
      <div ref={techRef} className=" tch-container  d-flex justify-content-around flex-wrap cls_relative ">
        <br /> 
      {tech.map(tech => (
          
          <div className=" icon-container" key={tech.name}>
              <div className='d-flex justify-content-center'>
                  
                  <img className='w-100 text-center' src={tech.image} alt="" />
              </div>
              <h4 className='text-center'>{tech.name}</h4>
          </div>
      ))}
          
        
      
      </div>
      </ScrollTrigger>

    
  )
}

export default IconComponent
