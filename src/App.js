import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import Kids from "./Kids";
import About from "./About";
import "./App.css";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/" className="linkOne">
          Сочный Бургер
        </Link>
        <Link to="/about" className="link">
          О нас
        </Link>
        <Link to="/kids" className="link">
          KIds Kombo
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/kids" element={<Kids />} />
      </Routes>
    </Router>
  );
}

export default App;
