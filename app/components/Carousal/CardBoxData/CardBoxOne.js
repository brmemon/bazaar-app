import { DataCardOne } from '@/app/Data/CardsData.js/DataCardOne'
import Image from 'next/image'
import React from 'react'
import "./CardBox.css"
const CardBoxOne = () => {
    return (
        <div className='CardBox_div'>
            {DataCardOne.map((item, index) =>
                <div className='BoxCard_display'>
                    <Image className='BoxCard_img' src={item?.img} />
                    <h2 style={{ fontSize: "17px" }}>{item?.name}</h2>
                </div>
            )}
            <h2 className='brand_display'>{"View All Brand"} </h2>
        </div>
    )
}

export default CardBoxOne
