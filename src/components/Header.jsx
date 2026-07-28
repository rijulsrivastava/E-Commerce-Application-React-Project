import React from 'react'
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import logo from '../assets/Logo.webp'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

    const items = useSelector((store) => store.cart.items) //to get cart items stored in redux store

    return (
        <div className='flex justify-between sticky top-0 shadow-xl bg-[#F9FAFB] z-10 text-[#111827] px-4 sm:px-6 lg:px-10 flex-wrap py-2 border-b-[0.25px] '>
            <Link to={'/'}>
                <div className='flex'>
                    <div className='flex flex-col justify-center text-[#FF6202] items-end text-lg sm:text-xl font-bold'>
                        <h1>Shoppy</h1>
                        <h1>Globe</h1>
                    </div>
                    <img src={logo} loading='lazy' alt="ShoppyGlobeLogo" className='w-10 h-10 sm:w-12 sm:h-12' />
                </div>
            </Link>
            <nav className='flex justify-center'>
                <ul className='flex justify-center gap-3 sm:gap-5 items-center text-base sm:text-lg lg:text-xl'>
                    {/* Link is used to navigate to home page*/}
                    <Link to={'/'}>
                        <div className='flex items-center gap-1 hover:scale-105 hover:text-[#FF6202]'>
                            <FaHome />
                            <li>Home</li>
                        </div>
                    </Link>
                    {/* Link is used to navigate to cart page*/}
                    <Link to={'/cart'}>
                        <div className='flex items-center gap-1 hover:text-[#FF6202] hover:scale-105'>
                            <IoCartOutline className='text-2xl sm:text-3xl' />
                            {/* to display total quatity of items added to the cart below logic is used */}
                            {items.length ? <li className='flex justify-center items-center gap-0.5'>Cart <span className='rounded-full self-center border px-1 text-xs font-bold'>{items.reduce((sum, acc) => sum + acc.quantity, 0)}</span></li> : <li>Cart</li>}
                        </div>
                    </Link>
                </ul>
            </nav>
        </div >
    )
}

export default Header