import React from 'react';

function Cart({ cart, onRemove, onUpdateQuantity }) {
  // Calculate the total price of the items in the cart
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // If the cart is empty, display a message
  if (cart.length === 0) {
    return (
      <div className="cart">
        <h2>Shopping Cart</h2>
        <p>Your cart is empty</p>
      </div>
    )
  }

  // Render the list of items in the cart
  return (
    <div className="cart">
      <h2>Shopping Cart</h2>
      {/* Loop through each item in the cart and display it */}
      {cart.map(item => (
        <div key={item.id} className="cart-item">
          <div className="item-info">
            <h3>{item.name}</h3> {/* Display the item name */}
            <p>${item.price}</p> {/* Display the item price */}
          </div>
          <div className="item-controls">
            {/* Button to decrease the item quantity */}
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
              className="quantity-btn"
            >
              -
            </button>
            {/* Display the current item quantity */}
            <span>{item.quantity}</span>
            {/* Button to increase the item quantity */}
            <button 
              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
              className="quantity-btn"
            >
              +
            </button>
            {/* Button to remove the item from the cart */}
            <button 
              onClick={() => onRemove(item.id)}
              className="remove-btn"
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      {/* Display the total price of all items in the cart */}
      <div className="cart-total">
        <h3>Total: ${total}</h3>
      </div>
    </div>
  )
}

export default Cart;
