import React, { useState, useEffect } from 'react';
import ConfirmationPage from './ConfirmationPage';

const OrderPage = () => {
  const [loading, setLoading] = useState(true); // Set initial loading state to true
  const [selectedRestaurant, setSelectedRestaurant] = useState(null);
  const [cart, setCart] = useState([]);
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const [showConfirmationPage, setShowConfirmationPage] = useState(false);
  
  
  useEffect(() => {
    setTimeout(() => { 
      setLoading(false);
    }, 1500); // Set a timeout of 1.5 seconds to simulate loading delay
  }, []);

  const restaurants = [
    {
      id: 1,
      name: 'Ariba Kitchen',
      menu: [
        { item: 'butter chicken', price: 280 },
        { item: 'dal chwal', price: 250 },
        { item: 'chicken without chicken', price: 300 },
        { item: 'better ch.', price: 250 },
  
      ],
    },
    { id: 2,
        name: 'Kitchen',
        menu: [
          { item: 'Chicken Dum Biryani', price: 280 },
          { item: 'Mutton Dum Biryani', price: 250 },
          { item: 'Chicken Tandoori', price: 300 },
          { item: 'Veg Biryani', price: 250 },
        ], },
    { id: 3, name: 'Other2...', menu: [{ item: '...', price: 0 }] },
    { id: 4,
      name: 'Moms Kitchen',
      menu: [
        { item: 'Pizza', price: 320 },
        { item: 'Burger', price: 100 },
      ], },
  ];
  const handleCartIconClick = () => {
    setCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };

  const handleRestaurantSelect = (restaurant) => {
    setSelectedRestaurant(restaurant);
  };
 
  const removeFromCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.item === item.item);
  
    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      if (updatedCart[existingItemIndex].quantity > 1) {
        updatedCart[existingItemIndex].quantity -= 1;
      } else {
        updatedCart.splice(existingItemIndex, 1);
      }
      setCart(updatedCart);
    }
  };
  const addToCart = (item) => {
    const existingItemIndex = cart.findIndex((cartItem) => cartItem.item === item.item);

    if (existingItemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingItemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, { ...item, quantity: 1 }]);
    }
  };

  const getTotalAmount = () => {
    const totalAmount = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    return totalAmount.toFixed(2);
  };
  const getCartItemQuantity = (item) => {
    const cartItem = cart.find((cartItem) => cartItem.item === item.item);
    return cartItem ? cartItem.quantity : 0;
  };

  const handleContinueClick = () => {
    if (getTotalAmount() === '0.00') {
      window.alert('Please add some items to the cart.');
    } else {
      setShowConfirmationPage(true);
    }
  };

  useEffect(() => {
    // Apply overflow style based on loading state
    document.body.style.overflow = loading ? 'hidden' : 'auto';
  }, [loading]);

  return (
   <div style={styles.container}>
      <div style={styles.content}>
        {loading ? (
          <div style={styles.preloaderContainer}>
          <div style={styles.loading}>Redirecting you to the MENU.</div>
          </div>
        ) : (
          <>
           {showConfirmationPage ? (
              <ConfirmationPage />
            ) : (
              <>
            <div style={styles.header} >
              {/* <h1 style={styles.title}>Apna Dabba</h1> */}
              <h1 style={styles.title}>Place Your Order.</h1>
              <button style={styles.cartButton} onClick={handleCartIconClick}>
  <span style={styles.cartIcon}>🛒</span>
  <span style={styles.cartTotal}>Total: ₹{getTotalAmount()}</span>
</button>

            </div>
           
            <h2 style={styles.homeCookTitle}>Home-Cooks</h2>

              
              <div style={styles.restaurants}>
              {restaurants.map((restaurant) => (
                <div
                  key={restaurant.id}
                  style={styles.restaurantItem}
                  onClick={() => handleRestaurantSelect(restaurant)}
                >
                  {restaurant.name}
                </div>
              ))}
            </div>

            {selectedRestaurant && (
  <div style={styles.menu}>
    <h2>{selectedRestaurant.name} Menu</h2>
    {selectedRestaurant.menu.map((item) => (
      <div key={item.item}  style={styles.menuItem}>
        <div style={styles.menuItemInfo}>
          <span>{item.item}</span>
          <span>₹{item.price}</span>
        </div>
        <div style={styles.quantityControls}>
          <button onClick={() => addToCart(item)}>Add</button>
          <span style={styles.quantity}>   Quantity:   {getCartItemQuantity(item)}</span>
          <button onClick={() => removeFromCart(item)}>Remove</button>
        </div>
      </div>
    ))}
  </div>
)}
        {isCartModalOpen && (
          <div style={styles.cartModal}>
            <div style={styles.cartModalContent}>
              <h2>Cart</h2>
              {cart.map((item) => (
                <div key={item.item} style={styles.cartItem}>
                 {item.item} - ₹{item.price} x {item.quantity}
                 <div>Total: ₹{(item.price * item.quantity).toFixed(2)}</div>
                </div>
               ))}
              <button style={styles.closeCartModalButton}
               onClick={handleCloseCartModal}>
                Close
              </button>
              <button style={styles.continueButton} onClick={handleContinueClick}>
        Continue
      </button>
      
            </div>
          </div>
         )}</>
        )}  </>
        )}
      </div>
    </div>
  
  );
};

const styles = {
  cartModal: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    border: '2px solid #4CAF50',
    zIndex: 9999,
    minWidth: '300px',
  },

  cartModalContent: {
    textAlign: 'center',
  },

  closeCartModalButton: {
    backgroundColor: '#007bff',
    color: '#fff',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
    marginTop: '15px',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  content: {
    flex: 1,
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
  },
  homeCookTitle: {
    fontSize: '44px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  preloaderContainer: {
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
  },
  loading: {
    textAlign: 'center',
    marginTop: '60px',
    fontFamily: 'ink free',
    fontWeight: 'bold',
    fontSize: '70px',  
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    fontFamily: 'ink free',
  },
  cart: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
  },
  cartIcon: {
    marginRight: '5px',
    fontSize: '20px',
  },
  cartTotal: {
    fontWeight: 'bold',
    fontSize: '16px',
  },
  restaurants: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
  },
  restaurantItem: {
    position: 'relative',
    cursor: 'pointer',
    width: '250px',
    height: '150px',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '10px',
    padding: '20px',
    textAlign: 'center',
  },
  menu: {
    marginBottom: '20px',
  },
  menuItem: {
    cursor: 'pointer',
    fontSize: '16px',
    marginBottom: '5px',
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  cartItems: {
    marginBottom: '20px',
  },
  cartItem: {
    fontSize: '16px',
    marginBottom: '5px',
    padding: '5px',
    borderRadius: '5px',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },

  cartButton: {
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#6ae6a5',
    color: '#021209',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '3px',
    cursor: 'pointer',
  },
};

export default OrderPage;