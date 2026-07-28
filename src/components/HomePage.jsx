import React, { useEffect, useState } from 'react'
import useFetch from '../utils/useFetch'
import { lazy, Suspense } from 'react'
const ProductList = lazy(() => import('./ProductList'))
import Search from './Search'

function HomePage() {

  const { allProducts, error, loading } = useFetch()
  // console.log("from home", allProducts)
  const [chooseCategory, setChooseCategory] = useState("All");
  const categories = ['All', 'beauty', 'fragrances', 'furniture', 'groceries']


  if (error) {
    return <p>Loading Error:{error}</p>
  }

  if (loading) {
    return <p >Page is loading...</p>
  }

  return (
    <div className='flex flex-col  py-6 px-4 sm:px-8 lg:px-12'>

      <div className='flex flex-col text-center lg:text-left'>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl font-bold mb-2'>ShoppyGlobe one place for everything</h1>
        <h2 className='text-lg sm:text-xl font-bold italic'>"Get highest quality producs at most affordable price"</h2>
      </div>
      <Search />
      <div>
        <h2 className='text-xl sm:text-2xl font-bold'>Choose by category</h2>
        <div className='flex flex-wrap justify-center lg:justify-start gap-4 my-6'>
          {categories.map((category) => {
            return (
              <button key={category} onClick={() => setChooseCategory(category)} className={`border px-4 py-1 rounded-lg font-bold transition-all duration-200 hover:scale-105 
                ${chooseCategory === category ?
                  "bg-[#FF6202] text-white border-[#FF6202]" :
                  "bg-[#ECFDF5] text-[#3E5C63] border-[#D4A373] hover:bg-[#FF6202] hover:text-white"
                }`}>{category.toUpperCase()}</button>
            )
          })}
        </div>
      </div>
      <div>
        <h2 className='text-xl sm:text-2xl font-bold'>Products</h2>
        <div>
          <Suspense fallback={<h2>Loading...</h2>}>
            <ProductList allProducts={allProducts} category={chooseCategory} />
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default HomePage