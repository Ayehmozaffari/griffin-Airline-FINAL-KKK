import React from 'react';
import Hero from './components/Hero';
import ScrollToTop from './components/ScrollToTop';
import Services from './components/Services';
import Navbar from './components/Navbar';
import Recommend from './components/Recommend';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
export default function App (){
  return <>
  <ScrollToTop />
  <Navbar />
  <Hero />
  <Services />
  <Recommend />
  <Testimonials />
  <Footer />
  </>
}