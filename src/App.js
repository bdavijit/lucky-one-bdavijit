import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/shop/Shop";
import { useEffect, useState } from "react";
import Header from "./components/header/Header";
import Cart from "./components/cart/Cart";
import QNA from "./components/QNA/QNA";

function App() {
  const [count, setCount] = useState(0);
  const [products, setProducts] = useState([]);
  const [cartProducts, setcartProducts] = useState([]);

  //loadData
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


  //collect cart data from storage
  useEffect(() => {
    const cartData = localStorage.getItem("cart");
    const savedCart = [];
    if (cartData === null) {
    } else {
      const storedCarts = JSON.parse(cartData);

      for (const storedCart of storedCarts) {
        console.log(savedCart);
        const addedProduct = products.find(
          (product) => product.id === storedCart.id
        );
        if (addedProduct) {
      
          addedProduct.quantity = storedCart.quantity;
          savedCart.push(addedProduct);
        }
      }
      
    }

    setcartProducts(savedCart);
  }, [products]);


  //store to local storage
  const StorData = () => {
    console.log(cartProducts);

    let cartData = [];

    cartProducts.forEach((product) => {
      cartData = [...cartData, { id: product.id, quantity: product.quantity }];
    });
    // console.log(cartData);
    localStorage.setItem("cart", JSON.stringify(cartData));
  };

  //click delete button -> delete item from cart
  const DeleteCart = ({ id }) => {
    const rest = cartProducts.filter((product) => product.id !== id);
    setcartProducts(rest);
    StorData();
  };

  const AddtoCart = (AddProduct, btnIdentity = "plus") => {
    let newCart = [];
    //just use to copy to newArr
    let newArr = cartProducts.filter((product) => product);

    const exists = cartProducts.find((product) => product.id === AddProduct.id);
    if (!exists) {
      AddProduct.quantity = 1;
      newCart = [...cartProducts, AddProduct];
      setcartProducts(newCart);
    } else {
      // if i used [...rest, exists];, then cart product always change the position when i click (+ -) button
      for (const product of newArr) {
        if (product.id === AddProduct.id) {
          if (btnIdentity === "plus") {
            if (product.stock === AddProduct.quantity) {
              alert("stock over");
            } else {
              product.quantity += 1;
            }
          } else {
            // because quantity>=1
            if (product.quantity !== 1) {
              product.quantity -= 1;
            }
          }
        }
      }
      setcartProducts(newArr);

      // console.log(cartProducts);
    }
    StorData();
  };

  // console.log(cartProducts);

  //use in other component
  const countfun = () => {
    setCount(count + 1);
  };

  return (
    <div className="App">
      <Header count={count} />
      {/* Just For perfect Scrolling (href="#ProductBox") */}
      <div id="ProductBox"></div>
      <Shop
        //  countfun={countfun}
        products={products}
        AddtoCart={AddtoCart}
      />
      {/* Just For perfect Scrolling (href="#CardBox")*/}
      <div id="CardBox"></div>
      <Cart
        count={count}
        setCount={setCount}
        cartProducts={cartProducts}
        DeleteCart={DeleteCart}
        AddtoCart={AddtoCart}
        setcartProducts={setcartProducts}
      />
      <QNA />
    </div>
  );
}

export default App;
