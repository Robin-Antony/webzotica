import React from 'react'
import CoundUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger';
import { useState } from 'react'

export default function CounterComponent(props) {
    
    const [counterOn, setCounterOn ] = useState(false)

    console.log(props)
  return (
    <div>
        <ScrollTrigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
            <h2 className='counter-h1 text-center'>
                {counterOn && 
            <CoundUp start={props.start} end={props.end} duration={3} delay={0}/> }+
            </h2>
        </ScrollTrigger>
    </div>
  )
}
