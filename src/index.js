import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Amplify } from 'aws-amplify';

Amplify.configure({
  Auth: {
    region: 'us-east-1',
    userPoolId: 'us-east-1_UL0HgN1a7',
    userPoolWebClientId: '25naou2ejmro1jobjqkd0chkj0',
    authenticationFlowType: 'USER_SRP_AUTH',
    // Remove oauth unless using hosted UI or social logins
    // For local testing, include redirect URLs matching your environment
    mandatorySignIn: false // Optional: Allows unauthenticated access if needed
  }
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
