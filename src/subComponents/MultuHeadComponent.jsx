import React from 'react'

function MultuHeadComponent(props) {

    const {items} = props
  return (
    <div>
        {items.map(item =>(
        <div key={item.heading}>
            <h2>{item.heading}</h2>
            <p>{item.paragraph}</p>
        </div>))}

      
    </div>
  )
}

export default MultuHeadComponent
