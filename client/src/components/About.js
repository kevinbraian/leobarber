import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Clock, TrendingUp } from 'lucide-react';

const About = () => {
  const stats = [
    { icon: Clock, value: '10+', label: 'Años de Experiencia' },
    { icon: Users, value: '5000+', label: 'Clientes Satisfechos' },
    { icon: Award, value: '100%', label: 'Profesionalismo' },
    { icon: TrendingUp, value: 'TOP', label: 'Calidad Garantizada' }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-6xl text-barber-blue mb-4">
            NUESTRA HISTORIA
          </h2>
          <div className="h-1 w-24 bg-barber-red mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-barber-blue to-barber-red p-1 rounded-lg shadow-2xl">
              <div className="bg-white p-8 rounded-lg">
                <h3 className="font-lobster text-4xl text-barber-blue mb-6">
                  Una Década de Excelencia
                </h3>
                <div className="space-y-4 font-old-standard text-lg text-gray-700 leading-relaxed">
                  <p>
                    Desde 2015, Leo Barber se ha establecido como un referente en el arte de la barbería en Córdoba. Nacida de la pasión por el oficio y el compromiso con la excelencia, nuestra barbería ha sido testigo de miles de transformaciones que van más allá de un simple corte de cabello.
                  </p>
                  <p>
                    Con más de una década de experiencia, hemos perfeccionado nuestras técnicas combinando la tradición clásica de la barbería con las tendencias más modernas. Cada cliente que cruza nuestra puerta no es solo un número, es parte de nuestra familia Leo Barber.
                  </p>
                  <p>
                    Nuestro fundador, Leo, formado en las mejores técnicas de barbería profesional, ha creado un espacio donde el profesionalismo se encuentra con la calidez humana. Cada corte, cada afeitado, cada diseño es ejecutado con precisión artesanal y dedicación absoluta.
                  </p>
                  <p className="font-bold text-barber-red">
                    En Leo Barber no solo cortamos cabello, creamos confianza y estilo.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.05 }}
                className="bg-white p-6 rounded-lg shadow-xl border-t-4 border-barber-red text-center"
              >
                <stat.icon className="h-12 w-12 mx-auto mb-4 text-barber-blue" />
                <div className="font-bebas text-4xl text-barber-red mb-2">
                  {stat.value}
                </div>
                <div className="font-old-standard text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-barber-blue text-white p-12 rounded-lg shadow-2xl text-center"
        >
          <h3 className="font-bebas text-5xl mb-6">NUESTROS VALORES</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-6xl mb-4">🎯</div>
              <h4 className="font-lobster text-2xl mb-3">Profesionalismo</h4>
              <p className="font-old-standard text-white/90">
                Cada servicio es ejecutado con la máxima precisión y técnica profesional
              </p>
            </div>
            <div>
              <div className="text-6xl mb-4">❤️</div>
              <h4 className="font-lobster text-2xl mb-3">Pasión</h4>
              <p className="font-old-standard text-white/90">
                Amamos lo que hacemos y se nota en cada detalle de nuestro trabajo
              </p>
            </div>
            <div>
              <div className="text-6xl mb-4">🤝</div>
              <h4 className="font-lobster text-2xl mb-3">Confianza</h4>
              <p className="font-old-standard text-white/90">
                Construimos relaciones duraderas basadas en resultados excepcionales
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;