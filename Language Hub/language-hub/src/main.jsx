import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ModalProvider } from './context/ModalContext'
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ModalProvider>
      <App />
    </ModalProvider>
  </StrictMode>,
)
