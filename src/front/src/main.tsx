import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './i18n.js'; // Importe o arquivo de configuração do i18n

import './index.css'
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
