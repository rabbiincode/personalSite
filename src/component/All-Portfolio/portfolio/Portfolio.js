import React, { useEffect, useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import PortfolioList from '../../All-Portfolio/portfolioList/PortfolioList'
import { all, webapp, clone, mini } from '../../All-Portfolio/data/data'
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
  <div className='portfolio'>
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
 )
}

export default Portfolio
