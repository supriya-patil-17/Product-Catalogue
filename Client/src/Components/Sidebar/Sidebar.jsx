import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => setIsOpen(!isOpen);

    return (
        <>
            <button className="sidebar-toggle" onClick={toggleSidebar}>
                ☰
            </button>
            <div className={`sidebar ${isOpen ? "open" : ""}`}>
                <h2>Dashboard</h2>
                <nav>
                    <ul>
                        <li><NavLink to="/assembly">Assembly</NavLink></li>
                        <li><NavLink to="/mechanism">Mechanism</NavLink></li>
                        <li><NavLink to="/repair-kit">Repair Kit</NavLink></li>
                        <li><NavLink to="/spare-parts">Spare Parts</NavLink></li>
                        <li><NavLink to="/variables">Variables</NavLink></li>
                    </ul>
                </nav>
            </div>
        </>
    );
};

export default Sidebar;
