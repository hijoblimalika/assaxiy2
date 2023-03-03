import React from 'react'
import Banner from '../../components/banner/Banner'
import HomeBanner from '../../components/home-banner/HomeBanner'
import HomeMain from '../../components/home-main/HomeMain'

import "./Home.css"
import Map from "../../components/map/Map"
// import Category from "../../components/category/Category"
import Swiper from 'swiper'
function Home() {
  return (
    <div>
      <div className='home'>
    <div className='container'>
        <Banner/>
        {/* <Category/> */}
        {/* <Swiper/>  */}
        <Map/>
        <HomeBanner/>
        <HomeMain/>
   
      </div>
    </div>
    </div>
  )
}

export default Home