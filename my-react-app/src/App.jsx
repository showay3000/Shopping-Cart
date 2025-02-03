import { useState } from 'react';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import './App.css';

// Sample products list
const products = [
  { id: 1, name: 'T-Shirt', price: 20, category: 'Clothing' },
  { id: 2, name: 'Jeans', price: 40, category: 'Clothing' },
  { id: 3, name: 'Sneakers', price: 60, category: 'Footwear' },
  { id: 4, name: 'Cap', price: 15, category: 'Accessories' },
  { id: 5, name: 'Shirt', price: 5, category: 'Clothing' },
];

const App = () => {
  // State to keep track of the shopping cart (which products and how many)
  const [cart, setCart] = useState({});
  // State to filter the products by name or category
  const [filter, setFilter] = useState('');

  // Function to add a product to the cart
  const addToCart = (id) =>
    setCart((prev) => ({ ...prev, [id]: (prev[id] || 0) + 1 }));

  // Function to remove a product from the cart
  const removeFromCart = (id) =>
    setCart((prev) => {
      const { [id]: _, ...rest } = prev; // Remove the product by id
      return rest;
    });

  // Function to adjust the quantity of a product in the cart
  const adjustQuantity = (id, qty) =>
    qty > 0 ? setCart((prev) => ({ ...prev, [id]: qty })) : removeFromCart(id);

  // Function to clear the entire cart
  const emptyCart = () => setCart({});

  // Function to calculate the total price of all items in the cart
  const totalPrice = () =>
    Object.entries(cart).reduce(
      (total, [id, qty]) =>
        total + (products.find((p) => p.id === +id)?.price || 0) * qty,
      0
    );

  // Filter products based on search input
  const filteredProducts = products.filter(
    ({ name, category }) =>
      name.toLowerCase().includes(filter.toLowerCase()) ||
      category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="app">
      <h1>Simple E-Commerce Cart</h1>
      {/* Search bar to filter products */}
      <input
        type="text"
        placeholder="Search products..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)} // Update filter value on change
        className="search-input"
      />
      {/* Display filtered products */}
      <ProductList products={filteredProducts} addToCart={addToCart} />
      {/* Display the cart and total price */}
      <Cart cart={cart} adjustQuantity={adjustQuantity} totalPrice={totalPrice} emptyCart={emptyCart} />
    </div>
  );
};

export default App;
