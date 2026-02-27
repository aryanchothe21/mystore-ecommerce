import React, { useEffect, useState } from "react";

function Home({ addToCart, selectedCategory }) {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/api/products")
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.log(err));
  }, []);

  // Filter by category
  const filteredProducts = selectedCategory
    ? products.filter(p => p.category === selectedCategory)
    : products;

  return (
    <div className="container mt-4">
      <div className="row">
        {filteredProducts.map(product => (
          <div className="col-md-4 mb-3" key={product.id}>
            <div className="card p-3">
              <h5>{product.name}</h5>
              <p>{product.description}</p>
              <p><b>₹ {product.price}</b></p>
              <button 
                className="btn btn-primary"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
