import React from "react";
import Hello from "./Hello";
import Counter from "./Counter";

function App() {
  return (
    <div>
      <Hello name="React" />
      <Hello name="World" />
    </div>
  );
}

function App2() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;
