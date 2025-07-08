import React from 'react';

const Tentang = () => {
  return (
    <section id="tentang" className="px-6 sm:px-10 md:px-20 py-10 overflow-x-hidden">
      <h1 className="font-bold text-center mb-8 text-3xl md:text-5xl text-[#3E9F2B]">Tentang</h1>

      <div className="relative bg-[#C0EAB7] p-6 sm:p-8 rounded-2xl shadow-[0px_0px_15px_#147700]">
        <div>
          <p className="text-base sm:text-lg">
            <span className="font-semibold">Sead (Senin Absen Daging)</span> adalah gerakan yang mengajak masyarakat untuk tidak mengonsumsi daging setiap hari Senin demi kesehatan tubuh dan kelestarian bumi. Semua orang bisa! Anak muda, orang tua, keluarga, bahkan komunitas atau kantor. Cukup mulai dari satu hari dalam seminggu: Senin!
          </p>
        </div>

        <div className="w-full h-0.5 my-4 rounded-xl bg-green-800"></div>

        {/* Fakta */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mt-10 mb-4">Testimoni</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 text-center">

            <div className="p-6 bg-[#3E9F2B] rounded-xl flex flex-col justify-between hover:bg-white hover:outline-2 transition-all duration-300 outline-[#3E9F2B] group">
              <p className="text-white text-sm md:text-base group-hover:text-gray-600 mb-4">
                “Awalnya saya kira sulit. Tapi ternyata menyenangkan dan menyehatkan! Sekarang tiap Senin jadi hari makan sayur favorit saya.”
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#3E9F2B]">Ridzz - 21 tahun</h3>
            </div>

            <div className="p-6 bg-[#3E9F2B] rounded-xl flex flex-col justify-between hover:bg-white hover:outline-2 transition-all duration-300 outline-[#3E9F2B] group">
              <p className="text-white text-sm md:text-base group-hover:text-gray-600 mb-4">
                “Tidak makan daging sehari bisa menghemat air dan energi, dan ternyata menyenangkan juga bisa makan sayur tiap Senin.”
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#3E9F2B]">Fathiyah - 21 tahun</h3>
            </div>

            <div className="p-6 bg-[#3E9F2B] rounded-xl flex flex-col justify-between hover:bg-white hover:outline-2 transition-all duration-300 outline-[#3E9F2B] group">
              <p className="text-white text-sm md:text-base group-hover:text-gray-600 mb-4">
                “Gerakan Sead dapat mengurangi emisi gas rumah kaca dari peternakan. Langkah kecil seperti ini bisa berdampak besar untuk bumi.”
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#3E9F2B]">Putri - 21 tahun</h3>
            </div>

            <div className="p-6 bg-[#3E9F2B] rounded-xl flex flex-col justify-between hover:bg-white hover:outline-2 transition-all duration-300 outline-[#3E9F2B] group">
              <p className="text-white text-sm md:text-base group-hover:text-gray-600 mb-4">
                “Awalnya memang terasa sulit, tapi bisa jadi kebiasaan menyenangkan Sehat untuk tubuh, baik juga untuk bumi.”
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:text-[#3E9F2B]">Aisyah - 21 tahun</h3>
            </div>

          </div>
        </div>

        {/* Quote */}
        {/* <div className="mt-6 sm:mt-8 bg-blue-500 p-4 rounded-xl text-center text-white">
          <p className="text-sm sm:text-base">
            "Dengan satu hari tanpa daging, kamu sudah membantu menurunkan emisi rumah kaca, menghemat ribuan liter air, dan melindungi hutan dunia."
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Tentang;
