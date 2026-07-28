import React from 'react'
import { lazy, Suspense } from 'react'
// lazy loding is used to load ProductItem for performance optimization
const ProductItem = lazy(() => import('./ProductItem'))
import { useSelector } from 'react-redux'

function ProductList({ allProducts, category }) {

  const searchText = useSelector((store) => store.search.searchText) //to get user search query from the redux store

  let filteredProducts = allProducts

  // to filter product by title or brand
  if (searchText.trim() != "") {
    filteredProducts = filteredProducts.filter((product) => {
      return (
        product.brand && product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
        product.title.toLowerCase().includes(searchText.toLowerCase())
      )
    })
  }

  // to filter product based on category clicked by user 
  if (category != 'All') {
    filteredProducts = filteredProducts.filter((product) => product.category == category)
  }

  // when particular product matching search or category is not there it will shown no matching product
  if (filteredProducts.length < 1) {
    return <div className='flex justify-center items-center font-bold text-2xl m-10'>
      <h2>No Matching Product</h2>
    </div>
  }

  return (
    // suspense is used for wrapping lazy loading component
    < Suspense fallback={< h2 > Loading...</h2 >}>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center place-items-center gap-6 py-4'>
        {filteredProducts.map((product) => {
          return (
            <ProductItem key={product.id} product={product} />
          )
        })}
      </div>
    </Suspense >
  )
}

export default ProductList