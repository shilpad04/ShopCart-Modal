import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productResponse = await fetch(
          "https://fakestoreapi.com/products"
        );
        const productData = await productResponse.json();
        setProduct(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <h1 className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-200">
        Data is loading please wait
      </h1>
    );
  }

  if (error) {
    return (
      <h1 className="min-h-screen flex items-center justify-center bg-slate-900 text-red-300">
        Error: {error}
      </h1>
    );
  }

  const addToCart = (p) => {
    if (cart.find((item) => item.id === p.id)) {
      alert("Item is already added to the cart");
      return;
    } else {
      setCart([...cart, p]);
    }
  };

  const removeCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId));
  };

  return (
    <div className="App min-h-screen bg-slate-900 text-slate-200">
      <Navbar cartCount={cart.length} onCartClick={() => setShowCart(true)} />

      <h1 className="font-['Playfair_Display'] italic mx-auto mb-6 mt-6 max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-2xl 
      sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-emerald-300">
        Products
      </h1>

      {/* RWD*/}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 xl:grid-cols-4">
        {product.map((p) => (
          <ProductCard product={p} key={p.id} onAddCart={addToCart} />
        ))}
      </div>

      {showCart && (
        <Cart
          cart={cart}
          onClose={() => setShowCart(false)}
          onRemoveFromCart={removeCart}
        />
      )}
    </div>
  );
}

export default App;
