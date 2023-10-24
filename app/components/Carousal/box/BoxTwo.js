import Image from 'next/image'
import React from 'react'

const BoxTwo = ({ item, index }) => {
    return (
        <>
            <div className='TopCategories_display'>

                <div className="name_display">
                    <h4 className='Top_names'>{item?.name}</h4>
                    <h5 className='orders_names'>{"3k Orders This Week"}</h5>
                </div>

                <Image className="Top_img" src={item?.img} />
            </div>
        </>
    )
}

export default BoxTwo
