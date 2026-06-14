import { useNavigate } from 'react-router-dom';
import type { Vehiculo } from '../types';

interface Props {
  vehiculos: Vehiculo[];
}

export default function LatestCreations({ vehiculos }: Props) {
  const navigate = useNavigate();

  // Tomamos los primeros 5 vehículos
  const items = vehiculos.slice(0, 5);

  if (items.length === 0) return null;

  const formatPrecio = (n: number) =>
    new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0,
    }).format(n);

  return (
    <section className="hidden md:block py-16 font-['Poppins']">
      <h2 className="text-3xl font-semibold text-center text-text-main mx-auto">
        Vehículos Destacados
      </h2>
      <p className="text-sm text-text-muted text-center mt-2 max-w-lg mx-auto px-4">
        Una selección visual de nuestros modelos más exclusivos.
        Haz clic en cualquiera para ver la publicación detallada.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6 h-auto md:h-[400px] w-full max-w-6xl mt-10 mx-auto px-4">
        {items.map((vehiculo) => (
          <div 
            key={vehiculo.id}
            role="button"
            tabIndex={0}
            aria-label={`Ver detalles de ${vehiculo.marca} ${vehiculo.modelo}`}
            onClick={() => navigate(`/vehiculo/${vehiculo.id}`)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                navigate(`/vehiculo/${vehiculo.id}`);
              }
            }}
            className="relative group flex-grow transition-all w-full md:w-40 h-[250px] md:h-[400px] duration-500 hover:w-full hover:md:w-[800px] focus-visible:w-full focus-visible:md:w-[800px] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-primary rounded-2xl overflow-hidden cursor-pointer shadow-md"
          >
            <img 
              className="h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
              src={vehiculo.urls_imagenes[0]}
              alt={`${vehiculo.marca} ${vehiculo.modelo}`}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-6 opacity-0 group-hover:opacity-100 transition-all duration-500 bg-gradient-to-t from-black/90 via-black/20 to-transparent backdrop-blur-[2px]">
              
              {/* Glassmorphic Panel */}
              <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 md:p-5 transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)]">
                
                <h3 className="text-2xl md:text-3xl font-bold text-white font-display tracking-tight drop-shadow-md">
                  {vehiculo.marca} <span className="font-light text-white/90">{vehiculo.modelo}</span>
                </h3>
                
                <div className="mt-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 bg-primary/20 border border-primary/50 text-emerald-400 font-mono font-bold rounded-lg text-sm shadow-[0_0_15px_rgba(var(--color-primary),0.3)]">
                      {formatPrecio(vehiculo.precio)}
                    </span>
                    <span className="px-2 py-1 bg-black/40 rounded-md text-xs font-medium text-white/80 border border-white/10">
                      {vehiculo.año}
                    </span>
                    <span className="px-2 py-1 bg-black/40 rounded-md text-xs font-medium text-white/80 border border-white/10">
                      {vehiculo.kilometraje.toLocaleString('es-CO')} km
                    </span>
                    <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-md text-xs font-bold text-emerald-400">
                      📍 {vehiculo.ubicacion_ciudad || "Cali, Valle"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
