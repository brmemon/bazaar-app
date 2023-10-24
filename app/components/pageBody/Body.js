import React from 'react'
import FlashDeals from '../Carousal/FlashDeals'
import TopCategories from '../Carousal/TopCategories'
import TopRatings from '../Carousal/TopRatings'
import FeaturedBrand from '../Carousal/FeaturedBrand'
import NewArrivals from '../Carousal/NewArrivals'
import BigDiscounts from '../Carousal/BigDiscounts'
import CardBoxOne from '../Carousal/CardBoxData/CardBoxOne'
import CardBoxTwo from '../Carousal/CardBoxData/CardBoxTwo'
import CardBoxThree from '../Carousal/CardBoxData/CardBoxThree'
import WithoutCarouCardOne from '../Carousal/FirstCarouWithoutCarou/WithoutCarouCardOne'
import WithoutCarouCardTwo from '../Carousal/FirstCarouWithoutCarou/WithoutCarouCardTwo'
import ImagesData from '../DataImageComponents/ImagesData'
import WithoutCarouCardThree from '../Carousal/FirstCarouWithoutCarou/WithoutCarouCardThree'
import MainSmallCard from '../SmallCard/MainSmallCard'
import WithoutCarouOne from '../Carousal/SecondCarouWithoutCarou/WithoutCarouOne'
import FooterCards from '../FooterCardsBox/FooterCards'


const Body = () => {
  return (
    <div style={{ backgroundColor: '#F6F9FC', padding: '0px 54px' }}>
      <FlashDeals />
      <TopCategories />
      <div style={{ display: "flex", width: "100%", gap: "4%" }}>
        <TopRatings />
        <FeaturedBrand />
      </div>
      <NewArrivals />
      <BigDiscounts />
      <div style={{ display: "flex", width: "100%", gap: "2%" }}>
        <CardBoxOne />
        <WithoutCarouCardOne />
      </div>
      <div style={{ display: "flex", width: "100%", gap: "2%" }}>
        <CardBoxTwo />
        <WithoutCarouCardTwo />
      </div>
      <ImagesData />
      <div style={{ display: "flex", width: "100%", gap: "2%" }}>
        <CardBoxThree />
        <WithoutCarouCardThree />
      </div>
      <MainSmallCard />
      <WithoutCarouOne />
      <FooterCards />
    </div>
  )
}

export default Body
