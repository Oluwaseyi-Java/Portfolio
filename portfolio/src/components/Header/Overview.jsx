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
        <FaGithub  className='fa github' />
        <FaTwitter  className='fa twitter' />
        <FaLinkedin className='fa linkedin'  />
        <FaFacebook  className='fa facebook' />
      </div>
    </div>
  )
}

export default Overview