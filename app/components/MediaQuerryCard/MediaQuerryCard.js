"use client"
import React from 'react'
import "./MediaQuerryCard.css"
import { TiHomeOutline } from "react-icons/ti";
import { BiCategory } from "react-icons/bi";
import { MdOutlineShoppingBag } from "react-icons/md";
import { MdOutlineAccountBox } from "react-icons/md";

const MediaQuerryCard = () => {
    return (
        <div className='main_mediaQuerry_div'>
            <div className='mediaQuerry_card'>

                <div className='media_card'>
                    <span className='icon_media'>
                        <TiHomeOutline />
                    </span>
                    Home
                </div>

                <div className='media_card'>
                    <span className='icon_media'>
                        <BiCategory />
                    </span>
                    Category
                </div>

                <div className='media_card'>
                    <span className='icon_media'>
                        <MdOutlineShoppingBag />
                    </span>
                    Cart
                </div>

                <div className='media_card'>
                    <span className='icon_media'>
                        <MdOutlineAccountBox />
                    </span>
                    Account
                </div>

            </div>
        </div>
    )
}

export default MediaQuerryCard
