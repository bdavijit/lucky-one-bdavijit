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
        {props.products.forEach((product) => {
          console.log(product.name);
          console.log(product.id);
          console.log(product.price);
          console.log(product.image);
          return(
              <>
                
             </>
          );
        })}
      </section>
    </>
  );
};

export default Shop;
