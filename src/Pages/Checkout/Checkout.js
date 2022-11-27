import React from 'react';

const Checkout = () => {
    return (
        <div className='login-container'>
            <div className='login'>
                <h2>Checkout</h2>
                <form >
                    <input required  type="text" placeholder='Name' />
                    <input required type="text" placeholder='Address' />
                    <input required  type="text" placeholder='Phone Number' />
                    <button type='submit'>Proceed CheckOut</button>
                </form>
            </div>
        </div>
    );
};

export default Checkout;