"use client"
import React, { useEffect, useState } from 'react';
import "../ModalRedux/Modal.css"
import { BiShoppingBag } from 'react-icons/bi';
import shopping_modal from "../images/shopping-bag.svg"
import Image from 'next/image';
import { useSelector } from 'react-redux';
import ModalPlusButton from './ModalPlusButton';

const Modal = ({ onClose }) => {
  const [cardData, setCardData] = useState(useSelector((e) => e?.bazarcard));

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    console.log(cardData);
  }, [cardData]);

  const handleCloseItem = (index) => {
    const updatedCardData = cardData.filter((_, i) => i !== index);
    setCardData(updatedCardData);
  };

  return (
    <div className="modal">
      <div className="modal_content">
        <div className='modal_display'>
          <span className="gap-6 flex items-center">
            <BiShoppingBag />
            <span className='modal_items'>
              {cardData?.length} item(s)
            </span>
          </span>

          <span
            className="closs_button"
            onClick={onClose}>
            &times;
          </span>
        </div>

        <hr className=' border-gray-500 w-100' />

        {
          cardData?.length === 0 ?

            <div className='image_para'>
              <Image src={shopping_modal} alt='Nikal' />
              <h6 className='modal_para'>Your shopping bag is empty. Start shopping</h6>
            </div>
            :

            cardData?.map((item, index) =>
              <div className='modal_data' key={index}>

                <ModalPlusButton item={item} index={index}  />

                <span className='modal_data_img'>
                  <Image src={item?.item?.img} />
                </span>

                <div className='three_data'>
                  <div className='modal_data_name'>{item?.item?.name}</div>
                  <div className='modal_data_oldval'>{item?.item?.oldVal}</div>
                  <div className='modal_data_newval'>{item?.item?.newVal}</div>
                </div>

                <button className='close_item_button' onClick={() => handleCloseItem(index)}>
                  &times;
                </button>
              </div>
            )
        }
      </div>
    </div>
  );
};

export default Modal;