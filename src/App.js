import React, {useState} from 'react'
import './_app.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import Navbar from './component/navbar/Navbar'
import Home from './component/home/Home'
import About from './component/about/About'
import Services from './component/services/Services'
import Portfolio from './component/All-Portfolio/portfolio/Portfolio'
import Contact from './component/contact/Contact'
import Footer from './component/footer/Footer'
import Sidebar from './component/sidebar/Sidebar'
import { Route, Routes, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'

const App = () => {

  const [open, setOpen] = useState(false)

  const location = useLocation()

 return (
   <div className='app'>
     <Navbar open={open} setOpen={setOpen}/>
     <Sidebar open={open} setOpen={setOpen}/>
     <div className='app-components'>
      <AnimatePresence exitBeforeEnter>
       <Routes key={location.pathname} location={location}>
         <Route path='/' element={[<Home/>, <About/>, <Services/>, <Portfolio/>, <Contact/>]}/>
         <Route path='/services' element={<Services/>}/>
         <Route path='/about' element={<About/>}/>
         <Route path='/portfolio' element={<Portfolio/>}/>
         <Route path='/contact' element={<Contact/>}/>
         {/* <Route path="*" element={<NotFound />} /> */}
       </Routes>
      </AnimatePresence>
       <Footer/>
     </div>
   </div>
 )
}

export default App
