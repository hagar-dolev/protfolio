// src/App.js
import React from "react";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Testimonials from "./pages/Testimonials";
import {Route, Routes} from "react-router-dom";
import Expirience from "./pages/Expirience";

export default function App() {
  return ( //Maybe main
      <div className="text-neutral-600 bg-neutral-50 body-font">
        <Navbar />
          <Routes>
              <Route path="/" element={<About/>}/>
              <Route path="about" element={<About/>}/>
              <Route path="projects" element={<Projects/>}/>
              <Route path="skills" element={<Skills/>}/>
              <Route path="Testimonials" element={<Testimonials/>}/>
              <Route path="Contact" element={<Contact/>}/>
              <Route path="Expirience" element={<Expirience/>}/>
          </Routes>
        {/*<About />*/}
        {/*<Projects />*/}
        {/*<Skills />*/}
        {/*<Testimonials />*/}
        {/*<Contact />*/}
      </div>
  );
}