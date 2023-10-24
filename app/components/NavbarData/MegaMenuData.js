"use client"
import { MegaMenu } from '@/app/Data/MegaMenu';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const MegaMenuData = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowMenu(true);
  };

  const handleMouseLeave = () => {
    setShowMenu(false);
  };

  return (
    <div className='mega_menu'>
      <div
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div style={{ display: "flex", alignItems: "end", fontWeight: "400", gap: "2.4px" }}>
          Mega Menu
          <BiChevronDown />
        </div>

        {showMenu && (
          <ul className='Mega_menu_div'>
            {MegaMenu.map((item, index) => (
              <div>
                <h3>{item.name}</h3>
                {item.array.map((item2, item2Index) => (
                  <li>
                    {item2}
                  </li>
                ))}
              </div>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default MegaMenuData;
