import React from 'react'
import "./Like.css"
import Empty from "../../components/empty/Empty"
import img from "../../assets/2.png"
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_LIKE } from "../../context/action/actionType"
import Footer2 from "../../components/footer2/Footer2"
import Footer3 from "../../components/footer3/Footer3"
import { Link } from 'react-router-dom'
function Like() {
  const like = useSelector(s => s.heart)
  const dispatch = useDispatch()
  return (
    <div className='container like'>
      <h2>Sevimlilar</h2>
      {
        like.length === 0 ? <Empty url={img} text="Sevimli mahsulotlar yo'q" />
          :
          <div className='likes'>
            {
              like?.map((item, inx) => <div key={inx} className="like__card">
                <img className='like__imgs' src={item?.urls[0]} alt="" />
                <Link to={`/product/${item.id}`}><p>{item?.title}</p></Link>
                <div>
                  <del className='two'>
                    {item?.price + 200} so'm</del>
                  <br />
                  <p>{item?.price} so'm</p>
                </div>

                <button></button>
                <div className='like__btn'>
                  <button className='like__btn2'>savatchaga qoshish</button>
                  <button onClick={() => dispatch({ type: REMOVE_LIKE, payload: item.id })} className='like__btn3'>O'chirish</button>
                </div>
              </div>)
            }
          </div>
      }
      <Footer2/>
      <Footer3/>
    </div>

  )
}

export default Like