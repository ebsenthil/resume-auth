// src/App.js (TEMPORARY - FOR TESTING ONLY)
import React from "react";
import "@aws-amplify/ui-react/styles.css"; // Keep styles
import { Authenticator } from '@aws-amplify/ui-react';
// import "./App.css"; // You can comment this out temporarily too, just to be absolutely sure

function App() {
  // Remove all your original state and handlers for this test
  // const initialFormData = { ... };
  // const [formData, setFormData] = useState(initialFormData);
  // ... all other state and functions like handleChange, handleGenerateResume, etc.

  // Remove all your original rendering logic

  return (
    // Keep the Authenticator wrapper
    <Authenticator>
      {({ signOut, user }) => (
        // Render only simple content inside when authenticated
        <div className="App container" style={{ textAlign: 'center', padding: '50px', border: '1px solid #ccc', margin: '20px auto', maxWidth: '600px', borderRadius: '8px' }}>
          <h2>Hello {user.username}!</h2>
          <p>You are successfully authenticated.</p>
          {/* Add a simple sign-out button */}
          <button onClick={signOut} style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#f00', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Sign Out</button>

          {/* Your original app content is commented out or removed temporarily */}
          {/* <h1>AI Resume Generator</h1> */}
          {/* ...rest of the original JSX... */}
        </div>
      )}
    </Authenticator>
  );
}

export default App;
