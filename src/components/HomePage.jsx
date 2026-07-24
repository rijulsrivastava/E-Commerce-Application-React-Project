import React, { useEffect, useState } from 'react'
import useFetch from '../utils/useFetch'
// import ProductItem from './ProductItem'
import ProductList from './ProductList'
import ProductDetails from './ProductDetails'

function HomePage() {

  const { allProducts, error, loading } = useFetch()
  console.log("from home", allProducts)


  if (error) {
    return <p>Loading Error:{error}</p>
  }

  if (loading) {
    return <p >Page is loading...</p>
  }

  return (
    <div className='flex flex-col m-6'>
      <div className='flex flex-col'>
        <h1 className='text-4xl font-bold mb-4'>ShoppyGlobe one place for everything</h1>
        <h2 className='text-2xl font-bold italic'>Get highest quality producs at most affordable price </h2>
      </div>
      <div>
        <h2 className='text-2xl font-bold'>Products</h2>
        <div>
          {/* <ProductList allProducts={allProducts}/> */}
          <ProductDetails product={allProducts[7]}/>
        </div>
      </div>
      <div>
        <h2 className='text-2xl font-bold'>Choose category</h2>
      </div>
    </div>
  )
}

export default HomePage