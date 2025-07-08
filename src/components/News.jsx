import React from 'react'
import news from '../assets/news.svg';

const News = () => {
    return (
        <div className='w-16 h-16 bg-green-700 hover:bg-[#3E9F2B] rounded-full fixed z-50 right-4 bottom-10 items-center align-center flex cursor-pointer'>
            <img src={news} alt="" className='w-10 mx-auto my-auto' />
        </div>
    )
}

export default News