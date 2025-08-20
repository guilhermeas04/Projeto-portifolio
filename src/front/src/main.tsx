import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n.js';// logica de idiomas
import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
