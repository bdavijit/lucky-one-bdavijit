import React from "react";

const Cartpoduct = ({
  // count,
  // setCount,
  // cartProducts,
  DeleteCart,
  AddtoCart,
  // setcartProducts,
  element,
}) => {
  return (
    <>
      <div className="cartItem">
        <div className="image_height2">
          <img
            src={element?.image}
            className="my-img-fluid2"
            alt={element?.name}
          />
        </div>
        <div className="card-body">
          <h3 className="card-title text-center text-adjust">
            {element?.name}
          </h3>
          <p className="card-text text-center">price:{element?.price}</p>
        </div>
        <div>
          <div>Quintity:{element?.quantity}</div>
          <button
            type="button"
            className="btn btn-outline-dark m-1"
            onClick={() => AddtoCart(element, "minus")}
          >
            -
          </button>
          <button
            type="button"
            className="btn btn-outline-dark"
            onClick={() => AddtoCart(element)}
          >
            +
          </button>
        </div>
        <div>
          <p className="card-text text-center">
            {element?.price * element?.quantity}
          </p>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => DeleteCart(element)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default Cartpoduct;
