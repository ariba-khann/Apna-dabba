import React, { useState } from 'react';
import CompleteProfile from './CompleteProfile'; // Import the CompleteProfile component

const LoginPage = ({ onLoginSuccess }) => {
  const [showCompleteProfile, setShowCompleteProfile] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

 ;
  // const handleLogin = async () => {
  //   if (!username || !password) {
  //     setError('Please enter both username and password.');
  //   } else {
  //     setError('');
  //     try {
  //       const response = await fetch('http://localhost:3000/api/login', {
  //         method: 'POST',
  //         headers: {
  //           'Content-Type': 'application/json',
  //         },
  //         body: JSON.stringify({ email: username, password }),
  //       });
  
  //       if (!response.ok) {
  //         // Check if the response is not okay and handle non-JSON responses
  //         const text = await response.text();
  //         console.error('Error during login:', text);
  //         setError('An error occurred during login.');
  //         return;
  //       }
  
  //       const data = await response.json();
  
  //       // Check for the existence of 'error' in the response data
  //       if (data.error) {
  //         setError(data.error);
  //       } else {
  //         // Successful login
  //         alert('Login successful!');
  //         onLoginSuccess();
  //       }
  //     } catch (error) {
  //       console.error('Error during login:', error);
  //       setError('An error occurred during login.');
  //     }
  //   }
  // };

  const handleLogin = () => {
    // Perform login logic here, for now, let's just check if both username and password are provided
    if (username && password) {
      // Assuming login is successful, you can call the onLoginSuccess callback
      onLoginSuccess(username);
      // Display alert for successful login
      window.alert('Login successful!');
    } else {
      setError('Please provide both username and password.');
    }
  };
  
  const handleOKClick = () => {
    // Function to be called when "OK" is clicked in CompleteProfile
    setShowCompleteProfile(false); // Hide CompleteProfile
  };
  const styles = {
    container: {
      textAlign: 'center',
      width: '100%',
      maxWidth: '400px',
      margin: '0 auto',
      padding: '20px',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f9f9f9',
    },
    errorMessage: {
      color: 'red', 
    },
    button: {
      backgroundColor: '#007bff',
      color: '#fff',
      padding: '10px 20px',
      border: 'none',
      borderRadius: '3px',
      cursor: 'pointer',
    },
  };

  // Function to toggle the CompleteProfile component
  const showSignUp = () => {
    setShowCompleteProfile(true);
  };

  return (
    <div style={styles.container} className="login-container">
      <h2 style={styles.title}>Login</h2>
      {error && <div style={styles.errorMessage}>{error}</div>}

      {showCompleteProfile ? (
        <CompleteProfile onOKClick={handleOKClick} />
      ) : (
        <form>
          <div style={styles.formGroup} className="form-group">
            <label style={styles.label} htmlFor="username">Email:</label>
            <input
              style={styles.input}
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div style={styles.formGroup} className="form-group">
            <label style={styles.label} htmlFor="password">Password:</label>
            <input
              style={styles.input}
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button style={styles.button} type="button" onClick={handleLogin}>
            Login
          </button>
          <p>
            Don't have an account? <button type="button" onClick={showSignUp}>Sign up</button>
          </p>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
