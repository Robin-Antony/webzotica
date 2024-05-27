import React, {useRef} from 'react'
import ScrollTrigger from 'react-scroll-trigger';

function HeroComponent({heading,paragraph,bgsvg,bgimg}) {
  const bgimgRef1 = useRef(null);
  const cardAnimation = () => {
    console.log("scroll triggered")
    if (bgimgRef1.current) {
        bgimgRef1.current.classList.add('hero-img-animation');
    }
  
  };
  const removeCardAnimation = () => {
    console.log("scroll triggered")
    if (bgimgRef1.current) {
        bgimgRef1.current.classList.remove('hero-img-animation');
    }
  
  };
  return (
    <div className=' d-flex w-100  hero-bg-svg' style={{ backgroundImage: `url(${bgsvg})` }}>
        <div className="d-flex justify-content-center align-items-center hero-content-container">
            <div className='w-75 hero-content'>
                <h1>{heading}</h1>
                <div className='underline1'></div>
                <p>{paragraph}</p>
                <a type="button" className="btn" href="">Contact Us</a>

            </div>
        </div>
        <ScrollTrigger onEnter={cardAnimation} onExit={removeCardAnimation}className='d-flex justify-content-center align-items-center hero-img-container'>
            <div className=" hero-bg-img"style={{ backgroundImage: `url(${bgimg})` }} ref={bgimgRef1}>
        
            </div>
        </ScrollTrigger>
      
    </div>
  )
}

export default HeroComponent
