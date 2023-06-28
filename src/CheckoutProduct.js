import React from 'react'
import './CheckoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, image, title, price, rating, hideButton}) { 

    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        //remove the item from the basket 
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }

    return (
        <div className='checkout__product'> 
            <img className="checkout__product__image" src={image} alt=''></img> {/*Takes image from home.js, and prints them*/}
            <div className='checkout__product__info'>
                <p className='checkout__product__title'>{title}</p> {/*Looks at the input from home.js, and prints the title accordingly*/}
                <p className='checkout__product__price'><small>$</small><strong>{price}</strong></p >  {/*Looks at the input from home.js, and prints the price accordingly*/}
            <div className='checkout__product__rating'>
            {Array(rating).fill().map((_, i) => (<p>⭐</p>))} {/*Looks at the input from home.js, and prints the amount of starts accordingly*/}
            </div>
            {!hideButton && (
            
            <button onClick={removeFromBasket}>Remove From Cart</button>
            )}    
            
        </div> 
    </div>
  )
}

export default CheckoutProduct;