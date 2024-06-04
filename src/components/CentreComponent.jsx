import React from 'react'

function CentreComponent({heading, paragraph}) {
  return (
    <div className='center-component'>
        <div className='centre-component-flex '>
        <div className='container center-component-item'>
            <h1 className='text-center'>{heading}</h1>
            <h4 className='text-center'>{paragraph}</h4>
            <h2 className='m-5'>Call Us Any Time PH: 9526953674</h2>
        </div>
        </div>
        <div className='center-component-cover'>
        </div>
    </div>
  )
}

export default CentreComponent
