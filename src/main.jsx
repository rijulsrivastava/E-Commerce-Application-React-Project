import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'
// lazy loading is used to optimize performance of application
const HomePage = lazy(() => import('./components/HomePage.jsx'))
const Cart = lazy(() => import('./components/Cart.jsx'))
const NotFound = lazy(() => import('./components/NotFound.jsx'))
const ProductDetails = lazy(() => import('./components/ProductDetails.jsx'))
const CheckOut = lazy(() => import('./components/CheckOut.jsx'))

// createBrowserRouter is used to define routes of the components
const appProvider = createBrowserRouter([{
  path: '/',
  element: <App />,
  // below given the route to Error component if invalid routes
  errorElement: <NotFound />,

  // children is used to define routes of the children of App component
  children: [
    {
      path: '/',
      element: <Suspense fallback={<h2>Loading...</h2>}>
        <HomePage />
      </Suspense>
    },
    {
      path: '/cart',
      element: <Suspense fallback={<h2>Loading...</h2>}>
        <Cart />
      </Suspense>
    },
    // below is the dynamic route
    {
      path: '/productDetails/:id',
      element: <Suspense fallback={<h2>Loading...</h2>}>
        <ProductDetails />
      </Suspense>
    },
    {
      path: '/checkOut',
      element: <Suspense fallback={<h2>Loading...</h2>}>
        <CheckOut />
      </Suspense>
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={appProvider} />
)
