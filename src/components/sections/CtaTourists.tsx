import { ArrowRight, Compass } from 'lucide-react'

export function CtaTourists() {
  return (
    <section className="relative overflow-hidden py-24 lg:py-32">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1920&q=80"
          alt="Atardecer en las playas de Cartagena"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-localy-dark/75" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 text-center lg:px-8">
        <div className="mx-auto inline-flex rounded-full bg-white/10 p-3 text-localy-amber backdrop-blur-sm">
          <Compass size={28} />
        </div>

        <h2 className="mx-auto mt-6 max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
          Tu próxima aventura en Cartagena te espera
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-white/80">
          Reserva hoy y vive la ciudad como nunca imaginaste. Experiencias
          únicas, guías apasionados y recuerdos para toda la vida.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#experiencias"
            className="inline-flex items-center gap-2 rounded-full bg-localy-amber px-8 py-4 text-base font-semibold text-localy-dark transition-all hover:bg-amber-400 hover:shadow-lg hover:shadow-amber-500/30"
          >
            Explorar experiencias
            <ArrowRight size={18} />
          </a>
          <a
            href="#guias"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white/30 px-8 py-4 text-base font-semibold text-white transition-all hover:border-white/50 hover:bg-white/10"
          >
            Ver guías
          </a>
        </div>
      </div>
    </section>
  )
}
