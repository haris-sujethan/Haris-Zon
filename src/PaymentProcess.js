import React from 'react'
import { Link } from 'react-router-dom'
import "./PaymentProcess.css"
function PaymentProcess() {
  return (

    <div className='paymentProcess'>
        
        <img src='https://cdn.dribbble.com/users/3071180/screenshots/5881934/builder-drilling.gif'></img>
        <h2>Sorry, Still In Development...</h2>
        <Link to='/'> {/*the amazon logo brings the user to the home page*/}
                <img
                    className="login__logo"
                    src='https://turnerduckworth.com/sites/default/files/styles/case_study_single_image_s_2x/public/2019-03/5_Amazon_Lettermark_2560.jpg?h=a92f03cd&itok=2nBmNv14' 
                />
        </Link>
    </div>
  )
}

export default PaymentProcess