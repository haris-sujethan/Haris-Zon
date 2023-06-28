import React from 'react'
import './Product.css'
import { useStateValue } from './StateProvider'

function Product({ id, title, image, price, rating}) {
  
  const [ {basket }, dispatch] = useStateValue(); //state is the state of the global store,  and dispatch is how we manipulate the data 

 // console.log('this is the basket', basket ) debugging help

  const addToBasket = () => {
    //dispatches the item to data layer
    dispatch({
      type: 'ADD_TO_BASKET',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      }
    })
  }

  return (
    <div className='product'>
        <div className="product__info">
            <p>{title}</p>
            <p className='product__price'>
                <small>$</small>
                <strong>{price}</strong>
            </p>
            <div className='product__rating'>
                {Array(rating).fill().map((_, i) => (<p>⭐</p>))} {/*Displays the amount of starts assigned in Home.js*/}
            </div>
        </div>
        <img src={image} alt=''/>
        <button onClick={addToBasket}>Add to Cart</button> {/*When pressed const addToBasket is ran*/}
    </div>
  )
}

export default Product