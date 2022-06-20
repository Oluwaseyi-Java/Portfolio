import React from 'react'
import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"

const Overview = () => {

  
  return (
    <div className='overview'>
      <div className='OverviewText'>
        <h1>Design. Build. Improve</h1>
        <p>I create beautiful websites your users will love.</p>
      </div>
      <div className='OverviewSocials'>
       <a href='https://github.com/Oluwaseyi-Java'> <FaGithub  className='fa github' /></a>
        <a href='https://github.com/Oluwaseyi-Java'><FaTwitter  className='fa twitter' /></a>
       <a href='https://github.com/Oluwaseyi-Java'> <FaLinkedin className='fa linkedin'  /></a>
       <a href='https://github.com/Oluwaseyi-Java'> <FaFacebook  className='fa facebook' /></a>
      </div>
    </div>
  )
}

export default Overview