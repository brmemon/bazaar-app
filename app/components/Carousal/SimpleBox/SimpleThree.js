import { DataNewArrivals } from '@/app/Data/CarousalCardData/DataNewArrivals'
import Image from 'next/image'
import React from 'react'

const SimpleThree = () => {
  return (
    <div>
      <div className='NewArrivals_div'>
        {DataNewArrivals.map((item, index) =>
          <div className="Arrivals_div">
            <Image src={item?.img} />
            <h4 className='Arrivals_name'>{item?.name}</h4>
            <p className='Arrivals_value'>{item?.value}</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default SimpleThree
