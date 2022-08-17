import React, { useEffect, useState } from 'react'
import Title from '../Title'
import Project from './Project'
import { ProjectData } from "../../UiData.js"
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

const Projects = () => {

    const [state, setState] = useState([])
    const [isMore, setIsMore] = useState(false)

    useEffect(() => {
        if (isMore) {

            setState(ProjectData)
        }
        else {
            setState(ProjectData.slice(0, 3))
        }

    }, [isMore])

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
            <div className='Show'>
                <p
                    onClick={() => {
                        setIsMore(!isMore)
                    }}
                >{isMore ? "Show Less" : "Show More"}{isMore ? <FaChevronUp /> : <FaChevronDown />}</p>
            </div>
        </div>
    )
}

export default Projects