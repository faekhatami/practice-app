import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
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
      <Routes>
        <Route path="/counter" element={<Counter />} />
        <Route path="/form" element={<UserForm />} />
        <Route path="/fetcher" element={<DataFetcher />} />
        <Route path="/" element={<Hello name="Router" />} />
      </Routes>
    </Router>
  );
}

export default App;
