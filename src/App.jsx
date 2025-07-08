import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resep from './components/Resep';
import Tentang from './components/Tentang';
import Manfaat from './components/Manfaat';
import Footer from './components/Footer';
import KalkulatorAir from './components/KalkulatorAir';
import News from './components/News';
import Berita from './pages/Berita';

import './styles.css';

function App() {
  return (
    <BrowserRouter>

      <Routes>
        {/* Halaman utama (landing page) */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Hero />
              <Tentang />
              <Manfaat />
              <Resep />
              <Link to="/berita"> <News /> </Link>
              <Footer />
            </>
          }
        />

        {/* Halaman */}
        <Route path="/kalkulator" element={<KalkulatorAir />} />
        <Route path="/berita" element={<Berita />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
