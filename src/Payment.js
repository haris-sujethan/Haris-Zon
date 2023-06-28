import React, { useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom';
import CheckoutProduct from './CheckoutProduct';
import './Payment.css'
import { useStateValue } from './StateProvider';
import { useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import axios from './axios';
import { db } from "./firebase"


function Payment() {
  const navigate = useNavigate ();
  const [{basket, user}, dispatch] = useStateValue();
  const routeChange = () =>{
      navigate("/orders")
  }
  const stripe = useStripe();
  const elements = useElements();
  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] =  useState("");
  const [error, setError] =useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    {/*generate stripe secret allows us to charge a customer */}
     //whenever the basket changes it will make the request and update the special secret, making sure we charge the customer the correct amoount
     const getClientSecret =  async () => {
        const response = await axios({
            method: 'post',
            //stripe wants totals in subunits meaning cents
            url: `/payments/create?total=${getBasketTotal(basket) * 100}`
        });
        setClientSecret(response.data.clientSecret) 
     }
     getClientSecret();
  }, [basket])

  console.log("THE SECRET IS", clientSecret);

  const handleSubmit = async e => {

    {/*stripe stuff*/}
    e.preventDefault();
    setProcessing(true); {/* Stops button */}

    const payload = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
            card: elements.getElement(CardElement)
        }
    }).then(({ paymentIntent}) => {
        //payment intent is just the payment confirmation

        db.collection('users').doc(user?.uid).collection('orders').doc(paymentIntent.id).set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created
        })

        setSucceeded(true);
        setError(null);
        setProcessing(false);
        dispatch({
            type: 'EMPTY_BASKET'
        })
        routeChange(); 
    }) 

  }

  const handleChange = e => {
        {/*listen for changes, display any errors AS the customer types. */}
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");


  }

  return (
    <div className='payment'>
 

        <div className='payment__container'>

            <h1>
                Checkout (<Link to="/checkout">{basket?.length} items</Link>) {/*Will display checkout + How many items are in the cart*/}
            </h1>
            
            <div className='payment__section'>
             {/*payment section - address*/}
               
                <div className='payment__title'>
                    <h3>Delivery Address</h3>
                </div>
                
                <div className='payment__address'>
                    <h4> Email: {!user? 'guest': user.email}</h4> <h4> Address: 123 fake address</h4><h4> City: Toronto</h4><h4> Province/State: ON</h4>
                    
                   
                </div>
            </div>

            <div className='payment__section'>
            {/*payment section - items*/}
                
                <div className='payment__title'>
                    <h3>Review Items and Delivery</h3>
                </div>
               
                <div className='payment__items'>
                    {/*All the products in cart shown*/}
                    {basket.map(item => (
                        <CheckoutProduct
                        id ={item.id}
                        title ={item.title}
                        image ={item.image}
                        price ={item.price}
                        rating ={item.rating}
                        />
                    ))}
                </div>

            </div>
            
            <div className='payment__section'>
            {/*payment section - payment method*/}
                
                <div className='payment__title'>
                    <h3>Payment Method</h3>
                </div>

                <div className='payment__details'>
                    {/*Stripe code required for further payment implementation*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange}/>
                                <div className='payment__priceContainer'>

                                    <CurrencyFormat 
                                    renderText={(value) => (
                                        <>
                                        <h3>Order Total: {value}</h3>   
                                        </>

                                    )}

                                    decimalScale={2}
                                    value={getBasketTotal(basket)}
                                    displayType={'text'}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                    
                                    />


                                    <button disabled={processing || disabled || succeeded }>

                                        {/*if the order is processing it will say processing otherwise it will say buy now*/}
                                        <span>{processing ? <p>Processing</p> : "Buy Now"}</span> 

                                    </button>
                                </div>

                                {error && <div>{error}</div>}     
                                
                        </form> 
                
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment