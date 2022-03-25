import React from "react";
import "./Cart.css";

const Cart = (props) => {
  let total = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of props.cartProducts) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = 20 * product.quantity;
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
                  <h3 className="card-title text-center text-adjust">
                    {element.name}
                  </h3>
                  <p className="card-text text-center">price:{element.price}</p>
                </div>
                <div>
                  <div>Quintity:{element.quantity}</div>
                  <button 
                  type="button"
                   class="btn btn-outline-dark m-1"
                   onClick={() => props.AddtoCart(element , "minus")}
                   >
                    -
                  </button>
                  <button 
                  type="button" 
                  class="btn btn-outline-dark"
                  onClick={() => props.AddtoCart(element)}
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  className="btn btn-danger"
                  onClick={() => props.DeleteCart(element)}
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
              <span className="text-primary">${grandTotal.toFixed(2)}</span>
            </h5>
          </div>
        </section>
      </section>
    </>
  );
};

export default Cart;
