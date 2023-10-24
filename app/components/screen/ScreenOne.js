import React from 'react'
import "./ScreenOne.css"
import shoes from '../images/shoes.png'
import Image from 'next/image'
import Button from '../buttons/Button'
const ScreenOne = () => {
    return (
        <>
            <div className='Main_div_screen'>
                <hr />
                <div className="for_padding">
                    <div className="display_flex">

                        <div className="left_side">
                            <h1 className="heading_one"><b>50% Off For Your First Shopping</b></h1>
                            <p className="para_50">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis
                                lobortis consequat eu, quam etiam at quis ut convalliss.</p>
                            <Button text={<span className='Shop_Now'>Shop Now</span>} />
                        </div>

                        <div className='right_side'>
                            <Image src={shoes} width={430} height={400} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ScreenOne
