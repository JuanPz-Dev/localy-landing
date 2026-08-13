import { stats } from '../../data/landingData'

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-localy-blue py-20">
      <div className="absolute inset-0 opacity-10">
        <img
          src="https://images.unsplash.com/photo-1587595431973-160d0d94add1?w=1920&q=80"
          alt=""
          className="h-full w-full object-cover"
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-4xl font-extrabold text-white sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-blue-100 sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
