import { Mail, MapPin, Phone} from 'lucide-react'
import { Logo } from '../ui/Logo'

const footerLinks = {
  plataforma: [
    { label: 'Experiencias', href: '#experiencias' },
    { label: 'Guías', href: '#guias' },
    { label: 'Cómo funciona', href: '#como-funciona' },
    { label: 'Testimonios', href: '#testimonios' },
  ],
  empresa: [
    { label: 'Sobre nosotros', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Prensa', href: '#' },
    { label: 'Carreras', href: '#' },
  ],
  legal: [
    { label: 'Términos de uso', href: '#' },
    { label: 'Privacidad', href: '#' },
    { label: 'Cookies', href: '#' },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-localy-dark text-slate-400">
      <div className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Logo showName size="lg" className="[&_span]:text-[#0a927d]" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              La plataforma que conecta viajeros con guías locales certificados
              en Cartagena de Indias. Experiencias auténticas, confianza total.
            </p>

            <div className="mt-6 space-y-2 text-sm">
              <p className="flex items-center gap-2">
                <MapPin size={16} className="text-localy-amber" />
                Cartagena de Indias, Colombia
              </p>
              <p className="flex items-center gap-2">
                <Mail size={16} className="text-localy-amber" />
                hola@localy.co
              </p>
              <p className="flex items-center gap-2">
                <Phone size={16} className="text-localy-amber" />
                +57 300 123 4567
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-white">Plataforma</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.plataforma.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Empresa</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.empresa.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white">Legal</h4>
            <ul className="mt-4 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row">
          <p className="text-sm">
            © {new Date().getFullYear()} Localy. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-4">
          </div>
        </div>
      </div>
    </footer>
  )
}
