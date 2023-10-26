"use client"
import { Home } from '@/app/Data/Home';
import React, { useState } from 'react';
import "./NavbarData.css"
import { BiChevronDown } from 'react-icons/bi';
const HomeData = () => {
  const [showList, setShowList] = useState(false);

  const handleMouseEnter = () => {
    setShowList(true);
  }

  const handleMouseLeave = () => {
    setShowList(false);
  }

  return (
    <div className='main_data_div'
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className='Home'>
        <div className='home_data'>
          <div style={{ display: "flex", alignItems: "end", fontWeight: "400", gap: "2.4px" }}>
            Home
            <BiChevronDown />
          </div>
          {showList && (
            <div className='main_ul_div'>
              <ul className='home_ul'>
                {Home.map((item, index) => (
                  <li className='home_li'>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default HomeData;

