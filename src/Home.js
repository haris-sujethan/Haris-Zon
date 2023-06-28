import React from 'react'
import "./Home.css"
import Product from './Product'

function Home() {
  return (
    <div className='home'>
        <div className="home__container">
            <img className='home__image' src="https://m.media-amazon.com/images/I/619t10TFeEL._SX3000_.jpg" alt=""/>

            <div className="home__row"> {/*Each value set below is displayed through product.js*/}
                 <Product id ="1"
                 title="Metal Desk Lamp, Adjustable Goose Neck Swing Arm Table Lamp with Interchangeable Base Or Clamp; Eye-Caring Study Desk Lamps for Bedroom, Study, Office, Table (Black)" 
                 price={29.99} 
                 image="https://m.media-amazon.com/images/I/61u9oOHCKAL._AC_SL1500_.jpg" 
                 rating ={4}/>
                 <Product id ="2" 
                 title="Artificial Plants Potted Faux Fake Mini Plant Greenery Green Grass Flower in Gray Pot for Bathroom Home House Decor (Set of 3)" 
                 price={14} 
                 image="https://m.media-amazon.com/images/I/71CYPNjnLNL._AC_SX679_.jpg" 
                 rating ={5}/>
            </div>

            <div className="home__row">
                <Product id ="3"
                title="New Apple AirPods (3rd Generation)" 
                price={237.99} 
                image="https://m.media-amazon.com/images/I/61ZRU9gnbxL._AC_SX679_.jpg" 
                rating ={5}/>
                <Product id ="4"
                title="Apple iPhone 11 Pro Max, 256GB, Midnight Green, Fully Unlocked (Renewed)" 
                price={749.99} 
                image="https://m.media-amazon.com/images/I/81ZYM5wSWOL._AC_SY741_.jpg" 
                rating ={4}/>
                <Product id ="5"
                title="2021 Apple 12.9-inch iPad Pro (Wi-Fi, 512GB) - Space Grey" 
                price={1881.99} 
                image="https://m.media-amazon.com/images/I/61gQ245+F-S._AC_SX522_.jpg" 
                rating ={5}/>
            </div>

            <div className="home__row">
                <Product id ="6"
                title="Samsung - 65 Inch Q70A QLED 4K Ultra HD HDR Smart TV [QN65Q70AAFXZC] [Canada Version] (2021)" 
                price={1398.99} 
                image="https://m.media-amazon.com/images/I/61wxVWcnhZL._AC_SX679_.jpg" 
                rating ={4}/>

                <Product id ="6"
                title="SHW Ivy Trestle Home Office Computer Desk with Storage Shelves, 43-Inch, White" 
                price={89.87} 
                image="https://m.media-amazon.com/images/I/71-Q2W+-C3L._AC_SL1500_.jpg" 
                rating ={4}/>
                
            </div>

        </div>
    </div>
  )
}

export default Home