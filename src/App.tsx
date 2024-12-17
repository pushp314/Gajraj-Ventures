import React, { Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Navbar } from './components/Navbar';
import { LoadingSpinner } from './components/shared/LoadingSpinner';
import { ScrollProgress } from './components/shared/ScrollProgress';
import { ScrollToTop } from './components/shared/ScrollToTop';

// Lazy load components
const Hero = React.lazy(() => import('./components/Hero').then(module => ({ default: module.Hero })));
const About = React.lazy(() => import('./components/sections/About').then(module => ({ default: module.About })));
const Services = React.lazy(() => import('./components/Services').then(module => ({ default: module.Services })));
const Process = React.lazy(() => import('./components/sections/Process').then(module => ({ default: module.Process })));
const Portfolio = React.lazy(() => import('./components/sections/Portfolio').then(module => ({ default: module.Portfolio })));
const Team = React.lazy(() => import('./components/sections/Team').then(module => ({ default: module.Team })));
const Testimonials = React.lazy(() => import('./components/sections/Testimonials').then(module => ({ default: module.Testimonials })));
const FAQ = React.lazy(() => import('./components/sections/FAQ').then(module => ({ default: module.FAQ })));
const Contact = React.lazy(() => import('./components/Contact').then(module => ({ default: module.Contact })));
const Footer = React.lazy(() => import('./components/sections/Footer').then(module => ({ default: module.Footer })));

function App() {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        <Navbar />
        <ScrollProgress />
        
        <Suspense fallback={<LoadingSpinner />}>
          <main>
            <Hero />
            <About />
            <Services />
            <Process />
            <Portfolio />
            <Team />
            <Testimonials />
            <FAQ />
            <Contact />
          </main>
          <Footer />
        </Suspense>
        
        <ScrollToTop />
      </motion.div>
    </AnimatePresence>
  );
}

export default App;