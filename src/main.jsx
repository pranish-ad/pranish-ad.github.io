import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// Single root render; Tailwind + global styles are imported in App
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)
