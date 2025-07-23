import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import './styles/index.css'
import App from './App.tsx'
import History from './pages/history.tsx'
import NavBar from './navBar.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
    <NavBar />
      <Routes>
         <Route path="/" element={<App />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
)
