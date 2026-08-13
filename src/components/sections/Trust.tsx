import { Shield, ShieldCheck, Headphones, RefreshCw } from 'lucide-react'
import { trustItems } from '../../data/landingData'

const icons = [ShieldCheck, Shield, Headphones, RefreshCw]

export function Trust() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-localy-light">
          <div className="grid lg:grid-cols-2">
            <div className="p-10 lg:p-16">
              <span className="text-sm font-semibold uppercase tracking-widest text-localy-blue">
                Confianza
              </span>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-localy-dark sm:text-4xl">
                Viaja con total tranquilidad
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-localy-muted">
                En Localy, la seguridad de turistas y guías es nuestra prioridad.
                Cada experiencia está respaldada por procesos rigurosos de
                verificación y soporte local.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {trustItems.map((item, i) => {
                  const Icon = icons[i]
                  return (
                    <div key={item.title} className="flex gap-4">
                      <div className="shrink-0 rounded-xl bg-white p-3 text-localy-blue shadow-sm">
                        <Icon size={22} />
                      </div>
                      <div>
                        <h3 className="font-bold text-localy-dark">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm leading-relaxed text-localy-muted">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="relative min-h-[320px] lg:min-h-0">
              <img
                src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=900&q=80"
                alt="Experiencia turística segura en Cartagena"
                className="absolute inset-0 h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-localy-light via-transparent to-transparent lg:from-localy-light/80" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}