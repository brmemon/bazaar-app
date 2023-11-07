"use client"
import { UserAcount } from '@/app/Data/UserAcount';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const USerAcountData = () => {
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
        User Account
        <BiChevronDown />
      </div>
      {dataPage && (
        <div style={{ position: "absolute", zIndex:"2" }}>
          <div style={{ display: "flex" }}>
            <div className='page_div'>
              <ul className='ul_first_div'>
                {UserAcount.map((item, index) => (
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
                  className={itemHovered === UserAcount[0].name ? "second_ul_four" : "socond" && itemHovered === UserAcount[1].name ? "second_ul_five" : "socond" && itemHovered === UserAcount[2].name ? "second_ul_six" : "socond" && itemHovered === UserAcount[3].name ? "second_ul_seven" : "socond"}
                >
                  {UserAcount.find(item => item.name === itemHovered)?.array?.map((item2, index) => (
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

export default USerAcountData;