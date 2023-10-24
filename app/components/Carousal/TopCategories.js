import React from 'react'
import MainHeadings from '../Headings/MainHeadings'
import { BiSolidCategory } from 'react-icons/bi'
import CardCarousal from './CardCarousal'
import { DataTopCategories } from '@/app/Data/CarousalCardData/DataTopCategories'

const TopCategories = () => {
  return (
    <div>
      <MainHeadings logo={<BiSolidCategory/>} heading={"Top Categories"}/>
      <CardCarousal  data={DataTopCategories} className={'TopCategories_div'} num={20} ind={1}/> 
    </div>
  )
}

export default TopCategories
