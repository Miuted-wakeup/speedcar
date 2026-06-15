import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Search } from 'lucide-react';
import { motion } from 'framer-motion';
import SoftBlurIn from './animations/SoftBlurIn';
import MaskRevealUp from './animations/MaskRevealUp';
import type { Vehiculo } from '../types';

interface Props {
  vehiculos?: Vehiculo[];
}

export default function Hero({ vehiculos = [] }: Props) {
  const [stopScroll, setStopScroll] = useState(false);
  const navigate = useNavigate();

  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["ideal", "deportivo", "premium", "familiar", "soñado"],
    []
  );

  const heroLines = useMemo(() => [
    'Explora nuestra selección de carros usados premium en Cali.',
    'Cada vehículo ha sido verificado exhaustivamente para que',
    'compres con total tranquilidad y seguridad de peritaje.',
  ], []);

  const heroFeatures = useMemo(() => [
    { label: 'Peritaje Aprobado', desc: '150 puntos verificados' },
    { label: 'Traspaso Inmediato', desc: 'Papeles al día en Cali' },
    { label: 'Garantía Directa', desc: 'Sin intermediarios' }
  ], []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  const defaultCardData: Array<{ id?: string, title: string, location: string, image: string }> = [
    {
      id: undefined,
      title: "Deportivos de Alta Gama",
      location: "Sede Norte, Cali",
      image: "https://images.unsplash.com/photo-1503376760367-11ea8eb222c9?q=80&w=600&h=800&auto=format&fit=crop",
    },
    {
      id: undefined,
      title: "SUVs Imponentes",
      location: "Ciudad Jardín, Cali",
      image: "https://images.unsplash.com/photo-1609521263047-f8f205293f24?q=80&w=600&h=800&auto=format&fit=crop",
    },
    {
      id: undefined,
      title: "Sedanes Ejecutivos",
      location: "Palmira, Valle",
      image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=600&h=800&auto=format&fit=crop",
    },
    {
      id: undefined,
      title: "Clásicos Modernos",
      location: "Yumbo, Valle",
      image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=600&h=800&auto=format&fit=crop",
    },
    {
      id: undefined,
      title: "Ediciones Limitadas",
      location: "Jamundí, Valle",
      image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?q=80&w=600&h=800&auto=format&fit=crop",
    }
  ];

  // Si hay vehículos de la base de datos, usamos los primeros 5
  const cardData = vehiculos.length > 0 
    ? vehiculos.slice(0, 5).map(v => ({
        id: v.id,
        title: `${v.marca} ${v.modelo}`,
        location: v.ubicacion_ciudad || "Cali, Valle",
        image: v.urls_imagenes[0]
      }))
    : defaultCardData;

  return (
    <section aria-label="Vitrina de Vehículos" className="bg-surface relative overflow-hidden border-b border-border/75">
      <style>{`
          .marquee-inner {
              animation: marqueeScroll linear infinite;
          }
          @keyframes marqueeScroll {
              0% { transform: translateX(0%); }
              100% { transform: translateX(-33.333333%); }
          }
      `}</style>
      
      {/* Patrón de Rejilla Técnica Deportiva y Gradiente Radial */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--color-border)/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--color-border)/0.3)_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_-10%,hsl(var(--color-primary-light))_0%,transparent_100%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 items-center py-16 lg:py-24 relative z-10">
          
          {/* Texto Hero (A la izquierda) */}
          <div className="space-y-7 text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 backdrop-blur-xs">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </span>
              Vitrina Cali &bull; Usados Garantizados
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-text-main leading-tight tracking-tight font-display flex flex-col">
              <SoftBlurIn text="Encuentra tu carro" as="span" className="block text-text-main" />
              <span className="relative flex w-full justify-start overflow-hidden text-primary h-[1.2em]">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? { y: 0, opacity: 1 }
                        : { y: titleNumber > index ? "-150%" : "150%", opacity: 0 }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <SoftBlurIn text="en Cali" as="span" className="block text-text-main" delay={200} />
            </h1>

            <MaskRevealUp
              lines={heroLines}
              className="text-base sm:text-lg text-text-muted max-w-lg leading-relaxed font-medium"
              delay={400}
            />

            <div className="flex flex-wrap gap-2.5 pt-1">
              {heroFeatures.map((b, idx) => (
                <div key={idx} className="flex items-center gap-2 px-3.5 py-2.5 bg-surface-alt/65 border border-border/80 rounded-xl text-left shadow-xs backdrop-blur-xs hover:border-primary/20 transition-all duration-300">
                  <CheckCircle2 size={16} className="text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold text-text-main">{b.label}</p>
                    <p className="text-[10px] text-text-muted">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-5">
              <Link to="/comprar" className="btn-primary shadow-xl shadow-primary/30 !px-10 !py-4 text-base font-bold hover:scale-[1.02] active:scale-[0.98] transition-all">
                <Search size={20} />
                Comprar un Carro
              </Link>
              <Link to="/vender" className="btn-secondary !px-8 !py-4 text-base font-semibold hover:scale-[1.02] active:scale-[0.98] transition-all backdrop-blur-xs bg-surface-alt hover:bg-surface border border-primary/20 hover:border-primary/50 text-text-main hover:text-primary">
                Vender mi Carro
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          {/* Galería Marquee (A la derecha, más corta y con desvanecido) */}
          <div className="w-full relative overflow-hidden z-10" onMouseEnter={() => setStopScroll(true)} onMouseLeave={() => setStopScroll(false)}>
              
              {/* Gradientes laterales de desvanecido */}
              <div className="absolute left-0 top-0 h-full w-24 md:w-32 z-20 pointer-events-none bg-gradient-to-r from-surface to-transparent" />
              
              <div className="marquee-inner flex w-fit" style={{ animationPlayState: stopScroll ? "paused" : "running", animationDuration: cardData.length * 3000 + "ms" }}>
                  <div className="flex">
                      {/* Duplicamos para asegurar el loop continuo */}
                      {[...cardData, ...cardData, ...cardData].map((card, index) => (
                          <div 
                            key={index} 
                            role={card.id ? "button" : "presentation"}
                            tabIndex={card.id ? 0 : -1}
                            aria-label={card.id ? `Ver detalles de ${card.title}` : undefined}
                            onClick={() => card.id ? navigate(`/vehiculo/${card.id}`) : null}
                            onKeyDown={(e) => {
                              if (card.id && (e.key === 'Enter' || e.key === ' ')) {
                                e.preventDefault();
                                navigate(`/vehiculo/${card.id}`);
                              }
                            }}
                            className={`w-48 md:w-56 mx-3 h-[18rem] md:h-[24rem] relative group hover:scale-95 focus-visible:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary transition-all duration-500 rounded-[2rem] overflow-hidden shadow-lg border border-border/50 bg-surface ${card.id ? 'cursor-pointer' : ''}`}
                          >
                              <img src={card.image} alt={card.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                              <div className="absolute inset-x-3 bottom-3 p-3 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-black/40 backdrop-blur-md border border-white/20 rounded-xl shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] translate-y-4 group-hover:translate-y-0">
                                  <p className="text-white text-sm md:text-base font-bold text-center font-display tracking-wide drop-shadow-md">{card.title}</p>
                                  <p className="text-emerald-400 text-[10px] md:text-xs font-semibold text-center mt-0.5 drop-shadow-sm">{card.location}</p>
                              </div>
                          </div>
                      ))}
                  </div>
              </div>
              
              <div className="absolute right-0 top-0 h-full w-24 md:w-32 z-20 pointer-events-none bg-gradient-to-l from-surface to-transparent" />
          </div>

        </div>
      </div>
    </section>
  );
}
