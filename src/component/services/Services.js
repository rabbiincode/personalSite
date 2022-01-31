import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './_services.scss'

const Services = () => {
 return (
  <div className='services'>
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
           <div className="pics"><img src={'/images/services/code1.png'} alt="" className='img-fluid'/></div>
           <div className="pics"><img src={'/images/services/html1.jpg'} alt="" className='img-fluid'/></div>
           <div className="pics"><img src={'/images/services/css1.png'} alt="" className='img-fluid'/></div>
           <div className="pics"><img src={'/images/services/JS1.png'} alt="" className='img-fluid'/></div>
           <div className="pics"><img src={'/images/services/react1.png'} alt="" className='img-fluid'/></div>
           <div className="pics"><img src={'/images/services/redux1.png'} alt="" className='img-fluid'/></div>
           <div className="pics"><img src={'/images/services/sass1.png'} alt="" className='img-fluid'/></div>
           <div className="pics"><img src={'/images/services/firebase1.png'} alt="" className='img-fluid'/></div>
           <div className="pics"><img src={'/images/services/bootstrap1.png'} alt="" className='img-fluid'/></div>
           <div className="pics"><img src={'/images/services/material1.png'} alt="" className='img-fluid'/></div>
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
         <div className="item-sm"></div>
       </div>

     </Col>
    </Row>
   </Container>
  </div>
 )
}

export default Services
