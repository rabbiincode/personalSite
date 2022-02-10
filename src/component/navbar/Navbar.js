import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom'
import './_navbar.scss'


const Navbar = ( { open, setOpen }) => {

 const handleClick = () => {
  setOpen(!open)
 }

 return (
  <div className={'header ' + (open && 'active')}>
   <div className="nav">

     <div className="logo">
       <Link to='/' style={{ textDecoration: 'none' }}>
         <span className='px-1 logo'>ISAIAH SUCESSS</span>
       </Link>
       <img src={'/images/me.jpg'} alt="image" className='img-fluid me'/>
     </div>
     <div className="nav-list">
     <ul>
       <Link to='/home' style={{ textDecoration: 'none' }}>
         <li className='name'>Home</li>
       </Link>
   
       <Link to='/about' style={{ textDecoration: 'none' }}>
         <li className='name'>About</li>
       </Link>
  
       <Link to='/services' style={{ textDecoration: 'none' }}>
         <li className='name'>Services</li>
       </Link>
  
       <Link to='/portfolio' style={{ textDecoration: 'none' }}>
         <li className='name'>Portfolio</li>
       </Link>
   
       <Link to='/contact' style={{ textDecoration: 'none' }}>
         <li className='name'>Contact</li>
       </Link>

       <a href="tel:+2348065373835">
        <button type="button" className="rounded-pill btn-rounded button">
          +234-80-6537-3835 <span><FontAwesomeIcon icon={faPhone} size="1x" color='wheat'/></span>
        </button>
       </a>
     </ul>
     </div>

   </div>

     <div className="ham-btn">
       <a href="tel:+2348065373835">
         <button type="button" className="rounded-pill btn-rounded button">
           +234-80-6537-3835 <span><FontAwesomeIcon icon={faPhone} size="1x" color='wheat'/></span>
         </button>
        </a>
     </div>
     <div className="hamburger" onClick={handleClick}>
      <span className="line1"></span>
      <span className="line2"></span>
      <span className="line3"></span>
     </div>

  </div>
 )
}

export default Navbar
