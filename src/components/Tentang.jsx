import React from 'react';

const Tentang = () => {
  return (
    <section id="tentang" className="px-6 sm:px-10 md:px-20 mt-10 overflow-x-hidden">
      <h1 className="font-bold text-center mb-8 text-3xl sm:text-4xl text-green-600">Tentang</h1>

      <div className="relative bg-[#C0EAB7] p-6 sm:p-8 rounded-2xl">
        {/* Deskripsi */}
        <div>
          <p className="text-base sm:text-lg">
            <span className="font-semibold">Sead (Senin Absen Daging)</span> adalah gerakan yang mengajak masyarakat untuk tidak mengonsumsi daging setiap hari Senin demi kesehatan tubuh dan kelestarian bumi. Semua orang bisa! Anak muda, orang tua, keluarga, bahkan komunitas atau kantor. Cukup mulai dari satu hari dalam seminggu: Senin!
          </p>
        </div>

        <div className="w-full h-0.5 my-4 rounded-xl bg-green-800"></div>

        {/* Fakta */}
        <div>
          <h2 className="text-lg sm:text-xl font-semibold mt-10 mb-4">Fakta yang mungkin belum kamu ketahui</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center">
            <div className="p-6 bg-orange-600 rounded-xl hover:bg-white hover:border-2 hover:translate-y-[-10px] transition-all duration-300 border-orange-600 group">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-orange-600">Emisi Gas Rumah Kaca</h3>
              <p className="text-white text-sm group-hover:text-gray-600">
                Industri peternakan menyumbang sekitar 14,5% emisi gas rumah kaca global, hampir setara dengan total emisi dari semua kendaraan bermotor di dunia.
              </p>
            </div>

            <div className="p-6 bg-blue-500 rounded-xl hover:bg-white hover:border-2 hover:translate-y-[-10px] transition-all duration-300 border-blue-500 group">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-blue-500">Konsumsi Air</h3>
              <p className="text-white text-sm group-hover:text-gray-600">
                Produksi 1 burger daging sapi (113 gr) membutuhkan lebih dari 2.500 liter air — cukup untuk mandi selama 2 jam. <i>(Sumber: Water Footprint Network)</i>
              </p>
            </div>

            <div className="p-6 bg-green-600 rounded-xl hover:bg-white hover:border-2 hover:translate-y-[-10px] transition-all duration-300 border-green-600 group">
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-3 group-hover:text-green-600">Penggunaan Lahan</h3>
              <p className="text-white text-sm group-hover:text-gray-600">
                Deforestasi (terutama di Amazon) sebagian besar didorong oleh ekspansi lahan untuk peternakan sapi dan penanaman kedelai pakan ternak.
              </p>
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-6 sm:mt-8 bg-blue-500 p-4 rounded-xl text-center text-white">
          <p className="text-sm sm:text-base">
            "Dengan satu hari tanpa daging, kamu sudah membantu menurunkan emisi rumah kaca, menghemat ribuan liter air, dan melindungi hutan dunia."
          </p>
        </div>
      </div>
    </section>
  );
};

export default Tentang;
