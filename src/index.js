import React from "react";
import ReactDOM from "react-dom";

import GroceryApp from "./GroceryApp.js";

ReactDOM.render(<GroceryApp
  products={[
    { name: "Oranges", votes: 0 },
    { name: "Bananas", votes: 0 }
  ]}
/>, document.getElementById("root"));
