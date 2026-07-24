import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Cart from './components/Cart.jsx'

const appProvider = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {
      path:'/',
      element:<HomePage/>,
    },
    {
      path:'/cart',
      element:<Cart/>
    },
    {
      path:'/search',
      element:<>Search</>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    // <App />
  // </StrictMode>,

  <RouterProvider router={appProvider}/>
)
