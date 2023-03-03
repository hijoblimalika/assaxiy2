import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

import AssaxiyLogo from "../../assets/asaxiy-logo.svg"
import { AiOutlineSearch } from "react-icons/ai"
// import {IoWalletOutline} from "react-icons/io"
import {IoWalletOutline} from "react-icons/io5"
import {TbTruckDelivery} from "react-icons/tb"
import {BsGlobe} from "react-icons/bs"
import { SlBasket} from "react-icons/sl"
import {AiOutlineHeart} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import { useSelector, useDispatch } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { LOG_IN } from '../../context/action/actionType'
import { FiX } from "react-icons/fi"

import "./Navbar.css"

// function Navbar() {
//   return (
//     <div className='nav__container'>
//         <div className="container">
//             <div className="navbar">
//                 <Link to={"/"} className='nav__logo'><img src={AssaxiyLogo} alt="" /></Link>
//             <div className="nav__search">
//                 <input type="text" placeholder='Qidirish...' />
//                 <button><AiOutlineSearch/><h6>Qidirish</h6></button>
//             </div>
//             <div className="nav__items">
//                 <Link to={"./tolov"} className="nav__item">
//                 <IoWalletOutline/>
//                 <p>To'lov</p>
//                 </Link>

//                 <Link to={"./trek"} className="nav__item">
//                 <TbTruckDelivery/>
//                 <p>Trek</p>
//                 </Link>

//                 <Link to={"./til"} className="nav__item">
//                 <BsGlobe/>
//                 <p>O'zbekcha</p>
//                 </Link>

//                 <Link to={"/cart"} className="nav__item">
//                 <SlBasket />
//                 <p>Savatcha</p>
//                 </Link>
//                 <Link to={"/like"} className="nav__item">
//                 <AiOutlineHeart />
//                 <p>Sevimlilar</p>
//               </Link>
//               <div  className="nav__item">
//                 <BsPerson />
//                 <p>Kabinet</p>
//               </div>
//             </div>
//             </div>
//         </div>
//     </div>
//   )
// }

// export default Navbar














// import React from 'react'
// import { useState } from 'react'
// import "./Navbar.css"
// import { AiOutlineMenu } from "react-icons/ai"
// import { AiOutlineSearch } from "react-icons/ai"
// import { BiBarChart } from "react-icons/bi"
// import { SlBasket } from "react-icons/sl"
// import { BsPerson, BsPower } from "react-icons/bs"
// import { AiOutlineHeart } from "react-icons/ai"
// import { Link } from 'react-router-dom'
// import { FiX } from "react-icons/fi"
// import { HiOutlineChevronDown } from "react-icons/hi"
// import { useSelector, useDispatch } from 'react-redux'
// import { useLocation, useNavigate } from 'react-router-dom'
// import { LOG_IN } from '../../context/action/actionType'
function Navbar() {
  const [show, setShow] = useState(false)
  const cart = useSelector(s => s.cart)
  const { } = useLocation()
  const [username, setUsermname] = useState('')
  const [password, setPassword] = useState("")
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const auth = useSelector(s => s.auth)
  const [error, setError] = useState(false)

  document.body.style.overflow = show ? "hidden" : "auto"
  if (pathname.includes("admin")) {
    return <></>
  }

  const defaultCase = ()=>{
    setShow(false)
    setUsermname("")
    setPassword("")
    setError(false)
  }
  const register = ()=>{
    if(username === "hijoblimalika" && password === "2606472"){
      dispatch({type: LOG_IN, payload: {username, password}})
      navigate("/admin")
    }else{
      setError(true)
    }
  }

    const checkAdmin = ()=>{
      if(auth){
        return  navigate("/admin")
      }
      setShow(true)
    }
  


  return (
    <>

<div className='nav__container'>
       <div className="container">
           <div className="navbar">
                 <Link to={"/"} className='nav__logo'><img src={AssaxiyLogo} alt="" /></Link>
             <div className="nav__search">
                 <input type="text" placeholder='Qidirish...' />
                 <button><AiOutlineSearch/><h6>Qidirish</h6></button>
             </div>
             <div className="nav__items">
                 <Link to={"./tolov"} className="nav__item">
                 <IoWalletOutline/>
                 <p>To'lov</p>
                 </Link>

                 <Link to={"./trek"} className="nav__item">
                <TbTruckDelivery/>
                 <p>Trek</p>
                 </Link>

                <Link to={"./til"} className="nav__item">
                <BsGlobe/>
                 <p>O'zbekcha</p>
                 </Link>

                 <Link to={"/cart"} className="nav__item">
                 <SlBasket />
                 <p>Savatcha</p>
                 </Link>
                <Link to={"/like"} className="nav__item">
                 <AiOutlineHeart />
                 <p>Sevimlilar</p>
              </Link>


              <div onClick={checkAdmin}  className="nav__item">
                <BsPerson />
                <p>Kabinet</p>
               </div>
             </div>
            </div>
       </div>
    </div>
      {
        show ? <>
          



          <div onClick={defaultCase} className="nav__shadow"></div>
          <div className="nav__login__container">
            
          <div className="nav__login">
            <p>Kirish yoki shaxsiy kabinet yaratish</p>
            <FiX onClick={defaultCase} className='nav__close' />
            <span 
            className='error'
            style={{opacity: error ? 1 : 0}}
            >username yoki password xato</span>
                <input className='ad__inputs' type="number" placeholder='Telefon raqam' />
                <input className='ad__inputs' value={username} onChange={e => setUsermname(e.target.value)} type="text" placeholder='username' />
            <input className='ad__inputs' value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder='password'/>
            <button className='btn12' onClick={register}><span>Login</span> </button>
          </div>
          <div className="kabinet__log2">
            <div className="kabinet__log2__box">
              <div className="kabinet__log2__box__img">
                <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
              </div>
              <div className="kabinet__log2__box__text">
                <b>Endi bozorga borishga hojat yoq</b>
                <p>Bizda qulay narxlar va uyga yetkazib berish mavjud</p>
              </div>
            </div>
            <div className="kabinet__log2__box">
             <div className="kabinet__log2__box__img">
              <img src="https://asaxiy.uz/custom-assets/images/icons/fast-delivery.svg" alt="" />
             </div>
             <div className="kabinet__log2__box__text">
              <b>Tez yetkazib berish</b>
              <p>Bizning xizmatimiz szni ajablantiradi</p>
             </div>

            </div>
            <div className="kabinet__log2__box">
               <div className="kabinet__log2__box__img">
                <img src="https://asaxiy.uz/custom-assets/images/icons/market.svg" alt="" />
               </div>
               <div className="kabinet__log2__box__text">
                <b>Sz uchun qulayliklar</b>
                <p>Nosozlik yuzaga kelganda tez rasmiylashtirish va qaytarish kafolati</p>
               </div>

            </div>
            <div className="kabinet__log2__box">
             <div className="kabinet__log2__box__img">
              <img src="https://asaxiy.uz/custom-assets/images/icons/card.svg" alt="" />
             </div>
             <div className="kabinet__log2__box__text">
              <b>Bo'lib to'lash</b>
              <p>12 yoki 18 oy davomida oldindan to'lov yoq</p>
             </div>

            </div>
          </div>
          </div>
        </> :
          <></> 
        }
      <></>
    </>
  )
}

export default Navbar