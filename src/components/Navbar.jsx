import React from 'react'

const Navbar = () => {

    const menuLinks = [
        { id: 1, name: 'Home', url: '/#' },
        { id: 2, name: 'Shop', url: '/#Shop' },
        { id: 3, name: 'About', url: '/#About' },
        { id: 4, name: 'Blog', url: '/#Blog' },
    ];
  return (
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200 relative z-40'>
        <div className='py-4 '>
            <div className="container">
                {/*Logo and Link section*/}
                <div className='flex items-center gap-4'>
                    <a href="#" className='text-red-800 font-semibold tracking-widest text-2xl uppercase sm:text-3xl'> 
                        Eshop
                    </a>
                    {/*Menu Items*/}

                    <div className='hidden lg:block'>
                    <ul className='flex items-center gap-4'>
                       {menuLinks.map((data) => (
                        <li key={data.id}>
                            <a href={data.url} className="inline-block px-4 font-semibold text-gray-500
                            hover:text-black
                            dark:hover:text-white duration-200">
                                {" "}
                                {data.name}
                            </a>
                        </li>
                    ))}
                    </ul>
                    </div>
                </div>
                {/*Navbar rigth section*/}
            </div>
        </div>
    </div>
  )
}

export default Navbar