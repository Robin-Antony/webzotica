import React, {useRef} from 'react'
import ScrollTrigger from 'react-scroll-trigger';

function FlexReverseComponent({heading,paragraph,bgsvg,bgimg,bgcontain}) {

    const bgimgRef1 = useRef(null);
    const bgrefSvg1 = useRef(null);
    const cardRef3 = useRef(null);

    const cardAnimation = () => {
        console.log("scroll triggered")
        if (bgimgRef1.current) {
            bgimgRef1.current.classList.add('hero-img-animation');
        }
        if (bgrefSvg1.current) {
            bgrefSvg1.current.classList.add('svg-scale-animation');
        }
      
      };
      const removeCardAnimation = () => {
        console.log("scroll triggered")
        if (bgimgRef1.current) {
            bgimgRef1.current.classList.remove('hero-img-animation');
        }
        if (bgrefSvg1.current) {
            bgrefSvg1.current.classList.remove('svg-scale-animation');
        }
      
      };
  return (
    <section className='hero-bg-svg' style={{ backgroundImage: `url(${bgsvg})` }}>
      <div className=' d-flex w-100   flexReverseComponent-contain-bg' ref={bgrefSvg1} style={{ backgroundImage: `url(${bgcontain})` }}>
          <ScrollTrigger onEnter={cardAnimation} onExit={removeCardAnimation} className='d-flex justify-content-center align-items-center hero-img-container'>
            
              <div className=" hero-bg-img" style={{ backgroundImage: `url(${bgimg})` }} ref={bgimgRef1}>
          
              </div>
            
          </ScrollTrigger>
         
          <div className="d-flex justify-content-center align-items-center hero-content-container">
              <div className='w-75 hero-content'>
                  <h1>{heading}</h1>
                  <p>{paragraph}</p>
              </div>
          </div>
    
      </div>
      </section>
  )
}

export default FlexReverseComponent
