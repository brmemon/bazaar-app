"use client"
import { FullScreenMenu } from '@/app/Data/FullScreenMenu';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const FullScreenMenuData = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeCategory, setActiveCategory] = useState(0);

    const handleMouseEnter = () => {
        setShowMenu(true);
    };

    const handleMouseLeave = () => {
        setShowMenu(false);
        setActiveCategory(0);
    };

    const handleCategoryMouseEnter = (index) => {
        setActiveCategory(index);
    };

    const handleCategoryMouseLeave = () => {
        setActiveCategory(false);
    };

    return (
        <div
            className='main_data_div_two'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <div className='menu_data'>
                <div style={{ display: "flex", alignItems: "end", fontWeight: "400", gap: "2.4px" }}>
                    Full Screen Menu
                    <BiChevronDown />
                </div>

                {showMenu && (
                    <div className='all_main'>
                        <div className='first_menu'>
                            {FullScreenMenu.map((category, index) => (
                                <div
                                    className='div_div'
                                    onMouseEnter={() => handleCategoryMouseEnter(index)}
                                >
                                    <h1 className='full_screen'>
                                        {category.name}
                                    </h1>
                                </div>
                            )
                            )
                            }
                        </div>
                        {activeCategory >= 0 && (
                            <ul className='ul_full_screen'>
                                {FullScreenMenu[activeCategory]?.array.map((subCategory, subIndex) => (
                                    <>
                                        <h6 className='second_full_screen'>
                                            {subCategory.name}
                                        </h6>
                                        <span className='screen_last_li'>
                                            {subCategory.array.map((item, itemIndex) => (
                                                <li className='full_screen_lastitem'>{item}</li>
                                            )
                                            )
                                            }
                                        </span>
                                    </>
                                ))}
                            </ul>
                        )}
                    </div>
                )
                }
            </div>
        </div>
    );
}

export default FullScreenMenuData;
