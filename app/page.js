import React from 'react'
import ScreenOne from './components/screen/ScreenOne'
import Body from './components/pageBody/Body'
import Navbar from './components/Mian_Navbars/Navbar'
import LastFooter from './components/LastFooter/LastFooter'

const page = () => {
  return (
    <div>
      <Navbar />
      <ScreenOne />
      <Body />
      <LastFooter />
    </div>
  )
}

export default page
