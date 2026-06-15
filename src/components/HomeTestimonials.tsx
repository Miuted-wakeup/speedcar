import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Andrés Valencia',
    role: 'Cliente Comprador',
    text: 'Increíble la transparencia con el peritaje de los 150 puntos. Compré mi Toyota con total confianza. La entrega fue rapidísima y sin dolores de cabeza con el traspaso.',
    rating: 5,
  },
  {
    name: 'Carolina Gómez',
    role: 'Cliente Vendedora',
    text: 'Vendí mi Mazda CX-5 en tiempo récord. Me ofrecieron un precio muy justo y se encargaron de todo el papeleo legal. Los recomiendo a ojo cerrado en Cali.',
    rating: 5,
  },
  {
    name: 'Luis Fernando Ríos',
    role: 'Cliente Comprador',
    text: 'La calidad del inventario es superior. Encontré el carro ideal para mi familia y me ayudaron a tramitar el crédito en un par de días. Excelente servicio.',
    rating: 5,
  }
];

export default function HomeTestimonials() {
  return (
    <section className="py-24 bg-surface relative overflow-hidden">
      {/* Background Decorativo */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-border to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-text-main tracking-tight font-display">
            Lo que dicen <span className="text-primary">nuestros clientes</span>
          </h2>
          <p className="mt-4 text-text-muted text-lg max-w-2xl mx-auto">
            La confianza se construye con transparencia y resultados. Así ha sido la experiencia de quienes ya negociaron con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonio, idx) => (
            <div 
              key={idx} 
              className="bg-surface-alt border border-border/60 rounded-2xl p-8 shadow-sm hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 relative group"
            >
              <Quote className="absolute top-6 right-6 text-border/80 w-12 h-12 rotate-180 group-hover:text-primary/20 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {Array.from({ length: testimonio.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              
              <p className="text-text-main text-base leading-relaxed font-medium mb-8 relative z-10">
                "{testimonio.text}"
              </p>
              
              <div className="mt-auto border-t border-border/50 pt-5">
                <p className="font-bold text-text-main">{testimonio.name}</p>
                <p className="text-xs text-text-muted font-bold tracking-wider uppercase mt-1">{testimonio.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
