import {
  Stethoscope,
  Ear,
  Footprints,
  ShieldPlus,
  Users,
  HeartPulse,
  ArrowRight,
} from 'lucide-react'
import { cn } from '@/lib/utils'

const services = [
  {
    icon: Stethoscope,
    tag: 'Presencial & Online',
    title: 'Consulta Médica General',
    desc: 'Atención preventiva y diagnóstico para toda la familia con un enfoque humano y altamente profesional.',
    featured: false,
  },
  {
    icon: Ear,
    tag: 'Destacado',
    title: 'Lavado de Oídos Seguro',
    desc: 'Procedimiento de irrigación templada e indolora para remover tapones de cerumen al instante.',
    featured: true,
  },
  {
    icon: Footprints,
    tag: 'Podología',
    title: 'Onicocriptosis (Uña Encarnada)',
    desc: 'Tratamiento y corrección ambulatoria definitiva para liberar el dolor de las uñas enterradas de manera indolora.',
    featured: false,
  },
  {
    icon: ShieldPlus,
    tag: 'Podología',
    title: 'Tratamiento de Onicomicosis',
    desc: 'Eliminación efectiva de hongos en las uñas mediante tratamientos clínicos especializados y de alta tasa de éxito.',
    featured: false,
  },
  {
    icon: Users,
    tag: 'Salud Femenina',
    title: 'Planificación Familiar',
    desc: 'Asesoría confidencial y métodos modernos para el cuidado de tu salud reproductiva y femenina.',
    featured: false,
  },
  {
    icon: HeartPulse,
    tag: 'Bienestar',
    title: 'Sueroterapia Regenerativa',
    desc: 'Nutrición intravenosa personalizada con vitaminas y oligoelementos para restaurar tu vitalidad y bienestar.',
    featured: false,
  },
]

export function ServicesSection() {
  return (
    <section id="servicios" className="bg-brand-sky">
      <div className="mx-auto max-w-6xl px-5 py-16 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal">
            Nuestras Especialidades
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Servicios Médicos Profesionales y Cercanos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-500">
            Un portafolio diseñado para cubrir tus necesidades de bienestar diario,
            prevención y tratamientos específicos sin dolor.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({ icon: Icon, tag, title, desc, featured }) => (
            <article
              key={title}
              className={cn(
                'group flex flex-col rounded-2xl bg-white p-7 shadow-[0_10px_40px_-25px_rgba(23,50,77,0.35)] transition-all hover:-translate-y-1 hover:shadow-[0_20px_50px_-25px_rgba(23,50,77,0.4)]',
                featured ? 'ring-2 ring-brand-teal' : 'ring-1 ring-slate-100',
              )}
            >
              <div className="flex items-start justify-between">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-brand-mint text-brand-teal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <span
                  className={cn(
                    'rounded-full px-3 py-1 text-[11px] font-semibold',
                    featured
                      ? 'bg-brand-coral text-white'
                      : 'bg-slate-100 text-slate-500',
                  )}
                >
                  {tag}
                </span>
              </div>

              <h3 className="mt-5 font-heading text-lg font-bold text-brand-navy">
                {title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-500">
                {desc}
              </p>

              <a
                href="#contacto"
                className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-teal transition-all group-hover:gap-2.5"
              >
                Saber más
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
