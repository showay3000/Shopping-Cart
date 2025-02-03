import React from "react";

// Component to display the list of products
function ProductList({ products, addToCart }) {  // ✅ Updated prop name
  // If there are no products, display a message
  if (products.length === 0) {
    return (
      <div className="product-list">
        <h2>Products</h2>
        <p className="no-products">No products found</p>
      </div>
    );
  }

  // If products are available, display them
  return (
    <div className="product-list">
      <h2>Products</h2>
      <div className="products">
        {/* Map through each product and display it */}
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <h3>{product.name}</h3> {/* Display product name */}
            <p>${product.price}</p> {/* Display product price */}
            {/* Button to add product to cart */}
            <button onClick={() => addToCart(product.id)}> {/* ✅ Pass product ID */}
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
