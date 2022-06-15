import React from 'react'

const Project = ({ id, title, description, imgUrl, visitSite, visitSource, tools }) => {


    return (
        <div className='Project'>
            <img src={require("../../images/" + imgUrl + ".png")} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
            <div className='tools'>
                {tools.map((tech,index) => {
                    return <p key={index}>{tech}</p>
                })}
            </div>

            <div className='Project-btn'>
                <button onClick={() => {
                    window.location.assign(visitSite)
                }}>View Website</button>
                <button onClick={() => {
                    window.location.assign(visitSite)
                }}>View Source</button>
            </div>
        </div>
    )
}

export default Project