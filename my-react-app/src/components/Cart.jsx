import React from "react";

// Component to display the shopping cart
const Cart = ({ cart, adjustQuantity, totalPrice, emptyCart }) => {
  return (
    <div>
      <h2>Shopping Cart</h2>
      {/* If the cart is empty, show a message */}
      {Object.keys(cart).length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {/* List each item in the cart with its ID and quantity */}
          {Object.entries(cart).map(([id, qty]) => (
            <li key={id}>
              Product ID: {id}, Quantity: {qty}
              {/* Button to decrease the quantity of a product */}
              <button onClick={() => adjustQuantity(id, qty - 1)}>-</button>
              {/* Button to increase the quantity of a product */}
              <button onClick={() => adjustQuantity(id, qty + 1)}>+</button>
            </li>
          ))}
        </ul>
      )}
      {/* Display the total price of all items in the cart */}
      <p>Total Price: ${totalPrice()}</p>
      {/* Button to empty the entire cart */}
      <button onClick={emptyCart}>Empty Cart</button>
    </div>
  );
};

export default Cart;
