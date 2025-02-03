import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { IoMdSearch } from "react-icons/io";
import DarkMode from './DarkMode';

const Navbar = () => {
    const menuLinks = [
        { id: 1, name: 'Home', url: '/#' },
        { id: 2, name: 'Shop', url: '/#Shop' },
        { id: 3, name: 'About', url: '/#About' },
        { id: 4, name: 'Blog', url: '/#Blog' },
    ];

    return (
        <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
            <div className='py-4'>
                <div className="container flex justify-between items-center">
                    {/* Logo and Link section */}
                    <div className='flex items-center gap-4'>
                        <a href="#" className='text-red-800 font-semibold tracking-widest text-2xl uppercase sm:text-3xl'> 
                            Eshop
                        </a>
                        {/* Menu Items */}
                        <div className='hidden lg:block'>
                            <ul className='flex items-center gap-4'>
                                {menuLinks.map((data) => (
                                    <li key={data.id}>
                                        <a href={data.url} className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200">
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Navbar right section */}
                    <div className='flex items-center gap-4'>
                        {/* Search bar section */}
                        <div className='relative group hidden sm:block'>
                            <input type="text" placeholder='Search' className='search-bar pr-10' />
                            <IoMdSearch className='text-xl text-gray-600 group-hover:text-red-900 dark:text-gray-400 absolute top-1/2 right-3 -translate-y-1/2' />
                        </div>

                       {/* Orden button section */}
                       <button className='relative p-3'>
                        <FaShoppingCart  className='text-xl text-gray-600 
                        dark:text-gray-400'/>
                        <div className='w-4 h-4 bg-red-500 text-white rounded-full absolute 
                        top-0 right-0 flex items-center justify-center text-xs'>4</div>
                       </button>
                        {/* Dark mode section */}
                        <div>
                            <DarkMode/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
