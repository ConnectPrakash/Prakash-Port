import React from 'react'
import "./Sidebar.css"
import profile from '../asset/profile.jpg'
import { Link } from 'react-router-dom'

function Sidebar() {
  return (
    <div className='Sidebar'>
       {/* <div className='Sidebar-img'>
        <img src={profile}/>
       </div> */}
       <div className='Sidebar-content'>
       <Link to="/"> <i className="fa-solid fa-house"></i> <h3 className='block'>Home </h3></Link>
       <Link to="/about"><i className="fa-solid fa-address-card"></i><h3 className='block'> About</h3></Link>
       <Link to="/education">  <i className="fa-solid fa-school"></i><h3 className='block'>Education </h3></Link>
       <Link to="/skills"><i className="fa-solid fa-laptop-code"></i><h3 className='block'>Tech Stack</h3></Link> 
        <Link to="/project"><i className="fa-solid fa-diagram-project"></i><h3 className='block'>Project</h3></Link>
        <Link to="/experience"><i className="fa-solid fa-briefcase"></i><h3 className='block'>Work Experience</h3></Link>
        <Link to="/contactme"><i className="fa-solid fa-address-book"></i><h3 className='block'>Contact</h3></Link>
       </div>
    </div>
  )
}

export default Sidebar
