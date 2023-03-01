import React from 'react'
import "./Trek.css"
import TrekImg from "../../assets/tracking.svg"

function Trek() {
  return (
    <div className="trek__container">
        <div className="container">

    <div className='trek'>
        <div className="trek__text">
          <h1>Buyurtma holati</h1>
          <p>Buyurtmani ko'rish uchun kerakli maydonlarni to'ldiring. Buyurtma raqami sizning raqamingizga SMS-xabar shaklida yuborilgan</p>
          <div className="trek__inp1">
            <p>Buyurtma raqami*</p>
            <input type="text" />
          </div>
          <div className="trek__inp2">
            <p>Buyurtma berilgandagi telefon raqami *</p>
            <input type="text" />
          </div>
          <button className='btn'>
            <span>Kirish</span>
        </button>
        </div>
        <div className="trek__img">
          <img src={TrekImg} alt="" />
        </div>
    </div>
      </div>
    </div>
  )
}

export default Trek