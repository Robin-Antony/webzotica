import React from 'react'
import CounterComponent from './CounterComponent'

function CanvasComponent() {
  return (
    <section className='container mb-5 '>
        <div className='canvas-container'>
            <div className=' h-75 w-100 d-flex flex-wrap'>
                <div className='w-50 h-100 bg-canvasone p-5 text-white'>
                  <CounterComponent start={0} end={100}></CounterComponent>
                  <h4 className='text-center'>Clients</h4>
                </div>
                <div className='w-50 h-100 bg-canvastwo p-5 text-white'>
                  <CounterComponent start={0} end={300}></CounterComponent>
                  <h4 className='text-center'>Projects</h4>
                  
                </div>

            </div>
            <div className='canvas-absolute'>
              <h3 className='text-center text-white mt-5'>We're an Offshore Software Development Services Company Delivering Excellence in Technology Solutions</h3>
            </div>
        </div>
      
    </section>
  )
}

export default CanvasComponent
