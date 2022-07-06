import React, { useEffect, useState } from 'react'
import Title from '../Title'
import Project from './Project'
import { ProjectData } from "../../UiData.js"

const Projects = () => {

    const [state, setState] = useState([])

    useEffect(() => {
        setState(ProjectData)
    }, [])

    const projects = state.map((project, index) => {
        return (
            <Project
                key={project.id}
                title={project.title}
                description={project.description}
                imgUrl={project.imgUrl}
                visitSite={project.websiteUrl}
                visitSource={project.sourceUrl}
                tools={project.tools}

            />
        )
    })


    return (
        <div className='Projects' id='projects'>
            <Title title="Projects" />
           
                <p className='Head'>My Latest Work</p>
           
            <div className='project-display'>
                {projects}
            </div>
        </div>
    )
}

export default Projects