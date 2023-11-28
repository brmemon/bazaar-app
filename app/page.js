// "use client"
import React from 'react'
import ScreenOne from './components/screen/ScreenOne'
import Body from './components/pageBody/Body'
import Navbar from './components/Mian_Navbars/Navbar'
import LastFooter from './components/LastFooter/LastFooter'
import MediaQuerryCard from './components/MediaQuerryCard/MediaQuerryCard'

const page = () => {
  return (
    <div>
      <Navbar />
      <div style={{ maxWidth: "1284px", margin: "auto" }}>
        <ScreenOne />
      </div>
      <Body />
      <LastFooter />
      <MediaQuerryCard />
    </div>
  )
}

export default page


