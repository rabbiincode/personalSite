import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons'
import './_footer.scss'
import Scroll from '../../Scroll'

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
         <div className='heading'>EXPERTISE</div>
         <div className='content'>Html5</div>
         <div className='content'>CSS5</div>
         <div className='content'>JavaScript</div>
         <div className='content'>ReactJs</div>
         <div className='content'>Redux</div>   
       </div>
     </Col>

     <Col md={3} lg={3}>
       <div className="list">
         <div className='heading'>EXPERTISE</div>
         <div className='content'>Firebase</div>
         <div className='content'>BootStrap</div>
         <div className='content'>Material Ui</div>
         <div className='content'>..other Libraries</div>
         <div className='content'>...still learning</div>
       </div>
     </Col>


     <Col md={3} lg={3}>
       <div className="contact">
         <div className='heading'>CONTACT</div>
         <div className='content'>+234-80-8953-1612</div>
         <div className='content'>rabbiincode@gmail.com</div>
         <div className='content'>Whatsapp</div>
         <div className='content'>LInkedIn</div>
         <div className='content'>GitHub</div>
       </div>
     </Col>

     <div className="top">
       <Scroll/>
     </div>

     <div class="footer-copyright text-center py-5">
        copyright &copy; 2022 <a href="#">Success</a>
     </div>

    </Row>
   </Container>
  </div>
 )
}

export default Footer
