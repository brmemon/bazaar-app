import { DataCardOneCard } from '@/app/Data/CardsData.js/DataCardOneCard'
import React from 'react'
import "../SimpleBox/SimpleBox.css"
import BoxOne from '../box/BoxOne'
import { DataCardTwoCard } from '@/app/Data/CardsData.js/DataCardTwoCard'
const WithoutCarouCardTwoCard = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {DataCardTwoCard.map((item, index) =>
        <BoxOne item={item} index={index} className={"cards Cars_width"} />
      )}
    </div>
  )
}

export default WithoutCarouCardTwoCard
