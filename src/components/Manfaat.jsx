import React from 'react';
import img from '../assets/hutan.jpg';

const data = [
    {
        title: 'Manfaat Lingkungan',
        desc: 'Mengurangi konsumsi daging membantu menurunkan emisi gas rumah kaca.',
    },
        {
        title: 'Edukasi Gaya Hidup',
        desc: 'Website bantu orang belajar hidup sehat dengan cara yang sederhana.',
    },
    {
        title: 'Manfaat Kesehatan',
        desc: 'Lebih banyak makan sayur bisa menurunkan risiko penyakit jantung dan obesitas.',
    },
    {
        title: 'Komunitas Positif',
        desc: 'Jadi tempat berkumpulnya orang-orang yang punya tujuan menjaga bumi dan tubuh.',
    },
]

const Manfaat = () => {
    return (
        <section id="manfaat" className="px-6 sm:px-10 md:px-20 my-16 overflow-x-hidden">
        <h1 className="text-3xl md:text-5xl text-[#3E9F2B] mb-8 text-center font-bold">Manfaat</h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 justify-center">
            {data.map((item, index) => (
            <div
                key={index}
                className="p-2 bg-white border-2 border-green-300 rounded-[25px] group hover:translate-y-[-10px] hover:bg-green-300 transition-all duration-300 ease-in-out"
            >
                <div
                className="w-full h-36 sm:h-44 bg-cover bg-center mb-4 rounded-[17px] overflow-hidden"
                >
                    <img src={img} alt="" />
                </div>

                <div>
                <h2 className="mb-4 text-lg sm:text-xl font-semibold text-center text-[#147700]">{item.title}</h2>
                <p className="text-gray-700 text-sm text-center mb-4">{item.desc}</p>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Manfaat;
