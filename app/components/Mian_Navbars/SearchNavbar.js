"use client"
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { AiOutlineSearch } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { BsPersonCircle } from "react-icons/bs"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { AllCategories } from '../../Data/AllCategories'
import Button from '../buttons/Button'
import Modal from '../ModalRedux/Modal'
import "./SearchNavbar.css"
import bazarlogo2 from "../images/bazaar_logo.2.svg"
import Image from 'next/image'
import { HiMiniBars3 } from "react-icons/hi2";

const SearchNavbar = () => {
    const { bazarcard } = useSelector((e) => e)
    const [cardData, setCardData] = useState(bazarcard);
    const [data, setData] = useState(false)
    const [open, setOpen] = useState(false)
    const [showNavbar, setShowNavbar] = useState(false)
    const [datamodal, setdatamodal] = useState(false)
    useEffect(() => {
        setCardData(bazarcard)
    }, [bazarcard]);

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
                <div style={{ maxWidth: "1280px", margin: "auto", display: "flex", justifyContent: "space-between", width: "100%" }}>

                    <div className='bazar_img'>
                        <img src='https://bazaar.ui-lib.com/assets/images/logo2.svg' />
                    </div>

                    <div className='media_icon'>
                        <HiMiniBars3 />
                    </div>

                    <div className='bazar_img2'>
                        <Image src={bazarlogo2} />
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

                        <Button
                            text={<BsPersonCircle />}
                            className='search_btn_one'
                        />

                        <div className='search_button_main'>
                            <Button
                                text={<LiaShoppingBagSolid onClick={() => setdatamodal(true)} />}
                                className='search_btn_two'
                            />
                            {cardData.length > 0 && <span className='icon_counts'>{cardData.length}</span>}
                        </div>

                        {datamodal && <Modal onClose={() => setdatamodal(false)} />}

                    </div>
                </div>
            </div>
        </>
    )
}

export default SearchNavbar
