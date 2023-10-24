import Image from 'next/image'
import React from 'react'

const BoxThree = ({ item, index }) => {
    return (
        <div className='bigdiscount_div'>
            <div className='discount_div'>
                <div className='big_div'>
                    <Image src={item?.img} />
                    <h4 className='big_name'>{item?.name}</h4>
                    <div className='val_display'>
                        <p className='big_new'>{item.newVal}</p>
                        <p className='big_old'>{item.oldVal}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BoxThree
