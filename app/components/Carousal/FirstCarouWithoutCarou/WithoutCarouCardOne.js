import React from 'react'
import MainHeadings from '../../Headings/MainHeadings'
import WithoutCarouCardOneCard from './WithoutCrouCardOneCard'
import "./WithoutCarouCards.css" 

const WithoutCarouCardOne = () => {
  return (
    <div className='mainmain_cars' >
      <MainHeadings heading={"Cars"}/>
      <WithoutCarouCardOneCard />
    </div>
  )
}

export default WithoutCarouCardOne
