import React from 'react'
import { Link } from 'react-router-dom'
import './_sidebar.scss'

const Sidebar = ({ open, setOpen }) => {

 const handleClick = () => {
  setOpen(!open)
 }

 return (
  <div className={'menu ' + (open && 'active')}>
   <div className='sidebar' onClick={handleClick}>
    <hr/>
    <Link to='/home'>
      <div className='name'>Home</div>
    </Link>
    <hr/>
    <Link to='/about'>
      <div className='name'>About</div>
    </Link>
    <hr/>
    <Link to='/services'>
      <div className='name'>Services</div>
    </Link>
    <hr/>
    <Link to='/portfolio'>
      <div className='name'>Portfolio</div>
    </Link>
    <hr/>
    <Link to='/contact'>
      <div className='name'>Contact</div>
    </Link>
    <hr/>
   </div>
  </div>
 )
}

export default Sidebar
