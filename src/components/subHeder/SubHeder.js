import React from 'react'
import {GiHamburgerMenu} from "react-icons/gi"
import "./SubHeder.css"
function SubHeder() {
  return (
    <div className='subHader'>
        <div className="subHader__container">
                <GiHamburgerMenu/>
                <b>Barcha bo'limlar </b>
                <b>Yangiliklar</b>
                <b>Yangi kelganlar</b>
                <b>Chegirmalar</b>
                <b>kitoblar</b>
                <b>Telefon va gadjetlar</b>
                <b>Televizor</b>
                <b>Sport buyumlari</b>
        </div>
    </div>
  )
}

export default SubHeder