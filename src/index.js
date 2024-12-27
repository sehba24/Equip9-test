import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { GoogleOAuthProvider } from '@react-oauth/google';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Replace "YOUR_CLIENT_ID" with the actual client ID from the Google Cloud Console
root.render(
    <React.StrictMode>
        <GoogleOAuthProvider clientId="104159136767-aj7ndmcv4d0lnk2bcllm3aufd6fqjdv6.apps.googleusercontent.com">
            <App />
        </GoogleOAuthProvider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
