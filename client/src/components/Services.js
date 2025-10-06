import React from 'react';
import { motion } from 'framer-motion';
import { Scissors, Wind, Sparkles } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: 'Corte Profesional',
      description: 'Cortes modernos y clásicos adaptados a tu estilo personal. Utilizamos técnicas avanzadas para lograr el look perfecto que realza tus facciones.',
      features: ['Asesoramiento personalizado', 'Técnicas modernas y clásicas', 'Productos premium', 'Acabado impecable']
    },
    {
      icon: Wind,
      title: 'Barba & Afeitado',
      description: 'Diseño, perfilado y cuidado profesional de barba. Desde un afeitado clásico con toalla caliente hasta el diseño más moderno y detallado.',
      features: ['Afeitado clásico', 'Diseño y perfilado', 'Tratamiento con vapor', 'Productos especializados']
    },
    {
      icon: Sparkles,
      title: 'Diseño Creativo',
      description: 'Líneas, degradados y diseños personalizados que marcan la diferencia. Tu imaginación es el límite para crear un estilo único e irrepetible.',
      features: ['Diseños exclusivos', 'Degradados perfectos', 'Líneas precisas', 'Estilos personalizados']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-6xl text-barber-blue mb-4">
            NUESTROS SERVICIOS
          </h2>
          <div className="h-1 w-24 bg-barber-red mx-auto mb-6"></div>
          <p className="font-old-standard text-xl text-gray-600 max-w-3xl mx-auto">
            Servicios profesionales diseñados para destacar tu mejor versión
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="bg-gradient-to-br from-gray-50 to-white rounded-lg shadow-xl overflow-hidden border-t-4 border-barber-red h-full transition-all duration-300 hover:shadow-2xl">
                <div className="bg-gradient-to-br from-barber-blue to-barber-red p-8 text-white">
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="h-16 w-16 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="font-bebas text-3xl text-center">
                    {service.title}
                  </h3>
                </div>

                <div className="p-6">
                  <p className="font-old-standard text-gray-700 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="mt-1 h-2 w-2 rounded-full bg-barber-red flex-shrink-0"></div>
                        <span className="font-old-standard text-sm text-gray-600">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 bg-gradient-to-r from-barber-blue to-barber-red text-white p-12 rounded-lg shadow-2xl"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="font-bebas text-4xl mb-4">
              ¿POR QUÉ ELEGIRNOS?
            </h3>
            <p className="font-old-standard text-lg mb-8 leading-relaxed">
              En Leo Barber combinamos técnica, experiencia y pasión para brindarte un servicio excepcional. Cada detalle cuenta, desde el saludo hasta el resultado final. Tu satisfacción es nuestra misión.
            </p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="font-bebas text-5xl mb-2">10+</div>
                <div className="font-old-standard text-sm">Años de Experiencia</div>
              </div>
              <div>
                <div className="font-bebas text-5xl mb-2">100%</div>
                <div className="font-old-standard text-sm">Profesionalismo</div>
              </div>
              <div>
                <div className="font-bebas text-5xl mb-2">5K+</div>
                <div className="font-old-standard text-sm">Clientes Felices</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;