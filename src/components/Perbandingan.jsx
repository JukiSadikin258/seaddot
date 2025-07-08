import React from 'react'
import photo from '../assets/photo.webp';
import galon from '../assets/galon.png';
import KalkulatorAir from './KalkulatorAir';
import Footer from './Footer';


const Perbandingan = () => {
  return (
    <section id="perbandingan" className="px-6 sm:px-10 md:px-20 py-16 overflow-x-hidden">
        <h1 className="font-bold text-center mb-8 text-3xl md:text-4nxl text-[#3E9F2B]">Tahukah Kamu?</h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          {/* card */}
          <div className="bg-[#A8FD97] flex justify-between items-center shadow-lg rounded-lg p-6">
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>100g</div>
              <img src={photo} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>daging Sapi</div>
            </div>
            <div className='text-5xl font-bold text-[#147700]'>=</div>
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>81</div>
              <img src={galon} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>Air Galon (19L)</div>
            </div>
          </div>
          {/* card */}
          <div className="bg-[#A8FD97] flex justify-between items-center shadow-lg rounded-lg p-6">
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>100g</div>
              <img src={photo} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>daging Sapi</div>
            </div>
            <div className='text-5xl font-bold text-[#147700]'>=</div>
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>81</div>
              <img src={galon} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>Air Galon (19L)</div>
            </div>
          </div>
          {/* card */}
          <div className="bg-[#A8FD97] flex justify-between items-center shadow-lg rounded-lg p-6">
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>100g</div>
              <img src={photo} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>daging Sapi</div>
            </div>
            <div className='text-5xl font-bold text-[#147700]'>=</div>
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>81</div>
              <img src={galon} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>Air Galon (19L)</div>
            </div>
          </div>
          {/* card */}
          <div className="bg-[#A8FD97] flex justify-between items-center shadow-lg rounded-lg p-6">
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>100g</div>
              <img src={photo} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>daging Sapi</div>
            </div>
            <div className='text-5xl font-bold text-[#147700]'>=</div>
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>81</div>
              <img src={galon} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>Air Galon (19L)</div>
            </div>
          </div>
          {/* card */}
          <div className="bg-[#A8FD97] flex justify-between items-center shadow-lg rounded-lg p-6">
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>100g</div>
              <img src={photo} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>daging Sapi</div>
            </div>
            <div className='text-5xl font-bold text-[#147700]'>=</div>
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>81</div>
              <img src={galon} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>Air Galon (19L)</div>
            </div>
          </div>
          {/* card */}
          <div className="bg-[#A8FD97] flex justify-between items-center shadow-lg rounded-lg p-6">
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>100g</div>
              <img src={photo} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>daging Sapi</div>
            </div>
            <div className='text-5xl font-bold text-[#147700]'>=</div>
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>81</div>
              <img src={galon} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>Air Galon (19L)</div>
            </div>
          </div>
          {/* card */}
          <div className="bg-[#A8FD97] flex justify-between items-center shadow-lg rounded-lg p-6">
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>100g</div>
              <img src={photo} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>daging Sapi</div>
            </div>
            <div className='text-5xl font-bold text-[#147700]'>=</div>
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>81</div>
              <img src={galon} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>Air Galon (19L)</div>
            </div>
          </div>
          {/* card */}
          <div className="bg-[#A8FD97] flex justify-between items-center shadow-lg rounded-lg p-6">
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>100g</div>
              <img src={photo} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>daging Sapi</div>
            </div>
            <div className='text-5xl font-bold text-[#147700]'>=</div>
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>81</div>
              <img src={galon} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>Air Galon (19L)</div>
            </div>
          </div>
          {/* card */}
          <div className="bg-[#A8FD97] flex justify-between items-center shadow-lg rounded-lg p-6">
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>100g</div>
              <img src={photo} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>daging Sapi</div>
            </div>
            <div className='text-5xl font-bold text-[#147700]'>=</div>
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>81</div>
              <img src={galon} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>Air Galon (19L)</div>
            </div>
          </div>
          {/* card */}
          <div className="bg-[#A8FD97] flex justify-between items-center shadow-lg rounded-lg p-6">
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>100g</div>
              <img src={photo} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>daging Sapi</div>
            </div>
            <div className='text-5xl font-bold text-[#147700]'>=</div>
            <div className="relative flex flex-col items-center"  >
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute right-0 top-[-10px]'>81</div>
              <img src={galon} alt="" className='w-40 h-40 rounded-xl' />
              <div className='px-6 py-1 rounded-full text-white font-medium bg-[#147700] absolute left-0 bottom-[-10px]'>Air Galon (19L)</div>
            </div>
          </div>
        </div>

        <KalkulatorAir />
    </section>
  )
}

export default Perbandingan
