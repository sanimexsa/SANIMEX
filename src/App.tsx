import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AcaciaGum from './pages/AcaciaGum';
import Construction from './pages/Construction';
import Logistics from './pages/Logistics';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen flex flex-col">
          {/* Skip to content link for accessibility */}
          <a 
            href="#main-content" 
            className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-[hsl(213,52%,24%)] focus:text-white focus:px-6 focus:py-3 focus:rounded-full focus:font-semibold focus:shadow-lg focus:outline-none"
          >
            Skip to main content
          </a>
          <Navbar />
          <main id="main-content" className="flex-grow" tabIndex={-1}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/acacia-gum" element={<AcaciaGum />} />
              <Route path="/construction" element={<Construction />} />
              <Route path="/logistics" element={<Logistics />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
