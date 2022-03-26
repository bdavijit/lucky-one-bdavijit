import React from "react";
import Cartpoduct from "../cartpoduct/Cartpoduct";
import "./Cart.css";

const Cart = ({
  count,
  setCount,
  cartProducts,
  DeleteCart,
  AddtoCart,
  setcartProducts,
}) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of cartProducts) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = 20 * product.quantity;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  function UndoFromdb() {
    window.location.reload(false);
    const element = document.getElementById("CardBox");
    element.scrollIntoView();
  }

  const ChooseOne = () => {
    let cartlength = cartProducts.length;
    let cart2 = [];
    let cart = cartProducts.map((product) => product);
    let value;

    // generate random value
    for (;;) {
      value = Math.floor(Math.random() * 11);
      // console.log(value);

      if (cartlength < 1) {
        alert("no data found");
        return;
      }
      if (cartlength - 1 < value) {
        continue; //if random value is bigger than cartlength then again generator
      } else {
        break;
      }
    }

    cart2 = [...cart2, cart[value]];

    setcartProducts(cart2);
  };

  return (
    <>
      <section id="Cart_Box">
        {cartProducts.map((product) => (
          <Cartpoduct
            key={product.id}
            element = {product}
            count={count}
            setCount={setCount}
            cartProducts={cartProducts}
            DeleteCart={DeleteCart}
            AddtoCart={AddtoCart}
            setcartProducts={setcartProducts}
          ></Cartpoduct>
        ))}
       

        <div className="d-grid gap-2 col-6 mx-auto">
          <button
            className="btn text-white"
            style={{ background: "#120E43" }}
            type="button"
            onClick={ChooseOne}
          >
            Choose One
          </button>
          <button
            className="btn text-white bg-danger"
            type="button"
            onClick={() => setcartProducts([])}
          >
            Delete All
          </button>
          <button
            className="btn text-white btn-success"
            type="button"
            onClick={UndoFromdb}
          >
            Undo
          </button>
        </div>

        <section id="Total_Box">
          {setCount(quantity)}
          <div>
            <hr></hr>
            <h4 className="text-primary">Order Summary</h4>
            <p>
              Selected Items: <span className="text-primary">{quantity}</span>
            </p>
            <p>
              Total price: <span className="text-primary">${total}</span>
            </p>
            <p>
              Total Shipping: <span className="text-primary">${shipping}</span>
            </p>
            <p>
              Tax: <span className="text-primary">${tax}</span>
            </p>
            <h5>
              Grand Total:{" "}
              <span className="text-primary">${grandTotal?.toFixed(2)}</span>
            </h5>
          </div>
        </section>
      </section>
    </>
  );
};

export default Cart;
