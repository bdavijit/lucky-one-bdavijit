import React from "react";
import "./Cart.css";

const Cart = (props) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of props.cartProducts) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = 20 * product.quantity ;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax;

  return (
    <>
      <section id="Cart_Box">
        {props.cartProducts.map((element) => {
          return (
            <>
              <div className="cartItem">
                <div className="image_height2">
                  <img
                    src={element.image}
                    className="my-img-fluid2"
                    alt={element.name}
                  />
                </div>
                <div className="card-body">
                  <h3 className="card-title text-center">{element.name}</h3>
                  <p className="card-text text-center">price:{element.price}</p>
                </div>
                <div>Quintity:{element.quantity}</div>
                <button
                  type="button"
                  className="btn btn-danger"
                  //    onClick="DeleteCartData('${Item.slug}')"
                >
                  Delete
                </button>
              </div>
            </>
          );
        })}

        <section id="Total_Box">
          {props.setCount(quantity)}
          <div>
            <hr></hr>
            <h4>Order Summary</h4>
            <p>Selected Items: {quantity}</p>
            <p>Total price: ${total}</p>
            <p>Total Shipping: ${shipping}</p>
            <p>Tax: {tax}</p>
            <h5>Grand Total: {grandTotal.toFixed(2)}</h5>
          </div>
        </section>
      </section>
    </>
  );
};

export default Cart;
