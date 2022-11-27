import React, { useEffect, useRef } from 'react';
import { Link, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { useAuthState, useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';

const Register = () => {
    const emailRef = useRef('');
    const passRef = useRef('');
    const nameRef = useRef('');
    const navigate =  useNavigate()
    const location = useLocation()
    const from= location.state;

    const [createUser] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile] = useUpdateProfile(auth);
    const [user]= useAuthState(auth)


    const handleCreate = async e => {
        e.preventDefault()
        const email = emailRef.current.value
        const pass = passRef.current.value
        const displayName = nameRef.current.value
        await createUser(email, pass)
        await updateProfile({ displayName })
    }


    useEffect(() => {
       if(user)
       navigate(from,{state:nameRef.current.value});
    },[user])

    return (
        <div className='register-container'>
            <div className='login'>
                <h2>WELCOME</h2>
                <form onSubmit={handleCreate}>
                    <input required ref={nameRef} type="text" placeholder='Name' />
                    <input required ref={emailRef} type="email" placeholder=' Email' />
                    <input required ref={passRef} type="password" placeholder=' Password' />
                    <button type='submit'>Sign Up</button>
                </form>
                <p>Already signed up?<span onClick={()=>
                navigate("/login")}> Login Here</span></p>

            </div>
        </div>
    );
};

export default Register;