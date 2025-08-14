import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

<<<<<<< HEAD
//import App from './App';
import './index.css';
import Mechanism from './Components/Mechanism.jsx';

createRoot(document.getElementById('root')).render(
    <Mechanism />
=======
import React from 'react';
import { createRoot } from 'react-dom/client'
import './index.css'
//import App from './App.jsx'
//import Sidebar from './Components/Sidebar/Sidebar.jsx';
import Variables from './Components/Variables.jsx';




createRoot(document.getElementById('root')).render(
    <Variables />
>>>>>>> 3f809eb917c561c84a791ba48d1c75097fb66e4c

)

