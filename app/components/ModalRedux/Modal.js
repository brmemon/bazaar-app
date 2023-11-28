"use client"
import React, { useEffect, useState } from 'react';
import "../ModalRedux/Modal.css"
import { BiShoppingBag } from 'react-icons/bi';
import shopping_modal from "../images/shopping-bag.svg"
import Image from 'next/image';
import { useDispatch, useSelector } from 'react-redux';
import ModalPlusButton from './ModalPlusButton';
import { delcard } from '../Redux/BazarSlice';

const Modal = ({ onClose }) => {
  const dispatch = useDispatch();
  const { bazarcard } = useSelector((e) => e)
  const [cardData, setCardData] = useState(bazarcard);

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  useEffect(() => {
    setCardData(bazarcard)
  }, [bazarcard]);

  const totalAmount = bazarcard.reduce((total, item) => {
    const itemAmount = item?.quantity * (item?.item?.oldVal.replace('$', ''));
    return total + itemAmount;
  }, 0);

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
              <Image src={shopping_modal} alt='??????' />
              <h6 className='modal_para'>Your shopping bag is empty. Start shopping</h6>
            </div>
            :
            <div style={{ paddingBottom: "36%" }}>
              {cardData?.map((item, index) =>
                <div className='modal_data' key={index}>

                  <ModalPlusButton item={item} index={index} />


                  <span className='modal_data_img'>
                    <Image src={item?.item?.img} />
                  </span>

                  <div className='three_data'>
                    <div className='modal_data_name'>{item?.item?.name}</div>

                    <div className='modal_data_oldval'> {item?.item?.oldVal} X {item?.quantity} </div>
                    <div className='modal_data_newval'>${item?.quantity * item?.item?.oldVal.replace('$', '')}.00</div>
                  </div>

                  <button className='close_item_button' onClick={() => dispatch(delcard(index))}>
                    &times;
                  </button>

                </div>

              )}
            </div>
        }
        <div className='modal_total_main'>
          {
            cardData?.length >= 1 ?
              <>
                <button className='modal_total_button_one'>Checkout Now ${totalAmount}.00</button>
                <button className='modal_total_button_two'>View Cart</button>
              </>
              : false
          }
        </div>
      </div>
    </div>
  );
};

export default Modal;