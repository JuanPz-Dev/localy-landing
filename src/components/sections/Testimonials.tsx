import { Quote, Star } from 'lucide-react'
import { testimonials } from '../../data/landingData'

export function Testimonials() {
  return (
    <section id="testimonios" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-localy-blue">
            Testimonios
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-localy-dark sm:text-4xl">
            Lo que dicen nuestros viajeros
          </h2>
          <p className="mt-4 text-lg text-localy-muted">
            Historias reales de personas que descubrieron Cartagena de una forma
            completamente nueva.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <blockquote
              key={t.id}
              className="relative rounded-2xl bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <Quote
                size={32}
                className="text-localy-blue/20"
                fill="currentColor"
              />

              <div className="mt-4 flex gap-0.5">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-localy-amber text-localy-amber"
                  />
                ))}
              </div>

              <p className="mt-4 leading-relaxed text-slate-600">{t.text}</p>

              <footer className="mt-6 flex items-center gap-3 border-t border-slate-100 pt-6">
                <img
                  src={t.image}
                  alt={t.name}
                  className="h-11 w-11 rounded-full object-cover"
                />
                <div>
                  <cite className="not-italic font-bold text-localy-dark">
                    {t.name}
                  </cite>
                  <p className="text-sm text-localy-muted">{t.country}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}
