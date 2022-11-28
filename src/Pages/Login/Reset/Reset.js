import React, { useRef, useState } from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from './../../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Reset = () => {
    const emailRef = useRef('');
    const [passwordReset] = useSendPasswordResetEmail(auth);
    const [sent, setSent] = useState(false)
    const navigate = useNavigate();


    const handleReset = async e => {
        e.preventDefault()
        await passwordReset(emailRef.current.value)
        setSent(true)

    }
    return (
        <div className='reset-container'>
            <div className={`login ${sent?'sentReset':""}`}>
                <h2>{sent?"Reset":"OOPS!"}</h2>
                <h4 className={sent ? "d-none" : ''}>Enter Your Mail To Reset Password</h4>
                <h3 className={sent ? "d-block" : 'd-none'}>Email Sent</h3>
                <form className={sent ? "d-none" : ''} onSubmit={handleReset}>
                    <input className={sent ? "d-none" : ''} required ref={emailRef} type="email" placeholder=' Email' />
                    <button className={sent ? "d-none" : ''} type='submit'>Reset</button>
                </form>
                <button className={sent ? "d-block" : 'd-none'} onClick={() => navigate("/")}>Go Home</button>
            </div>
        </div>
    );
};

export default Reset;