import { useState } from 'react';
import { Camera, TrendingUp, ShieldCheck, MessageCircle, HelpCircle, Star, Clock, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import MapPicker from '../components/MapPicker';

export default function Vender() {
  const [formData, setFormData] = useState({
    nombre: '',
    telefono: '',
    marca: '',
    modelo: '',
    año: '',
    kilometraje: '',
    ubicacion_ciudad: '',
    latitud: null as number | null,
    longitud: null as number | null,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const BACKEND_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000';

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      const response = await fetch(`${BACKEND_URL}/api/solicitudes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre: formData.nombre,
          telefono: formData.telefono,
          marca: formData.marca,
          modelo: formData.modelo,
          año: parseInt(formData.año),
          kilometraje: parseInt(formData.kilometraje),
          ubicacion_ciudad: formData.ubicacion_ciudad,
          latitud: formData.latitud,
          longitud: formData.longitud
        }),
      });

      if (!response.ok) {
        throw new Error('Error de conexión con el servidor.');
      }

      setSubmitSuccess(true);
      
      // Generar mensaje contextual de WhatsApp
      const message = `Hola Speed Car, acabo de enviar una solicitud en la web para vender mi carro:\n\n` +
        `- Nombre: ${formData.nombre}\n` +
        `- Vehículo: ${formData.marca} ${formData.modelo} (${formData.año})\n` +
        `Quedo atento para coordinar la sesión de fotos y peritaje.`;

      const whatsappUrl = `https://wa.me/573137148566?text=${encodeURIComponent(message)}`;
      
      setTimeout(() => {
        window.open(whatsappUrl, '_blank');
      }, 1500);

    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Error al enviar la solicitud.');
      // Fallback a WhatsApp directo si falla la BD
      const message = `Hola Speed Car, quiero vender mi carro:\n\n` +
        `- Nombre: ${formData.nombre}\n` +
        `- Vehículo: ${formData.marca} ${formData.modelo} (${formData.año})\n` +
        `Quedo atento.`;
      const whatsappUrl = `https://wa.me/573137148566?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
    } finally {
      setIsSubmitting(false);
    }
  };

  const features = [
    {
      icon: Camera,
      title: 'Fotografía Premium',
      desc: 'Hacemos que tu vehículo resalte con fotos de alta calidad que atraen a compradores serios.',
    },
    {
      icon: TrendingUp,
      title: 'Máximo Alcance',
      desc: 'Publicamos en portales líderes y realizamos pauta digital segmentada en Cali.',
    },
    {
      icon: ShieldCheck,
      title: 'Seguridad Total',
      desc: 'Nosotros filtramos a los interesados y coordinamos citas seguras. Tú solo recibes el pago.',
    },
  ];

  return (
    <main className="bg-surface-alt min-h-screen pb-16 overflow-hidden">
      {/* Hero Section con Fondo Dinámico */}
      <section className="relative py-20 lg:py-28">
        {/* Decorative Backgrounds */}
        <div className="absolute inset-0 bg-surface pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-bl from-primary/10 to-transparent pointer-events-none"></div>
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            
            {/* Texto informativo (Marketing) */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              <div>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 border border-primary/30 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-primary shadow-[0_0_15px_rgba(var(--color-primary),0.2)] mb-6">
                  <Star size={14} className="fill-primary" /> Servicio Premium
                </span>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main leading-[1.1] tracking-tight font-display">
                  Vende tu carro <br className="hidden sm:block"/>
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-emerald-400">más rápido</span> y al mejor precio
                </h1>
                <p className="mt-6 text-lg text-text-muted leading-relaxed max-w-lg">
                  Sin llamadas a deshoras, sin regateos incómodos y con total seguridad legal. Nos encargamos de todo el marketing y cierre en Cali.
                </p>
              </div>
              
              <div className="grid gap-6">
                {features.map((feat, idx) => (
                  <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + (idx * 0.1) }}
                    key={feat.title} 
                    className="flex gap-4 items-start group"
                  >
                    <div className="bg-surface-alt border border-border/80 p-3 rounded-2xl flex-shrink-0 group-hover:border-primary/50 group-hover:bg-primary/5 transition-colors duration-300 shadow-sm">
                      <feat.icon size={24} className="text-primary" />
                    </div>
                    <div>
                      <h3 className="font-bold text-text-main text-base group-hover:text-primary transition-colors">{feat.title}</h3>
                      <p className="text-sm text-text-muted mt-1 leading-relaxed">{feat.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Trust Badges */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.8 }}
                className="flex items-center gap-6 pt-6 border-t border-border/60"
              >
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="text-primary" size={20} />
                  <span className="text-sm font-semibold text-text-main">Traspaso 100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="text-primary" size={20} />
                  <span className="text-sm font-semibold text-text-main">Venta en tiempo récord</span>
                </div>
              </motion.div>
            </motion.div>

            {/* Formulario Glassmorphism */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="relative"
            >
              {/* Glow detrás del form */}
              <div className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-emerald-400/30 rounded-[2.5rem] blur-xl opacity-50"></div>
              
              <div className="relative bg-surface/80 backdrop-blur-xl rounded-[2rem] shadow-2xl border border-white/10 p-8 sm:p-10">
                <div className="mb-8">
                  <h2 className="text-2xl font-black text-text-main font-display">
                    Inscribe tu vehículo
                  </h2>
                  <p className="text-sm text-text-muted mt-2">
                    Déjanos los datos básicos y un experto te contactará en menos de 15 minutos.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="nombre" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Nombre Completo</label>
                      <input
                        required
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        placeholder="Ej. Juan Pérez"
                        className="w-full px-4 py-3 rounded-xl border border-border/80 bg-surface-alt text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-primary/30 shadow-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="telefono" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">WhatsApp</label>
                      <input
                        required
                        type="tel"
                        id="telefono"
                        name="telefono"
                        value={formData.telefono}
                        onChange={handleChange}
                        placeholder="Ej. 3137148566"
                        className="w-full px-4 py-3 rounded-xl border border-border/80 bg-surface-alt text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-primary/30 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="marca" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Marca</label>
                      <input
                        required
                        type="text"
                        id="marca"
                        name="marca"
                        value={formData.marca}
                        onChange={handleChange}
                        placeholder="Ej. Mazda"
                        className="w-full px-4 py-3 rounded-xl border border-border/80 bg-surface-alt text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-primary/30 shadow-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="modelo" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Modelo</label>
                      <input
                        required
                        type="text"
                        id="modelo"
                        name="modelo"
                        value={formData.modelo}
                        onChange={handleChange}
                        placeholder="Ej. CX-30"
                        className="w-full px-4 py-3 rounded-xl border border-border/80 bg-surface-alt text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-primary/30 shadow-sm"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="año" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Año</label>
                      <input
                        required
                        type="number"
                        id="año"
                        name="año"
                        value={formData.año}
                        onChange={handleChange}
                        placeholder="Ej. 2022"
                        className="w-full px-4 py-3 rounded-xl border border-border/80 bg-surface-alt text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-primary/30 shadow-sm"
                      />
                    </div>
                    <div>
                      <label htmlFor="kilometraje" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Kilometraje</label>
                      <input
                        required
                        type="number"
                        id="kilometraje"
                        name="kilometraje"
                        value={formData.kilometraje}
                        onChange={handleChange}
                        placeholder="Ej. 35000"
                        className="w-full px-4 py-3 rounded-xl border border-border/80 bg-surface-alt text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-primary/30 shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="ubicacion_ciudad" className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Ciudad o Sector *</label>
                    <input
                      required
                      type="text"
                      id="ubicacion_ciudad"
                      name="ubicacion_ciudad"
                      value={formData.ubicacion_ciudad}
                      onChange={handleChange}
                      placeholder="Ej. Cali, Ciudad Jardín"
                      className="w-full px-4 py-3 rounded-xl border border-border/80 bg-surface-alt text-sm text-text-main placeholder:text-text-muted/50 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all duration-300 hover:border-primary/30 shadow-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-text-muted mb-2">Ubicación exacta en mapa (Opcional)</label>
                    <p className="text-xs text-text-muted/80 mb-3">Haz clic en el mapa para marcar dónde se encuentra el carro para el peritaje.</p>
                    <div className="h-48 rounded-xl overflow-hidden border border-border/80 shadow-sm">
                      <MapPicker 
                        position={formData.latitud ? { lat: formData.latitud, lng: formData.longitud! } : null} 
                        onChange={(pos) => setFormData({ ...formData, latitud: pos.lat, longitud: pos.lng })} 
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  {error && (
                    <div className="bg-red-500/10 border border-red-500/50 text-red-500 text-sm p-3 rounded-xl mt-4">
                      {error} Redirigiendo a WhatsApp...
                    </div>
                  )}

                  {submitSuccess ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-emerald-500/10 border border-emerald-500/50 text-emerald-500 text-sm p-4 rounded-xl mt-6 text-center font-bold"
                    >
                      <CheckCircle2 className="mx-auto mb-2" size={24} />
                      ¡Solicitud enviada con éxito! Abriendo WhatsApp...
                    </motion.div>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className="btn-whatsapp w-full mt-6 py-4 rounded-xl font-bold text-base shadow-[0_0_20px_rgba(37,211,102,0.4)] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      <MessageCircle size={22} className="fill-current" />
                      {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
                    </motion.button>
                  )}
                  
                  <p className="text-center text-xs text-text-muted/70 mt-4">
                    Al enviar aceptas que un asesor te contacte. Tu información está 100% segura.
                  </p>
                </form>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 relative z-10">
        <div className="text-center mb-12">
          <span className="inline-block p-3 rounded-2xl bg-surface border border-border shadow-sm mb-4">
            <HelpCircle className="text-primary w-8 h-8" />
          </span>
          <h2 className="text-3xl font-black text-text-main font-display">
            Resolvemos tus dudas
          </h2>
        </div>
        
        <div className="space-y-4">
          {[
            { q: '¿Cuánto cobran por el servicio?', a: 'Cobramos una comisión competitiva sobre el valor final de venta del vehículo. No pagas nada por adelantado, solo pagas cuando tu carro se vende.' },
            { q: '¿Dónde muestran mi carro?', a: 'Coordinamos citas de exhibición en ubicaciones seguras de Cali únicamente con compradores pre-calificados e interesados reales.' },
            { q: '¿Cuánto tiempo toma vender un carro?', a: 'Nuestro promedio de venta es de 15 días gracias a nuestras campañas digitales premium y base de datos de compradores activos.' }
          ].map((faq, idx) => (
            <details key={idx} className="group bg-surface rounded-2xl border border-border p-6 [&_summary::-webkit-details-marker]:hidden hover:border-primary/30 hover:shadow-md transition-all duration-300">
              <summary className="flex items-center justify-between cursor-pointer focus:outline-none">
                <span className="font-bold text-base text-text-main group-hover:text-primary transition-colors">{faq.q}</span>
                <span className="transition-transform duration-300 group-open:rotate-180 bg-surface-alt p-2 rounded-full">
                  <svg className="w-5 h-5 text-text-main" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </summary>
              <div className="mt-4 pt-4 border-t border-border/50">
                <p className="text-sm leading-relaxed text-text-muted">{faq.a}</p>
              </div>
            </details>
          ))}
        </div>
      </section>
    </main>
  );
}
