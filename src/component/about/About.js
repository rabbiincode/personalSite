import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlayCircle, faTimes } from '@fortawesome/free-solid-svg-icons'
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
    <div className='about'>
      <Container>
        <Row>
          <div className="heading text-center">About</div>
          <div className="sub-heading text-center">Know more about me</div>
          <Col md={7}>
            <div className="about-me text-start">
              meet <span className='display-1--name'>isaiah success</span> a front end developer
              with speciality in every aspect of front end technologies.      
            
              <div className="about-desc">
                In this inforamation age with rapidly evolving technologies,
                i'm very open minded with a desire to learn new technologies
                as they evolve and improve my skill set on already existing ones
                giving my client/employer value and help them acheive their desired
                result in the shortest possible time.
              </div>
            </div>
          </Col>


          <Col md={5} sm={12}>
           {
            !show ?
            <div className="img text-end my-5">
              {/* <div className="img-clip"></div> */}
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
                   <span className='position-absolute top-0 end-0 icon' onClick={hide}><FontAwesomeIcon icon={faTimes} size="2x"/></span>
                    ___meet <span className='display-1--name'>isaiah success</span> a front end developer
                    with speciality in every aspect of front end technologies. 
                   <p>
                    In this inforamation age with rapidly evolving technologies,
                    i'm very open minded with a desire to learn new technologies
                    as they evolve and improve my skill set on already existing ones
                    giving my client/employer value and help them acheive their desired
                    result in the shortest possible time.
                   </p>
                 </div>
           }
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default About