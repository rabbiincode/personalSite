import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './_footer.scss'
import Scroll from '../../Scroll'
import { Link } from 'react-router-dom'

const Footer = () => {
 return (
  <div className='footer'>
   
   <Container>
    <Row>
      <hr/>
     <Col md={3} lg={3}>
       <div className="name"><span className='display-1--footer'>isaiah success</span>...developer and freelancer</div>
       <div className="desc">___Turning ideas into Reality</div>
     </Col>

     <Col md={3} lg={3}>
       <div className="list">
         <li className='heading'>EXPERTISE</li>
         <li className='content'>Html5</li>
         <li className='content'>CSS5</li>
         <li className='content'>JavaScript</li>
         <li className='content'>ReactJs</li>
         <li className='content'>Redux</li>   
       </div>
     </Col>

     <Col md={3} lg={3}>
       <div className="list">
         <li className='heading'>EXPERTISE</li>
         <li className='content'>Firebase</li>
         <li className='content'>BootStrap</li>
         <li className='content'>Material Ui</li>
         <li className='content'>..other Libraries</li>
         <li className='content'>...still learning</li>
       </div>
     </Col>


     <Col md={3} lg={3}>
       <div className="contact">
         <div className='heading'>CONTACT</div>

         <a href="tel:+2348065373835">
          <li className='media'>+234-80-6537-3835</li>
         </a>
         
         <Link to='/contact'>
          <li className='media'>rabbiincode@gmail.com</li>
         </Link>

         <a target="_blank" href="https://api.whatsapp.com/send?phone=2348065373835">
          <li className='media'>Whatsapp</li>
         </a>

         <a target="_blank" href="https://linkedin">
          <li className='media'>LInkedIn</li>
         </a>

         <a target="_blank" href='https://github.com/rabbiincode'>
          <li className='media'>GitHub</li>
         </a>
          
       </div>
     </Col>

     <div className="top">
       <Scroll/>
     </div>

     <div className="footer-copyright text-center py-5">
        copyright &copy; 2022 <Link to='/'>Success</Link>
     </div>

    </Row>
   </Container>
  </div>
 )
}

export default Footer
