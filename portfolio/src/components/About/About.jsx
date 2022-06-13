import React from 'react'
import Title from '../Title'
import img from "../../images/pfp.png"

const About = (props) => {
    return (
        <div className='About' id='about'>
            <Title title="About" />
            <img src={img} alt="pfp" />
            <p className='description'>{props.description} </p>
        </div>
    )
}

export default About