import React from "react";

import "./Shop.css";

const Shop = (props) => {
  // console.log(props.countfun);
  // console.log(props.products);
  return (
    <>
      <button
        type="button"
        className="btn btn-primary"
        onClick={props.countfun}
      >
        Primary
      </button>

      <section id="Items">
        {props.products.map((product) => {
          return (
            <>
              <div className="MyCard">
                <div className="image_height">
                  <img
                    src={product.image}
                    className="my-img-fluid"
                    alt={product.name}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title text-center">{product.name}</h5>
                  <p className="card-text text-center fw-bold text-danger">
                    {product.price}
                  </p>

                  <div className="d-grid gap-2">
                    <button 
                    className="btn btn-primary"
                     type="button"
                     onClick={() => props.AddtoCart(product)}
                      >
                       Add to cart
                    </button>
                  </div>

                </div>
              </div>
            </>
          );
        })}
      </section>
    </>
  );
};

export default Shop;

// console.log(product.name);
// console.log(product.id);
// console.log(product.price);
// console.log(product.image);
