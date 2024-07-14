import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hello from "./Hello";
import Counter from "./Counter";
import UserForm from "./UserForm";
import DataFetcher from "./DataFetcher";
import { ThemeProvider } from "./ThemeContext";
import ThemeSwitcher from "./ThemeSwitcher";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <div>
          <ThemeSwitcher />
        </div>
      </ThemeProvider>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/counter">Counter</Link>
          </li>
          <li>
            <Link to="/form">Form</Link>
          </li>
          <li>
            <Link to="/fetcher">Fetcher</Link>
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
