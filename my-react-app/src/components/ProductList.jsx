import React from 'react';

function ProductList({ products, onAddToCart }) {
  // If there are no products, display a message indicating that
  if (products.length === 0) {
    return (
      <div className="product-list">
        <h2>Products</h2>
        <p className="no-products">No products found</p> {/* Display message if no products */}
      </div>
    )
  }

  // Render the list of products
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {/* Loop through each product and render it */}
        {products.map(product => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3> {/* Display product name */}
            <p>${product.price}</p> {/* Display product price */}
            <button onClick={() => onAddToCart(product)}> {/* Add to cart button */}
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductList;