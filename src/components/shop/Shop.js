import React from "react";

const Shop = (props) => {
    // console.log(props.countfun);
  return (
    <>
      <button
       type="button"
        className="btn btn-primary"
        onClick={props.countfun}
        >
        Primary
      </button>
    </>
  );
};

export default Shop;
