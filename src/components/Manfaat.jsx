import React from 'react';

const data = [
    {
        title: 'Manfaat Lingkungan',
        desc: 'Mengurangi konsumsi daging membantu menurunkan emisi gas rumah kaca.',
        img: "../assets/hutan.jpg",
    },
        {
        title: 'Edukasi Gaya Hidup',
        desc: 'Website bantu orang belajar hidup sehat dengan cara yang sederhana.',
        img: "../assets/hutan.jpg",
    },
    {
        title: 'Manfaat Kesehatan',
        desc: 'Lebih banyak makan sayur bisa menurunkan risiko penyakit jantung dan obesitas.',
        img: "../assets/hutan.jpg",
    },
    {
        title: 'Komunitas Positif',
        desc: 'Jadi tempat berkumpulnya orang-orang yang punya tujuan menjaga bumi dan tubuh.',
        img: "../assets/hutan.jpg",
    },
]

const Manfaat = () => {
    return (
        <section id="manfaat" className="px-6 sm:px-10 md:px-20 my-16 overflow-x-hidden">
        <h1 className="text-3xl sm:text-4xl text-green-600 mb-8 text-center font-bold">Manfaat</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
            {data.map((item, index) => (
            <div
                key={index}
                className="p-2 bg-white border-2 border-green-300 rounded-2xl group hover:translate-y-[-10px] hover:bg-green-300 transition-all duration-300 ease-in-out"
            >
                <div
                className="w-full h-48 sm:h-56 bg-cover bg-center mb-4 rounded-2xl"
                style={{ backgroundImage: `url(${item.img})` }}
                ></div>

                <div>
                <h2 className="mb-4 text-lg sm:text-xl font-semibold text-center text-green-600">{item.title}</h2>
                <p className="text-gray-700 text-sm text-center mb-4">{item.desc}</p>
                </div>
            </div>
            ))}
        </div>
        </section>
    );
};

export default Manfaat;
