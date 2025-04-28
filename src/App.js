import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator } from '@aws-amplify/ui-react';
import { Auth } from 'aws-amplify';

function App() {
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check current session on mount
    Auth.currentAuthenticatedUser()
      .then(user => console.log("Current user:", user))
      .catch(err => {
        console.error("No current user:", err);
        setError("No user logged in. Please sign in.");
      });
  }, []);

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App container" style={{ textAlign: 'center', padding: '50px', border: '1px solid #ccc', margin: '20px auto', maxWidth: '600px', borderRadius: '8px' }}>
          {user ? (
            <>
              <h2>Hello {user.username}!</h2>
              <p>You are successfully authenticated.</p>
              <button
                onClick={signOut}
                style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#f00', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}
              >
                Sign Out
              </button>
            </>
          ) : (
            <p>Loading user...</p>
          )}
          {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
      )}
    </Authenticator>
  );
}

export default App;
