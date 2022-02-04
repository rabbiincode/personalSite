import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import PortfolioList from '../../All-Portfolio/portfolioList/PortfolioList'
import { all, webapp, clone, mini } from '../../All-Portfolio/data/data'
import AnimatedPage3 from '../../page-animation/AnimatedPage3'
import './_portfolio.scss'

const Portfolio = () => {

  const [selected, setSelected] = useState('all')
  const [data, setData] = useState([])

  const items = [
    {
      id: 'all',
      title: 'All',
    },
    {
      id: 'web',
      title: 'Web apps',
    },
    {
      id: 'clone',
      title: 'Clone Projects',
    },
    {
      id: 'games',
      title: 'Mini Games',
    },
  ]

  useEffect(() => {
    
    switch (selected) {
      case 'all':
        setData(all);
        break;
      case 'web':
        setData(webapp);
        break;
      case 'clone':
        setData(clone);
        break;
      case 'games':
        setData(mini);
        break;
    
      default:
        setData(all)
    }

  }, [selected])
  
 return (
  <AnimatedPage3>
   <div className='portfolio'>
   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100"><path fill="#000" fill-opacity="1" d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,58.7C1120,64,1280,96,1360,112L1440,128L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
    <Container>
     <Row>
       <div className="heading text-center">Portfolio</div>
       <div className="sub-heading text-center">Projects developed by me</div>

       <div className="portfolio-headings">
          {items.map(item => (
            <PortfolioList 
              title={item.title}
              active={selected === item.id}
              setSelected={setSelected}
              id={item.id}
              desc={item.desc}
            />
          ))}
       </div>

      
       {data.map((d) => (
         <Col md={6} lg={4}>
           <div className="portfolio-box-shadow mb-5">
             <img src={d.img} alt="image" title="portfolio 1" className='img-fluid'/>
             <div className="portfolio-info">
               <div className="caption">
                 <h4>{d.title}</h4>
                 <p>{d.desc}</p>
               </div>
             </div>
           </div>
         </Col>
       ))}
      

      
     </Row>  
    </Container>
   </div>
  </AnimatedPage3>
 )
}

export default Portfolio
