import React, { useState, useEffect } from 'react';
import OrderPage from './OrderPage';
import CookLogin from './CookLogin';
import Login from './login';
import './App.css';

const Navbar = ({ onLoginClick }) => {
  return (
    <div className="navbar">
      <h1 className="navbarText">Apna Dabba</h1>
      <div className="loginSymbol" onClick={onLoginClick}>🧑🏻‍💻</div>
    </div>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [showOrderPage, setShowOrderPage] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showCookLogin, setShowCookLogin] = useState(false);
 
  useEffect(() => {
    // Simulate loading time
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // 2 seconds
  }, []);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleLoginSuccess = () => {
    setShowLogin(false);
  };

  return (
    <div className="container">
      {isLoading ? (
        <div className="loaderContainer">
          <h2 className="loaderText">Welcome to Apna Dabba</h2>
        </div>
      ) : (
        <>
          <Navbar onLoginClick={handleLoginClick} />
          {showLogin ? (
            <Login onLoginSuccess={handleLoginSuccess} /> 
          ) : (
            showOrderPage ? (
              <OrderPage />
            ) : (
              showCookLogin ? (
                <CookLogin />
              ) : (
                <div className="scrollContent">
                  <div className="hero">
                    <h2 className="heroText">{"Made with Love, Delivered with Care"}</h2>
                    <p className="heroDescription">Welcome to Apna Dabba, where the warmth of homemade meals meets the convenience of delivery. Indulge in a delightful array of handcrafted dishes prepared with love and care by talented home cooks in your community. Our app connects you with a diverse menu of authentic flavors, featuring family recipes passed down through generations. Whether you're a busy professional craving comfort food or a family seeking wholesome dinners, we've got you covered. Experience the joy of savoring home-style goodness, conveniently delivered to your doorstep. At Apna Dabba, every bite tastes like home.</p>
                    <button className="customBtn" onClick={() => setShowOrderPage(true)}>
                      Place Your Order
                    </button>
                  </div>

                  <div className="Section">
                    <h2 className="aboutText">About Us</h2>
                    <p className="aboutDescription">We are passionate about delivering delicious and healthy meals to your doorstep. Our talented home cooks prepare each dish with love and care, ensuring you get the best flavors and quality in every bite. Our mission at Apna Dabba is simple yet impactful - to revolutionize the way you experience food delivery. We're committed to bringing together the best local eateries and the most discerning food enthusiasts, bridging the gap between delightful cuisine and modern technology.</p>
                  </div>

                  <div className="Section" style={{ backgroundColor: '#ACDF87' }}>
                    <h2 className="Text">Become our Home Cook</h2>
                    <button className="customBtn" onClick={() => setShowCookLogin(true)}>
                      Join Us 
                    </button>
                  </div>

                  <div className="contactSection">
                    <h2 className="contactText">Contact Us</h2>
                    <p className="contactInfo">Phone: +91 9820266798</p>
                    <p className="contactInfo">Email: info@apnadabba.com</p>
                  </div>
                </div>
              )
            ))}
          <div className="footer">
            <p className="footerText"> Apna Dabba🥗 {new Date().getFullYear()}. </p>
            <p className="footerText">
            &copy; All rights reserved.</p>
          </div>
        </>
      )}
    </div>
  );
};

export default App;