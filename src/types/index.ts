import { Timestamp } from 'firebase/firestore';

export interface Vehiculo {
  id: string; // Único
  creado: Timestamp | Date | number; // Fecha de publicación
  destacado: boolean; // Para ordenarlos al principio
  
  // Datos Críticos (Visibles en la Tarjeta)
  marca: string;      // Ej: Mazda
  modelo: string;     // Ej: CX-30
  año: number;        // Ej: 2022
  precio: number;      // Ej: 111600000
  kilometraje: number; // Ej: 29000
  placa_final: number; // Ej: 1 (Crítico para Pico y Placa)
  
  // Datos Detalles
  transmision: "Automático" | "Mecánico";
  color: string;
  carroceria?: string;
  puertas?: number;
  version?: string;
  unico_dueno?: boolean;
  precio_negociable?: boolean;
  tipo_combustible?: string;
  tipo_direccion?: string;
  cilindraje?: number;
  ciudad_placa?: string;
  caracteristicas?: string[];
  descripcion_marketing: string; // Texto descriptivo para la venta
  
  // Multimedia
  urls_imagenes: string[]; // Lista de URLs de Firebase Storage
  url_video_corto?: string; // Opcional (TikTok/Reel link)
  
  // Ubicación
  ubicacion_ciudad?: string; // Ej: Cali, Yumbo
  latitud?: number;
  longitud?: number;
}
