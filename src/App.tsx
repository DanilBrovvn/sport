import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import VideoSection from './components/VideoSection';
import Gallery from './components/Gallery';
import About from './components/About';
import Challenges from './components/Challenges';
import WhyChooseUs from './components/WhyChooseUs';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <Hero />
      <VideoSection />
      <Gallery />
      <About />
      <Challenges />
      <WhyChooseUs />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;