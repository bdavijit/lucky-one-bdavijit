import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import "./Shop.css";

const Shop = (props) => {

  return (
    <>

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
                  <p className="card-text text-center fw-bold text-primary">
                    {product.price}
                  </p>

                  <div className="d-grid gap-2">
                    <button 
                    className="btn text-white"
                     type="button"
                     style={{ background: "#120E43" }}
                     onClick={() => props.AddtoCart(product)}
                      >
                      <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> Add to cart
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
