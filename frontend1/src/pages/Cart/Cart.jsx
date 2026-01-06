import React, { useContext } from 'react'
import './Cart.css'
import { food_list } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'
const Cart = () => {
  const{cartItems,food_list,removeFromCart} = useContext(StoreContext)
  return (
    <div className='cart'>
      <div className='cart-items'>
        <div className='cart-item-title'>
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item,index)=>{
          if(cartItems[item._id]>0){
            return(
              <div className='cart-items-title cart-items-item'>
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                <button onClick={()=>removeFromCart(item._id)} className='cross'>X</button>
              </div>
            )
          }
        })}
      </div>
      <hr />
    </div>
  )
}

export default Cart
