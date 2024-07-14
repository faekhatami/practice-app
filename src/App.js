import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Hello from "./Hello";
import Counter from "./Counter";
import UserForm from "./UserForm";
import DataFetcher from "./DataFetcher";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <link to="/">Home</link>
          </li>
          <li>
            <link to="/counter">Counter</link>
          </li>
          <li>
            <link to="/form">Form</link>
          </li>
          <li>
            <link to="/fetcher">Fetcher</link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route path="/counter">
          <Counter />
        </Route>
        <Route path="/form">
          <UserForm />
        </Route>
        <Route path="/fetcher">
          <DataFetcher />
        </Route>
        <Route path="/">
          <Hello name="Router" />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
