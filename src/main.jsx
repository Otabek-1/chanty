import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Auth from './Auth.jsx'
import Dashboard from './dashboard.jsx'
import Watch from './components/watch.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path='/auth' element={<Auth />} />
        <Route path='/dashboard' element={<Dashboard /> }/>
        <Route path='/watch/:watchlink' element={<Watch />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
