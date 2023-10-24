import { DataCardFour } from '@/app/Data/CardsData.js/CardsDataTwo/DataCardFour'
import React from 'react'
import BoxOne from '../box/BoxOne'

const WithoutCarouOneCard = () => {
  return (
    <div>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
      {DataCardFour.map((item, index) =>
        <BoxOne item={item} index={index} className={"cards more_width"} />
      )}
    </div>
    </div>
  )
}

export default WithoutCarouOneCard
