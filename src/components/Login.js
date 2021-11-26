import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import './login.css';



const Login = () => {
    return (
        <div className="logincont">
           <FaFacebook className="fbicon"/>
           <button classname="signinbtn" type="submit">SignIn</button>
            
        </div>
    )
}

export default Login

