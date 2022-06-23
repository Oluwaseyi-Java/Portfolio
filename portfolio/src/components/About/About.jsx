import React from 'react'
import Title from '../Title'
import img from "../../images/pfp.png"
import Bounce from "react-reveal/Bounce"
const About = (props) => {
    return (
        <Bounce>

            <div className='About' id='about'>
                <Title title="About" />
                <img src={img} alt="pfp" />
                <p className='description'>{props.description} </p>
            </div>
        </Bounce>
    )
}

export default About