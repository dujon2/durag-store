import { useEffect, useState } from "react";

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
    setCart([...cart, product]);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchText.toLowerCase())||
    product.material.toLowerCase().includes(searchText.toLowerCase())
  );

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
              {cart.map((item, index) => (
                <p key={index}>
                  {item.name} - ${item.price}
                </p>
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