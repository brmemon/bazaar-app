"use client"
import { FullScreenMenu } from '@/app/Data/FullScreenMenu';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const FullScreenMenuData = () => {
    const [showMenu, setShowMenu] = useState(false);
    const [activeCategory, setActiveCategory] = useState(null);

    const handleMouseEnter = () => {
        setShowMenu(true);
    };

    const handleMouseLeave = () => {
        setShowMenu(false);
        setActiveCategory(null);
    };

    const handleCategoryMouseEnter = (index) => {
        setActiveCategory(index);
    };

    const handleCategoryMouseLeave = () => {
        setActiveCategory(null);
    };

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} style={{ position: "relative" }}>
            <div style={{ display: "flex", alignItems: "end", fontWeight: "400", gap: "2.4px" }}>
                Full Screen Menu
                <BiChevronDown />
            </div>

            {showMenu && (
                <div style={{ position: "absolute", zIndex: "1" }}>
                    {FullScreenMenu.map((category, index) => (
                        <div
                            onMouseEnter={() => handleCategoryMouseEnter(index)}
                            onMouseLeave={handleCategoryMouseLeave}
                        >
                            <h1>{category.name}</h1>
                            {activeCategory === index && (
                                <ul>
                                    {category.array.map((subCategory, subIndex) => (
                                        <li style={{ display: "flex " }}>
                                            <h3>{subCategory.name}</h3>
                                            {subCategory.array.map((item, itemIndex) => (
                                                <li>{item}</li>
                                            ))}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}

export default FullScreenMenuData;
