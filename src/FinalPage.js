import React from 'react';
import './FinalPage.css'; 

const FinalPage = () => {
  return (
    <div className="review-container">
      <h2 className="review-heading">Order Review</h2>
      <div className="review-details">
        <p>Thank you for your order!</p>
        <p>Order ID: #123456</p>
        <p>Items:</p>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
        </ul>
        <p>Total Amount: $50</p> {/* Replace with actual total amount */}
      </div>
      {/* <div className="review-actions">
        <button className="edit-button">Edit Order</button>
        <button className="confirm-button">Confirm Order</button>
      </div> */}
    </div>
  );
};

export default FinalPage;
