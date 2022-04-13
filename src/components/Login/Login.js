import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import icons from '../../images/icons.png'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    if (user) {
        navigate('/shop')
    }

    const handleUserSignIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
    };

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'> Login</h2>
                <form onSubmit={handleUserSignIn}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={(e) => setEmail(e.target.value)} type="email" name="email" id="email-field" placeholder='Enter Your Email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={(e) => setPassword(e.target.value)} type="password" name="password" id="password-field" placeholder='Enter Your Password' required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error?.message}
                    </p>
                    {loading && <p>Loading....</p>}
                    <input className='form-submit' type="submit" value="Login" />
                </form>
                <p className='new-acc-text'>
                    New to Ema-John? <Link className='form-link' to={'/signup'}>Create New Account</Link>
                </p>
                <div className='login-option'>
                    <hr />
                    <span>or</span>
                    <hr />
                </div>
                <button className="google-login">
                    <img src={icons} alt="" /> <span className='google-login-text'>Continue with Google</span>
                </button>
            </div>
        </div>
    );
};

export default Login;