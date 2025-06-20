import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Navbar from './Components/Navbar.jsx'
import Counter from './Components/Counter.jsx'
import Todo from './Components/Todo.jsx'
import NotFound from './Components/NotFound.jsx'
import Weather from './Weather.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Weather/>,
    errorElement:<NotFound/>
  },
  {
    path:'/counter',
    element:<Counter/>
  },
  {
    path:'/app',
    element:<App/>
  },
  {
    path:'/to-do-list',
    element:<Navbar/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
