import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import App from './App'
import ShopContextProvider from './context/ShopContext.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <ShopContextProvider>
      <App />

      </ShopContextProvider>


  </BrowserRouter>,
)
