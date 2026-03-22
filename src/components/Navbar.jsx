// src/components/Navbar.jsx
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion"; // <-- for smooth animation
import Logo from "../assets/logo-p.jpeg";

const navLinks = ["home", "academics", "simulations", "research"];

export default function Navbar() {
  const [active, setActive] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Detect scroll for active section
  useEffect(() => {
    const handleScroll = () => {
      navLinks.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          const top = section.offsetTop - 96;
          const bottom = top + section.offsetHeight;
          if (window.scrollY >= top && window.scrollY < bottom) {
            setActive(id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      const yOffset = -96;
      const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
      setMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <li
              key={link}
              className={`cursor-pointer font-medium ${
                active === link ? "text-blue-400" : "hover:text-blue-300"
              }`}
              onClick={() => scrollToSection(link)}
            >
              {link.toUpperCase()}
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <div className="md:hidden cursor-pointer z-50" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Fullscreen Mobile Menu with animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black flex flex-col justify-center items-center"
          >
            <ul className="flex flex-col items-center gap-12">
              {navLinks.map((link, index) => (
                <motion.li
                  key={link}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 50 }}
                  transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                  className="text-center"
                >
                  <button
                    onClick={() => scrollToSection(link)}
                    className={`text-3xl font-bold ${
                      active === link ? "text-blue-400" : "text-white hover:text-blue-300"
                    }`}
                  >
                    {link.toUpperCase()}
                  </button>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}


// // src/components/Navbar.jsx
// import React, { useState, useEffect } from "react";
// import { Menu, X } from "lucide-react";
// import Logo from "../assets/logo-p.jpeg";

// const navLinks = ["home", "academics", "simulations", "research"];

// export default function Navbar() {
//   const [active, setActive] = useState("home");
//   const [menuOpen, setMenuOpen] = useState(false);

//   // Detect scroll for active section
//   useEffect(() => {
//     const handleScroll = () => {
//       navLinks.forEach((id) => {
//         const section = document.getElementById(id);
//         if (section) {
//           const top = section.offsetTop - 96; // navbar height offset
//           const bottom = top + section.offsetHeight;
//           if (window.scrollY >= top && window.scrollY < bottom) {
//             setActive(id);
//           }
//         }
//       });
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const scrollToSection = (id) => {
//     const section = document.getElementById(id);
//     if (section) {
//       const yOffset = -96; // navbar height
//       const y = section.getBoundingClientRect().top + window.pageYOffset + yOffset;
//       window.scrollTo({ top: y, behavior: "smooth" });
//       setMenuOpen(false);
//     }
//   };

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
//       <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
//         {/* Logo */}
//         <div
//           className="flex items-center gap-2 cursor-pointer"
//           onClick={() => scrollToSection("home")}
//         >
//           <img src={Logo} alt="Logo" className="w-10 h-10 rounded-full" />
//           <span className="font-bold text-xl">Pep Portfolio</span>
//         </div>

//         {/* Desktop links */}
//         <ul className="hidden md:flex gap-8">
//           {navLinks.map((link) => (
//             <li
//               key={link}
//               className={`cursor-pointer font-medium ${
//                 active === link ? "text-blue-400" : "hover:text-blue-300"
//               }`}
//               onClick={() => scrollToSection(link)}
//             >
//               {link.toUpperCase()}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile menu button */}
//         <div className="md:hidden cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
//           {menuOpen ? <X size={28} /> : <Menu size={28} />}
//         </div>
//       </div>

//       {/* Mobile menu */}
//       {menuOpen && (
//         <div className="md:hidden bg-black flex flex-col items-center gap-6 py-10">
//           {navLinks.map((link) => (
//             <button
//               key={link}
//               className={`text-2xl font-bold ${
//                 active === link ? "text-blue-400" : "hover:text-blue-300 text-white"
//               }`}
//               onClick={() => scrollToSection(link)}
//             >
//               {link.toUpperCase()}
//             </button>
//           ))}
//         </div>
//       )}
//     </nav>
//   );
// }