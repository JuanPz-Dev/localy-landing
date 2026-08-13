import { BadgeCheck, Globe, Star } from 'lucide-react'
import { guides } from '../../data/landingData'

export function FeaturedGuides() {
  return (
    <section id="guias" className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-localy-blue">
            Nuestros guías
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-localy-dark sm:text-4xl">
            Conoce a quienes conocen Cartagena
          </h2>
          <p className="mt-4 text-lg text-localy-muted">
            Apasionados, certificados y con historias que transforman cada
            recorrido en una experiencia inolvidable.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {guides.map((guide) => (
            <article
              key={guide.id}
              className="group rounded-2xl border border-slate-100 bg-white p-6 text-center transition-all duration-300 hover:border-localy-blue/20 hover:shadow-xl"
            >
              <div className="relative mx-auto w-fit">
                <img
                  src={guide.image}
                  alt={guide.name}
                  className="mx-auto h-24 w-24 rounded-full object-cover ring-4 ring-localy-light transition-all group-hover:ring-localy-blue/20"
                />
                <div className="absolute -bottom-1 -right-1 rounded-full bg-localy-blue p-1 text-white">
                  <BadgeCheck size={16} />
                </div>
              </div>

              <h3 className="mt-5 text-lg font-bold text-localy-dark">
                {guide.name}
              </h3>
              <p className="mt-1 text-sm text-localy-muted">
                {guide.specialty}
              </p>

              <div className="mt-4 flex items-center justify-center gap-1">
                <Star
                  size={14}
                  className="fill-localy-amber text-localy-amber"
                />
                <span className="text-sm font-semibold">{guide.rating}</span>
                <span className="text-sm text-localy-muted">
                  · {guide.tours} tours
                </span>
              </div>

              <div className="mt-4 flex flex-wrap items-center justify-center gap-1.5">
                <Globe size={14} className="text-localy-muted" />
                {guide.languages.map((lang) => (
                  <span
                    key={lang}
                    className="rounded-full bg-localy-light px-2.5 py-0.5 text-xs font-medium text-localy-blue"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
