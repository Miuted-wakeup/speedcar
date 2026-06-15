import { Link } from 'react-router-dom';
import { Car, ArrowRight } from 'lucide-react';

export default function HomeCTA() {
  return (
    <section className="py-20 bg-surface-alt relative px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto relative group">
        {/* Glow de fondo */}
        <div className="absolute -inset-1 bg-gradient-to-r from-primary to-emerald-400 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
        
        {/* Contenedor principal */}
        <div className="relative bg-surface border border-border/80 rounded-3xl overflow-hidden shadow-2xl flex flex-col md:flex-row items-stretch">
          
          {/* Lado izquierdo (Texto) */}
          <div className="flex-1 p-8 md:p-12 lg:p-16 flex flex-col justify-center relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary w-fit mb-6">
              <Car size={14} />
              Recibimos tu vehículo
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-text-main leading-tight font-display mb-4">
              ¿Buscando renovar <br/>
              <span className="text-primary">tu carro actual?</span>
            </h2>
            
            <p className="text-base md:text-lg text-text-muted mb-8 max-w-md">
              Compramos tu vehículo usado de forma segura, rápida y sin intermediarios. También lo recibimos como parte de pago para tu próximo carro.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/vender" className="btn-primary !px-8 !py-4 shadow-xl shadow-primary/20 hover:scale-105 active:scale-95">
                Vender mi carro
              </Link>
              <Link to="/comprar" className="btn-secondary !px-8 !py-4 bg-surface-alt hover:scale-105 active:scale-95 group/btn">
                Ver vitrina
                <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          {/* Lado derecho (Imagen) */}
          <div className="flex-1 relative min-h-[300px] md:min-h-full overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-surface via-surface/80 to-transparent z-10 w-full h-full pointer-events-none"></div>
            <img 
              src="https://images.unsplash.com/photo-1503376760367-11ea8eb222c9?q=80&w=1200&h=1200&auto=format&fit=crop" 
              alt="Vehículo deportivo oscuro de alta gama" 
              className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-1000"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
