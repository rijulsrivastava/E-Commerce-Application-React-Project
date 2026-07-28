import React from 'react'
import { IoCartOutline, IoSearchSharp } from "react-icons/io5";
import { FaHome } from "react-icons/fa";
import logo from '../assets/Logo.webp'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Header() {

    const items = useSelector((store) => store.cart.items)

    return (
        <div className='flex justify-between sticky top-0 shadow-xl bg-[#F9FAFB] z-10 text-[#111827]  px-6 py-2 border-b-[0.25px] '>
            <Link to={'/'}>
                <div className='flex'>
                    <div className='flex flex-col justify-center text-[#FF6202] items-end text-xl font-bold'>
                        <h1>Shoppy</h1>
                        <h1>Globe</h1>
                    </div>
                    <img src={logo} loading='lazy' alt="ShoppyGlobeLogo" width={'50px'} height={'50px'} />
                </div>
            </Link>
            <nav className='flex justify-center'>
                <ul className='flex justify-center gap-4 items-center text-xl'>
                    <Link to={'/'}>
                        <div className='flex items-center gap-1 hover:scale-105 hover:text-[#FF6202]'>
                            <FaHome />
                            <li>Home</li>
                        </div>
                    </Link>

                    <Link to={'/cart'}>
                        <div className='flex items-center gap-1 hover:text-[#FF6202] hover:scale-105'>
                            <IoCartOutline size={28} />
                            {items.length ? <li className='flex justify-center items-center gap-0.5'>Cart <span className='rounded-full self-center border px-1 text-xs font-bold'>{items.reduce((sum, acc) => sum + acc.quantity, 0)}</span></li> : <li>Cart</li>}
                        </div>
                    </Link>
                </ul>
            </nav>
        </div >
    )
}

export default Header