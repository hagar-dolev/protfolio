// import ReactDOM from "react-dom/client";
// import {
//     BrowserRouter,
//     Routes,
//     Route,
// } from "react-router-dom";
// import About from "./pages/About";
// import Projects from "./pages/Projects";
// import App from "./App";
// // import your route components too
//
// const root = ReactDOM.createRoot(
//     document.getElementById("root")
// );
// root.render(
//     <BrowserRouter>
//         <Routes>
//             <Route path="/" element={<App />}>
//                 <Route index element={<About />} />
//                 <Route path="about" element={<About />}>
//                     <Route path="projects" element={<Projects />} />
//                     {/*<Route path="new" element={<NewTeamForm />} />*/}
//                     {/*<Route index element={<LeagueStandings />} />*/}
//                 </Route>
//             </Route>
//         </Routes>
//     </BrowserRouter>
// );


import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <BrowserRouter>
          <App />
      </BrowserRouter>
  </React.StrictMode>
);
