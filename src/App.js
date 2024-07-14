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
    <ThemeProvider>
      <div>
        <ThemeSwitcher />
      </div>
    </ThemeProvider>
  );
}

export default App;
