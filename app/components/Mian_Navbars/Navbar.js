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
    <div>
      <>
        <BlueNavbar />
        <SearchNavbar />
        <div style={{ maxWidth: "1360px", margin: "auto" }}>
          <div style={{ display: "flex", position: "relative", width: "100%" }}>
            <Data />
            <HomeData />
            <MegaMenuData />
            <FullScreenMenuData />
            <PagesData />
            <UserAcountData />
            <VendorAcountData />
          </div>
        </div>
      </>
    </div>
  )
}
export default Navbar