import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import ProductCard from "./components/ProductCard";
import Cart from "./components/Cart";
import "./App.css"


function App() {
  const [product, setProduct] = useState([]); //stores the fetched product data
  const [error, setError] = useState(null); // if we have any error
  const [loading, setLoading] = useState(true); //this is loading message
  const [cart, setCart] = useState([]); //it is going to manages the items added to the cart
  const [showCart, setShowCart] = useState(false);

  // useEffect to do an api call
  useEffect(() => {
    // fetch the data from the api
    const fetchProduct = async () => {
      try {
        const productResponse = await fetch("https://fakestoreapi.com/products");
        const productData = await productResponse.json(); //parse the json response
        setProduct(productData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, []);

  // condition for loading
if (loading) {
  return <h1>Data is loading please wait</h1>
}

//condition if error
if (error) {
  return <h1>Error: {error}</h1>
}

// to add the product in cart
const addToCart = (product) => {
  if(cart.find(item => item.id === product.id)) {
    alert("Item is already added to the cart");
    return;
  }
  else {
    setCart([...cart, product])
  }
}

// to remove the product from the cart
const removeCart = (productId) => {
  setCart(cart.filter(item => item.id !== productId))
}

return (
  <div className="App">
    {/* navbar component to display the number of items added to the cart */}
    <Navbar cartCount = {cart.length} onCartClick = {() => setShowCart(true)}/>
    <h1>Products</h1>

    {/* display the products */}
    <div className="product">
      {product.map((product) => (
        <ProductCard 
          product={product}
          key={product.id}
          onAddCart = {addToCart}
        />
      ))}
       </div>

    {/* render the cart component */}
    {showCart && (
      <Cart 
        cart = {cart}
        onClose = {() => setShowCart(false)}
        onRemoveFromCart = {removeCart}
      />
    )}
  </div>
)
}

export default App
