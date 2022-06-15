import React from 'react'

const Service = (props) => {
  return (
      <div className='Service'>
          <span>{props.font}</span>
          <h2>{props.title}</h2>
          <p>{ props.description}</p>
      </div>
  )
}

export default Service