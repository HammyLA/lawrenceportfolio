import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { BrowserRouter as Router } from 'react-router-dom'
import Navbar from './components/Navbar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router basename='/lawrenceportfolio'>
    <Navbar />
      <App />
    </Router>
  </StrictMode>,
)
