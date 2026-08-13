import { ArrowRight, DollarSign, Users, Award } from 'lucide-react'

const benefits = [
  {
    icon: DollarSign,
    title: 'Genera ingresos',
    description: 'Monetiza tu conocimiento con horarios flexibles.',
  },
  {
    icon: Users,
    title: 'Conecta con viajeros',
    description: 'Comparte tu pasión con personas de todo el mundo.',
  },
  {
    icon: Award,
    title: 'Crece profesionalmente',
    description: 'Accede a formación y certificación continua.',
  },
]

export function CtaGuides() {
  return (
    <section id="ser-guia" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-localy-dark">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-localy-amber">
                Únete a Localy
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                ¿Conoces Cartagena como nadie? Compártelo con el mundo
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-slate-400">
                Únete a nuestra red de guías certificados y convierte tu
                pasión por la ciudad en una oportunidad profesional.
              </p>

              <div className="mt-10 space-y-6">
                {benefits.map((b) => (
                  <div key={b.title} className="flex gap-4">
                    <div className="shrink-0 rounded-xl bg-localy-blue/20 p-3 text-localy-blue">
                      <b.icon size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-white">{b.title}</h3>
                      <p className="mt-1 text-sm text-slate-400">
                        {b.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="#"
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-localy-blue px-8 py-4 text-base font-semibold text-white transition-all hover:bg-blue-700"
              >
                Aplicar como guía
                <ArrowRight size={18} />
              </a>
            </div>

            <div className="relative min-h-[300px]">
              <img
                src="https://images.unsplash.com/photo-1715503485399-3e04501a8bba?q=80"
                alt="Guía local en Cartagena"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-localy-dark via-transparent to-transparent lg:bg-gradient-to-l lg:from-localy-dark lg:via-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
