import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Import Amplify and the configuration
import { Amplify } from 'aws-amplify';

// --- Update this configuration block ---
Amplify.configure({
  Auth: {
    region: 'us-east-1', // Your AWS region
    userPoolId: 'us-east-1_UL0HgN1a7', // Your User Pool ID
    userPoolWebClientId: '25naou2ejmro1jobjqkd0chkj0', // Your App Client ID (Web)
    authenticationFlowType: 'USER_SRP_AUTH', // Recommended flow for most apps
    // --- Add this empty oauth object to prevent the error ---
    oauth: {},
    // --- End add ---
  }
  // If you had other Amplify resources (like APIs, etc.), you'd add them here too
  // apiGateway: { ... }
  // storage: { ... }
});
// --- End of updated configuration block ---


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
