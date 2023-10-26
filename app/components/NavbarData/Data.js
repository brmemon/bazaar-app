"use client"
import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { Categories } from '../../Data/Categories';
import { MdWindow } from 'react-icons/md';
import "./data.css";
import { BsFillSkipForwardFill } from 'react-icons/bs';
import Image from 'next/image';

const Data = () => {
  const [data, setData] = useState(false);
  const [open, setOpen] = useState(false);

  const handleMouseLeave = () => {
    setData(false);
  };

  return (
    <div className="main_data_div_data" onMouseLeave={handleMouseLeave}>
      <div className='all'>
        <h2
          className="Categories"

          onClick={() => open ? setOpen(false) && setData(false)
            : setOpen(true) && setData(false)}
        >
          <MdWindow />
          <span className='pr-2 pl-3 text-slate-400 font-semibold'>{'Categories'}</span>
          <BiChevronDown />
        </h2>
        <div className='display_flex_one'>
          {open ?
            <div className='categories_Child'>
              {Categories.map((item, index) =>
                <p
                  style={{ display: "flex", alignItems: "center" }}
                  onMouseOver={() => {
                    setData(index);
                  }}
                >
                  <BsFillSkipForwardFill className='Categories_icon' />
                  {item?.name}
                </p>
              )}
            </div>
            : false}
          <div className='main_display'>
            {data !== false || data === 0 ?
              <div className= {data == 1?"categories_child1" :'category_child' }>
                <div className={Categories[data]?.array && Categories[data]?.array[0]?.head ? "main_item_div" : "item_div"}>
                  {Categories[data]?.array?.map((item, index) =>
                    <div className={item?.head ? 'item_div' : 'item_name_div'}>
                      {item?.head ?
                        <h6 style={{ fontSize: "14px", fontWeight: "600", marginLeft: "15px" }} >
                          {item?.head}
                        </h6 > :
                        <div className='Names_div'>
                          <p className='names'>
                            {item?.name}
                          </p>
                        </div>
                      }
                      {
                        item?.array?.hasOwnProperty(0) && !item?.array[0]?.head ?
                          <div>
                            {item?.array?.map((item2, index2) =>
                              <p style={{ fontWeight: "400" }}>
                                {item2}
                              </p>
                            )}
                          </div>
                          : false
                      }
                    </div>
                  )}
                </div>
                <div className= {data == 1? 'category_img' : 'category_img1' }>
                  <Image  className= {data == 1? 'category_img_class' : 'category_img_class1' } src={Categories[data].img} />
                </div>
              </div>
              : false}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Data;
