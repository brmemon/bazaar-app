import { DataTopRatings } from '@/app/Data/CarousalCardData/DataTopRatings'
import Image from 'next/image'
import React from 'react'
import Stars from '../stars/Stars'

const SimpleOne = () => {
    return (
        <div className="Rating_div">
            {DataTopRatings.map((item, index) =>
                <div className='Rating'>
                    <Image src={item?.img} />
                    <Stars className="RatingStar"/>
                    <h4 className='Rating_names'>{item?.name}</h4>
                    <p className='Rating_value'>{item?.value}</p>
                </div>
            )}
        </div>
    )
}

export default SimpleOne
