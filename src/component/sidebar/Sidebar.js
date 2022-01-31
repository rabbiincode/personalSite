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
    <Link to='/' style={{ textDecoration: 'none' }}>
      <div className='name'>Home</div>
    </Link>
    <hr/>
    <Link to='/about' style={{ textDecoration: 'none' }}>
      <div className='name'>About</div>
    </Link>
    <hr/>
    <Link to='/services' style={{ textDecoration: 'none' }}>
      <div className='name'>Services</div>
    </Link>
    <hr/>
    <Link to='/portfolio' style={{ textDecoration: 'none' }}>
      <div className='name'>Portfolio</div>
    </Link>
    <hr/>
    <Link to='/contact' style={{ textDecoration: 'none' }}>
      <div className='name'>Contact</div>
    </Link>
    <hr/>
   </div>
  </div>
 )
}

export default Sidebar
