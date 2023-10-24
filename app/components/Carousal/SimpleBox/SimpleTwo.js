import { DataFeaturedBrand } from '@/app/Data/CarousalCardData/DataFeaturedBrands'
import Image from 'next/image'
import React from 'react'

const SimpleTwo = () => {
    return (
        <div className='FeaturedBrand_div'>
            {DataFeaturedBrand.map((item, index) =>
            <div className="Featured_div">
                <Image src={item?.img} className='Featured_img'/>
                <h4 className='Featured_name'>{item?.name}</h4>
                </div>
            )}
        </div>
    )
}

export default SimpleTwo
