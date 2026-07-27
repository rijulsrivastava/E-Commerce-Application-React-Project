import React, { useEffect, useState } from 'react'
import useFetch from '../utils/useFetch'
import { lazy, Suspense } from 'react'
const ProductList = lazy(() => import('./ProductList'))
const Search = lazy(() => import('./Search'))

function HomePage() {

  const { allProducts, error, loading } = useFetch()
  // console.log("from home", allProducts)


  if (error) {
    return <p>Loading Error:{error}</p>
  }

  if (loading) {
    return <p >Page is loading...</p>
  }

  return (
    <div className='flex flex-col m-6'>

      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold mb-2'>ShoppyGlobe one place for everything</h1>
        <h2 className='text-xl font-bold italic'>"Get highest quality producs at most affordable price"</h2>
      </div>
      <Search />
      <div>
        <h2 className='text-2xl font-bold'>Products</h2>
        <div>
          <Suspense fallback={<h2>Loading...</h2>}>
            <ProductList allProducts={allProducts} />
          </Suspense>
        </div>
      </div>
      <div>
        <h2 className='text-2xl font-bold'>Choose category</h2>
      </div>
    </div>
  )
}

export default HomePage