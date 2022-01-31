import React from 'react'
import './_portfolioList.scss'

const PortfolioList = ({title, id, active, setSelected}) => {
 return (
  <div 
    className={active ? 'portfolioList active' : 'portfolioList'}
    onClick={()=> setSelected(id)}>
    {title}
  </div>
 )
}

export default PortfolioList