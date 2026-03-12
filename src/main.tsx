import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import profileImg from './assets/profile-redimencionado.jpg'

// Preload LCP image so the browser fetches it before React renders
const preload = document.createElement('link')
preload.rel = 'preload'
preload.as = 'image'
preload.href = profileImg
document.head.appendChild(preload)

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
