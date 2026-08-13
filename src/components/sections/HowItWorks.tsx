import { steps } from '../../data/landingData'

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-localy-dark py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-widest text-localy-amber">
            Cómo funciona
          </span>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Tu aventura en Cartagena en 4 pasos
          </h2>
          <p className="mt-4 text-lg text-slate-400">
            Reservar una experiencia auténtica nunca fue tan simple y seguro.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <div key={item.step} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-px w-full bg-gradient-to-r from-localy-blue/50 to-transparent lg:block" />
              )}
              <div className="relative rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-localy-blue/30 hover:bg-white/10">
                <span className="text-5xl font-extrabold text-white/10">
                  {item.step}
                </span>
                <div className="mt-4 inline-flex rounded-xl bg-localy-blue/20 p-3 text-localy-blue">
                  <item.icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">
                  {item.title}
                </h3>
                <p className="mt-3 leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
