import React, { useRef } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import './_contact.scss'

const Contact = () => {


  const formRef = useRef([])

  const handleSubmit = (e) => {
    //e.preventDefault()
  }

 return (
  <div className='contact'>
   <Container>
     <Row className='pb-5'>
       <div className="heading-2 text-center">Contact</div>
       <div className="sub-heading-2 text-center mb-4">Get in Touch Now</div>

        <Col className='shadow p-3 bg' md={6}>
         <div className="cta-info w-100">
           <h4 className="display-4 fw-bold">satisfastion 100% guaranteed</h4>
           <p className="lh-lg">
             Striving to be give the best value for time and momey
           </p>
           <h3 className="display-3--brief">Social Media && Contact Links</h3>

           <div className="cta-info-list">
            <div className="link">
              <img src={'/images/media/phone.png'} alt="" />
              <span className='no'> +234-80-8953-1612</span>
            </div>
            <div className="link">
              <img src={'/images/media/email.jpg'} alt="" />
              <span className='no'> rabbiincode@gmail.com</span>
            </div>
            <div className="link">
              <img src={'/images/media/whatsapp.jpg'} alt="" />
              <span className='no'> +234-80-6537-3835</span>
            </div>
            <div className="link">
              <img src={'/images/media/link.png'} alt="" />
              <span className='no'> linkedIn</span>
            </div>
            <div className="link">
              <img src={'/images/media/github.jpg'} alt="" />
              <span className='no'> github</span>
            </div>
           </div>
          </div>
        </Col>


        <Col className='bg-2 shadow p-3' md={6}>
         <div className="form w-100 pb-2">
            <h4 className="display-3--title mb-5 text-dark">Contact me</h4>

            <form ref={formRef} onSubmit={handleSubmit}>
              <div className="mb-3 col-lg-12">
                <input type="email" placeholder="Email address" id="inputemail" className="form-control shadow form-control-lg"/>
              </div>
              <div className="mb-3 col-lg-12">
                <textarea name="message" id="message" placeholder="Message"  className="form-control shadow form-control-lg" cols="30" rows="10"></textarea>
              </div>
 
              <div className="text-center">
                <button type="button" className="button but">
                   Send <span><FontAwesomeIcon icon={faPaperPlane} size="1x"/></span>
                </button>
              </div>     
            </form>

          </div>
        </Col>

      </Row>
   </Container>
  </div>
 )
}

export default Contact
