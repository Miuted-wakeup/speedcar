import { motion } from "motion/react";
import { Compass, Home } from "lucide-react";
import { Button } from "../components/ui/button";
import { Link } from "react-router-dom";

const PRIMARY_ORB_HORIZONTAL_OFFSET = 40;
const PRIMARY_ORB_VERTICAL_OFFSET = 20;

export default function NotFound() {
  return (
    <div className="w-full relative flex min-h-[calc(100vh-80px)] items-center justify-center overflow-hidden bg-surface-alt text-text-main font-['Poppins']">
      {/* Background Animated Orbs */}
      <div
        aria-hidden={true}
        className="-z-10 absolute inset-0 overflow-hidden"
      >
        <motion.div
          animate={{
            x: [0, PRIMARY_ORB_HORIZONTAL_OFFSET, -PRIMARY_ORB_HORIZONTAL_OFFSET, 0],
            y: [0, PRIMARY_ORB_VERTICAL_OFFSET, -PRIMARY_ORB_VERTICAL_OFFSET, 0],
            rotate: [0, 10, -10, 0],
          }}
          className="absolute top-1/2 left-1/3 h-64 w-64 rounded-full bg-gradient-to-tr from-emerald-500/10 to-primary/20 blur-[100px]"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 8,
            ease: "easeInOut",
          }}
        />
        <motion.div
          animate={{
            x: [0, -PRIMARY_ORB_HORIZONTAL_OFFSET, PRIMARY_ORB_HORIZONTAL_OFFSET, 0],
            y: [0, -PRIMARY_ORB_VERTICAL_OFFSET, PRIMARY_ORB_VERTICAL_OFFSET, 0],
          }}
          className="absolute right-1/4 bottom-1/3 h-72 w-72 rounded-full bg-gradient-to-br from-emerald-400/10 to-transparent blur-[120px]"
          transition={{
            repeat: Number.POSITIVE_INFINITY,
            duration: 6,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="flex flex-col items-center justify-center text-center p-8 md:p-12 bg-surface/40 backdrop-blur-md rounded-[2.5rem] border border-border/80 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] max-w-xl mx-4 z-10 hover:border-primary/30 transition-colors duration-500">
        <div className="mb-8">
          <h1 className="font-black text-8xl md:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40 font-display drop-shadow-md">
            404
          </h1>
          <h2 className="text-2xl font-bold mt-2 text-primary">Destino Desconocido</h2>
          <p className="mt-4 text-base md:text-lg text-text-muted leading-relaxed max-w-md">
            Parece que este vehículo aceleró muy rápido.
            La ruta que buscas no existe o fue movida.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
          <Button asChild size="lg" className="gap-2 shadow-xl shadow-primary/20 rounded-xl h-14 px-8 text-base transition-all hover:scale-105 active:scale-95">
            <Link to="/">
              <Home className="h-5 w-5" /> Volver al Inicio
            </Link>
          </Button>

          <Button asChild variant="outline" size="lg" className="gap-2 rounded-xl h-14 px-8 text-base bg-surface-alt/50 hover:bg-surface border-border/80 hover:border-primary/50 transition-all hover:scale-105 active:scale-95">
            <Link to="/comprar">
              <Compass className="h-5 w-5 text-emerald-400" /> Ver Vitrina
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
