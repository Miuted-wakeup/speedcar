import { Button } from './ui/button';

const socialLinks = [
  {
    name: 'Instagram',
    iconName: 'instagram',
    url: 'https://www.instagram.com/speedcaroficial_',
    handle: '@speedcaroficial_'
  },
  {
    name: 'TikTok',
    iconName: 'tiktok',
    url: 'https://www.tiktok.com/@speepcar4',
    handle: '@speepcar4'
  },
  {
    name: 'Facebook',
    iconName: 'facebook',
    url: 'https://facebook.com/speedcarcali',
    handle: 'Speed Car Cali'
  },
  {
    name: 'X',
    iconName: 'x',
    url: 'https://x.com/SpeedCarOff',
    handle: '@speedcarcali'
  },
  {
    name: 'YouTube',
    iconName: 'youtube',
    url: 'https://www.youtube.com/@speecarof',
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
        <p className="text-text-muted mb-10 max-w-xl mx-auto">
          Mantente al día con nuestros nuevos ingresos, promociones exclusivas y contenido detrás de escena de nuestros peritajes.
        </p>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
          {socialLinks.map((social) => {
            return (
              <Button
                key={social.name}
                variant="outline"
                size="lg"
                className="gap-3 rounded-xl h-14 px-8 border-border bg-surface shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
                asChild
              >
                <a
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={`https://cdn.simpleicons.org/${social.iconName}/currentColor`}
                    alt={`Logo de ${social.name}`}
                    className="w-5 h-5 object-contain filter dark:invert"
                  />
                  <span className="font-bold text-base text-text-main">{social.name}</span>
                </a>
              </Button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
