"use client"
import React, { useState } from 'react';
import "./ScreenOne.css";
import ScreenOneCopy from './ScreenOneCopy';

const ScreenOne = () => {
    const [slideIndex, setSlideIndex] = useState(0);

    const handleNextSlide = () => {
        setSlideIndex(1);
    }

    const handlePrevSlide = () => {
        setSlideIndex(0);
    }

    return (
        <>
            <div className='Main_div_screen'>
                <hr />
                <div className="for_padding">
                    <div className="display_flex" style={{ transform: `translateX(-${slideIndex * 50}%)` }}>
                        <ScreenOneCopy />
                        <ScreenOneCopy />
                    </div>
                </div>
            </div>
            <div className="slider-buttons">
                <input className='radio' type='radio' name='myradio' onClick={handlePrevSlide} />
                <input className='radio' type='radio' name='myradio' onClick={handleNextSlide} />
            </div>
        </>
    )
}

export default ScreenOne;