import { DataCardOneCard } from '@/app/Data/CardsData.js/DataCardOneCard'
import React from 'react'
import "../SimpleBox/SimpleBox.css"
import BoxOne from '../box/BoxOne'
const WithoutCarouCardOneCard = () => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {DataCardOneCard.map((item, index) =>
        <BoxOne item={item} index={index} className={"cards Cars_width"} />
      )}
    </div>
  )
}

export default WithoutCarouCardOneCard
