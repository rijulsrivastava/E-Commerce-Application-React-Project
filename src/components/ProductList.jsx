import React from 'react'
import ProductItem from './ProductItem'

function ProductList({ allProducts }) {
  return (
    <div className='flex flex-wrap justify-center items-center gap-6 py-4'>
      {allProducts.map((product) => {
        return (
          <ProductItem product={product} />
        )
      })}
    </div>
  )
}

export default ProductList