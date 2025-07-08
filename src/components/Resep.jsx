import React from "react";
import photo from '../assets/photo.webp';
import resepPdf from '../assets/Resep_gadogado.pdf';

const resepList = [
    { title: "Gado-gado", gambar: photo, file: resepPdf },
    { title: "Karedok", gambar: photo, file: resepPdf },
    { title: "Papeda", gambar: photo, file: resepPdf },
    { title: "Sayur Daun Singkong", gambar: photo, file: resepPdf },
    { title: "Sayur Nangka", gambar: photo, file: resepPdf },
    { title: "Gado-gado", gambar: photo, file: resepPdf },
];

const Resep = () => {
    return (
        <section id="resep" className="px-6 sm:px-10 md:px-20 my-10 overflow-x-hidden">
        <h1 className="text-3xl md:text-5xl text-[#3E9F2B] text-center font-bold mb-10">Resep</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 justify-center">
        {resepList.map((resep, i) => {
          // Bergantian antara animasi top dan bottom
            const animationClass = i % 2 === 0 ? "-top-80 group-hover:top-0" : "-bottom-80 group-hover:bottom-0";

            return (
                <div key={i} className="w-full max-w-[18rem] h-fit mx-auto group">
                <div className="relative overflow-hidden rounded-2xl ">
                    <a href={resep.file} download>
                    <img src={resep.gambar} alt={resep.title} className="w-full object-cover rounded-2xl cursor-pointer" />
                    </a>
                    <div
                    className={`absolute w-full h-full bg-green-600/30 flex flex-col items-center justify-center ${animationClass} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                    >
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold text-white mb-6 text-center">
                        {resep.title}
                    </h2>
                    <a className="text-center mx-auto" href={resep.file} download>
                        <button className="px-5 py-2 bg-green-500 hover:active:bg-green-600 rounded-md cursor-pointer text-white text-sm">
                        Unduh Resep
                        </button>
                    </a>
                    </div>
                </div>
                </div>
            );
            })}
        </div>
        </section>
    );
};

export default Resep;
