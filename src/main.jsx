import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
//importo bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import './index.css'
import App from './App.jsx'

//importo il provider del LoaderContext
import { LoaderProvider } from './context/LoaderContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoaderProvider>
      <App />
    </LoaderProvider >
  </StrictMode >,
);
