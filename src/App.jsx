import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Resep from './components/Resep';
import Tentang from './components/Tentang';
import Manfaat from './components/Manfaat';
import Footer from './components/Footer';
import KalkulatorAir from './pages/KalkulatorAir';
import Kalkulator from './components/Kalkulator';

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
              <Link to="/kalkulator"> <Kalkulator /> </Link>
              <Footer />
            </>
          }
        />

        {/* Halaman kalkulator */}
        <Route path="/kalkulator" element={<KalkulatorAir />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
