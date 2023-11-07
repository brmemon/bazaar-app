import React from 'react'
import Image from 'next/image';
import Button from '../buttons/Button';
import shoes from '../images/shoes.png';
const ScreenOneCopy = () => {
    return (
        <>
            <div style={{ width: "100%", display:"flex" }}>
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
        </>
    )
}

export default ScreenOneCopy
