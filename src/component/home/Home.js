import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import './_home.scss'

const Home = () => {
 return (
  <div className='home'>
   <Container>
     <Row>
      <Col md={8} className='text-start'>
        <div className='home-me'>

          <div className='display-1'>
            <div className='display-1--intro'>
              looking for a software developer...
              <div className='display-1--meet'>___meet <span className='display-1--name'>isaiah success</span></div>
              <div className='display-1--description'>
                 a front -end web developer using front-end technologies to make
                 unique and responsive designs.
              </div>
            </div>
          </div>
                
      
         <div className="wrap">
           <div className="item-wrap">
             <div className="item">Html5</div>
             <div className="item">CSS5</div>
             <div className="item">JavaScript</div>
             <div className="item">ReactJS</div>
             <div className="item">Redux</div>
           </div>
         </div>
          
           <button type="button" className="button but my-3">
             Hire me
           </button>

           <button type="button" className="button my-3">
             Download CV
           </button>
         </div>
         
      </Col>
      <Col md={4} className='text-end'>
         <div className='home-img mb-5'>
          <img src={'/images/s3.png'} alt="image" className='img-fluid'/>
         </div>
      </Col>
     </Row>
    
   </Container>
  </div>
 )
}

export default Home
