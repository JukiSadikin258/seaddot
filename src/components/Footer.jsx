import React from 'react'
import logo from '../assets/logo.png'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'

const Footer = () => {
    return (
        <footer className="bg-[#147700] mt-10 text-white pt-10 pb-0 font-sans">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start gap-10 px-6 md:px-10">
            {/* Logo kiri */}
            <div className="flex flex-col items-center animate-fadein">
            <img src={logo} alt="Logo" className="w-28 h-28 mb-4 rounded-full bg-auto drop-shadow-lg hover:scale-110 transition-transform duration-300" />
            <h2 className="font-bold text-2xl tracking-wide">Sead</h2>
            <h3 className="font-semibold text-lg"> <span className="text-green-500">Se</span>nin <span className="text-green-500">A</span>bsen <span  className="text-green-500">D</span>aging</h3>
            </div>
            {/* Nav tengah */}
            <nav className="flex justify-center items-center">
            <ul className="flex flex-col gap-1 md:gap-2 text-lg font-medium">
                <li>
                <a href="#beranda" className="hover:text-green-500 transition-colors duration-200 relative after:block after:h-0.5 after:bg-green-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:mt-1">Beranda</a>
                </li>
                <li>
                <a href="#tentang" className="hover:text-green-500 transition-colors duration-200 relative after:block after:h-0.5 after:bg-green-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:mt-1">Tentang</a>
                </li>
                <li>
                <a href="#produk" className="hover:text-green-500 transition-colors duration-200 relative after:block after:h-0.5 after:bg-green-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:mt-1">Produk</a>
                </li>
                <li>
                <a href="#resep" className="hover:text-green-500 transition-colors duration-200 relative after:block after:h-0.5 after:bg-green-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:mt-1">Resep</a>
                </li>
                <li>
                <a href="#kontak" className="hover:text-green-500 transition-colors duration-200 relative after:block after:h-0.5 after:bg-green-400 after:scale-x-0 hover:after:scale-x-100 after:transition-transform after:duration-300 after:origin-left after:mt-1">Kontak</a>
                </li>
            </ul>
            </nav>
            {/* Sosial media kanan */}
            <div className="flex flex-col items-end gap-2 animate-fadein">
            <span className="font-semibold mb-1">Ikuti Kami</span>
            <div className="flex flex-col p-3 bg-[#3E9F2B] rounded-xl gap-5">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-2xl p-2 bg-[#147700] rounded-full transition-all duration-300 hover:scale-115 transform">
                <FaInstagram />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-2xl p-2 bg-[#147700] rounded-full transition-all duration-300 hover:scale-115 transform">
                <FaTwitter />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-2xl p-2 bg-[#147700] rounded-full transition-all duration-300 hover:scale-115 transform">
                <FaFacebookF />
                </a>
            </div>
            </div>
        </div>
        <div className="border-t border-green-600 mt-10 py-4 text-center bg-[#147700] animate-fadein">
            <span className="text-green-100 text-base tracking-wide">Copyright &copy;2025 . SIJAWARA</span>
        </div>
        </footer>
    )
}

export default Footer