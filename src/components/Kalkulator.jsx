import React from 'react'
import robot from '../assets/robot.png';

const Kalkulator = () => {
    return (
        <div className='w-14 h-14 bg-green-700 hover:bg-[#3E9F2B] rounded-full fixed z-50 right-4 bottom-10 items-center align-center flex cursor-pointer'>
            <img src={robot} alt="" className='w-10 mx-auto my-auto' />
        </div>
    )
}

export default Kalkulator