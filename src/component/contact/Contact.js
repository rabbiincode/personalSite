import React, { useRef, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import AnimatedPage from '../page-animation/AnimatedPage'
import emailjs from '@emailjs/browser'
import './_contact.scss'
import { Link } from 'react-router-dom'

const Contact = () => {

  const [message, setMessage] = useState(false)

  const formRef = useRef([])

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
       'email', 
       'template', 
        e.target, 
       'user_X8hfPy8HUVCNXTUsT2nYV'
       )
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      setMessage(true)
      e.target.reset()
  }

 return (
   <AnimatedPage>
    <div className='contact'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#660810" fillOpacity="1" d="M0,32L80,32C160,32,320,32,480,48C640,64,800,96,960,90.7C1120,85,1280,43,1360,21.3L1440,0L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>

     <Container>
       <Row className='pb-5'>
         <div className="heading-2 text-center">Contact</div>
         <div className="sub-heading-2 text-center mb-4">Get in Touch Now</div>

          <Col className='shadow p-3 bg' md={6}>
           <div className="cta-info w-100">
             <h4 className="display-6 fw-bold">satisfastion 100% guaranteed</h4>
             <p className="lh-lg color">
               ...striving to give the best value for time and money
             </p>
             <h4 className='underline'>Social Media && Contact Links</h4>

             <div className="cta-info-list">

             <a href="tel:+2348065373835">
              <div className="social">
                <img src={'/images/media/phone.png'} alt="" />
                <span className='no'> +234-80-6537-3835</span>
              </div>
             </a>

              <Link to='/contact'>
               <div className="social">
                 <img src={'/images/media/email.jpg'} alt="" />
                 <span className='no'> rabbiincode@gmail.com</span>
               </div>
              </Link>
              
              <a target="_blank" href="https://api.whatsapp.com/send?phone=2348065373835">
               <div className="social">
                 <img src={'/images/media/whatsapp.jpg'} alt="" />
                 <span className='no'> +234-80-6537-3835</span>
               </div>
              </a>

              <a target="_blank" href='https://linkedin.com'>
               <div className="social">
                 <img src={'/images/media/link.png'} alt="" />
                 <span className='no'> linkedIn</span>
               </div>
              </a>
              
              <a target="_blank" href='https://github.com/rabbiincode'>
               <div className="social">
                 <img src={'/images/media/github.jpg'} alt="" />
                 <span className='no'> github</span>
               </div>
              </a>
              
             </div>
            </div>
          </Col>


          <Col className='bg-2 shadow p-3' md={6}>
           <div className="form w-100 pb-2">
              <h4 className="display-3--title mb-5 text-dark">Contact me</h4>

              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-3 col-lg-12">
                  <input type="name" placeholder="Your Name" id="name" name='name' className="form-control shadow form-control-lg"/>
                </div>
                <div className="mb-3 col-lg-12">
                  <input type="email" placeholder="Email address" id="inputemail" name='user-email' className="form-control shadow form-control-lg"/>
                </div>
                <div className="mb-3 col-lg-12">
                  <textarea name="message" id="message" placeholder="Message"  name='user-email' className="form-control shadow form-control-lg" cols="30" rows="10"></textarea>
                </div>
 
                <div className="text-center">
                  <button type="submit" className="button but">
                     Send <span><FontAwesomeIcon icon={faPaperPlane} size="1x"/></span>
                  </button>
                </div>
                {message && <span>Message sent successfully : )</span>}
              </form>

            </div>
          </Col>

        </Row>
     </Container>
    </div>
   </AnimatedPage>
  )
}

export default Contact
