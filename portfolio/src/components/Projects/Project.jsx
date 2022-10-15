import React from 'react'
import {FiExternalLink} from "react-icons/fi"
import Zoom from 'react-reveal/Zoom';

const Project = ({ id, title, description, imgUrl, visitSite, visitSource, tools }) => {


    return (

        <Zoom>

            <div className='Project'>
                <div onClick={() => {
                    window.location.assign(visitSite)
                }}>
                <img src={require("../../images/" + imgUrl + ".png")} alt={title} />
                <h3>{title}</h3>
                <p>{description}</p>
                <div className='tools'>
                    {tools.map((tech, index) => {
                        return <p key={index}>{tech}</p>
                    })}
                </div>

                </div>
                <div className='Project-btn'>
                    <button onClick={() => {
                        window.location.assign(visitSource)
                    }}>View Source Code <FiExternalLink/></button>
                </div>
            </div>
        </Zoom>
    )
}

export default Project
