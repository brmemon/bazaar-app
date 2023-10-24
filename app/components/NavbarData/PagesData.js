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

  const handleItemMouseLeave = () => {
    setItemHovered(null);
  }

  return (
    <div style={{ position: "relative" }} onMouseLeave={handleMouseLeave}>
      <span onMouseEnter={handleMouseEnter}>
      <div style={{ display: "flex", alignItems: "end",fontWeight:"400", gap: "2.4px" }}>
          Pages
          <BiChevronDown />
        </div>
      </span>
      {dataPage && (
        <div>
          <ul>
            {Pages.map((item, index) => (
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
            {Pages.find(item => item.name === itemHovered)?.array.map((item2, index) => (
              <li>{item2}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default PagesData;