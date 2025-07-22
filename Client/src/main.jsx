import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Assembly from './Components/Assembly.jsx'
import Variables from './Components/Variables.jsx'

createRoot(document.getElementById('root')).render(

    <Assembly />

)

createRoot(document.getElementById('app')).render(
    <Variables />

)