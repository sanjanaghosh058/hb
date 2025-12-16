import { useState, useEffect } from 'react';
import './App.css';
import Carousel from './components/Carousel';
import TitleSection from './components/TitleSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <TitleSection />
      <Carousel />
      <Footer />
    </div>
  );
}

export default App;
