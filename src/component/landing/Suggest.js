import { useRef, useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import emailjs from '@emailjs/browser'
import './_suggest.scss'
import { Link } from "react-router-dom"

const Suggest = () => {

 const [message, setMessage] = useState(false)

  const formRef = useRef([])

  const handleSubmit = (e) => {
    e.preventDefault()

    emailjs.sendForm(
       'gmail', 
       'template_a3f1pll', 
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
    <div className="suggest">
      <div className='suggest-1 shadow p-3'>
        <div className="form w-100 pb-2">
           <h4 className="display-3--title mb-5 text-dark">Leave your Suggestions here</h4>

            <form ref={formRef} onSubmit={handleSubmit}>
                <div className="mb-3 col-lg-12">
                  <input type="name" placeholder="Your Name" id="name" name='name' className="form-control shadow form-control-lg"/>
                </div>
                <div className="mb-3 col-lg-12">
                  <input type="email" placeholder="Email address" id="inputemail" name='email' className="form-control shadow form-control-lg"/>
                </div>
                <div className="mb-3 col-lg-12">
                  <input type="subject" placeholder="Subject" id="subject" name='subject' className="form-control shadow form-control-lg"/>
                </div>
                <div className="mb-3 col-lg-12">
                  <textarea name="message" id="message" placeholder="Message"  name='message' className="form-control shadow form-control-lg" cols="30" rows="10"></textarea>
                </div>
 
                <div className="text-center">
                  <button type="submit" className="button">
                    Send <span><FontAwesomeIcon icon={faPaperPlane} size="1x"/></span>
                  </button>

                  <Link to='/'>
                   <button type="submit" className="button">
                     <span><FontAwesomeIcon icon={faArrowLeft} size="1x"/></span> Back
                   </button>
                  </Link>

                </div>
                {message && <span className="thanks">Thanks for your suggestions and contribution 🤝</span>}
            </form>

        </div>
      </div>

    </div>
  )
}

export default Suggest