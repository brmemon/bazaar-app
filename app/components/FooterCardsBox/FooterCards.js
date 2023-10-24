import { DataFooterCardsBox } from '@/app/Data/FooterCardsBoxData/DataFooterCardsBox'
import React from 'react'
import "./FooterCards.css"
const FooterCards = () => {
  return (
    <div className='main_footercard'>
      {DataFooterCardsBox.map((item, index) =>
        <div className='footer_card'>
          <div className='footer'>
            <div className='card'>
              <p className='footer_logo'>{item?.logo}</p>
            </div>
              <h1 className='footer_head'>{item?.head}</h1>
              <p className='footer_para'>{item?.para}</p>
          </div>
        </div>
      )}
    </div>
  )
}

export default FooterCards
