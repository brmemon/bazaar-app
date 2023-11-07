// "use client"
// import { VendorAcount } from '@/app/Data/VendorAcount';
// import React, { useState } from 'react';
// import { BiChevronDown } from 'react-icons/bi';

// const VendorAcountData = () => {
//   const [dataPage, setdataPage] = useState(null);
//   const [itemHovered, setItemHovered] = useState(null);

//   const handleMouseEnter = () => {
//     setdataPage(true);
//   }

//   const handleMouseLeave = () => {
//     setdataPage(false);
//     setItemHovered(null);
//   }

//   const handleItemMouseEnter = (itemName) => {
//     setItemHovered(itemName);
//   }

//   const handleItemMouseLeave = () => {
//     setItemHovered(null);
//   }

//   return (
//     <div className='main_data_div'
//       onMouseLeave={handleMouseLeave}
//     >
//       <span
//         onMouseEnter={handleMouseEnter}
//       >
//         <div style={{ display: "flex", alignItems: "end", fontWeight: "400", gap: "2.4px" }}>
//           Vendor Account
//           <BiChevronDown />
//         </div>
//       </span>
//       {dataPage && (
//         <div>
//           <ul>
//             {VendorAcount.map((item, index) => (
//               <li
//                 onMouseEnter={() => handleItemMouseEnter(item.name)}
//                 onMouseLeave={handleItemMouseLeave}
//               >
//                 {item?.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//       {itemHovered && (
//         <div>
//           <ul>
//             {VendorAcount.find(item => item.name === itemHovered)?.array?.map((item2, index) => (
//               <li>{item2}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   )
// }

// export default VendorAcountData;






































"use client"
import { UserAcount } from '@/app/Data/UserAcount';
import { VendorAcount } from '@/app/Data/VendorAcount';
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';

const VendorAcountData = () => {
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
        Vendor Account
        <BiChevronDown />
      </div>
      {dataPage && (
        <div style={{ position: "absolute", right: -35, zIndex:"2" }}>
          <div style={{ display: "flex" }}>
            <div className='page_div'>
              <ul className='ul_first_div'>
                {VendorAcount.map((item, index) => (
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
                  className={itemHovered === VendorAcount[1].name ? "second_ul_eight" : "socond" && itemHovered === VendorAcount[2].name ? "second_ul_nine" : "socond"}
                >
                  {VendorAcount.find(item => item.name === itemHovered)?.array?.map((item2, index) => (
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

export default VendorAcountData;