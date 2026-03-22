import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Academics from "./components/Academics";

import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      {/* top padding to ensure content is below navbar */}
      <div className="pt-2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/academics" element={<Academics />} />
         
        </Routes>
      </div>
    </BrowserRouter>
  );
}
// // import React from 'react'
// // import Navbar from "./components/Navbar"
// // import ParticleBackground from './components/ParticleBackgound'
// // import Hero from './components/Hero'
// // import Academics from './components/Academics'

// // function App() {
// //   return (
// //     <div>
// //     <ParticleBackground/>
// //       <Navbar/>
// //       <Hero/>
// //       <Academics/>
// //     </div>
// //   )
// // }

// export default App