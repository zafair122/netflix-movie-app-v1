import React from 'react'
import './register.scss'
import logo from '../../assets/logo/netflix-logo.png'
import { useState } from 'react'
import { useRef } from 'react'

const Register = () => {

    const [email, setEmail] = useState("")
    const emailRef = useRef()
    const handleStart = () => {
        setEmail(emailRef.current.value)
    }

    const [password, setPassword] = useState("")
    const passwordRef = useRef()
    const handleFinish = () => {
        setPassword(passwordRef.current.value)
    }

    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                    <img src={logo} alt="Logo" className="logo" />
                    <button className="loginButton">Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership</p>
                {!email ? (
                    <div className="input">
                        <input type="email" placeholder='Email Address' ref={emailRef} />
                        <button className="registerButton" onClick={handleStart}>Get Started</button>
                    </div>
                ) : (
                    <form className="input">
                        <input type="password" placeholder='Password' ref={passwordRef} />
                        <button className="registerButton" onClick={handleFinish}>Start</button>
                    </form>
                )}
            </div>
        </div>
    )
}

export default Register