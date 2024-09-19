import React from 'react';
import './Sginin.css';

function Sginin() {
    const handleNavigation = (path) => {
        window.location.href = path;
    };

    return (
        <div className='sginin'>
            <div className="container">
                <div className="sign-in-container">
                    <h1>Sign in</h1>
                    <div className="social-container">
                        <a href="#" className="social"><i className="fa fa-facebook"></i></a>
                        <a href="#" className="social"><i className="fa fa-google"></i></a>
                        <a href="#" className="social"><i className="fa fa-linkedin"></i></a>
                    </div>
                    <span>or use your email account:</span>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <a href="#">Forgot your password?</a>
                    <button className="sign-in-btn">Sign In</button>
                </div>

                <div className="overlay-container">
                    <div className="overlay-panel">
                        <h1>Hello, Friends!</h1>
                        <p>Enter your personal details and start your journey with us</p>
                        <button className="sign-up-btn" onClick={() => handleNavigation('/signup')}>Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sginin;
