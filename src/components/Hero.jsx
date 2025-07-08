import React from 'react';
import pelukbumi from '../assets/pelukbumi.png';
import sayur from '../assets/sayuran.png';

const Hero = () => {
  return (
    <section id='beranda' className='px-6 sm:px-10 md:px-20 py-16 mt-5'>
      <div className='flex flex-col-reverse md:flex-row justify-between items-center gap-8 relative overflow-hidden'>

        {/* Text section */}
        <div className='w-full md:w-1/2 relative'>
          <h1 className='font-bold text-center md:text-left text-5xl sm:text-6xl lg:text-[96px] text-green-800 leading-tight'>
            Se<span className='text-green-700'>ad</span>
          </h1>
          <h4 className='font-medium text-center md:text-left text-2xl sm:text-3xl lg:text-[40px] text-green-800 mb-4'>
            Senin Absen Daging
          </h4>
          <p className='text-base sm:text-lg md:text-xl text-center md:text-left'>
            Kurangi daging, selamatkan bumi, mulai dari Senin. Ciptakan kebiasaan yang berdampak besar untuk lingkungan dan tubuhmu.
          </p>

          <button className='py-2 px-6 border-2 border-[#ff632a] bg-transparent hover:bg-[#ff632a] text-[#ff632a] font-medium hover:text-white rounded-xl mt-8 mx-auto md:mx-0 block'>
            Gabung Gerakan
          </button>

          {/* Sayuran Image */}
          <img
            src={sayur}
            alt="sayuran"
            className='absolute hidden md:block w-[100px] sm:w-[120px] md:w-[200px] lg:w-[250px] xl:w-[300px] top-[40px] right-[-30px] md:top-[200px] md:right-[-60px] pointer-events-none'
          />
        </div>

        {/* Hero image */}
        <div className='w-full md:w-1/2 flex justify-center md:justify-end'>
          <img
            src={pelukbumi}
            alt="peluk bumi"
            className='w-[80%] sm:w-[70%] md:w-full max-w-[500px]'
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
