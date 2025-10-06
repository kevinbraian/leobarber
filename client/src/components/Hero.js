import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { Scissors, MapPin } from 'lucide-react';

const Hero = () => {
  const scrollToBooking = () => {
    document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-barber-blue via-barber-red to-barber-blue opacity-90"></div>
      
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 animate-pulse">
          <Scissors className="text-white opacity-20 h-32 w-32 rotate-45" />
        </div>
        <div className="absolute bottom-20 right-10 animate-pulse delay-300">
          <Scissors className="text-white opacity-20 h-24 w-24 -rotate-45" />
        </div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="font-bebas text-7xl md:text-9xl text-white mb-4 tracking-wider"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          >
            LEO BARBER
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <div className="h-1 w-32 bg-white mx-auto mb-6"></div>
            <p className="font-lobster text-3xl md:text-4xl text-white mb-2">
              Estilo, Tradición y Profesionalismo
            </p>
            <p className="font-old-standard text-xl text-white/90">
              Desde 2015 transformando tu imagen
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToBooking}
              className="bg-white text-barber-blue px-8 py-4 rounded-full font-old-standard font-bold text-lg shadow-2xl hover:bg-barber-red hover:text-white transition-all duration-300 flex items-center gap-2"
            >
              <Scissors className="h-5 w-5" />
              Reservar Turno
            </motion.button>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/543516617207"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white px-8 py-4 rounded-full font-old-standard font-bold text-lg shadow-2xl hover:bg-green-600 transition-all duration-300 flex items-center gap-2"
            >
              <FaWhatsapp className="h-5 w-5" />
              WhatsApp
            </motion.a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col items-center gap-3 text-white"
          >
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-old-standard text-lg">Tenerife 4617, Córdoba</span>
            </div>
            <a
              href="https://instagram.com/barberia_leocabrera"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-barber-red transition-colors"
            >
              <FaInstagram className="h-6 w-6" />
              <span className="font-old-standard text-lg">@barberia_leocabrera</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;