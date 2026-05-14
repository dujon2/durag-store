import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [searchText, setSearchText] = useState("");
  

  useEffect(() => {
    fetch("http://127.0.0.1:8000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
  const existingItem = cart.find(
    (item) => item.id === product.id
  );

  if (existingItem) {
    const updatedCart = cart.map((item) =>
      item.id === product.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );

    setCart(updatedCart);
  } else {
    setCart([
      ...cart,
      { ...product, quantity: 1 }
    ]);
  }
};


const cartTotal = cart.reduce((t, i) => t + i.price * i.quantity, 0);
const cartCount = cart.reduce((t, i) => t + i.quantity, 0);


const filteredProducts = products.filter((product) =>
  product.name.toLowerCase().includes(searchText.toLowerCase())||
  product.material.toLowerCase().includes(searchText.toLowerCase())
);

const removeFromCart = (product) => {
  const newCart = [...cart];
  const index = newCart.indexOf(product);
  if (index !== -1) {
    newCart.splice(index, 1);
    setCart(newCart);
  }
}

const decreaseQty = (id) => {
  setCart(cart
    .map(i => i.id === id ? { ...i, quantity: i.quantity - 1 } : i)
    .filter(i => i.quantity > 0)
  );
};



  return (
    <div>
      <header className="site-header">
        <div className="logo">CrownWraps</div>

        <nav className="nav-links">
          <a href="#home">Home</a>
          <a href="#shop">Shop</a>
          <a href="#about">About</a>
        </nav>

        <div className="cart-count">Cart: {cart.length}</div>
      </header>

      <main className="container">
        <section id="home" className="hero">
          <h1>Premium Durags for Style, Waves, and Protection</h1>
          <p>Shop velvet, silky, and everyday durags designed for comfort and confidence.</p>
          <a href="#shop" className="hero-button">Shop Now</a>
        </section>

        <section id="shop">
          <div className="section-header">
            <h2>Shop Durags</h2>

            <input
              type="text"
              placeholder="Search durags..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="search-input"
            />
          </div>

          <div className="products">
            {filteredProducts.map((product) => (
              <div className="card" key={product.id}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
                <p>{product.material}</p>
                <p>${product.price}</p>
                <button onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="about">
          <h2>About CrownWraps</h2>
          <p>
            CrownWraps is a durag shop focused on style, comfort, and wave protection.
            This project was built as a full-stack portfolio app using React and FastAPI.
          </p>
        </section>

        <section className="cart">
          <h2>Your Cart</h2>

          {cart.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
              <div className="cart-item" key={item.id}>
                <span>{item.name}</span>

                <div className="qty-controls">
                  <button onClick={() => decreaseQty(item.id)}>-</button>

                  <span>{item.quantity}</span>

                  <button onClick={() => addToCart(item)}>+</button>
                </div>

                <span>${item.price * item.quantity}</span>

                <button
                  className="cart-item delete-button"
                  onClick={() => removeFromCart(item)}
                >
                  ×
                </button>
              </div>
            ))}

              <h3>Total: ${cartTotal}</h3>
            </div>
          )}
        </section>
      </main>
    </div>
  );
}

export default App;