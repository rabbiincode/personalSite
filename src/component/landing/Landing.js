import { Link } from 'react-router-dom';
import { Typewriter } from 'react-simple-typewriter'
import AnimatedPage3 from '../page-animation/AnimatedPage3'
import { Col, Container, Row } from 'react-bootstrap';
import './_landing.scss'

const Landing = () => {
  return (
  <AnimatedPage3>
   <div className="landing">

    <div className="head">
        
      <div className='name'>&lt;ISAIAH SUCCESS/&gt;</div>

        <div className='social'>
          <img src={'/images/media/email.jpg'} alt="" />
          <span className='no'> rabbiincode@gmail.com</span>
        </div>

        <div className='social'>
          <Link to='/suggest'>
            <span className='no'>CONTACT</span>
          </Link>
        </div>

    </div>

    <hr/>

    <Container>     
      <Row className='row'>

        <Col md={2} lg={2} className='text-start'>
          <div className="typical">
            <p>ISAIAH SUCCESS</p>
            <span>
            <Typewriter
              words={['Developer', 'Freelancer']}
              loop='false'
              cursor
              cursorStyle='_'
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
            </span>
          </div>
        </Col>

        <Col md={8} lg={8} className='text-center'>
          <div className='img'>
            <img src={'/images/s7.jpg'} alt="image" className='img-fluid'/>
          </div>
        </Col>

        <Col md={2} lg={2} className='text-end'>
          <div className="typical">
            <p>SKILLS</p>
            <span>
              <Typewriter
                words={['HTML', 'CSS5', 'JavaScript', 'ReactJS', 'Redux', 'Firebase', 'BootStrap', 'Sass']}
                loop='false'
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            </span>
          </div>
        </Col>

      </Row>
    </Container>


          

    <div className="welcome">
       <p>
        <span>Welcome</span> to my personal portfolio website.
       </p>
       <p>
        As always, i'm striving to keep learning and improving my
        skill set. 
       </p>
       <p>
        Any suggestions or criticism of my work and site in general is highly
        welcomed as it'll help me improve in becoming a better developer and serve you better. 
        You can make your suggestions through the contact form above.
       </p>
       <p>
        Once again <span>Welcome</span>
       </p>

       <Link to='/home'>
        <button type="button">
          Proceed
        </button>
       </Link>
    </div>
   </div>
  </AnimatedPage3>
  )
};

export default Landing;
