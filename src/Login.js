import React, { useState } from 'react';
import './Login.css'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "./firebase";

function Login() {
    const navigate = useNavigate ();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signIn = e => {
        e.preventDefault();

        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                // if it was successfull 
                navigate('/') //moves user to home page
            })
            // if it was  not successfull 
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // if it was successfull 
                if (auth) {
                    navigate('/') // moves user to home page
                }
            })
            // if it was not successfull 
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'> {/*the amazon logo brings the user to the home page*/}
                <img
                    className="login__logo"
                    src="https://i.ibb.co/PGrZwqN/Haris-Zon-6-27-2023-1.png" 
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__sign__in__button'>Sign In</button> {/*When pressed runs const signIn*/}
                </form>

                <p>
                    By signing-in you agree to the HarisZon terms & conditions of Use & Sale. Please
                    see our Privacy Notice, Cookies Notice and, Interest-Based Ads Notice.
                </p>

                <p>
                   If you do not have a amazon-clone account please fill in the same credentials for sign in, and press Create your Amazon Account.
                </p>

                <button onClick={register} className='login__register__button'>Create your Amazon Account</button> {/*When pressed runs const register*/}
            </div>
        </div>
    )
}

export default Login