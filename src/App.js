import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/shop/Shop";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";

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
    console.log(AddProduct);
    let flag = true;
    let newArr = [];

    cartProducts.forEach((cartProduct) => {
      if (cartProduct.id === AddProduct.id) {
        cartProduct.quantity += 1;
        flag = false;
        console.log(cartProducts);
      }
    });

    if(flag){
      newArr = [...cartProducts , AddProduct];
      setcartProducts(newArr);
    }
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
      
    </div>
  );
}

export default App;
