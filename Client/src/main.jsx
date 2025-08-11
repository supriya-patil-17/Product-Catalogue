import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Assembly from './Components/Assembly.jsx'
import Mechanism from './Components/Mechanism.jsx'


createRoot(document.getElementById('root')).render(

    <Mechanism />

)
