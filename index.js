
import React, { useState } from "react";
import { render } from "react-dom";

// returns a random integer in interval [min, max]
const randomNumberInRange = function(min, max) {
    return Math.floor(Math.random() * Math.floor(max - min + 1)) + min;
}

const App = () => {

  return (
    <div>Add logic to index.js to fullfill the requirements.</div>
  );
};

render(<App />, document.getElementById("root"));

