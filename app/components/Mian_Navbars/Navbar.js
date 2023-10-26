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
      <div style={{ display: "flex", position: "relative" }}>
        <Data />
        {/* <div style={{ width:"52%", display: "flex", justifyContent: "space-between", paddingTop:"14px" }}> */}
          <HomeData />
          <MegaMenuData />
          <FullScreenMenuData />  
          <PagesData />
          <UserAcountData />
          <VendorAcountData />
        {/* </div> */}
      </div>
    </>
  )
}
export default Navbar



{/* <div style={{ display: "flex", gap: "2%" }}> */ }
{/* <span style={{ padding: "12px 16px", fontSize: "14px" }}> */ }
{/* </span> */ }
{/* <span style={{ padding: "12px 16px", fontSize: "14px" }}>
        </span>
        <span style={{ padding: "12px 16px", fontSize: "14px" }}>
        </span>
        <span style={{ padding: "12px 16px", fontSize: "14px" }}>
        </span>
        <span style={{ padding: "12px 16px", fontSize: "14px" }}>
        </span>
        <span style={{ padding: "12px 16px", fontSize: "14px" }}>
        </span> */}
{/* </di v> */ }

