import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import App from './App.jsx'
import './index.css'
import StoreContextProvider from '../../frontend2/src/Context/StoreContext.jsx'

createRoot(document.getElementById('root')).render(

   <StoreContextProvider>
      <App />
    </StoreContextProvider>

)
