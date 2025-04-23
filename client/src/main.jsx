import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,Router,RouterProvider } from 'react-router-dom'
import routes from './Routes/Routes.jsx'

const router = createBrowserRouter(routes)

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
    // <App />  
)
