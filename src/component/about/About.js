import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
import AnimatedPage2 from '../page-animation/AnimatedPage2'
import ShowMoreText from 'react-show-more-text'
import './_about.scss'

const About = () => {

  const [show, setShow] = useState(false)
  const see = () => {
    setShow(true)
  }
  const hide = () => {
    setShow(false)
  }

  return(
   <AnimatedPage2>
    <div className='about'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#000" fillOpacity="1" d="M0,32L80,32C160,32,320,32,480,48C640,64,800,96,960,90.7C1120,85,1280,43,1360,21.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

      <Container>
        <Row>
          <div className="heading text-center">About</div>
          <div className="sub-heading text-center">Know more about me</div>
          <Col md={7}>
            <div className="about-me text-start">
              meet <span className='display-1--name-2'>isaiah success</span> a front end developer
              with speciality in every aspect of front end technologies.      
            
              <div className="about-desc">
                In this inforamation age with rapidly evolving technologies,
                i'm very open minded with a desire to learn new technologies
                as they evolve and improve my skill set on already existing ones
                giving my client/employer value and help them acheive their desired
                result in the shortest possible time.
              </div>

              <div className="about-desc-2">
               <ShowMoreText
                lines={1}
                more='READ MORE'
                less='SHOW LESS'
                anchorClass='showMoreText'
                expanded={false}
               >
                <span className="para">As the sayings goes...</span>
                <span className='para quote'>"The best way to hide information is to put it in writing"</span>
                <span className='para'>
                  Putting the few information read about humans who has gone 
                  against the traditional system with high degree of success 
                  pushed me into finding a more suitable path to take.
                </span>
                <span className='para'>
                  Finding a carrer path in Tech was worth the chase after all.
                </span>
                <span className="para">
                  Leaving the traditional education system, where failure
                  was unacceptable to purse a career in tech where failure is
                  seen differently teaches a lot.....
                </span>
                <span className='para'>
                  To be a better programmer, i must practice and work with
                  others.
                  Failures comes, almost inevitably but that only makes you a better developer
                </span>
                <div className='diff'>
                  "Curiosity didn't kill the cat, it made it wiser"
                </div>
                </ShowMoreText>
              </div>
              
            </div>
          </Col>


          <Col md={5} sm={12}>
           {
            !show ?
            <div className="img my-5">
              <img 
                src={'/images/me.jpg'} 
                alt="image" 
                className='img-fluid me'
                style={{ clipPath: ' polygon(50% 0%, 83% 12%, 100% 43%, 94% 78%, 68% 100%, 32% 100%, 6% 78%, 0% 43%, 17% 12%)'}}
                />
              <div className='icon position-absolute top-50 start-50 translate-middle' onClick={see}>
                <span><FontAwesomeIcon icon={faPlayCircle} size="4x"/></span>
                <span className="border-animation border-animation--border-1"></span>
                <span className="border-animation border-animation--border-2"></span>
              </div>
            </div>
 
             :
                 <div className="hide position-relative my-5">
                   <span className='position-absolute top-0 end-0 icon' onClick={hide}>
                      <FontAwesomeIcon icon={faTimes} size="1x" style={{color: 'wheat'}}/>
                   </span>
                    ___meet <span className='display-1--name-2'>isaiah success</span> a front end developer
                    with speciality in every aspect of front end technologies. 
                   <p>
                    In this inforamation age with rapidly evolving technologies,
                    i'm very open minded with a desire to learn new technologies
                    as they evolve and improve my skill set on already existing ones
                    giving my client/employer value and help them acheive their desired
                    result in the shortest possible time.
                   </p>

             <div className="about-desc-2">
               <ShowMoreText
                lines={1}
                more='READ MORE'
                less='SHOW LESS'
                anchorClass='showMoreText'
                expanded={false}
               >
                <span className="para">As the sayings goes...</span>
                <span className='para quote'>"The best way to hide information is to put it in writing"</span>
                <span className='para'>
                  Putting the few information read about humans who has gone 
                  against the traditional system with high degree of success 
                  pushed me into finding a more suitable path to take.
                </span>
                <span className='para'>
                  Finding a carrer path in Tech was worth the chase after all.
                </span>
                <span className="para">
                  Leaving the traditional education system, where failure
                  was unacceptable to purse a career in tech where failure is
                  seen differently teaches a lot.....
                </span>
                <span className='para'>
                  To be a better programmer, i must practice and work with
                  others.
                  Failures comes, almost inevitably but that only makes you a better developer
                </span>
                <div className='diff'>
                  "Curiosity didn't kill the cat, it made it wiser"
                </div>
               </ShowMoreText>
              </div>
                   
            </div>
           }
          </Col>
        </Row>
      </Container>

    </div>
   </AnimatedPage2>
  )
}

export default About