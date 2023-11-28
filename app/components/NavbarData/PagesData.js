"use client"
import { Pages } from '@/app/Data/Pages';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const PagesData = () => {
  const [dataPage, setdataPage] = useState(null);
  const [itemHovered, setItemHovered] = useState(null);

  const handleMouseEnter = () => {
    setdataPage(true);
  }

  const handleMouseLeave = () => {
    setdataPage(false);
    setItemHovered(null);
  }

  const handleItemMouseEnter = (itemName) => {
    setItemHovered(itemName);
  }

  return (
    <div
      className='main_data_div'
      onMouseLeave={handleMouseLeave}
      onMouseEnter={handleMouseEnter}
    >
      <div style={{ display: "flex", alignItems: "end", fontWeight: "400", gap: "2.4px" }}>
        Pages
        <BiChevronDown />
      </div>
      {dataPage && (
        <div style={{ position: "absolute", zIndex:"2" }}>
          <div style={{ display: "flex" }}>
            <div className='page_div'>
              <ul className='ul_first_div'>
                {Pages.map((item, index) => (
                  <li
                    className='first_li_page'
                    onMouseEnter={() => handleItemMouseEnter(item.name)}
                  >
                    {item?.name}
                  </li>
                ))}
              </ul>
            </div>
            {itemHovered && (
              <>
                <ul
                  className={itemHovered === Pages[0].name ? "second_ul_one" : "socond" && itemHovered === Pages[1].name ? "second_ul_two" : "socond" && itemHovered === Pages[2].name ? "second_ul_three" : "socond"}
                >
                  {Pages.find(item => item.name === itemHovered)?.array.map((item2, index) => (
                    <li className='second_li'>{item2}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default PagesData;