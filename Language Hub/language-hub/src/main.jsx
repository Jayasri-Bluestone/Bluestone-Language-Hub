import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { ModalProvider } from './context/ModalContext'
import { HelmetProvider } from 'react-helmet-async';
import App from './App'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <ModalProvider>
        <App />
      </ModalProvider>
    </HelmetProvider>
  </StrictMode>,
);
