import React from "react";
import Hello from "./Hello";
import Counter from "./Counter";
import UserForm from "./UserForm";
import DataFetcher from "./DataFetcher";

function App() {
  return (
    <div>
      <Hello name="React" />
      <Hello name="World" />
      <Counter />
      <UserForm />
      <DataFetcher />
    </div>
  );
}

export default App;
