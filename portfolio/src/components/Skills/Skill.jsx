import React from 'react'
import Title from '../Title'
import {
    FaReact, FaHtml5, FaGithub, FaGit,
    FaAndroid, FaNode, FaBootstrap,
    FaJava, FaJsSquare, FaCss3
} from "react-icons/fa"

const Skill = () => {
    return (
        <div className='Skill'>

            <Title title="Skills" />
            <div className='Skills'>
                <FaReact className='fa react' />
                <FaHtml5 className='fa html' />
                <FaCss3 className='fa css' />
                <FaJsSquare className='fa js' />
                <FaJava className='fa java' />
                <FaBootstrap className='fa bootstrap' />
                <FaNode className='fa node' />
                <FaAndroid className='fa android' />
                <FaGit className='fa git' />
                <FaGithub className='fa github' />
            </div>
        </div>
    )
}

export default Skill