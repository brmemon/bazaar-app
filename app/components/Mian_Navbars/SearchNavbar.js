"use client"
import React, { useState } from 'react'
import "./SearchNavbar.css"
import { AiOutlineSearch } from "react-icons/ai"
import { BiChevronDown } from "react-icons/bi"
import { BsPersonCircle } from "react-icons/bs"
import { LiaShoppingBagSolid } from "react-icons/lia"
import { AllCategories } from '../../Data/AllCategories'
import Button from '../buttons/Button'

const SearchNavbar = () => {
    const [data, setData] = useState(false)
    const [open, setOpen] = useState(false)
    return (
        <>
            <div className='main_div'>
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
                                    <p onClick={() => {
                                        setData(item)
                                        setOpen(false)
                                    }}>{item}</p>
                                )}
                            </div>
                            : false}
                    </p>
                </div>
                <div className="two_icon">
                    <Button text={<BsPersonCircle />} className='search_btn_one' />
                    <Button text={<LiaShoppingBagSolid />} className='search_btn_two' />
                </div>
            </div>
        </>
    )
}

export default SearchNavbar
