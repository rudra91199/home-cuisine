import React, { useEffect, useRef } from 'react';
import '../Auth.css'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { useSignInWithEmailAndPassword, useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';

const Login = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const navigate =  useNavigate()
    const location= useLocation();

    let from = location.state?.from?.pathname || "/";

    const [
        signIn
      ] = useSignInWithEmailAndPassword(auth);
    const [user]= useAuthState(auth)


    const handleLogin =e => {
        e.preventDefault()
        const email = emailRef.current.value
        const pass = passRef.current.value
        signIn(email, pass)
    }

    useEffect(() => {
        if(user)
        navigate(from,{ replace: true });
     },[user])
    return (
        <div className='login-container'>
            <div className='login'>
                <h2>WELCOME</h2>
                <form onSubmit={handleLogin}>
                    <input required ref={emailRef} type="email" placeholder=' Email' />
                    <input required ref={passRef} type="password" placeholder=' Password' />
                    <button type='submit'>Login</button>
                </form>
                <p>New here? <span onClick={()=>
                navigate("/register",{state:from})
                }>Create an account</span></p>
                <p className='forgot-password' onClick={()=>navigate('/reset')}>Forgot Password?</p>
            </div>
        </div>
    );
};

export default Login;