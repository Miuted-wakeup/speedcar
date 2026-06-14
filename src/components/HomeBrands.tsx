

const brands = [
  { name: 'bmw', color: 'white' },
  { name: 'mercedes', color: 'white' },
  { name: 'toyota', color: 'white' },
  { name: 'audi', color: 'white' },
  { name: 'chevrolet', color: 'white' },
  { name: 'ford', color: 'white' },
  { name: 'honda', color: 'white' },
  { name: 'nissan', color: 'white' },
  { name: 'volkswagen', color: 'white' }
];

export default function HomeBrands() {
  return (
    <section className="py-12 bg-surface-alt border-t border-b border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-bold text-text-muted uppercase tracking-widest mb-8">
          Marcas que comercializamos
        </p>
        
        <div className="overflow-hidden w-full relative max-w-5xl mx-auto select-none">
          {/* Gradientes laterales para disimular la entrada y salida */}
          <div className="absolute left-0 top-0 h-full w-24 md:w-32 z-10 pointer-events-none bg-gradient-to-r from-surface-alt to-transparent"></div>
          
          <div className="flex w-fit animate-[marqueeScroll_30s_linear_infinite]">
            <div className="flex items-center gap-16 md:gap-24 px-8">
              {/* Renderizamos la lista de marcas 3 veces para asegurar el scroll infinito sin cortes */}
              {[...brands, ...brands, ...brands].map((brand, idx) => (
                <div key={idx} className="flex items-center justify-center min-w-[80px] opacity-50 hover:opacity-100 transition-opacity duration-300">
                  <img 
                    src={`https://cdn.simpleicons.org/${brand.name}/${brand.color}`} 
                    alt={`Logo de ${brand.name}`} 
                    className="h-10 md:h-12 w-auto object-contain filter invert dark:invert-0" 
                    draggable="false" 
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="absolute right-0 top-0 h-full w-24 md:w-32 z-10 pointer-events-none bg-gradient-to-l from-surface-alt to-transparent"></div>
        </div>
      </div>
      <style>{`
        @keyframes marqueeScroll {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333333%); }
        }
      `}</style>
    </section>
  );
}
