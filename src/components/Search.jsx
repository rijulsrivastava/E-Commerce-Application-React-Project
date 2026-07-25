import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchText } from '../utils/searchSlice'

function Search() {

    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    function handleSearch() {
        dispatch(setSearchText(input))
    }

    return (
        <div>
            <div className='flex gap-2 items-center justify-center m-10'>
                <input type="text" placeholder='Search for products' onChange={(e) => setInput(e.target.value)} className='border w-[500px] text-center p-1 px-2' />
                <button className='border p-2 py-1' onClick={handleSearch}>Search</button>
            </div>

        </div>
    )
}

export default Search