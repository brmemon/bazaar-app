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
    <>
      <BlueNavbar />
      <SearchNavbar />
      <div style={{ display: "flex" }}>
        <Data />
        {/* <div style={{ display: "flex", gap: "2%" }}> */}
        <span style={{ padding: "12px 16px", fontSize: "14px" }}>
          <HomeData />
        </span>
        <span style={{ padding: "12px 16px", fontSize: "14px" }}>
          <MegaMenuData />
        </span>
        <span style={{ padding: "12px 16px", fontSize: "14px" }}>
          <FullScreenMenuData />
        </span>
        <span style={{ padding: "12px 16px", fontSize: "14px" }}>
          <PagesData />
        </span>
        <span style={{ padding: "12px 16px", fontSize: "14px" }}>
          <UserAcountData />
        </span>
        <span style={{ padding: "12px 16px", fontSize: "14px" }}>
          <VendorAcountData />
        </span>
        {/* </di v> */}
      </div>
    </>
  )
}

export default Navbar
