import React from 'react'
import Stars from '../stars/Stars'
import Image from 'next/image'

const BoxOne = ({ item, index, className }) => {
    return (
        <>
            <div className={className}>
                <div className='Card_style'>
                    <div className='off_div'>
                        <p className='off'>{item?.off}</p>
                    </div>
                    <Image src={item?.img} />
                    <p className='name'>{item?.name}</p>
                    <Stars />
                    <div className="values">
                        <p className='new_val'>{item?.newVal}</p>
                        <p className="old_val">{item?.oldVal}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxOne
