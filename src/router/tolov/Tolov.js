import React from 'react'
import "./Tolov.css"

function Tolov() {
  return (
    <div className='tolov'>
      <div className="container">
      <div className="tolov__cart">
        <div className="tolov__cart__tolov">
        <b>To'lov</b>

        </div>
        <div className="tolov__cart__buyurtma">
        <p>Buyurtma yoki shaxsiy ID raqamingizni bexato kiriting</p>

        </div>
        <div className="tolov__cart__input">
          <input type="text" placeholder='Namuna: A777 yoki B999 yoki M333' />
        </div>
        <div className="tolov__cart__button">
        <button className='btn'>
            <span>Tasdiqlash</span>
        </button>
        </div>
        <div className="tolov__cart__text">
          <p>B - buyurtma uchun</p>
          <p>A - akkount uchun</p>
          <p>M - rassrochkani so'ndirish uchun</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Tolov