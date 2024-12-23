import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Header from './Components/Header.jsx'
import MainContent from './Components/MainContent.jsx'
import Footer from './Components/Footer.jsx'
import FetchData from './Components/FetchData.jsx'
import Menu from './Components/Menu.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Menu />
    <Header />
    <MainContent />
    <App />
    <FetchData />
    <Footer />
  </StrictMode>,
)
