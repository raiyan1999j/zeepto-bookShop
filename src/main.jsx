import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {createBrowserRouter,Router,RouterProvider} from 'react-router-dom';
import Home from './Components/Home/Home.jsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Details from './Components/Details/Details.jsx';
import Wishlist from './Components/Wishtlist/Wishlist.jsx';

const queryClient = new QueryClient();
const router = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:'/home',
        element:<Home/>
      },
      {
        path:'/details',
        element:<Details/>
      },
      {
        path:'/wishlist',
        element:<Wishlist/>
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
