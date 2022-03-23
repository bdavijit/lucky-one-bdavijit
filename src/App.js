import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Shop from "./components/shop/Shop";
import { useState } from "react";

function App() {
  const [count, setCount] =useState(0);

   const countfun=()=>{
     setCount(count + 1 );
   }
  return (
    <div className="App">
    <h1>{count}</h1>
    <Shop countfun={countfun}/>

    </div>
  );
}

export default App;
