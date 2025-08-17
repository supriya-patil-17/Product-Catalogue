import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const LandingPage = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="w-full min-h-screen">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md text-white z-50 shadow-md">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold tracking-wide">Acccurmech Industries</h1>
          <ul className="hidden md:flex gap-8 text-lg font-medium">
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to="/dashboard/mechanism">Mechanism</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to="/dashboard/spare-parts">Spare Parts</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to="/dashboard/variables">Variables</Link>
            </li>
            <li className="hover:text-yellow-400 cursor-pointer">
              <Link to="/dashboard/assembly">Assembly</Link>
            </li>
          </ul>
          <button
            onClick={toggleSidebar}
            className="md:hidden border px-3 py-2 rounded-lg"
          >
            <FiMenu size={22} />
          </button>
        </div>
      </nav>

      {/* Sidebar (Mobile) */}
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isSidebarOpen ? 0 : "100%" }}
        transition={{ type: "tween", duration: 0.3 }}
        className="fixed top-0 right-0 h-full w-64 bg-gray-900 text-white z-50 shadow-lg"
      >
        <div className="flex justify-between items-center p-4 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Menu</h2>
          <button onClick={toggleSidebar}>
            <FiX size={24} />
          </button>
        </div>
        <ul className="flex flex-col gap-6 p-6 text-lg">
          <li>
            <Link to="/dashboard/mechanism" onClick={toggleSidebar}>Mechanism</Link>
          </li>
          <li>
            <Link to="/dashboard/spare-parts" onClick={toggleSidebar}>Spare Parts</Link>
          </li>
          <li>
            <Link to="/dashboard/variables" onClick={toggleSidebar}>Variables</Link>
          </li>
          <li>
            <Link to="/dashboard/assembly" onClick={toggleSidebar}>Assembly</Link>
          </li>
        </ul>
      </motion.div>

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
            onClick={toggleSidebar}
            className="mt-8 bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-xl text-lg font-semibold shadow-lg"
          >
            Explore Products
          </button>
        </motion.div>
      </section>
    </div>
  );
};

export default LandingPage;
