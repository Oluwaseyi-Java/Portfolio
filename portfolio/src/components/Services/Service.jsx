import React from 'react'
import LightSpeed from "react-reveal/LightSpeed"

const Service = (props) => {
  return (
    <LightSpeed>

      <div className='Service'>
        <span>{props.font}</span>
        <h2>{props.title}</h2>
        <p>{props.description}</p>
      </div>
    </LightSpeed>
  )
}

export default Service