
import imag from '../assets/animImg1.png'
import ReadMore from './ReadMore'
import React, { useRef, useEffect } from 'react';

import ScrollTrigger from 'react-scroll-trigger';


function FlexCardComponent() {
    const cardRef1 = useRef(null);
    const cardRef2 = useRef(null);
    const cardRef3 = useRef(null);

    const cardAnimation = () => {
        console.log("scroll triggered")
        if (cardRef3.current) {
          cardRef1.current.classList.add('card-animation');
          cardRef2.current.classList.add('card-animation');
          cardRef3.current.classList.add('card-animation');
        }
      
      };
      const removeCardAnimation = () => {
        console.log("scroll triggered")
        if (cardRef3.current) {
          cardRef1.current.classList.remove('card-animation');
          cardRef2.current.classList.remove('card-animation');
          cardRef3.current.classList.remove('card-animation');
        }
      
      };


    const content1 = "Some quick example text to build on the card title and make up the bulk of the card's content. on the card title and make up the bulk of the card's content."
  return (
    <section className='container d-flex justify-content-around flex-wrap w-100 flex-card-container'>
        
        <ScrollTrigger >
        <div className="card m-3" id="card"  ref={cardRef1} >
            <div className="card-body">
                <h5 className="card-title"><img src={imag} style={{width:'80px'}} alt="" />Card title</h5>
                
                <ReadMore content={content1}/>
                <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button>
            </div>
        </div>
        </ScrollTrigger>
        <ScrollTrigger onEnter={cardAnimation} onExit={removeCardAnimation}>
        <div className="card m-3" ref={cardRef2}>
            <div className="card-body">
                <h5 className="card-title"><img src={imag} style={{width:'80px'}} alt="" />Card title</h5>
                <ReadMore content={content1}/>
                <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button>
            </div>
        </div>
        </ScrollTrigger>
        <ScrollTrigger onEnter={cardAnimation} onExit={removeCardAnimation}>
        <div className="card m-3" ref={cardRef3}>
            <div className="card-body">
                <h5 className="card-title"><img src={imag} style={{width:'80px'}} alt="" />Card title</h5>
                <ReadMore content={content1}/>
                <button type="button" className="btn btn-primary" data-mdb-ripple-init>Button</button>
            </div>
        </div>
        </ScrollTrigger>
      
    </section>
  )
}

export default FlexCardComponent
