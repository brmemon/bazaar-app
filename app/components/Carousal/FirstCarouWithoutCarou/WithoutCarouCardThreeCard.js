import React from 'react'
import "../SimpleBox/SimpleBox.css"
import BoxOne from '../box/BoxOne'
import { DataCardThreeCard } from '@/app/Data/CardsData.js/DataCardThreeCard'
const WithoutCarouCardThreeCard = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {DataCardThreeCard.map((item, index) =>
        <BoxOne item={item} index={index} className={"cards Cars_width"} />
      )}
    </div>
  )
}

export default WithoutCarouCardThreeCard
