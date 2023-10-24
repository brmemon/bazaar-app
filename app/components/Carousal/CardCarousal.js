"use client"
import React, { useState } from 'react';
import "./Carousal.css";
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import BoxOne from './box/BoxOne';
import BoxTwo from './box/BoxTwo';
import BoxThree from './box/BoxThree';

const CardCarousal = ({ data, className, num, ind }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrev = () => {
        setCurrentIndex(
            currentIndex === 0 ?
                ind == 0 ? -num * 4 : false : currentIndex + num);
    };

    const handleNext = () => {
        setCurrentIndex(
            ind == 0 ? currentIndex === -num * 4 ? 0 : currentIndex - num :
                ind == 1 ? currentIndex === -num * 2 ? -num * 2 : currentIndex - num :
                    ind == 2 ? currentIndex == -num * 3 ? -num * 3 : currentIndex - num : false);
    };

    return (
        <>
            <div className='arrow_div'>
                <BsArrowLeft className='arrow1' onClick={handlePrev} />
                <div className='arrows_child'>
                    <div className={className} style={{ transform: `translateX(${currentIndex}%)` }}>
                        {data?.map((item, index) => (
                            ind == 0 ?
                                <BoxOne item={item} index={index} className={"cards"} /> :
                                ind == 1 ?
                                    <BoxTwo item={item} index={index} /> :
                                    ind == 2 ?
                                        <BoxThree item={item} index={index} /> :
                                        <></>
                        ))}
                    </div>
                </div>
                <BsArrowRight className='arrow2' onClick={handleNext} />
            </div>
        </>
    );
}

export default CardCarousal;
