import { useState } from "react";
// Kalkulator Air untuk menghitung jejak air dari makanan yang dikonsumsi


const dataMakanan = [
{ nama: "Daging Sapi", air: 1800 },
{ nama: "Daging Domba", air: 820 },
{ nama: "Daging Ayam", air: 520 },
{ nama: "Telur", air: 300 },
{ nama: "Tahu", air: 90 },
{ nama: "Tempe", air: 120 },
{ nama: "Nasi", air: 160 },
{ nama: "Sayur", air: 40 },
{ nama: "Ubi", air: 50 },
{ nama: "Buah", air: 70 },
];

    const KalkulatorAir = () =>  {
        const [terpilih, setTerpilih] = useState([]);
        const [totalAir, setTotalAir] = useState(0);

        const togglePilih = (item) => {
            let baru = [...terpilih];

            if (baru.includes(item)) {
            baru = baru.filter((i) => i !== item);
            } else {
            baru.push(item);
            }

            setTerpilih(baru);
            hitungAir(baru);
        };

        const hitungAir = (makananTerpilih) => {
            const total = makananTerpilih.reduce((acc, nama) => {
            const item = dataMakanan.find((m) => m.nama === nama);
            return acc + (item?.air || 0);
            }, 0);
            setTotalAir(total);
        };

    return (
        <div className="max-w-2xl mx-auto my-10 p-6 bg-white rounded-xl shadow">
        <h2 className="text-2xl font-bold mb-4 text-green-800">Ayo Hitung Jejak Air Dari Makananmu!</h2>
        <p className="mb-4 text-gray-700">Makanan yang kamu makan hari ini</p>

        <div className="flex flex-wrap gap-3 mb-16">
            {dataMakanan.map((item) => (
            <button
                key={item.nama}
                onClick={() => togglePilih(item.nama)}
                className={`border px-4 py-2 rounded-full ${
                terpilih.includes(item.nama)
                    ? "bg-green-700 text-white"
                    : "bg-white text-green-700 border-green-700"
                }`}
            >
                {item.nama}
            </button>
            ))}
        </div>

        <div className="text-xl font-semibold text-center">
            Total air yang digunakan:{" "}
            <span className="text-green-700">{totalAir.toLocaleString()} liter</span>
        </div>

        {totalAir > 0 && (
            <p className="mt-4 text-center text-sm text-gray-600">
            Bayangkan, hanya dari satu kali makan kamu sudah menggunakan sebanyak itu.  
            Yuk, mulai kurangi konsumsi berbasis hewani setiap hari 💧🌱
            </p>
        )}
        </div>
    );
}

export default KalkulatorAir;
