import React from 'react'
import { lazy, Suspense } from 'react'
const ProductItem = lazy(() => import('./ProductItem'))
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function ProductList({ allProducts }) {

  const searchText = useSelector((store) => store.search.searchText)
  const filteredProducts = searchText.trim() == "" ? allProducts : allProducts.filter((product) => {
    return (

      product.brand && product.brand.toLowerCase().includes(searchText.toLowerCase()) ||
      product.title.toLowerCase().includes(searchText.toLowerCase())
    )
  })

  if (filteredProducts.length < 1) {
    return <div className='flex justify-center items-center font-bold text-2xl m-10'>
      <h2>No Matching Product</h2>
    </div>
  }

  return (
    <Suspense key={product.id} fallback={<h2>Loading...</h2>}>
      <div className='flex flex-wrap justify-center items-center gap-6 py-4'>
        {filteredProducts.map((product) => {
          return (
            <ProductItem product={product} />
          )
        })}
      </div>
    </Suspense>
  )
}

export default ProductList