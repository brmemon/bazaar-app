import React from 'react'
import { AiOutlineCaretRight } from 'react-icons/ai'

const MainHeadings = ({ logo, heading }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', paddingTop:'50px' }}>

      <div style={{ display: 'flex', alignItems: 'center', fontSize: '25px', fontWeight:'700', marginBottom: '24px' }}>
        {logo}
        <h1>{heading}</h1>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', color: '#7D879C' }}>
        <p>View all</p>
        <AiOutlineCaretRight />
      </div>
    </div>

  )
}

export default MainHeadings
