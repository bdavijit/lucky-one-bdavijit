import React from "react";
import "./Cart.css";

const Cart = (props) => {
  // console.log(props.count);
  //   console.log(props.cartProducts);
  // props.setCount(2);
  return (
    <>
      <section id="Cart_Box">
        {props.cartProducts.map((element) => {
          console.log(element.name);
          console.log(element.price);
          console.log(element.quantity);
          console.log(element.image);
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
        
      </section>
    </>
  );
};

export default Cart;
