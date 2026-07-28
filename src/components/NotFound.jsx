import React from 'react'
import { Link, useRouteError } from 'react-router-dom'


function NotFound() {

  const err = useRouteError()

  return (
    <div className='p-6 flex flex-col justify-center h-dvh border items-center'>
      <div className='flex flex-col gap-10 justify-between bg-[#D4E3DE] items-center border p-10 py-6 rounded-2xl'>
        <div className='flex flex-col justify-between items-center'>
          <h1 className='font-bold text-5xl mb-1'>Oops...!</h1>
          <h1 className='text-3xl'>{err.status} - Page {err.statusText}</h1>
        </div>
        <div className='flex flex-col justify-center items-center'>
          <h2 className='italic'>{err.data}</h2>
          <p className='mb-6'>Check the Url</p>
          <Link to={'/'}><span className='border p-1 px-2 rounded-sm  hover:text-[#FF6202]'>Back to Home</span></Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound