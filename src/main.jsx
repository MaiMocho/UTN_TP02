import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router'
import App from './App.jsx'
import { ContactContext, ContactContextProvider } from './Context/ContactContext.jsx'

createRoot(document.getElementById('root')).render(
  /* Browser router es un componente que nos habilita a usar las herramientas de react-router */
  <BrowserRouter>
      <App/>
  </BrowserRouter>
)