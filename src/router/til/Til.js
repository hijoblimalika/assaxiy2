import React from 'react'
import Quruvci from "../../assets/1.png"
import "./Til.css"

function Til() {
  return (
<div className="til">

    <div className='container'>
      <div className="til__container">
      <div className="til__img">

      <img src={Quruvci} alt="" />
      </div>
      <div className="til__text">
        <h1>Saytimizning bu qismi hali tayyor emas.</h1>
      </div>

      </div>
    </div>
</div>
  )
}

export default Til