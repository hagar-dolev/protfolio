// src/App.js
import React from "react";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Expirience from "./pages/Expirience";
import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="text-neutral-600 body-font">
      {/*bg-neutral-50*/}
      {/*<Navbar />*/}
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        {/*<Route path="/Expirience" element={<Expirience />} />*/}
      </Routes>
      {/*<About />*/}
      {/*<Projects />*/}
      {/*<Skills />*/}
      {/*<Testimonials />*/}
      {/*<Contact />*/}
    </div>
  );
}
