import React, { useState } from 'react';
import axios from 'axios';
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from "react-facebook-login";
import './RegistrationForm.css';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobileNumber: '',
        password: '',
    });

    const [user, setUser] = useState(null); // Google user data
    const [facebookUser, setFacebookUser] = useState(null); // Facebook user data

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        // Handle API call for regular registration here
    };

    const handleLoginSuccess = (response) => {
        console.log('Google Login Success:', response);
        const { name, email, imageUrl } = response.profileObj;
        const token = response.tokenId;

        // Store Google user data
        setUser({ name, email, imageUrl });
    };

    const handleLoginFailure = (error) => {
        console.log('Google Login Failed:', error);
    };

    const handleFacebookResponse = (response) => {
        console.log("Facebook Login Response:", response);
        if (response.accessToken) {
            setFacebookUser({
                name: response.name,
                email: response.email,
                picture: response.picture.data.url,
            });
        } else {
            console.log("User did not authorize.");
        }
    };

    return (
        <div className="registration-container">
            <form className="registration-form" onSubmit={handleSubmit}>
                <h2>Register</h2>
                <label>
                    First Name:
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Last Name:
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Mobile Number:
                    <input
                        type="tel"
                        name="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        required
                    />
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                    />
                </label>
                <button type="submit">Register</button>

                <div className="social-login">
                    <p>Or register using:</p>

                    {/* Google Login Button */}
                    <GoogleLogin
                        clientId="104159136767-aj7ndmcv4d0lnk2bcllm3aufd6fqjdv6.apps.googleusercontent.com"
                        buttonText="Login with Google"
                        onSuccess={handleLoginSuccess}
                        onFailure={handleLoginFailure}
                        cookiePolicy="single_host_origin"
                    />

                    {/* Facebook Login Button */}
                    <FacebookLogin
                        appId="EAAR5L7LmCvQBOyQcXcUmbbuuDfF6tHNX4wb1p35oeTZAOZBDTGifh9ZCZCvYt3Qh3IU0XaB7gZAZA8QPABRUQculkZCNJX7WZAFm18O7gbR8ZANyuTflX0JCWQRohDjlgZCuBmRbTZA5biNuRECxXImjLYvwiTpMZCRkG8uie5QShaDDfVxhou173K1wdcS62AyBbfi8kMZAfeZACqdqxqHp6o1y5D9jlvX2euIiWx7lmmLq0zySgNo2nzqpegsjhenkLLowZDZD"
                        autoLoad={false}
                        fields="name,email,picture"
                        callback={handleFacebookResponse}
                        cssClass="facebook-login-button"
                        icon="fa-facebook"
                    />
                </div>
            </form>

            {/* Show Google User Info */}
            {user && (
                <div className="user-info">
                    <h2>Welcome, {user.name}!</h2>
                    <p>Email: {user.email}</p>
                    <img src={user.imageUrl} alt="User Profile" />
                </div>
            )}

            {/* Show Facebook User Info */}
            {facebookUser && (
                <div className="user-info">
                    <h2>Welcome, {facebookUser.name}!</h2>
                    <p>Email: {facebookUser.email}</p>
                    <img src={facebookUser.picture} alt="User Profile" />
                </div>
            )}
        </div>
    );
};

export default RegistrationForm;
