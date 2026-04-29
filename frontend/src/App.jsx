import { useEffect, useState } from "react";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())//change the response to json format
      .then((data) => setProducts(data))//Save the products into React state so the page can display them.
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container">
      <section className="hero">
        <h1>Durag Store</h1>
        <p>Premium durags for style, waves, and protection.</p>

        <button>Shop Durags</button>
      </section>
      <div className="products">
        {products.map((product) => (
          <div key={product.id}>
            <img src={product.image} alt={product.name} width="200" />
            <h3>{product.name}</h3>
            <p>{product.material}</p>
            <p>${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <h2>Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map((item, index) => (
            <p key={index}>
              {item.name} - ${item.price}
            </p>
          ))}

          <h3>Total: ${cartTotal}</h3>
        </div>
      )}
    </div>
  );
}

export default App;