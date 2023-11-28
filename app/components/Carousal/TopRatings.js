import React from 'react'
import MainHeadings from '../Headings/MainHeadings'
import { FcRating } from 'react-icons/fc'
import { DataTopRatings } from '@/app/Data/CarousalCardData/DataTopRatings'
import SimpleOne from './SimpleBox/SimpleOne'
import "./SimpleBox/SimpleBox.css"
import "./AllCards.css"

const TopRatings = () => {
  return (
    <>
    <div className='toprating'>
      <MainHeadings logo={<FcRating/>} heading={"Top Ratings"}/>
      <SimpleOne data={DataTopRatings} />
      </div>
    </>
  )
}

export default TopRatings
