import { Clock, Heart, Star } from 'lucide-react'
import { experiences } from '../../data/landingData'

export function FeaturedExperiences() {
  return (
    <section id="experiencias" className="bg-slate-50 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-localy-blue">
            Destacadas
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-localy-dark sm:text-4xl">
            Experiencias que enamoran
          </h2>
          <p className="mt-4 text-lg text-localy-muted">
            Seleccionadas por nuestro equipo y amadas por miles de viajeros de
            todo el mundo.
          </p>
        </div>

        <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {experiences.map((exp) => (
            <article
              key={exp.id}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="relative overflow-hidden">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <span className="absolute left-3 top-3 rounded-full bg-localy-amber px-3 py-1 text-xs font-semibold text-white">
                  {exp.tag}
                </span>
                <button
                  type="button"
                  className="absolute right-3 top-3 rounded-full bg-white/90 p-2 text-slate-400 transition-colors hover:text-red-500"
                  aria-label="Guardar experiencia"
                >
                  <Heart size={16} />
                </button>
              </div>

              <div className="p-5">
                <div className="flex items-center gap-1 text-sm">
                  <Star
                    size={14}
                    className="fill-localy-amber text-localy-amber"
                  />
                  <span className="font-semibold text-localy-dark">
                    {exp.rating}
                  </span>
                  <span className="text-localy-muted">
                    ({exp.reviews} reseñas)
                  </span>
                </div>

                <h3 className="mt-2 text-lg font-bold text-localy-dark">
                  {exp.title}
                </h3>
                <p className="mt-1 text-sm text-localy-muted">
                  con {exp.guide}
                </p>

                <div className="mt-4 flex items-center justify-between border-t border-slate-100 pt-4">
                  <div className="flex items-center gap-1.5 text-sm text-localy-muted">
                    <Clock size={14} />
                    {exp.duration}
                  </div>
                  <p className="text-sm font-bold text-localy-dark">
                    {exp.price}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
