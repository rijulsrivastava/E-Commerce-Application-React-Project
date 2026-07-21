import React from 'react'
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import logo from '../assets/Logo.webp'

function Header() {
    return (
        <div className='flex justify-between px-6 py-2 border-b'>
            <div className='flex'>
                <div className='flex flex-col justify-center items-end text-xl font-bold'>
                    <h1>Shoppy</h1>
                    <h1>Globe</h1>
                </div>
                <img src={logo} alt="ShoppyGlobeLogo" width={'50px'} height={'50px'} />
            </div>
            <nav className='flex justify-center'>
                <ul className='flex justify-center gap-4 items-center text-xl'>
                    <div className='flex items-center gap-1 '>
                        <FaHome />
                        <li>Home</li>
                    </div>

                    <div className='flex items-center gap-1'>
                        <IoSearchSharp />
                        <li>Search</li>
                    </div>
                    <div className='flex items-center gap-1'>
                        <IoCartOutline />
                        <li>Cart</li>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header