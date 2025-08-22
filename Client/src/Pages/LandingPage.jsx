import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { FaCogs, FaBoxOpen, FaTools, FaPuzzlePiece } from "react-icons/fa";


const LandingPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);


  return (
    <div className="w-full min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">ACCURAMECH INDUSTRIES</h1>
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to="/spare-parts">SpareParts</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to="/assembly">Assembly</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to="/variables">Variables</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to="/mechanism">Mechanisms</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to="/repair-kit">Repair Kits</Link>
            </li>
          </ul>

        </div>
      </nav>




      {/* Hero / Banner */}
      <section
        className="h-screen w-full bg-cover bg-center flex items-center justify-center text-white relative"
        style={{ backgroundImage: "url('/Banner image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
          className="relative text-center px-6"
        >
          <h1 className="text-4xl md:text-6xl font-bold">
            Precision Engineering, Industrial Excellence
          </h1>
          <p className="mt-6 text-lg md:text-2xl max-w-2xl mx-auto">
            Explore our advanced product catalogue in mechanical solutions,
            designed for industries of tomorrow.
          </p>
          <button
            onClick={() => {
              const element = document.getElementById("cards-section");
              element?.scrollIntoView({ behavior: "smooth" });
            }}
            className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl text-lg font-semibold shadow-lg"
          >
            Explore Products
          </button>

        </motion.div>


      </section>


      {/* Cards Navigation */}
      <section id="cards-section" className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Card: Spare Parts */}
          <Link
            to="/spare-parts"
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <FaBoxOpen className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Spare Parts</h3>
            <p className="text-gray-500 text-center text-sm">
              Browse our premium spare parts for industrial machines.
            </p>
          </Link>

          {/* Card: Assembly */}
          <Link
            to="/assembly"
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <FaCogs className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Assembly</h3>
            <p className="text-gray-500 text-center text-sm">
              Explore assembled products ready for industrial deployment.
            </p>
          </Link>

          {/* Card: Variables */}
          <Link
            to="/variables"
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <FaPuzzlePiece className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Variables</h3>
            <p className="text-gray-500 text-center text-sm">
              Check out the customizable variables for your setups.
            </p>
          </Link>

          {/* Card: Mechanism */}
          <Link
            to="/mechanism"
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <FaTools className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mechanisms</h3>
            <p className="text-gray-500 text-center text-sm">
              Discover our mechanical mechanisms and components.
            </p>
          </Link>

          {/*Card: RepairKit */}
          <Link
            to="/repair-kit"
            className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:scale-105 transition-transform"
          >
            <FaTools className="text-4xl text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Repair Kits</h3>
            <p className="text-gray-500 text-center text-sm">
              Explore our comprehensive repair kits for efficient maintenance.
            </p>
          </Link>

        </div>
      </section>

    </div>
  );
};

export default LandingPage;
//  <button
//             onClick={toggleSidebar}
//             className="md:hidden border px-3 py-2 rounded-lg"
//           >
//             <FiMenu size={22} />
//           </button>

//  <motion.div
//         initial={{ x: "100%" }}
//         animate={{ x: isSidebarOpen ? 0 : "100%" }}
//         transition={{ type: "tween", duration: 0.3 }}
//         className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-50 shadow-lg"
//       >
//         <div className="flex justify-between items-center p-4 border-b border-gray-700">
//           <h2 className="text-lg font-semibold">Menu</h2>
//           <button onClick={toggleSidebar}>
//             <FiX size={24} />
//           </button>
//         </div>
//         <ul className="flex flex-col gap-6 p-6 text-lg">
//           <li>
//             <Link to="/dashboard/mechanism" onClick={toggleSidebar}>Mechanism</Link>
//           </li>
//           <li>
//             <Link to="/dashboard/spare-parts" onClick={toggleSidebar}>Spare Parts</Link>
//           </li>
//           <li>
//             <Link to="/dashboard/variables" onClick={toggleSidebar}>Variables</Link>
//           </li>
//           <li>
//             <Link to="/dashboard/assembly" onClick={toggleSidebar}>Assembly</Link>
//           </li>
//         </ul>
//       </motion.div>