import { CheckCircle2 } from 'lucide-react'
import { solutionPoints } from '../../data/landingData'
import solutionImage from '../../assets/solution.png'

export function Solution() {
  return (
    <section className="overflow-hidden bg-[linear-gradient(180deg,#f3f7fb_0%,#eef4fb_100%)] py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-20">
          <div className="relative mx-auto w-full max-w-[560px] lg:mx-0">
            <div className="absolute -left-6 top-10 h-28 w-28 rounded-full bg-[#2563eb]/10 blur-3xl" />
            <div className="absolute -right-6 bottom-8 h-24 w-24 rounded-full bg-[#f59e0b]/15 blur-3xl" />

            <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-2 shadow-[0_30px_80px_-30px_rgba(15,23,42,0.42)]">
              <div className="relative overflow-hidden rounded-[1.5rem]">
                <img
                  src={solutionImage}
                  alt="Calles coloridas de Cartagena"
                  className="h-[520px] w-full object-cover object-center transition-transform duration-700 hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/15 via-transparent to-white/10" />
              </div>
            </div>

            <div className="absolute -bottom-7 right-6 rounded-[1.4rem] border border-slate-200 bg-white/90 px-5 py-4 shadow-[0_20px_60px_-25px_rgba(15,23,42,0.45)] backdrop-blur-sm">
              <p className="text-3xl font-black tracking-[-0.06em] text-[#2563eb]">350+</p>
              <p className="text-sm font-medium text-slate-500">Experiencias auténticas</p>
            </div>
          </div>

          <div className="max-w-xl lg:max-w-none">
            <span className="text-sm font-semibold uppercase tracking-[0.24em] text-[#2563eb]">
              La solución
            </span>
            <h2 className="mt-3 text-4xl font-black tracking-[-0.06em] text-slate-900 sm:text-5xl">
              Localy conecta tu curiosidad con el conocimiento local
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-slate-600">
              Somos la plataforma que une a viajeros exigentes con guías
              apasionados por compartir su Cartagena: la de los mercados, las
              historias, la comida callejera y los atardeceres secretos.
            </p>

            <ul className="mt-8 space-y-4">
              {solutionPoints.map((point) => (
                <li key={point} className="flex items-start gap-3">
                  <CheckCircle2
                    size={22}
                    className="mt-0.5 shrink-0 text-[#2563eb]"
                  />
                  <span className="text-base leading-relaxed text-slate-700">
                    {point}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="#experiencias"
              className="mt-10 inline-flex rounded-full bg-slate-900 px-8 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_-18px_rgba(15,23,42,0.75)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-800"
            >
              Descubre cómo funciona Localy
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
