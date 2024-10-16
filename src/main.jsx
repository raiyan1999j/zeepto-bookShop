import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,Router,RouterProvider} from 'react-router-dom';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Element/>,
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  </StrictMode>,
)
