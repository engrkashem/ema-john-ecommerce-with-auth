import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css';
import icons from '../../images/icons.png';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const emailHandler = e => {
        setEmail(e.target.value)
    };
    const passwordHandler = e => {
        setPassword(e.target.value)
    };
    const confirmPasswordHandler = e => {
        setConfirmPassword(e.target.value)
    };

    if (user) {
        navigate('/shop');
    };

    const handleCreateUser = e => {
        e.preventDefault();
        if (password !== confirmPassword) {
            setError('Your two password did not match.')
            return;
        }
        if (password.length < 6) {
            setError('Password must contain at least 6 character.')
            return;
        }
        createUserWithEmailAndPassword(email, password);
    };

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title'>Sign Up</h2>
                <form onSubmit={handleCreateUser}>
                    <div className="input-group">
                        <label htmlFor="email">Email</label>
                        <input onBlur={emailHandler} type="email" name="email" id="email-field" placeholder='Enter Your Email' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="password">Password</label>
                        <input onBlur={passwordHandler} type="password" name="password" id="password-field" placeholder='Enter Your Password' required />
                    </div>
                    <div className="input-group">
                        <label htmlFor="confirm-password">Confirm Password</label>
                        <input onBlur={confirmPasswordHandler} type="password" name="confirm-password" id="confirm-password-field" placeholder='Re-Enter Your Password' required />
                    </div>
                    <p style={{ color: 'red' }}>
                        {error}
                    </p>
                    <input className='form-submit' type="submit" value="Sign Up" />
                </form>
                <p className='new-acc-text'>
                    Already have an account? <Link className='form-link' to={'/login'}>Login</Link>
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

export default SignUp;