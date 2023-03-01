import React from 'react'
import { Link } from 'react-router-dom'
import AssaxiyLogo from "../../assets/asaxiy-logo.svg"
import { AiOutlineSearch } from "react-icons/ai"
// import {IoWalletOutline} from "react-icons/io"
import {IoWalletOutline} from "react-icons/io5"
import {TbTruckDelivery} from "react-icons/tb"
import {BsGlobe} from "react-icons/bs"
import { SlBasket} from "react-icons/sl"
import {AiOutlineHeart} from "react-icons/ai"
import {BsPerson} from "react-icons/bs"
import "./Navbar.css"

function Navbar() {
  return (
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
              <div  className="nav__item">
                <BsPerson />
                <p>Kabinet</p>
              </div>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar