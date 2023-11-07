import React from 'react'
import BlueNavbar from './BlueNavbar'
import SearchNavbar from './SearchNavbar'
import Data from '../NavbarData/Data'
import MegaMenuData from '../NavbarData/MegaMenuData'
import FullScreenMenuData from '../NavbarData/FullScreenMenuData'
import PagesData from '../NavbarData/PagesData'
import UserAcountData from '../NavbarData/UserAcountData'
import HomeData from '../NavbarData/HomeData'
import VendorAcountData from '../NavbarData/VendorAcountData'


const Navbar = () => {
  return (
    <div style={{height:"175px"}}>
      <>
      <BlueNavbar />
      <SearchNavbar />
      <div style={{ display: "flex", position: "relative" }}>
        <Data />
          <HomeData />
          <MegaMenuData />
          <FullScreenMenuData />  
          <PagesData />
          <UserAcountData />
          <VendorAcountData />
      </div>
      </>
    </div>
  )
}
export default Navbar