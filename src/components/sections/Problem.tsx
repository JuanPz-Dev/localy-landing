import { problemPoints } from '../../data/landingData'

export function Problem() {
  return (
    <section className="bg-white py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-localy-blue">
            El problema
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-localy-dark sm:text-4xl">
            El turismo tradicional no te muestra la Cartagena real
          </h2>
          <p className="mt-4 text-lg text-localy-muted">
            Millones visitan la ciudad amurallada cada año, pero la mayoría se
            queda con una versión superficial de su magia caribeña.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {problemPoints.map((point) => (
            <div
              key={point.title}
              className="group rounded-2xl border border-slate-100 bg-slate-50/50 p-8 transition-all duration-300 hover:border-red-100 hover:bg-red-50/30 hover:shadow-lg"
            >
              <div className="mb-5 inline-flex rounded-xl bg-red-100 p-3 text-red-500 transition-transform duration-300 group-hover:scale-110">
                <point.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-localy-dark">
                {point.title}
              </h3>
              <p className="mt-3 leading-relaxed text-localy-muted">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
