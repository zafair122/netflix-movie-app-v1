import React from 'react'
import './login.scss'
import logo from '../../assets/logo/netflix-logo.png'

const Login = () => {

    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                    <img src={logo} alt="Logo" className="logo" />
                </div>
            </div>
            <div className="container">
                <form action="">
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or Phone Number' />
                    <input type="password" placeholder='Password' />
                    <button className="loginbutton">Sign In</button>
                    <span>New to Netflix? <b>Sign up now</b></span>
                    <small>This page is protected by google reCAPTHCA to ensure you're not a bot. <b>Learn more.</b></small>
                </form>
            </div>
        </div>
    )
}

export default Login