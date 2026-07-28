import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setSearchText } from '../utils/searchSlice'

function Search() {

    const dispatch = useDispatch()
    const [input, setInput] = useState('')

    useEffect(() => {
        dispatch(setSearchText(input.trim()))
    }, [input, dispatch])

    return (
        <div>
            <div className='flex gap-2 items-center justify-center m-10 '>
                <input type="text" value={input} placeholder='Search for products' onChange={(e) => setInput(e.target.value)} className='border-[1.5px] rounded-4xl border-[#D4A373] w-[500px] text-center p-1 px-2 focus:border-[#FF6202] focus:outline-none ' />
            </div>

        </div>
    )
}

export default Search