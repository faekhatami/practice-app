import React from "react";
import Hello from "./Hello";
import Counter from "./Counter";
import UserForm from "./UserForm";

function App() {
  return (
    <div>
      <Hello name="React" />
      <Hello name="World" />
      <Counter />
      <UserForm />
    </div>
  );
}

export default App;
