import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  {/* Search + Category filter */}
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setProducts(data);
      } catch (err) {
        setError(err.message || "Failed to fetch");
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, []);

  if (loading) {
    return (
      <h1 className="min-h-screen flex items-center justify-center bg-slate-900 text-slate-200 italic">
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

  {/* Unique categories */}
  const categories = [...new Set(products.map((p) => p.category))];

  {/* Filter by category + search */}
  const filtered = products.filter((p) => {
    const byCat = selectedCategory ? p.category === selectedCategory : true;
    const bySearch = p.title.toLowerCase().includes(searchTerm.toLowerCase());
    return byCat && bySearch;
  });

  {/* Cart actions */}
  const addToCart = (p) => {
    if (cart.find((i) => i.id === p.id)) {
      alert("Item is already added to the cart");
      return;
    }
    setCart((prev) => [...prev, p]);
  };

  const removeCart = (id) => {
    setCart((prev) => prev.filter((i) => i.id !== id));
  };



  return (
    <div className="App min-h-screen bg-slate-900 text-slate-200">
      <Navbar
        cartCount={cart.length}
        onCartClick={() => setShowCart(true)}
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
        searchValue={searchTerm}
        onSearch={setSearchTerm}
      />

      <h1 className="font-['Merriweather'] italic mx-auto mb-6 mt-6 max-w-7xl px-4 sm:px-6 lg:px-8 text-center 
      text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-wide text-emerald-300">
        Products
      </h1>

      {/* Single column on mobile*/}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-4 sm:gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 
      md:grid-cols-3 xl:grid-cols-4">
        {filtered.map((p) => (
          <ProductCard
            key={p.id}
            product={p}
            onAddCart={addToCart}
          />
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
