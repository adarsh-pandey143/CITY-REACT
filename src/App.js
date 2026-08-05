import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Networks from './pages/Networks';
import Roadways from './pages/services/Roadways';
import Express from './pages/services/Express';
import Airfreight from './pages/services/Airfreight';
import Warehouse from './pages/services/Warehouse';
import Careers from './pages/Careers';
import ProhibitedGoods from './pages/ProhibitedGoods';
import Tracking from './pages/Tracking';
import ContactUs from './pages/ContactUs';
import NotFound from './pages/NotFound';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/networks" element={<Networks />} />
              <Route path="/services/roadways" element={<Roadways />} />
              <Route path="/services/express" element={<Express />} />
              <Route path="/services/airfreight" element={<Airfreight />} />
              <Route path="/services/warehouse" element={<Warehouse />} />
              <Route path="/careers" element={<Careers />} />
              <Route path="/prohibited-goods" element={<ProhibitedGoods />} />
              <Route path="/tracking" element={<Tracking />} />
              <Route path="/contact-us" element={<ContactUs />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;

