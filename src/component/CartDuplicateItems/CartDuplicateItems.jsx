import React,{useContext} from 'react'
import  {ShopContext} from '../../Context/ShopContext';

const CartDuplicateItems = () => {
  console.log(ShopContext);
  let values=useContext(ShopContext);
  console.log(values.cartItems);
  return (
    <div className='cartitems'>
    <div className="cartitems-format-main">
    <p>Products</p>
     <p>Title</p>
     <p>Price</p>
     <p>Quantity</p>
     <p>Total</p>
     <p>Remove</p>
    </div>
    <hr />
    </div>
  )
}

export default CartDuplicateItems