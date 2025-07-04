import React, { useState } from 'react';

const listItems = ['Beranda', 'Tentang', 'Manfaat', 'Resep'];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='fixed bg-white flex justify-between items-center w-[90%] max-w-4xl mx-auto top-5 left-1/2 -translate-x-1/2 py-2 px-2 md:px-4 rounded-2xl text-black outline-2 outline-green-700 drop-shadow-sm drop-shadow-[#2D6A4F] z-50'>
        
        {/* Logo */}
        <div className='flex items-center'>
            <img src="../assets/logo.svg" alt="logo" className='w-10 md:w-12' />
            <h1 className='text-xl md:text-2xl font-bold text-green-800 ml-2'>
            Se<span className='text-green-700'>ad</span>
            </h1>
        </div>

        {/* Desktop Menu */}
        <div className='hidden md:flex items-center gap-10'>
            <ul className='flex gap-8 items-center md:text-lg'>
            {listItems.map((item) => {
                const id = item.toLowerCase();
                return (
                <li
                    className='relative group cursor-pointer hover:text-green-700 transition-all duration-300'
                    key={item}
                >
                    <a href={`#${id}`}>{item}</a>
                    <span className='absolute left-0 bottom-[-1px] w-0 h-0.5 rounded-xl bg-green-700 transition-all duration-300 group-hover:w-full'></span>
                </li>
                );
            })}
            </ul>
            <button className='bg-green-800 font-semibold py-1 px-6 rounded-xl text-white hover:bg-green-700'>
            Masuk
            </button>
        </div>

        {/* Hamburger Menu (Mobile Only) */}
        <div className='md:hidden flex items-center'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-green-800 focus:outline-none'>
            <svg
                className='w-6 h-6'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
                xmlns='http://www.w3.org/2000/svg'
            >
                {isOpen ? (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                ) : (
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
                )}
            </svg>
            </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
            <div className='absolute top-16 left-0 w-full bg-white rounded-2xl shadow-lg md:hidden px-6 pb-4 pt-3 z-40'>
            <ul className='flex flex-col gap-4 text-base'>
                {listItems.map((item) => {
                const id = item.toLowerCase();
                return (
                    <li
                    key={item}
                    className='hover:text-green-700 transition-all duration-300'
                    >
                    <a href={`#${id}`} onClick={() => setIsOpen(false)}>{item}</a>
                    </li>
                );
                })}
            </ul>
            <button className='w-full mt-4 bg-green-800 text-white font-semibold py-2 rounded-xl hover:bg-green-700'>
                Masuk
            </button>
            </div>
        )}
        </div>
    );
};

export default Navbar;
