import React, { useEffect, useState } from 'react'
import Title from '../Title'
import Project from './Project'
import { ProjectData } from "../../UiData.js"


const Projects = () => {

    const [state, setState] = useState([])

    useEffect(() => {
        setState(ProjectData)
    },[])

    const projects = state.map((project,index) => {
        return (
            <Project
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                visitSite={project.websiteUrl}
                visitSource={project.sourceUrl}
                
            />
        )
    })


    return (
        <div className='Projects' id='projects'>
            <Title title="Projects" />
            <p>My Latest Work</p>
            {projects}
        </div>
    )
}

export default Projects