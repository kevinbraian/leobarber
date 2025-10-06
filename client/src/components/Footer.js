import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import { Scissors } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-br from-barber-blue to-barber-red text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-2 mb-6"
            >
              <Scissors className="h-10 w-10 rotate-45" />
              <span className="font-bebas text-4xl">LEO BARBER</span>
            </motion.div>
            <p className="font-old-standard text-white/90 leading-relaxed mb-6">
              Desde 2015 transformando tu imagen con profesionalismo y estilo. Tu barbería de confianza en Córdoba.
            </p>
            <div className="flex gap-4">
              <motion.a
                whileHover={{ scale: 1.1, rotate: 5 }}
                href="https://wa.me/543516617207"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-green-500 transition-colors"
              >
                <FaWhatsapp className="h-6 w-6" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, rotate: -5 }}
                href="https://instagram.com/barberia_leocabrera"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 p-3 rounded-full hover:bg-pink-600 transition-colors"
              >
                <FaInstagram className="h-6 w-6" />
              </motion.a>
            </div>
          </div>

          <div>
            <h3 className="font-bebas text-2xl mb-6">NAVEGACIÓN</h3>
            <ul className="space-y-3 font-old-standard">
              <li>
                <button
                  onClick={() => scrollToSection('#hero')}
                  className="hover:text-barber-red transition-colors flex items-center gap-2"
                >
                  <span className="text-barber-red">▸</span> Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#about')}
                  className="hover:text-barber-red transition-colors flex items-center gap-2"
                >
                  <span className="text-barber-red">▸</span> Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#services')}
                  className="hover:text-barber-red transition-colors flex items-center gap-2"
                >
                  <span className="text-barber-red">▸</span> Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#gallery')}
                  className="hover:text-barber-red transition-colors flex items-center gap-2"
                >
                  <span className="text-barber-red">▸</span> Galería
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#testimonials')}
                  className="hover:text-barber-red transition-colors flex items-center gap-2"
                >
                  <span className="text-barber-red">▸</span> Testimonios
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('#contact')}
                  className="hover:text-barber-red transition-colors flex items-center gap-2"
                >
                  <span className="text-barber-red">▸</span> Contacto
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bebas text-2xl mb-6">HORARIOS</h3>
            <ul className="space-y-3 font-old-standard">
              <li>
                <div className="font-bold mb-1">Lunes - Viernes:</div>
                <div className="text-sm">10:00 - 12:30</div>
                <div className="text-sm">16:30 - 23:30</div>
              </li>
              <li>
                <div className="font-bold mb-1">Sábados:</div>
                <div className="text-sm">9:00 - 12:30</div>
                <div className="text-sm">16:30 - 23:30</div>
              </li>
              <li>
                <div className="font-bold mb-1">Domingos:</div>
                <div className="text-sm">9:00 - 12:30</div>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bebas text-2xl mb-6">CONTACTO</h3>
            <ul className="space-y-4 font-old-standard">
              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="h-5 w-5 mt-1 flex-shrink-0" />
                <span>Tenerife 4617<br/>Córdoba, Argentina</span>
              </li>
              <li className="flex items-center gap-3">
                <FaPhone className="h-5 w-5 flex-shrink-0" />
                <a href="tel:+543516617207" className="hover:text-barber-red transition-colors">
                  +54 351 661 7207
                </a>
              </li>
              <li className="flex items-center gap-3">
                <FaEnvelope className="h-5 w-5 flex-shrink-0" />
                <a href="mailto:leobarbero4578@gmail.com" className="hover:text-barber-red transition-colors break-all">
                  leobarbero4578@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-old-standard text-white/80 text-center md:text-left">
              © {new Date().getFullYear()} Leo Barber. Todos los derechos reservados.
            </p>
            <p className="font-old-standard text-white/80 text-center md:text-right">
              Hecho con ❤️ en Córdoba, Argentina
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;