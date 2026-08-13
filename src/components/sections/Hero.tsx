import { ArrowRight, MapPin, Star } from 'lucide-react'

const heroImage =
  'https://images.unsplash.com/photo-1583531352515-8884af319dc1?q=80'

export function Hero() {
  return (
    <section className="relative h-screen min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Vista panorámica de Cartagena de Indias al atardecer"
            className="h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-localy-dark/70 via-localy-dark/50 to-localy-dark/80" />
          <div className="absolute inset-0 bg-gradient-to-r from-localy-dark/60 to-transparent" />
        </div>

        <div className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-5 pb-20 pt-28 lg:px-8 lg:pb-24 lg:pt-32">
          <div className="max-w-2xl">
            <div className="animate-fade-up mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
              <MapPin size={14} className="text-localy-amber" />
              Cartagena de Indias, Colombia
            </div>

            <h1 className="animate-fade-up-delay-1 text-4xl font-extrabold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl">
              Descubre Cartagena{' '}
              <span className="text-[#0a927d]">como un local.</span>
            </h1>

            <p className="animate-fade-up-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-white/85 sm:text-xl">
              Conecta con guías locales certificados y vive experiencias
              auténticas que recordarás para siempre.
            </p>

            <div className="animate-fade-up-delay-3 mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#experiencias"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-localy-blue px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/30 transition-all hover:bg-blue-700 hover:shadow-blue-500/50"
              >
                Explorar experiencias
                <ArrowRight size={18} />
              </a>
              <a
                href="#ser-guia"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 bg-white/10 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all hover:border-white/50 hover:bg-white/20"
              >
                Quiero ser guía
              </a>
            </div>

            <div className="mt-12 flex items-center gap-6">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <img
                    key={i}
                    src={`https://i.pravatar.cc/80?img=${i + 10}`}
                    alt=""
                    className="h-10 w-10 rounded-full border-2 border-white/80 object-cover"
                  />
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star
                      key={i}
                      size={14}
                      className="fill-localy-amber text-localy-amber"
                    />
                  ))}
                  <span className="ml-1 text-sm font-semibold text-white">
                    4.9
                  </span>
                </div>
                <p className="text-sm text-white/70">
                  +12.000 viajeros confían en Localy
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 animate-float lg:block">
          <div className="h-12 w-7 rounded-full border-2 border-white/40 p-1.5">
            <div className="h-2 w-full animate-bounce rounded-full bg-white/60" />
          </div>
        </div>
    </section>
  )
}
