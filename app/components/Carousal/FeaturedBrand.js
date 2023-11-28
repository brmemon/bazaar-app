import React from 'react'
import MainHeadings from '../Headings/MainHeadings'
import { GiSeaStar } from 'react-icons/gi'
import SimpleTwo from './SimpleBox/SimpleTwo'
import { DataFeaturedBrand } from '@/app/Data/CarousalCardData/DataFeaturedBrands'

const FeaturedBrand = () => {
    return (
        <>
            <div className='featuredbrand'>
                <MainHeadings logo={<GiSeaStar style={{ color: "gold" }} />} heading={"Featured Brands"} />
                <SimpleTwo data={DataFeaturedBrand} />
            </div>
        </>
    )
}

export default FeaturedBrand
