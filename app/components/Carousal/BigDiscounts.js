import React from 'react'
import { CgGift } from 'react-icons/cg'
import MainHeadings from '../Headings/MainHeadings'
import CardCarousal from './CardCarousal'
import { DataBigDiscount } from '@/app/Data/DataBigDiscounts'

const BigDiscounts = () => {
  return (
    <div>
      <MainHeadings logo={<CgGift />} heading={"Big Discounts"}/>
      <CardCarousal data={DataBigDiscount} className={"bigdiscount_div"} num={11.11} ind={2}/>
    </div>
  )
}

export default BigDiscounts
