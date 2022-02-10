import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AnimatedPage from '../page-animation/AnimatedPage'
import Typist from 'react-typist'
import './_home.scss'

const Home = () => {
 return (
  <AnimatedPage>
  <div className='home'>
   <Container>
     <Row>
      <Col md={8} className='text-start'>
        <div className='home-me'>

          <div className='display-1'>
            <div className='display-1--intro'>
             <Typist cursor={{show: false}}> 
             <Typist.Delay ms={1500} />
              looking for a software developer...
             </Typist>
              <div className='display-1--meet'>
               <Typist cursor={{show: false}}>
               <Typist.Delay ms={5000} />
                  ___meet <span className='display-1--name'>isaiah success</span>
               </Typist>
              </div>   
              <div className='display-1--description'>
               <Typist cursor={{show: false}}>
               <Typist.Delay ms={7500} />
                 a front-end web developer using front-end technologies to make
                 unique and responsive designs.
                </Typist>
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
          
          <Link to='/contact'>
           <button type="button" className="button but my-3">
             Hire me
           </button>
          </Link>
           

           <button type="button" className="button my-3">
             {/* add download link here */}
             Download CV
           </button>
        </div>
         
      </Col>
      <Col md={4} className='text-end'>
         <div className='home-img mb-5'>
          <img src={'/images/code.png'} alt="image" className='img-fluid'/>
         </div>
      </Col>
     </Row>
    
   </Container>
  </div>
  </AnimatedPage>
 )
}

export default Home
