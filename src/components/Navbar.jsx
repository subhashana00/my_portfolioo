// import { useEffect } from "react";

// export const Navbar = ({ menuOpen, setMenuOpen }) => {
//   useEffect(() => {
//     document.body.style.overflow = menuOpen ? "hidden" : "";
//   }, [menuOpen]);

//   return (
//     <nav className="fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg">
//       <div className="max-w-5xl mx-auto px-4">
//         <div className="flex justify-between items-center h-16">
//           {/* Logo */}
//           <a
//             href="#home"
//             className="font-poppins text-xl font-bold text-white hover:text-blue-500 transition-colors"
//           >
//             prabhath
//             <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg">
//               .subhashana
//             </span>
//           </a>

//           {/* Hamburger Menu (Mobile) */}
//           <div
//             className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
//             onClick={() => setMenuOpen((prev) => !prev)}
//             aria-label="Toggle Menu"
//           >
//             <div
//               className={`w-full h-[2px] bg-white absolute transition-transform duration-300 ${
//                 menuOpen ? "rotate-45 translate-y-[6px]" : ""
//               }`}
//             ></div>
//             <div
//               className={`w-full h-[2px] bg-white absolute top-[6px] transition-opacity duration-300 ${
//                 menuOpen ? "opacity-0" : ""
//               }`}
//             ></div>
//             <div
//               className={`w-full h-[2px] bg-white absolute top-[12px] transition-transform duration-300 ${
//                 menuOpen ? "-rotate-45 translate-y-[-6px]" : ""
//               }`}
//             ></div>
//           </div>

//           {/* Desktop Menu */}
//           <div className="hidden md:flex items-center space-x-8">
//             <a
//               href="#home"
//               className="text-gray-300 hover:text-white transition-colors relative group"
//             >
//               Home
//               <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a
//               href="#about"
//               className="text-gray-300 hover:text-white transition-colors relative group"
//             >
//               About
//               <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a
//               href="#skills"
//               className="text-gray-300 hover:text-white transition-colors relative group"
//             >
//               Skills
//               <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a
//               href="#experience"
//               className="text-gray-300 hover:text-white transition-colors relative group"
//             >
//               Experience
//               <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a
//               href="#projects"
//               className="text-gray-300 hover:text-white transition-colors relative group"
//             >
//               Projects
//               <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//             <a
//               href="#contact"
//               className="text-gray-300 hover:text-white transition-colors relative group"
//             >
//               Contact
//               <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Navbar animation variants
  const navbarVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }
    }
  };

  // Menu item variants for staggered animation
  const menuItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (custom) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: custom * 0.1,
        duration: 0.5
      }
    })
  };

  return (
    <motion.nav 
      className={`fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg ${
        scrolled ? "py-2" : "py-3"
      } transition-all duration-300`}
      initial="hidden"
      animate="visible"
      variants={navbarVariants}
    >
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.a
            href="#home"
            className="font-poppins text-xl font-bold text-white hover:text-blue-500 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            prabhath
            <span className="bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-bg">
              .subhashana
            </span>
          </motion.a>

          {/* Hamburger Menu (Mobile) */}
          <div
            className="w-7 h-5 relative cursor-pointer z-40 md:hidden"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            <div
              className={`w-full h-[2px] bg-white absolute transition-transform duration-300 ${
                menuOpen ? "rotate-45 translate-y-[6px]" : ""
              }`}
            ></div>
            <div
              className={`w-full h-[2px] bg-white absolute top-[6px] transition-opacity duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-full h-[2px] bg-white absolute top-[12px] transition-transform duration-300 ${
                menuOpen ? "-rotate-45 translate-y-[-6px]" : ""
              }`}
            ></div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((item, index) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-300 hover:text-white transition-colors relative group"
                custom={index}
                variants={menuItemVariants}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {item}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full"></span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
