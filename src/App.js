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
import Landing from './component/landing/Landing'
import NotFound from './component/notfound/NotFound'
import Suggest from './component/landing/Suggest'

const App = () => {

  const [open, setOpen] = useState(false)

  const location = useLocation()

 return (
   <div className='app'>
     {/* <Navbar open={open} setOpen={setOpen}/>
     <Sidebar open={open} setOpen={setOpen}/> */}
     <div className='app-components'>

      {/* <AnimatePresence exitBeforeEnter> */}
       <Routes key={location.pathname} location={location}>
         <Route path='/' element={<Landing/>}/>
         <Route path='/suggest' element={<Suggest/>}/> 

         <Route path='/home' element={[
           <Navbar open={open} setOpen={setOpen}/>,
           <Sidebar open={open} setOpen={setOpen}/>,
           <Home/>, <About/>, <Services/>, <Portfolio/>, <Contact/>, <Footer/>]}/>
         
         <Route path='/about' element={[
           <Navbar open={open} setOpen={setOpen}/>,
           <Sidebar open={open} setOpen={setOpen}/>,
           <About/>, <Footer/>]}/>

         <Route path='/services' element={[
           <Navbar open={open} setOpen={setOpen}/>,
           <Sidebar open={open} setOpen={setOpen}/>,
           <Services/>, <Footer/>]}/>

         <Route path='/portfolio' element={[
           <Navbar open={open} setOpen={setOpen}/>,
           <Sidebar open={open} setOpen={setOpen}/>,
           <Portfolio/>, <Footer/>]}/>

         <Route path='/contact' element={[
           <Navbar open={open} setOpen={setOpen}/>,
           <Sidebar open={open} setOpen={setOpen}/>,
           <Contact/>, <Footer/>]}/>

         <Route path='*' element={<NotFound/>}/>
       </Routes>
      {/* </AnimatePresence> */}
      
     </div>
   </div>
 )
}

export default App
