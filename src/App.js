import React from 'react';

import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';

import SliderSection from './components/SliderSection';
import ColorsSection from './components/ColorsSection';

import Footer from './components/Footer';

function App() {
  return (
    <>
      <NavBar
        links={[
          { name: 'Home', path: 'home' },
          { name: 'Cores', path: 'colors' },
        ]}
      />
      <HeroSection id="home" />
      <ColorsSection />
      <SliderSection id="colors" />
      <Footer />
    </>
  );
}

export default App;
