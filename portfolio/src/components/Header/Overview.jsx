import React from 'react'
import { FaGithub } from "react-icons/fa"
import { FaTwitter } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebook } from "react-icons/fa"
import Tada from "react-reveal/Tada"

const Overview = () => {


  return (
    <Tada>
      <div className='overview'>
        <div className='OverviewText'>
          <h1>Design. Build. Improve</h1>
          <p>I create beautiful websites your users will love.</p>
        </div>
        <div className='OverviewSocials'>
          <a href='https://github.com/Oluwaseyi-Java'> <FaGithub className='fa github' /></a>
          <a href='https://twitter.com/AdesunloroOluw6'><FaTwitter className='fa twitter' /></a>
          <a href='https://www.linkedin.com/in/oluwaseyi-adesunloro-921b49224/'> <FaLinkedin className='fa linkedin' /></a>
          <a href='https://www.facebook.com/profile.php?id=100060843644667'> <FaFacebook className='fa facebook' /></a>
        </div>
      </div>
    </Tada>
  )
}

export default Overview