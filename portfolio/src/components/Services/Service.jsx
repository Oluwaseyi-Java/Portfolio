import React from 'react'

const Service = (props) => {
  return (
      <div className='Service'>
          <span>{props.font}</span>
          <h3>{props.title}</h3>
          <p>{ props.description}</p>
      </div>
  )
}

export default Service