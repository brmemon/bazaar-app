import Image from 'next/image'
import React from 'react'
import fiftysix from "../images/fiftysix.png"
import fiftyseven from "../images/fiftyseven.png"
import "../DataImageComponents/ImagesData.css"

const ImagesData = () => {
  return (
    <div className='images'>
      <Image className='fiftysix_img' src={fiftysix} />
      <Image className='fiftyseven_img' src={fiftyseven} />
    </div>
  )
}

export default ImagesData
