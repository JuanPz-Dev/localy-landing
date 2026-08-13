import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '../../data/landingData'
import { Logo } from '../ui/Logo'

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'border-b border-slate-200/80 bg-white/90 shadow-sm backdrop-blur-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Logo
          size="md"
          className={isScrolled ? '' : '[&_span]:text-white'}
        />

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-localy-blue ${
                  isScrolled ? 'text-slate-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="#ser-guia"
            className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors hover:text-localy-blue ${
              isScrolled ? 'text-slate-700' : 'text-white/90 hover:text-white'
            }`}
          >
            Ser guía
          </a>
          <a
            href="#experiencias"
            className="rounded-full bg-localy-blue px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-500/25 transition-all hover:bg-blue-700 hover:shadow-blue-500/40"
          >
            Explorar
          </a>
        </div>

        <button
          type="button"
          className={`rounded-lg p-2 md:hidden ${isScrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isOpen && (
        <div className="fixed inset-0 top-[72px] z-40 bg-white md:hidden">
          <div className="flex flex-col gap-1 px-5 py-6">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-localy-light"
                onClick={() => setIsOpen(false)}>
                {link.label}
              </a>
            ))}
            <hr className="my-4 border-slate-100" />
            <a href="#ser-guia" className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-localy-light"
              onClick={() => setIsOpen(false)}>
              Quiero ser guía
            </a>
            <a href="#experiencias" className="mt-2 rounded-full bg-localy-blue px-5 py-3 text-center text-base font-semibold text-white"
              onClick={() => setIsOpen(false)}>
              Explorar experiencias
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
