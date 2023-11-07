"use client"
import React, { useEffect, useState } from 'react'
import "./SearchNavbar.css"
import { AiOutlineSearch } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { BsPersonCircle } from "react-icons/bs"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { AllCategories } from '../../Data/AllCategories'
import Button from '../buttons/Button'
import Modal from '../ModalRedux/Modal'

const SearchNavbar = () => {
    const [data, setData] = useState(false)
    const [open, setOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(false)
    const [datamodal, setdatamodal] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 360) {
                if (!showNavbar)
                    setShowNavbar('load');
                setTimeout(() => {
                    if (showNavbar == 'load')
                        setShowNavbar(true);
                }, 100)
            } else {
                setShowNavbar(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });


    return (
        <>
            <div className={`main_div ${showNavbar == 'load' ? "hide_navbar show_navbar" : showNavbar ? 'show_navbar' : ''}`}>
                <div className='bazar_img'>
                    <img src='https://bazaar.ui-lib.com/assets/images/logo2.svg' />
                </div>
                <div className='Search_input'>
                    <div className='search'>
                        <AiOutlineSearch />
                    </div>

                    <input type="text" placeholder='Searching For.......' />
                    <p
                        className="All_categories" onClick={() => open ? setOpen(false) : setOpen(true)}>{(data && data !== 'true') ? data : 'All Categories'}
                        <span className='pt-1.5 pl-1'>
                            <BiChevronDown />
                        </span>
                        {open ?
                            <div className='allCategories'>
                                {AllCategories.map((item, index) =>
                                    <p key={index} onClick={() => {
                                        setData(item)
                                        setOpen(false)
                                    }}>
                                        {item}
                                    </p>
                                )}
                            </div>
                            : false}
                    </p>
                </div>
                <div className="two_icon">
                    <Button text={<BsPersonCircle />} className='search_btn_one' />
                    <Button text={<LiaShoppingBagSolid onClick={() =>
                        setdatamodal(true)
                    } />} className='search_btn_two' />
                    {/* {datamodal ? <Modal /> : false} */}
                    {datamodal && <Modal onClose={() => setdatamodal(false)} />}

                </div>
            </div>
        </>
    )
}

export default SearchNavbar
