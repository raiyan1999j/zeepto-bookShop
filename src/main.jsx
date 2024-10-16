import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,Router,RouterProvider} from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router}>
    <App />
  </RouterProvider>
  </QueryClientProvider>
  </StrictMode>,
)
