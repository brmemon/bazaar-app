"use client"
import { UserAcount } from '@/app/Data/UserAcount';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const UserAcountData = () => {
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

  const handleItemMouseLeave = () => {
    setItemHovered(null);
  }

  return (
    <div className='main_data_div'
      onMouseLeave={handleMouseLeave}
    >
      <span
        onMouseEnter={handleMouseEnter}
      >
        <div style={{ display: "flex", alignItems: "end", fontWeight: "400", gap: "2.4px" }}>
          User Acount
          <BiChevronDown />
        </div>
      </span>
      {dataPage && (
        <div>
          <ul>
            {UserAcount.map((item, index) => (
              <li
                onMouseEnter={() => handleItemMouseEnter(item.name)}
                onMouseLeave={handleItemMouseLeave}
              >
                {item?.name}
              </li>
            ))}
          </ul>
        </div>
      )}
      {itemHovered && (
        <div>
          <ul>
            {UserAcount.find(item => item.name === itemHovered)?.array?.map((item2, index) => (
              <li>{item2}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default UserAcountData;