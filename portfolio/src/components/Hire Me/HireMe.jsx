import React from 'react'
import Title from '../Title'
import InputMessage from './InputMessage'
import ShortContact from "./shortConatct"

const HireMe = () => {
  return (
    <div className='HireMe' id='hire-me'>
          <Title title="Hire Me" />
          
          <ShortContact />
          <InputMessage/>
      </div>
  )
}

export default HireMe