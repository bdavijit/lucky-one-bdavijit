import React from "react";
import "../../../node_modules/bootstrap/dist/css//bootstrap.min.css";

const QNA = () => {
  return (
    <>
    
      <section id="Cart_Box">
        <h1 style={{color: "#120E43"}}> Props vs State</h1>
        <table className="table table-hover fst-normal table-primary">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Props</th>
              <th scope="col">State</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>1</th>
              <td>Sends from a Parent node</td>
              <td>The state created within the component</td>
              
            </tr>
            <tr>
              <th >2</th>
              <td>Props can only change parent component </td>
              <td>State also change in child component</td>
              
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Update props is synchronous process</td>
              <td>Setstate is an asynchronous process</td>
            </tr>
          </tbody>
        </table>
        <br/>
        <br/>
        <br/>
        <h1 style={{color: "#120E43"}}>How React Works</h1>
        <div>
            
        </div>
      </section>
    </>
  );
};

export default QNA;
