import React from 'react'
import "../SmallCard/SmallCard.css"
import { DataSmallCard } from '@/app/Data/SmallCardData/DataSmallCard'
import Image from 'next/image'
const SmallCard = () => {
    return (
        <>
            <div className='main_smallcard'>
                {DataSmallCard.map((item, index) =>
                    <div className='small_card'>
                        <div className='small'>
                        <Image src={item?.img} />
                        <h4>{item?.name}</h4>
                        </div>
                    </div>
                )}
            </div>
        </>
    )
}

export default SmallCard
