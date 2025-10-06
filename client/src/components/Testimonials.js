import React from 'react';
import { motion } from 'framer-motion';
import { Star, Instagram } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Rebeca Rivadero',
      username: 'rebecarivadero',
      comment: 'Excelente conexión con los niños y brillante profesional!!',
      link: 'https://www.instagram.com/p/C80Fke-Ot9F/',
      rating: 5
    },
    {
      name: 'Villagra',
      username: 'villagra7206',
      comment: 'Hermoso ese corte😍',
      link: 'https://www.instagram.com/p/C38qW7ouQLx/',
      rating: 5
    },
    {
      name: 'Full Lim',
      username: 'full_lim25',
      comment: 'Que genios ambos!!! 👏',
      link: 'https://www.instagram.com/p/C36rtIaOOkE/',
      rating: 5
    },
    {
      name: 'Il Paesano',
      username: 'il.paesano',
      comment: 'Mi peluquero preferido',
      link: 'https://www.instagram.com/p/C36rtIaOOkE/',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-6xl text-barber-blue mb-4">
            LO QUE DICEN NUESTROS CLIENTES
          </h2>
          <div className="h-1 w-24 bg-barber-red mx-auto mb-6"></div>
          <p className="font-old-standard text-xl text-gray-600 max-w-3xl mx-auto">
            La satisfacción de nuestros clientes es nuestro mayor logro
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
              className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-xl p-6 border-t-4 border-barber-red"
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex gap-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Instagram className="h-5 w-5 text-pink-600" />
              </div>

              <p className="font-old-standard text-gray-700 mb-6 italic leading-relaxed">
                "{testimonial.comment}"
              </p>

              <div className="border-t pt-4">
                <p className="font-bold text-barber-blue font-old-standard mb-1">
                  {testimonial.name}
                </p>
                <a
                  href={testimonial.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-500 hover:text-pink-600 transition-colors font-old-standard flex items-center gap-1"
                >
                  @{testimonial.username}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-barber-red to-barber-blue text-white p-12 rounded-lg shadow-2xl text-center"
        >
          <h3 className="font-bebas text-4xl mb-4">
            ¿YA NOS VISITASTE?
          </h3>
          <p className="font-old-standard text-lg mb-6 max-w-2xl mx-auto">
            Comparte tu experiencia en nuestras redes sociales y forma parte de nuestra familia Leo Barber
          </p>
          <motion.a
            href="https://instagram.com/barberia_leocabrera"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-white text-barber-blue px-8 py-4 rounded-full font-old-standard font-bold text-lg shadow-xl hover:bg-pink-600 hover:text-white transition-all duration-300"
          >
            <Instagram className="h-5 w-5" />
            Etiquétanos en Instagram
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;