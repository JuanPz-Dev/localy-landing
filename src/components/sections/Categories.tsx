import { ArrowUpRight } from 'lucide-react'
import { categories } from '../../data/landingData'

export function Categories() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-localy-blue">
              Categorías
            </span>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-localy-dark sm:text-4xl">
              Explora Cartagena a tu manera
            </h2>
          </div>
          <a
            href="#experiencias"
            className="inline-flex items-center gap-1 text-sm font-semibold text-localy-blue transition-colors hover:text-blue-700"
          >
            Ver todas las categorías
            <ArrowUpRight size={16} />
          </a>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <a
              key={cat.title}
              href="#experiencias"
              className="group relative overflow-hidden rounded-2xl"
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-localy-dark/90 via-localy-dark/30 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <div className="mb-3 inline-flex rounded-lg bg-white/20 p-2 text-white backdrop-blur-sm">
                  <cat.icon size={20} />
                </div>
                <h3 className="text-xl font-bold text-white">{cat.title}</h3>
                <p className="mt-1 text-sm text-white/70">
                  {cat.count} experiencias
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
