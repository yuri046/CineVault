
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Home from './pages/home.jsx'
import Favoritos from './pages/favoritos.jsx'
import Detalhes from './pages/detalhes/detalhes.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


const router = createBrowserRouter([
    {
        path:'/',
        element: <App/>,
        children: [
            {
                path:'/',
                element: <Home/>
            },
            {
                path:'favoritos',
                element:<Favoritos/>
            },
            {
                path:'detalhes/:title',
                element:<Detalhes/>
            }
        ]
    },
])

createRoot(document.getElementById('root')).render(
  
   <RouterProvider router={router}/>
)
