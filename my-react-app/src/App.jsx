// Import React only
import React from 'react'
import './App.css'

// Our list of products
const products = [
  { id: 1, name: "Basic T-Shirt", price: 19.99 },
  { id: 2, name: "Blue Jeans", price: 49.99 },
  { id: 3, name: "Running Sneakers", price: 79.99 },
  { id: 4, name: "Baseball Cap", price: 24.99 },
  { id: 5, name: "Wool Socks 3-Pack", price: 15.99 },
  { id: 6, name: "Hoodie", price: 39.99 },
  { id: 7, name: "Winter Jacket", price: 89.99 },
  { id: 8, name: "Leather Belt", price: 29.99 },
  { id: 9, name: "Sunglasses", price: 34.99 },
  { id: 10, name: "Dress Shirt", price: 54.99 },
  { id: 11, name: "Sweatpants", price: 44.99 },
  { id: 12, name: "Beanie", price: 19.99 },
  { id: 13, name: "Sandals", price: 29.99 },
  { id: 14, name: "Backpack", price: 49.99 },
  { id: 15, name: "Scarf", price: 24.99 },
  { id: 16, name: "Gloves", price: 19.99 },
  { id: 17, name: "Tank Top", price: 17.99 },
  { id: 18, name: "Shorts", price: 34.99 },
  { id: 19, name: "Rain Jacket", price: 64.99 },
  { id: 20, name: "Wallet", price: 39.99 }
]

// Create a class that extends React.Component
class App extends React.Component {
  // Constructor to initialize our data
  constructor() {
    super()
    this.cart = []
    this.searchText = ''
  }

  // Function to add items to cart
  addToCart(product) {
    
    const foundItem = this.cart.find(item => item.id === product.id)

    if (foundItem) {
    
      foundItem.quantity = foundItem.quantity + 1
    } else {
      
      this.cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1
      })
    }

    // Tell React to update the screen
    this.forceUpdate()
  }

  // Function to remove items from cart
  removeFromCart(productId) {
    this.cart = this.cart.filter(item => item.id !== productId)
    this.forceUpdate()
  }

  // Function to update quantity
  updateQuantity(productId, newQuantity) {
    if (newQuantity < 1) {
      this.removeFromCart(productId)
      return
    }

    // Update the quantity
    this.cart = this.cart.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: newQuantity }
      }
      return item
    })

    // Tell React to update the screen
    this.forceUpdate()
  }

  // Function to handle search
  handleSearch(event) {
    this.searchText = event.target.value
    this.forceUpdate()
  }

  render() {
    // Calculate total price
    const total = this.cart.reduce((sum, item) => sum + (item.price * item.quantity), 0)

    // Filter products based on search text
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(this.searchText.toLowerCase())
    )

    return (
      <div className="app">
        <h1>Shop Easy</h1>

        {/* Search box */}
        <div className="search-sort">
          <input
            type="text"
            placeholder="Search products..."
            value={this.searchText}
            onChange={(event) => this.handleSearch(event)}
            className="search-input"
          />
        </div>

        <div className="container">
          {/* Products Section */}
          <div className="product-list">
            <h2>Products</h2>
            <div className="products">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  <h3>{product.name}</h3>
                  <p>${product.price}</p>
                  <button onClick={() => this.addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Shopping Cart Section */}
          <div className="cart">
            <h2>Shopping Cart</h2>
            {this.cart.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>
                {this.cart.map(item => (
                  <div key={item.id} className="cart-item">
                    <div className="item-info">
                      <h3>{item.name}</h3>
                      <p>${item.price}</p>
                    </div>
                    <div className="item-controls">
                      <button 
                        onClick={() => this.updateQuantity(item.id, item.quantity - 1)}
                        className="quantity-btn"
                      >
                        -
                      </button>
                      <span>{item.quantity}</span>
                      <button 
                        onClick={() => this.updateQuantity(item.id, item.quantity + 1)}
                        className="quantity-btn"
                      >
                        +
                      </button>
                      <button 
                        onClick={() => this.removeFromCart(item.id)}
                        className="remove-btn"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                ))}
                <div className="cart-total">
                  <h3>Total: ${total.toFixed(2)}</h3>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default App