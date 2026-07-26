import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomePage from './components/HomePage.jsx'
import Cart from './components/Cart.jsx'
import NotFound from './components/NotFound.jsx'
import ProductDetails from './components/ProductDetails.jsx'
import CheckOut from './components/CheackOut.jsx'

const appProvider = createBrowserRouter([{
  path: '/',
  element: <App />,
  errorElement: <NotFound />,
  children: [
    {
      path: '/',
      element: <HomePage />,
    },
    {
      path: '/cart',
      element: <Cart />
    },
    {
      path: '/productDetails/:id',
      element: <ProductDetails />
    },
    {
      path: '/checkOut',
      element: <CheckOut />
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appProvider} />
)
