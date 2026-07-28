import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


function NotFound() {

  // useRouteError provides error details that occurs
  const err = useRouteError()

  return (
    <div className='px-4 flex flex-col justify-center min-h-dvh border items-center'>
      <div className='flex flex-col gap-6 sm:gap-10 justify-between bg-[#D4E3DE] items-center border p-6 sm:p-10 py-6 max-w-md rounded-2xl'>
        <div className='flex flex-col justify-between items-center'>
          <h1 className='font-bold text-4xl sm:text-5xl mb-1'>Oops...!</h1>
          <h1 className='text-xl sm:text-3xl '>{err.status} - Page {err.statusText}</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='text-sm sm:text-base italic'>{err.data}</h2>
          <p className='text-sm sm:text-base mb-6'>Check the Url</p>
          {/* below link is to go back to home page */}
          <Link to={'/'}><span className='border rounded-lg p-1 px-2 rounded-sm  hover:text-[#FF6202]'>Back to Home</span></Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound