import {
  Anchor,
  Camera,
  ChefHat,
  Compass,
  MapPin,
  Music,
  Palmtree,
  Ship,
  Sparkles,
  Sun,
  UtensilsCrossed,
  Waves,
} from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export const navLinks = [
  { label: 'Experiencias', href: '#experiencias' },
  { label: 'Guías', href: '#guias' },
  { label: 'Cómo funciona', href: '#como-funciona' },
  { label: 'Testimonios', href: '#testimonios' },
]

export const categories: {
  icon: LucideIcon
  title: string
  count: number
  image: string
}[] = [
  {
    icon: MapPin,
    title: 'Ciudad amurallada',
    count: 42,
    image:
      'https://images.unsplash.com/photo-1714686574932-5bb429ed70b3?q=80',
  },
  {
    icon: Anchor,
    title: 'Islas del Rosario',
    count: 28,
    image:
      'https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=600&q=80',
  },
  {
    icon: UtensilsCrossed,
    title: 'Gastronomía caribeña',
    count: 35,
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=80',
  },
  {
    icon: Music,
    title: 'Cultura y música',
    count: 19,
    image:
      'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=600&q=80',
  },
  {
    icon: Camera,
    title: 'Fotografía y arte',
    count: 15,
    image:
      'https://images.unsplash.com/photo-1678885407096-e8cbc7bc1e2d?q=80',
  },
  {
    icon: Ship,
    title: 'Aventura náutica',
    count: 22,
    image:
      'https://images.unsplash.com/photo-1709426979018-7e6d482cd058?q=80',
  },
]

export const experiences = [
  {
    id: 1,
    title: 'Atardecer en las murallas',
    guide: 'Camila R.',
    rating: 4.9,
    reviews: 128,
    duration: '3 horas',
    price: 'Desde $85.000 COP',
    tag: 'Más reservada',
    image:
      'https://images.unsplash.com/photo-1677114811987-60343d7a8112?q=80',
  },
  {
    id: 2,
    title: 'Sabores del mercado Bazurto',
    guide: 'Andrés M.',
    rating: 4.8,
    reviews: 94,
    duration: '4 horas',
    price: 'Desde $95.000 COP',
    tag: 'Gastronomía',
    image:
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&q=80',
  },
  {
    id: 3,
    title: 'Islas del Rosario en lancha',
    guide: 'Laura P.',
    rating: 5.0,
    reviews: 76,
    duration: '8 horas',
    price: 'Desde $180.000 COP',
    tag: 'Aventura',
    image:
      'https://images.unsplash.com/photo-1651421978782-9817d9feccaa?q=80',
  },
  {
    id: 4,
    title: 'Getsemaní: arte callejero y rumba',
    guide: 'Diego S.',
    rating: 4.9,
    reviews: 112,
    duration: '2.5 horas',
    price: 'Desde $70.000 COP',
    tag: 'Cultura',
    image:
      'https://images.unsplash.com/photo-1718119617938-2a3b376fb7d6?q=80',
  },
]

export const guides = [
  {
    id: 1,
    name: 'Camila Restrepo',
    specialty: 'Historia colonial y arquitectura',
    rating: 4.9,
    tours: 312,
    languages: ['Español', 'Inglés'],
    image:
      'https://images.unsplash.com/photo-1543452700-01b77ca4bffc?q=80',
  },
  {
    id: 2,
    name: 'Andrés Molina',
    specialty: 'Gastronomía y mercados locales',
    rating: 4.8,
    tours: 245,
    languages: ['Español', 'Inglés', 'Francés'],
    image:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
  },
  {
    id: 3,
    name: 'Laura Páez',
    specialty: 'Islas, snorkel y naturaleza',
    rating: 5.0,
    tours: 198,
    languages: ['Español', 'Inglés'],
    image:
      'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&q=80',
  },
  {
    id: 4,
    name: 'Diego Salazar',
    specialty: 'Cultura afrocolombiana y música',
    rating: 4.9,
    tours: 267,
    languages: ['Español', 'Inglés', 'Portugués'],
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3H187uOBsYAF2VG0D5jxfBuY4RnLQQNeEvK-vjStZxNJkupRvyxNgnPGQ&s=10',
  },
]

export const steps = [
  {
    step: '01',
    icon: Compass,
    title: 'Explora experiencias',
    description:
      'Navega por categorías curadas y encuentra la aventura perfecta para tu estilo de viaje.',
  },
  {
    step: '02',
    icon: Sparkles,
    title: 'Elige tu guía local',
    description:
      'Revisa perfiles verificados, reseñas reales y especialidades antes de reservar.',
  },
  {
    step: '03',
    icon: Sun,
    title: 'Reserva con confianza',
    description:
      'Pago seguro, confirmación instantánea y soporte local antes, durante y después del tour.',
  },
  {
    step: '04',
    icon: Palmtree,
    title: 'Vive Cartagena auténtica',
    description:
      'Sal de las rutas turísticas y descubre la ciudad con quien realmente la conoce.',
  },
]

export const trustItems = [
  {
    title: 'Guías certificados',
    description:
      'Cada guía pasa verificación de identidad, formación turística y evaluación continua.',
  },
  {
    title: 'Pagos protegidos',
    description:
      'Tu dinero está seguro hasta que la experiencia se complete satisfactoriamente.',
  },
  {
    title: 'Soporte 24/7',
    description:
      'Equipo local disponible en español e inglés para resolver cualquier imprevisto.',
  },
  {
    title: 'Cancelación flexible',
    description:
      'Políticas claras con reembolso hasta 48 horas antes de tu experiencia.',
  },
]

export const stats = [
  { value: '120+', label: 'Guías certificados' },
  { value: '350+', label: 'Experiencias únicas' },
  { value: '12k+', label: 'Viajeros felices' },
  { value: '4.9', label: 'Calificación promedio' },
]

export const testimonials = [
  {
    id: 1,
    name: 'Sophie Laurent',
    country: 'Francia',
    text: 'Camila nos llevó a rincones de Cartagena que jamás habríamos encontrado solos. Fue la mejor decisión de nuestro viaje por Colombia.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&q=80',
  },
  {
    id: 2,
    name: 'James Mitchell',
    country: 'Estados Unidos',
    text: 'Reservar con Localy fue increíblemente fácil. Andrés nos hizo probar comida que no aparece en ninguna guía turística. 100% recomendado.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80',
  },
  {
    id: 3,
    name: 'Mariana Costa',
    country: 'Brasil',
    text: 'Como viajera sola, me sentí segura en todo momento. Laura fue una guía excepcional en las islas. Localy es confianza pura.',
    rating: 5,
    image:
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80',
  },
]

export const problemPoints = [
  {
    icon: MapPin,
    title: 'Rutas genéricas',
    description:
      'Los tours masivos te llevan a los mismos lugares sin profundidad ni conexión local.',
  },
  {
    icon: Waves,
    title: 'Experiencias impersonales',
    description:
      'Grupos grandes, tiempos rígidos y cero flexibilidad para descubrir a tu ritmo.',
  },
  {
    icon: ChefHat,
    title: 'Falta de confianza',
    description:
      'Es difícil saber si un guía es confiable, certificado y realmente conoce Cartagena.',
  },
]

export const solutionPoints = [
  'Guías locales verificados con historias reales de Cartagena',
  'Experiencias personalizadas para parejas, familias o viajeros solos',
  'Reservas seguras con reseñas auténticas de viajeros verificados',
  'Descubre la ciudad más allá de lo que muestran las agencias tradicionales',
]
