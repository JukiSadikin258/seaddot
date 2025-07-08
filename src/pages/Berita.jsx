import React from 'react'
import { Link } from 'react-router-dom';
import Bumi from '../assets/bumi.png';
import Perbandingan from "../components/Perbandingan";


const Berita = () => {
  return (
    <section className='w-full bg-[#FFF6E3]'>
        
        <Link to="/" className='absolute top-4 left-4 text-green-700 hover:text-green-800 font-semibold'>← Kembali ke Beranda</Link>
        <div className='bg-[#A8FD97] h-44 top-0 pt-16'>
            <h1 className='text-4xl text-center font-serif italic'>Berita <span className='font-bold font-sans text-[#147700] '>Sead</span></h1>
        </div>
        <div className="w-screen px-20 py-10">
            <h1 className="text-4xl text-center font-bold text-[#147700] mb-6">Mengapa harus Sead?</h1>
            <p className="text-center text-gray-800 md:text-lg"><span className='text-[#147700] font-medium'>Sead,</span> singkatan dari <b>Senin Absen Daging,</b> adalah langkah kecil dengan dampak besar. Dengan tidak mengonsumsi daging satu hari dalam seminggu, kamu membantu mengurangi jejak karbon, menghemat air bersih, dan menjaga kelestarian bumi </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
              <div className='bg-white p-6 rounded-lg shadow-lg text-center border-2 border-green-600 hover:translate-y-[-10px] transition-transform duration-300'>
                <img src={Bumi} alt="" className='w-20 h-20 object-cover mx-auto mb-4'/>
                <h2 className='text-lg font-medium text-green-600'>Emisi Gas Rumah Kaca</h2>
                <p>Produksi daging menyumbang hingga 14,5% emisi gas rumah kaca global. Satu porsi daging sapi = 27 kg CO₂ Sead bantu kurangi emisi!</p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-lg text-center border-2 border-blue-500 hover:translate-y-[-10px] transition-transform duration-300'>
                <img src={Bumi} alt="" className='w-20 h-20 object-cover mx-auto mb-4'/>
                <h2 className='text-lg font-medium text-blue-500'>Konsumsi Air</h2>
                <p>Satu burger daging sapi membutuhkan lebih dari 2.500 liter air. Bayangkan jika kamu menghematnya hanya dengan absen daging setiap Senin.</p>
              </div>

              <div className='bg-white p-6 rounded-lg shadow-lg text-center border-2 border-orange-500 hover:translate-y-[-10px] transition-transform duration-300'>
                <img src={Bumi} alt="" className='w-20 h-20 object-cover mx-auto mb-4'/>
                <h2 className='text-lg font-medium text-orange-500'>Penggunaan Lahan</h2>
                <p>77% lahan pertanian digunakan untuk peternakan, padahal hasilnya hanya 18% dari kalori global. Sead ikut selamatkan ruang hijau!</p>
              </div>
            </div>
            <p className="text-center text-gray-800 md:text-lg mt-6 md:mt-10">Setiap piring tanpa daging adalah langkah kecil untuk perubahan besar. Tahukah kamu bahwa dengan tidak makan daging satu hari saja, kamu bisa <b>menghemat ribuan liter air</b> dan <b>mengurangi emisi gas rumah kaca?</b> Lewat kalkulator ini, lihat sendiri seberapa besar kontribusimu dan orang disekitarmu untuk bumi hanya dengan ikut gerakan <span className='text-[#147700] font-medium'>Sead</span></p>
        </div>

    <div className="w-full max-w-[360px] md:max-w-[550px] mx-auto my-6 px-6 md:px-16 py-10 bg-[#A8FD97] rounded-xl outline-2 outline-[#147700]">
      <label htmlFor="pilihan" className="block mb-2 font-medium text-[#1a1a1a]">
        Berapa minggu kamu mengikuti Sead?
      </label>
      <select
        id="pilihan"
        className="block w-full px-4 py-2 mb-6 text-gray-700 bg-white border border-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-1 focus:ring-[#147700] focus:border-[#147700]"
      >
        <option value="">-- Pilih Salah Satu --</option>
        <option value="1">1 Minggu</option>
        <option value="2">2 Minggu</option>
        <option value="3">3 Minggu</option>
        <option value="4">4 Minggu</option>
        <option value="5">5 Minggu</option>
        <option value="6">6 Minggu</option>
      </select>

      <label htmlFor="pilihan" className="block mb-2 font-medium text-[#1a1a1a]">
        Berapa orang yang kamu ajak mengikuti Sead?
      </label>
      <select
        id="pilihan"
        className="block w-full px-4 py-2 text-gray-700 bg-white border border-gray-700 rounded-lg shadow-md focus:outline-none focus:ring-1 focus:ring-[#147700] focus:border-[#147700]"
      >
        <option value="">-- Pilih Salah Satu --</option>
        <option value="1">1 Orang</option>
        <option value="2">2 Orang</option>
        <option value="3">3 Orang</option>
        <option value="4">4 Orang</option>
        <option value="5">5 Orang</option>
        <option value="6">6 Orang</option>
      </select>

      <button className='py-1 px-8 border-2 border-[#147700] bg-transparent hover:bg-[#147700] text-[#147700] font-medium hover:text-white rounded-full mt-8 mx-auto block'>
        Hitung
      </button>
    </div>

    <Perbandingan />
    </section>
  )
}

export default Berita
