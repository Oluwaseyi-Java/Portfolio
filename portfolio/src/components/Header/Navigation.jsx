import React from 'react'

const Navigation = () => {
  return (
      <>
          
          <div className='Navigation'>
              <input type="checkbox" className="openSidebarMenu" id="openSidebarMenu" />
              <label htmlFor="openSidebarMenu" className="sidebarIconToggle">
                  <div className="spinner diagonal part-1"></div>
                  <div className="spinner horizontal part-3"></div>
                  <div className="spinner diagonal part-2"></div>
              </label>


              <div id="sidebarMenu">
                  <ul className="sidebarMenuInner">
                      <li ><a href='#home'>Home</a></li>
                      <li ><a href='/#about'>About</a></li>
                      <li ><a href='/#services'>Services</a></li>
                      <li ><a href='/#projects'>Projects</a></li>
                      <li ><a href='/#hire-me'>Hire me</a></li>
                      
                  </ul>
              </div>
          </div>
      </>
  )
}

export default Navigation