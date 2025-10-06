import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, Scissors } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';

const BookingForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    time: '',
    service: 'Corte'
  });

  const services = ['Corte', 'Barba', 'Corte + Barba', 'Diseño'];

  const timeSlots = [
    '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '16:30', '17:00', '17:30', '18:00', '18:30', '19:00',
    '19:30', '20:00', '20:30', '21:00', '21:30', '22:00',
    '22:30', '23:00', '23:30'
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const message = `Hola Leo Barber! 👋

Quiero solicitar un turno con los siguientes datos:

👤 Nombre: ${formData.name}
📅 Fecha: ${formData.date}
🕐 Hora: ${formData.time}
✂️ Servicio: ${formData.service}

¡Gracias!`;

    const whatsappUrl = `https://wa.me/543516617207?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const today = new Date().toISOString().split('T')[0];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-bebas text-6xl text-barber-blue mb-4">
            RESERVA TU TURNO
          </h2>
          <div className="h-1 w-24 bg-barber-red mx-auto mb-6"></div>
          <p className="font-old-standard text-xl text-gray-600 max-w-3xl mx-auto">
            Completa el formulario y te contactaremos por WhatsApp para confirmar tu cita
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-barber-blue to-barber-red p-1 rounded-lg shadow-2xl">
              <div className="bg-white p-8 rounded-lg">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="flex items-center gap-2 font-old-standard font-bold text-gray-700 mb-2">
                      <User className="h-5 w-5 text-barber-blue" />
                      Nombre Completo
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-barber-blue focus:outline-none transition-colors font-old-standard"
                      placeholder="Ingresa tu nombre"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-old-standard font-bold text-gray-700 mb-2">
                      <Calendar className="h-5 w-5 text-barber-blue" />
                      Fecha
                    </label>
                    <input
                      type="date"
                      name="date"
                      value={formData.date}
                      onChange={handleChange}
                      min={today}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-barber-blue focus:outline-none transition-colors font-old-standard"
                    />
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-old-standard font-bold text-gray-700 mb-2">
                      <Clock className="h-5 w-5 text-barber-blue" />
                      Horario
                    </label>
                    <select
                      name="time"
                      value={formData.time}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-barber-blue focus:outline-none transition-colors font-old-standard"
                    >
                      <option value="">Selecciona un horario</option>
                      {timeSlots.map((slot) => (
                        <option key={slot} value={slot}>
                          {slot}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="flex items-center gap-2 font-old-standard font-bold text-gray-700 mb-2">
                      <Scissors className="h-5 w-5 text-barber-blue" />
                      Servicio
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-barber-blue focus:outline-none transition-colors font-old-standard"
                    >
                      {services.map((service) => (
                        <option key={service} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white py-4 rounded-lg font-old-standard font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <FaWhatsapp className="h-6 w-6" />
                    Enviar por WhatsApp
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="bg-white p-8 rounded-lg shadow-xl border-l-4 border-barber-red">
              <h3 className="font-bebas text-3xl text-barber-blue mb-6">
                INFORMACIÓN DE CONTACTO
              </h3>
              <div className="space-y-4 font-old-standard">
                <div className="flex items-start gap-3">
                  <div className="text-barber-red mt-1">📍</div>
                  <div>
                    <p className="font-bold text-gray-800">Dirección</p>
                    <p className="text-gray-600">Tenerife 4617, Córdoba</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-barber-red mt-1">📞</div>
                  <div>
                    <p className="font-bold text-gray-800">Teléfono</p>
                    <a href="tel:+543516617207" className="text-gray-600 hover:text-barber-blue">
                      +54 351 661 7207
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-barber-red mt-1">📧</div>
                  <div>
                    <p className="font-bold text-gray-800">Email</p>
                    <a href="mailto:leobarbero4578@gmail.com" className="text-gray-600 hover:text-barber-blue break-all">
                      leobarbero4578@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-barber-red mt-1">📱</div>
                  <div>
                    <p className="font-bold text-gray-800">Instagram</p>
                    <a 
                      href="https://instagram.com/barberia_leocabrera" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-pink-600"
                    >
                      @barberia_leocabrera
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-barber-blue to-barber-red text-white p-8 rounded-lg shadow-xl">
              <h3 className="font-bebas text-3xl mb-4">
                HORARIOS DE ATENCIÓN
              </h3>
              <div className="space-y-2 font-old-standard">
                <div className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span className="font-bold">9:00 - 20:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-bold">9:00 - 19:00</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingos:</span>
                  <span className="font-bold">Cerrado</span>
                </div>
              </div>
            </div>

            <motion.a
              href="https://wa.me/543516617207"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="block bg-green-500 text-white p-6 rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 text-center"
            >
              <FaWhatsapp className="h-12 w-12 mx-auto mb-3" />
              <p className="font-bebas text-2xl">¿CONSULTAS RÁPIDAS?</p>
              <p className="font-old-standard">Chatea con nosotros por WhatsApp</p>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;