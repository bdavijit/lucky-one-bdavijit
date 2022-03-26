import React from "react";
import "../../../node_modules/bootstrap/dist/css//bootstrap.min.css";

const QNA = () => {
  return (
    <>
      <section id="Cart_Box">
        <h1 style={{ color: "#120E43" }}> Props vs State</h1>
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
              <th>2</th>
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
        <br />
        <br />
        <br />
        <h1 style={{ color: "#120E43" }}>How React Works</h1>
        <div className="text-start w-75 m-auto">
          <p>
            <strong>Model-View-Controller:</strong> There are three types of
            components in MVC
            <br />
            <br /> <strong> Model:</strong> Manages system data and rules.
            <br /> <strong>View:</strong> Work with Dom. How to set and update
            display elements and data.
            <br /> <strong> Controller:</strong> Listens to user input data and
            website event changes। Send to a system model.
          </p>
          <p>
            <strong>Flow:</strong> User - controller - model - View<br></br>
            Controller doesn't change View directly like vanilla js.<br></br>
          </p>
          <strong>Virtual Dom and diff algorithm:</strong>
          <ul>
            <li>
              1. The concept of a virtoal dom come from the DIFF algorithm
            </li>
            <li>
              2. It is JS(JSON) object. So that operation speed is better than
              DOM(html/css render tree).
            </li>
            <li>
              3. The DFF algorithm first <b>sort changes</b> to the virtual DOM.
              Then just change the node by updating the DOM
            </li>
            <li>
              4. Don't <b>traverse</b> node those nodes where has no change
            </li>
            <li>
              5. If everything is the same then just change/load props and state
              data
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default QNA;
