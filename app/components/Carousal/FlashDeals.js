import React from 'react'
import MainHeadings from '../Headings/MainHeadings'
import {FcFlashOn} from "react-icons/fc"
import { DataFlashDeals } from '@/app/Data/CarousalCardData/DataFlashDeals'
import CardCarousal from './CardCarousal'

const FlashDeals = () => {
  return (
    <div>
      <MainHeadings logo={<FcFlashOn />} heading={"Flash Deals"}/>
      <CardCarousal data={DataFlashDeals} className={"Card_display"} num={12.5} ind={0}/>
    </div>
  )
}

export default FlashDeals
