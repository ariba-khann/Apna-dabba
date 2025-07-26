// import React, { useState, useEffect } from 'react';
// import './Loader.css';

//  const InitialLoader = () => {
//    return (
//      <div className="loader">
//        <button className="receipt-button">View Receipt</button>
//        <div className="panWrapper">
//          <div className="pan">
//            <div className="food"></div>
//            <div className="panBase"></div>
//            <div className="panHandle"></div>
//          </div>
//          <div className="panShadow"></div>
//          <p>Your order is being prepared</p>
//        </div>
//      </div>
//    );
//  };

//  const ProgressBar = () => {
//    const [progress, setProgress] = useState(0);
//   useEffect(() => {
//      // Simulate progress with a timeout
//      const interval = setInterval(() => {
//        setProgress((prevProgress) => {
//          if (prevProgress < 100) {
//            return prevProgress + 2;
//          } else {
//            clearInterval(interval);
//            return 100;
//          }
//        });
//     }, 2000);

//      return () => clearInterval(interval);
//    }, []);

//    return (
//      <div>
//      <div id="myProgress">
//        <div id="myBar" style={{ width: `${progress}%` }}></div>
//      </div>
//       <p>Your order is out for delivery...</p> {/* Add your paragraph here */}
//         <button className="delivery-button">Review page </button> {/* Added button */}
//      </div>   
//    );
//  };

//  const CombinedLoader = () => {
//    const [showInitialLoader, setShowInitialLoader] = useState(true);

//    useEffect(() => {
//      // Simulate a delay before showing the progress bar
//      const delay = setTimeout(() => {
//        setShowInitialLoader(false);
//      }, 5000); // Adjust the delay time as needed

//      return () => clearTimeout(delay);
//    }, []);
//    return (
//      <div>
//        {showInitialLoader ? <InitialLoader /> : <ProgressBar />}
//      </div> 
//    );
//  };
//  export default CombinedLoader;

// import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
// import './Loader.css';

// const InitialLoader = () => {
//   return (
//     <div className="loader">
//       <div className="panWrapper">
//         <div className="pan">
//           <div className="food"></div>
//           <div className="panBase"></div>
//           <div className="panHandle"></div>
//         </div>
//         <div className="panShadow"></div>
//         <p>Your order is being prepared</p>
//       </div>
//     </div>
//   );
// };

// const ProgressBar = () => {
//   const [progress, setProgress] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setProgress((prevProgress) => {
//         if (prevProgress < 100) {
//           return prevProgress + 2;
//         } else {
//           clearInterval(interval);
//           return 100;
//         }
//       });
//     }, 2000);

//     return () => clearInterval(interval);
//   }, []);

//   const handleContinue = () => {
//     alert("Your order has been delivered!");
//     // Navigate to FinalPage.js
//     window.location.href = '/FinalPage';
//   };

//   return (
//     <div>
//       <div id="myProgress">
//         <div id="myBar" style={{ width: `${progress}%` }}></div>
//       </div>
//       <p>Your order is out for delivery...</p>
//       <button className="delivery-button" onClick={handleContinue}>Continue</button>
//     </div>
//   );
// };
// export default ProgressBar;



import React, { useState, useEffect } from 'react';
import './Loader.css';
import FinalPage from './FinalPage'; 

const InitialLoader = () => {
  return (
    <div className="loader">
      <button className="receipt-button">View Receipt</button>
      <div className="panWrapper">
        <div className="pan">
          <div className="food"></div>
          <div className="panBase"></div>
          <div className="panHandle"></div>
        </div>
        <div className="panShadow"></div>
        <p>Your order is being prepared</p>
      </div>
    </div>
  );
};

const ProgressBar = () => {
  const [progress, setProgress] = useState(0);
  const [orderDelivered, setOrderDelivered] = useState(false);
  
  useEffect(() => {
    // Simulate progress with a timeout
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress < 100) {
          return prevProgress + 2;
        } else {
          clearInterval(interval);
          return 100;
        }
      });
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const handleContinue = () => {
    alert("Your order has been delivered!");
    window.location.href = '/FinalPage';
    // Add any additional logic here, such as navigating to another page
  };

  return (
    <div>
      <div id="myProgress">
        <div id="myBar" style={{ width: `${progress}%` }}></div>
      </div>
      <p>Your order is out for delivery...</p>
      <button className="delivery-button" onClick={handleContinue}>Continue</button>
    </div>
  );
};

const DeliveryConfirmationPage = () => {
  return (
    <div>
      <h2>Your order has been delivered!</h2>
    </div>
  );
};

const CombinedLoader = () => {
  const [showInitialLoader, setShowInitialLoader] = useState(true);
  const [orderDelivered, setOrderDelivered] = useState(false);

  const handleReviewPageClick = () => {
    setOrderDelivered(true);
  };

  useEffect(() => {
    // Simulate a delay before showing the progress bar
    const delay = setTimeout(() => {
      setShowInitialLoader(false);
    }, 5000); // Adjust the delay time as needed

    return () => clearTimeout(delay);
  }, []);

  return (
    <div>
      {showInitialLoader ? (
        <InitialLoader />
      ) : orderDelivered ? (
        <DeliveryConfirmationPage />
      ) : (
        <ProgressBar />
      )}
    </div>
  );
};

export default CombinedLoader;

