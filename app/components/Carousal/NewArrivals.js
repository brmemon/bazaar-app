import React from 'react'
import MainHeadings from '../Headings/MainHeadings'
import { MdFiberNew } from 'react-icons/md'
import SimpleThree from './SimpleBox/SimpleThree'
import { DataNewArrivals } from '@/app/Data/CarousalCardData/DataNewArrivals'

const NewArrivals = () => {
  return (
    <div>
      <MainHeadings logo={<MdFiberNew style={{color:"green"}}/>} heading={"New Arrivals"}/>
      <SimpleThree data={DataNewArrivals} />
    </div>
  )
}

export default NewArrivals
