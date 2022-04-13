import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Shipment = () => {
    const [user] = useAuthState(auth);
    const [name, setName] = useState('');
    // const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [mobile, setMobile] = useState('');
    const [error, setError] = useState('');

    const handleUserSignIn = e => {
        e.preventDefault();
        const shipping = { name, address, mobile };
    };


    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Shipping Information</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="name">Name</label>
                        <input onBlur={(e) => setName(e.target.value)} type="text" name="name" id="name-field" placeholder='Enter Your Name' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input value={user?.email} readOnly type="email" name="email" id="email-field" placeholder='Enter Your Email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="address">Address</label>
                        <input onBlur={(e) => setAddress(e.target.value)} type="text" name="address" id="address-field" placeholder='Enter Your Address' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="mobile-number">Mobile Number</label>
                        <input onBlur={(e) => setMobile(e.target.value)} type="text" name="mobile-number" id="mobile-number-field" placeholder='Enter Your Mobile Number' required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error?.message}
                    </p>
                    {/* {loading && <p>Loading....</p>} */}
                    <input className='form-submit' type="submit" value="Add Shipping" />
                </form>
            </div>
        </div>
    );
};

export default Shipment;