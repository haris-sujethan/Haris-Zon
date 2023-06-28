import React from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
  
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) { //if the user is logged in, and sign out is pressed, it will sign them out
      auth.signOut();
    }
  }

  return (
    <div className="header">
      
        <Link to='/'> {/* Makes the amazon logo a clickable homepage button */}
        <img className="header__logo"src='https://i.ibb.co/R7Wt56z/Haris-Zon-6-27-2023.png'></img> {/* Amazon header logo, (top left) */}
        </Link>
        

        <div className='header__search'>
          <input className='header__searchInput' type="text"/>  {/* Search bar */}
           <SearchIcon className="header__searchIcon"/> 
        </div>

            <div className='header__nav'> {/* Navigation option, sigin in, orders, shopping cart, (top right)*/}
               
               <Link to={!user && '/login'}>
               <div onClick={handleAuthentication} className='header__option'>
                    <span className='header__optionLineOne'>Hello {!user ? 'Guest' : user.email}</span>
                    <span className='header__optionLineTwo'>{user ? 'Sign Out' : 'Sign In'}</span>{/*If the user is logged in, it will say Sign out. Otherwise, it will say sign in*/}
                </div> 
               </Link>

               <Link to ='/orders'> 

                <div className='header__option'> {/*Header options, (top right)*/}
                      <span className='header__optionLineOne'>Returns</span> 
                      <span className='header__optionLineTwo'>& Orders</span>
                  </div>
               
               </Link>


                <div className='header__option'>
                     <span className='header__optionLineOne'>Your</span>
                     <span className='header__optionLineTwo'>Prime</span>
                
                </div>

                <Link to ='/checkout'> {/* When the cart is pressed it will take the user to checkout */}
                 <div className="header__optionBasket"> 
                    <ShoppingCartIcon/>
                    <span className='header__optionLineTwo header__basketCount'>{basket?.length}</span>  {/* If any erros with basket would to occur, it wont freeze beacuse of the question mark*/}
                </div>
                </Link>
               
            </div>
    </div>
  )
}

export default Header