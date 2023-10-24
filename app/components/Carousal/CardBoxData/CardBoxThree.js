import { DataCardThree } from '@/app/Data/CardsData.js/DataCardThree'
import { FaGripLinesVertical } from 'react-icons/fa'
import Image from 'next/image'
import React from 'react'
import "./CardBox.css"
const CardBoxThree = () => {
    return (
        <>
            <div className='CardBox_div'>
                <div className='Brand_Shop'>
                    <h3 className='same_brand_shop'>Brands</h3>
                                    <h6 className='logo_line'>|</h6>
                    <h3 className='same_brand_shop'>Shops</h3>
                </div>
                {DataCardThree.map((item, index) =>
                    <div className='BoxCard_display'>
                        <Image className='BoxCard_img' src={item?.img} />
                        <h2 style={{ fontSize: "17px" }}>{item?.name}</h2>
                    </div>
                )}
                <h2 className='brand_display'>{"View All Brand"} </h2>
            </div>
        </>
    )
}

export default CardBoxThree
