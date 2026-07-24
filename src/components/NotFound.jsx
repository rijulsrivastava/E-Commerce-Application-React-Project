import React from 'react'
import { useRouteError } from 'react-router-dom'


function NotFound() {

  const err = useRouteError()

  return (
      <div className='p-6 flex flex-col justify-center items-center'>
        <div className='flex flex-col justify-between items-center'>
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-5xl'>Oops...!</h1>
            <h1 className='text-3xl'>{err.status} - Page {err.statusText}</h1>
          </div>
          <div className='flex flex-col justify-center items-center'>
            <h2 className='italic'>{err.data}</h2>
            <p>Check the Url</p>
          </div>
        </div>
      </div>
  )
}

export default NotFound