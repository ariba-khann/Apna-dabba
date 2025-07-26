import React, { useState } from 'react';

const CompleteProfile = ({ onOKClick }) => {
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    email: '',
    phoneNumber: '',
    otp: '',
    dob: '',
    password: '',
    rePassword: '',
  });

  

  const generateOTP = () => {
    const generatedOTP = Math.floor(1000 + Math.random() * 9000);
    setFormData({
      ...formData,
      otp: generatedOTP.toString()
    });
  };

  const handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit =  (e) => {
    e.preventDefault();
    // Add logic for form submission here
    if (formData.password !== formData.rePassword) {
      alert('Passwords do not match. Please re-enter your password.');
    } else {
    alert('Your account has been created.');
    console.log('Form submitted:', formData);
    onOKClick();
    }


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
    formGroup: {
      marginBottom: '15px',
    },
    input: {
      width: '100%', // Equal width for all textboxes
      padding: '8px',
      border: '1px solid #ccc',
      borderRadius: '3px',
      fontSize: '16px',
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
  return (
    <div style={styles.container} className="container">
      <h2>Create Your Profile</h2>
      <form onSubmit={handleSubmit}>

      <div style={styles.formGroup}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Gender:</label>
          <input
            type="radio"
            name="gender"
            value="male"
            onChange={handleChange}
            required
          /> Male
          <input
            type="radio"
            name="gender"
            value="female"
            onChange={handleChange}
            required
          /> Female
        </div>

        <div style={styles.formGroup}>
        <label>Email:</label>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input} // Apply the input style here
          />
        </div>
        
        <div style={styles.formGroup}>
        <label> Contact number:</label>
          <input
            type="number"
            name="phoneNumber"
            placeholder="Contact Number"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            style={styles.input} // Apply the input style here
            pattern="[0-9]*"     
         />
        </div>
        
        <button type="button" onClick={generateOTP} style={styles.button}>
          Generate OTP
        </button>
        
        <div style={styles.formGroup}>
          <input
            type="text"
            name="otp"
            placeholder="OTP"
            value={formData.otp}
            readOnly
            style={styles.input} // Apply the input style here
          />
        </div>
          
        <div style={styles.formGroup}>
        <label>Enter your birthdate:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            required
            style={styles.input} // Apply the input style here
          />
        </div>

        <div style={styles.formGroup}>
          <label>Create a Password:</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Re-enter Password:</label>
          <input
            type="password"
            name="rePassword"
            placeholder="Re-enter Password"
            value={formData.rePassword}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>

        
        <button type="submit" style={styles.button}>
          Submit
        </button>
      </form>
    </div>
  );
};


export default CompleteProfile;
