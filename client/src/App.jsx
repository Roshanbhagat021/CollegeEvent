import { Outlet, useLocation } from 'react-router-dom'
import './App.css'
import Footer from './Components/Footer'
import Header from './Components/Header'
import Home from './pages/Home'

function App() {
  const location = useLocation()
  const showHome = location.pathname === "/"

  return (
    <>
    <Header/>
    <Outlet/>
    {
      showHome && <Home/>
    }
    <Footer/>
    </>
  )
}

export default App
