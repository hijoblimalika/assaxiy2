import React from 'react'
import Banner from '../../components/banner/Banner'
import HomeBanner from '../../components/home-banner/HomeBanner'
import HomeMain from '../../components/home-main/HomeMain'
import Footer1 from "../../components/footer1/Footer1"
import Footer2 from "../../components/footer2/Footer2"
import Footer3 from "../../components/footer3/Footer3"
import "./Home.css"
import Map from "../../components/map/Map"
// import Category from "../../components/category/Category"
import Swiper from 'swiper'
function Home() {
  return (
    <div className='container'>
      <div className='home'>
        <Banner/>
        {/* <Category/> */}
        {/* <Swiper/>  */}
        <Map/>
        <HomeBanner/>
        <HomeMain/>
        <Footer1/>
        <Footer2/>
        <Footer3/>
      </div>
    </div>
  )
}

export default Home