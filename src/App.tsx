import { Navbar } from './components/layout/Navbar'
import { Footer } from './components/layout/Footer'
import { Hero } from './components/sections/Hero'
import { Problem } from './components/sections/Problem'
import { Solution } from './components/sections/Solution'
import { Categories } from './components/sections/Categories'
import { FeaturedExperiences } from './components/sections/FeaturedExperiences'
import { FeaturedGuides } from './components/sections/FeaturedGuides'
import { HowItWorks } from './components/sections/HowItWorks'
import { Trust } from './components/sections/Trust'
import { Stats } from './components/sections/Stats'
import { Testimonials } from './components/sections/Testimonials'
import { CtaTourists } from './components/sections/CtaTourists'
import { CtaGuides } from './components/sections/CtaGuides'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Categories />
        <FeaturedExperiences />
        <FeaturedGuides />
        <HowItWorks />
        <Trust />
        <Stats />
        <Testimonials />
        <CtaTourists />
        <CtaGuides />
      </main>
      <Footer />
    </div>
  )
}

export default App
