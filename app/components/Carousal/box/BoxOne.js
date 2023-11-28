import React from 'react'
import Stars from '../stars/Stars'
import Image from 'next/image'
import PlusButton from '../../PlusButton/PlusButton'

const BoxOne = ({ item, index, className }) => {
    return (
        <>
            <div className={className}>
                <div className='Card_style'>
                    <div className='off_div'>
                        <p className='off'>{item?.off}</p>
                    </div>
                    <Image src={item?.img} />
                    <div className="flex justify-between items-end">
                        <div style={{}}>
                            <p className='name'>{item?.name}</p>
                            <Stars />
                            <div className="values flex ">
                                <p className='new_val'>{item?.newVal}</p>
                                <p className="old_val">{item?.oldVal}</p>
                                <div>
                                </div>
                            </div>
                        </div>

                        <PlusButton
                            item={item}
                            index={index}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default BoxOne
