import axios from 'axios';
import React, { useRef } from 'react'
import { useHistory } from 'react-router';
import './register.css'

function Register() {
    const username = useRef();
    const email = useRef();
    const password = useRef();
    const passwordAgain = useRef();
    const history = useHistory();

    const handleClick = async (e) => {
        e.preventDefault();
        if (passwordAgain.current.value !== password.current.value) {
            passwordAgain.current.setCustomValidity("Password do not match!")
        } else {
            const user = {
                username: username.current.value,
                email: email.current.value,
                password: password.current.value,
            }
            try{
               await axios.post("/auth/register",user)
               history.push("/login")
            }catch(err){
                console.log(err)
            }
        }

    }
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">SocialMex</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on SocialMex.
                    </span>
                </div>
                <div className="loginRight">
                    <form className="loginBox" onSubmit={handleClick} >
                        <input placeholder="Username" ref={username} className="loginInput" />
                        <input placeholder="Email" ref={email} type="email" className="loginInput" />
                        <input placeholder="Password" ref={password} type="password" className="loginInput" />
                        <input placeholder="Password Again" ref={passwordAgain} type="password" className="loginInput" />
                        <button className="loginButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton" type="submit">
                            log into account
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register
