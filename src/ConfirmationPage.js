import React, { useState } from 'react';
import './ConfirmationPage.css';
import Loader from './Loader';

const ConfirmationPage = () => {
  const [isPopupOpen, setPopupOpen] = useState(false);
  const [isLoading, setLoading] = useState(false); // Track loading state
  const [showLoaderPopup, setShowLoaderPopup] = useState(false);

  const openPopup = () => {
    setPopupOpen(true);
  };

  const closePopup = () => {
    setPopupOpen(false);
    setLoading(true); 
    setTimeout(() => {
      setLoading(false);
      setShowLoaderPopup(true);
    }, 9000); // Simulate a delay (replace with actual asynchronous operation)
  };

  const handleLoaderPopupClose = () => {
    setShowLoaderPopup(false);
  };

  return (
    <div>
        <>
          <h2 className="order-details-heading">Order Details!!!!</h2>
          <div className="container-wrapper">
            <div className="confirmation-container">
              <p>Add Shipping Address!!!</p>
              <div>
                 <label htmlFor="firstName">First Name:</label>
                 <input type="text" id="firstName" name="firstName" placeholder="Enter your first name" />
              </div>
              <div>
                 <label htmlFor="lastName">Last Name:</label>
                 <input type="text" id="lastName" name="lastName" placeholder="Enter your last name" />
              </div>
              <div>
                <label htmlFor="address">Flat/House Number, Floor, Building:</label>
                <input type="text" id="address" name="address" placeholder="Enter your address" />
              </div>
              <div>
                <label htmlFor="area">Area, Street, Sector:</label>
                <input type="text" id="area" name="area" placeholder="Enter your area/street/sector" />
              </div>
              <div>
                <label htmlFor="city">City:</label>
                <input type="text" id="city" name="city" placeholder="Enter your city" />
              </div>
              <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" />
              </div>
              <textarea className="confirmation-textarea" placeholder="Additional comments"></textarea>
              <p>Select the Mode of Payment!!!</p>
              <div className="main">
                <div className="card" id="c1">Net Banking</div>
                <div className="card" id="c2">Card</div>
                <div className="card" id="c3">UPI (Gpay,etc)</div>
                <div className="card" id="c4">Cash On Delivery</div>
              </div>
              <button className="submit-button" onClick={openPopup} disabled={isLoading}>
                Place Order
              </button>
              {isPopupOpen && (
                <div className="popup-container">
                  <div className="popup-content">
                    <span className="close-btn" onClick={closePopup}>&times;</span>
                    <h2>Order Placed!</h2>
                    <p>Your order has been successfully placed.</p>
                    <button className="okay-button" onClick={closePopup}>
                      Okay
                    </button>
                   </div>
                </div>
              )}
            </div>
          </div>
        </>
      
   
     {showLoaderPopup && (
  <div className="popup-container">
    <div className="popup-content">
      <span className="close-btn" onClick={handleLoaderPopupClose}>&times;</span>
      <Loader />
    </div>
  </div>
)}

      {isLoading && <div className="loader">Loading...</div>}
    </div>
    
  );
};
export default ConfirmationPage;