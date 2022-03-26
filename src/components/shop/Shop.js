import React from "react";

import "./Shop.css";
import Productcard from "../productcard/Productcard";

const Shop = ({products , AddtoCart}) => {

  return (
    <>

      <section id="Items">

{
      products.map(product=><Productcard 
                        key={product.id}
                        product={product}
                        AddtoCart={AddtoCart}
                        ></Productcard>)
}

     
      </section>
    </>
  );
};

export default Shop;

