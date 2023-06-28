import React from 'react'
import { Link } from 'react-router-dom';
import './Checkout.css'
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import Subtotal from './Subtotal'

function Checkout() {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="checkout">
        <div className='checkout__left'>
            <img className='checkout__ad' src='https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg' alt=''/> 
            <div>
                <h3>hey, {!user ? "guest": user.email}</h3> {/*The ? is optional chaining, helps pervent errors*/} {/*Will make text a clickable link to login/register if they are not logged in*/}
                <h3 className="checkout__title">Your Shopping Cart</h3>

                {basket.map(item =>(
                  <CheckoutProduct 
                    id ={item.id}
                    title ={item.title}
                    image ={item.image}
                    price ={item.price}
                    rating ={item.rating}
                  
                  />
                ))}
                {/*Item*/}
                {/*Item*/}

            </div>
        </div>

        <div className='checkout__right'>
            <Subtotal/>
        </div>
    </div>
  )
}

export default Checkout