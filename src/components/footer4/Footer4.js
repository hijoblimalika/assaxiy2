import React from 'react'
import "./Footer4.css"
import {FaFacebookF} from "react-icons/fa"
import {FaTelegramPlane} from "react-icons/fa"
import {BsInstagram} from "react-icons/bs"
import {AiFillYoutube} from "react-icons/ai"
import {FiWifi} from "react-icons/fi"

function Footer4() {
  return (
    <div className="footer4">

    <div className='footer4__1'>
        <div className="footer4__container">

            <div className="footer4__1__1">
                <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
                <div className="footer4__1__box">
                    <p>Endi bozorga borishga hojat yo'q</p>
                    <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
                </div>
            </div>
            <div className="footer4__1__2">
                <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
                <div className="footer4__1__box">
                    <b>Tez yetkazib berish</b>
                    <p>Bizning xizmatimiz sizni ajablantiradi</p>
                </div>
            </div>
            <div className="footer4__1__3">
                <img src="https://asaxiy.uz/custom-assets/images/icons/return.svg" alt="" />
                                <div className="footer4__1__box">
                                    <b>Siz uchun qulayliklar</b>
                                    <p>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</p>
                                </div>

            </div>
            <div className="footer4__1__4">
                <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
                                <div className="footer4__1__box">
                                    <b>Bo'lib to'lash</b>
                                    <p>3, 6, 9 va 12 oy davomida oldindan to'lovsiz</p>
                                </div>

        </div>
    </div>
        </div>
        <div className="footer4__2">
            <div className="footer4__2__1">
                <b>Ma'lumotlar</b>
                <p>Ommaviy oferta (Foydalanuvchi bitimi)</p>
                <p>Muddatli toʻlov asosida sotib olishning umumiy qoidalari</p>
                <p>Muddatli toʻlov shartlari</p>
                <p>Buyurtma qanday beriladi?</p>
                <p>Tovarlarni yetkazib berish va toʻlov turlari</p>
                <p>Buyurtmani bekor qilish va tovarni qaytarish</p>
                <p>Biz haqimizda</p>
                <p>Promo Kod (Kupon) ni qanday aktivlashtiringiz mumkin!</p>
            </div>
            <div className="footer4__2__2">
                <b>Biz bilan aloqa</b>
                <p>+998 71 200 01 05+998 71 200 01 05</p>
                <p>info@asaxiy.uzinfo@asaxiy.uz</p>
                <p>Chilonzor 3, ToshkentChilonzor 3, Toshkent</p>
            </div>
            <div className="footer4__2__3">
                <b>Biz ijtimoiy tarmoqlarda :</b>
                <div className="footer4__2__1__icons">
                <FaFacebookF/>
                <FaTelegramPlane/>
                <BsInstagram/>
                <AiFillYoutube/>
                <FiWifi/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer4