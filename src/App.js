// src/App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Header from "./components/layout/Header";
import Work from "./pages/Work";
import About from "./pages/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Research from "./pages/Research";
import Photography from "./pages/Photography";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
        <Header />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/work" element={<Work />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/research" element={<Research />} />
            <Route path="/photography" element={<Photography />} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  );
}

export default App;
