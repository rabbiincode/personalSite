import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import AnimatedPage4 from '../page-animation/AnimatedPage4'
import './_services.scss'

const Services = () => {
 return (
  <AnimatedPage4>
  <div className='services'>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 120"><path fill="#660810" fillOpacity="1" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,58.7C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
   
   <Container>
    <Row>
    <div className="heading-2 text-center">Services</div>
    <div className="sub-heading-2 text-center">Theses are the services i specialize in</div>
     <Col md={4} lg={4}>
       <div className="service-list my-5">
         <div className="item">Html5</div>
         <div className="item">CSS5</div>
         <div className="item">JavaScript</div>
         <div className="item">ReactJs</div>
         <div className="item">Redux</div>
       </div>
     </Col>

     <Col md={4} lg={4}>
       <div className="service-images">
         <div className="service-pics">
           <div><img src={'/images/services/code1.png'} alt="" className='img-fluid'/></div>
           <div><img src={'/images/services/html1.jpg'} alt="" className='img-fluid'/></div>
           <div><img src={'/images/services/css1.png'} alt="" className='img-fluid'/></div>
           <div><img src={'/images/services/JS1.png'} alt="" className='img-fluid'/></div>
           <div><img src={'/images/services/react1.png'} alt="" className='img-fluid'/></div>
           <div><img src={'/images/services/redux1.png'} alt="" className='img-fluid'/></div>
           <div><img src={'/images/services/sass1.png'} alt="" className='img-fluid'/></div>
           <div><img src={'/images/services/firebase1.png'} alt="" className='img-fluid'/></div>
           <div><img src={'/images/services/bootstrap1.png'} alt="" className='img-fluid'/></div>
           <div><img src={'/images/services/material1.png'} alt="" className='img-fluid'/></div>
        </div>
       </div>
     </Col>


     <Col md={4} lg={4}>
       <div className="service-list my-5">
         <div className="item">Sass</div>
         <div className="item">Firebase</div>
         <div className="item">Bootstrap</div>
         <div className="item"></div>Material UI
         <div className="item-lg">..... and other frontEnd frameworks and libraries</div>
       </div>

     </Col>
    </Row>
   </Container>
  </div>
  </AnimatedPage4>
 )
}

export default Services
