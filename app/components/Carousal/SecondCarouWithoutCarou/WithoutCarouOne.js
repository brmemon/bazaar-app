import React from 'react'
import MainHeadings from '../../Headings/MainHeadings'
import WithoutCarouCardOneCard from '../FirstCarouWithoutCarou/WithoutCrouCardOneCard'
import WithoutCarouOneCard from './WithoutCarouOneCard'

const WithoutCarouOne = () => {
  return (
    <div>
      <MainHeadings  heading={"More For You"}/>
      <WithoutCarouOneCard />
    </div>
  )
}

export default WithoutCarouOne
