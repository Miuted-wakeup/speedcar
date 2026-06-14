const socialLinks = [
  {
    name: 'Instagram',
    iconName: 'instagram',
    url: 'https://instagram.com/speedcar_cali',
    color: 'from-pink-500 via-red-500 to-yellow-500',
    handle: '@speedcar_cali'
  },
  {
    name: 'Facebook',
    iconName: 'facebook',
    url: 'https://facebook.com/speedcarcali',
    color: 'from-blue-600 to-blue-400',
    handle: 'Speed Car Cali'
  },
  {
    name: 'YouTube',
    iconName: 'youtube',
    url: 'https://youtube.com/@speedcar_cali',
    color: 'from-red-600 to-red-500',
    handle: 'Speed Car Videos'
  }
];

export default function HomeSocial() {
  return (
    <section className="py-24 bg-surface-alt border-t border-border/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl font-black text-text-main tracking-tight font-display mb-3">
          Síguenos en Redes
        </h2>
        <p className="text-text-muted mb-12 max-w-xl mx-auto">
          Mantente al día con nuestros nuevos ingresos, promociones exclusivas y contenido detrás de escena de nuestros peritajes.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {socialLinks.map((social) => {
            return (
              <a 
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex items-center justify-center p-8 bg-surface rounded-3xl border border-border/80 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Glow de la red social en hover */}
                <div className={`absolute inset-0 bg-gradient-to-tr ${social.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                <div className="flex flex-col items-center gap-4 relative z-10">
                  <div className={`p-4 rounded-2xl bg-surface-alt border border-border group-hover:border-transparent transition-colors duration-300 relative`}>
                    <div className={`absolute inset-0 bg-gradient-to-tr ${social.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}></div>
                    <img 
                      src={`https://cdn.simpleicons.org/${social.iconName}/currentColor`} 
                      alt={`Logo de ${social.name}`} 
                      className="w-8 h-8 object-contain relative z-10 filter dark:invert"
                    />
                  </div>
                  
                  <div>
                    <h3 className="font-bold text-lg text-text-main group-hover:text-primary transition-colors">{social.name}</h3>
                    <p className="text-sm font-mono text-text-muted mt-1">{social.handle}</p>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
