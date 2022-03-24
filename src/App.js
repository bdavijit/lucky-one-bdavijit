import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/shop/Shop";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [cartProducts, setcartProducts] = useState([]);

  useEffect(() => {
    fetch("products.JSON").then(async (response) => {
      try {
        const data = await response.json();
        // console.log("response data?", data);
        setProducts(data);
      } catch (error) {
        console.log("Error happened here!");
        console.error(error);
      }
    });
  }, []);

  const AddtoCart = (AddProduct) => {
    let newCart = [];
    const exists = cartProducts.find(product => product.id === AddProduct.id);
    if(!exists){
         AddProduct.quantity = 1;
        newCart = [...cartProducts, AddProduct];
    }
    else{
        const rest = cartProducts.filter(product => product.id !== AddProduct.id);
        exists.quantity = exists.quantity + 1;
        newCart = [...rest, exists];
    }
    
    setcartProducts(newCart);
  };

  console.log(cartProducts);

  const countfun = () => {
    setCount(count + 1);
  };
  return (
    <div className="App">
      <Header count={count} />
      <h1>{count}</h1>
      <Shop
        countfun={countfun}
        products={products}
        AddtoCart={AddtoCart}
        key={1}
      />
      <Cart count={count} setCount={setCount} cartProducts={cartProducts} />
    </div>
  );
}

export default App;
