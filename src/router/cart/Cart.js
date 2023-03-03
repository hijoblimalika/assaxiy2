import React from 'react'
import "./Cart.css"
import Empty from '../../components/empty/Empty'
import { useSelector } from 'react-redux'
import CartItem from '../../components/cart-item/CartItem'
function Cart() {
  const cart = useSelector(s => s.cart)
  console.log(cart);
  return (
    <div className='container cart'>
      {
        cart.length === 0 ? <Empty text="Savatcha bo'w" />
          :
          <CartItem karzinka={cart}/>
      }
    </div>
  )
}

export default Cart