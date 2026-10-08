import Image from 'next/image'
import { CheckCircle2 } from 'lucide-react'
import { WhatsAppIcon } from './brand-icons'

const benefits = [
  'Eliminación de tapones de cerumen al instante.',
  'Procedimiento realizado por profesionales certificados.',
  'Tecnología de irrigación templada que evita mareos.',
]

export function EarSection() {
  return (
    <section id="nosotros" className="bg-white">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Image with before/after */}
        <div className="rounded-3xl bg-brand-sky p-4">
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/ear-exam-full.png"
              alt="Doctora realizando un lavado de oídos a un paciente, con imágenes clínicas del antes y después del procedimiento"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Text */}
        <div>
          <span className="inline-flex items-center rounded-full bg-brand-coral/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-wide text-brand-coral">
            Servicio Estrella Destacado
          </span>

          <h2 className="mt-5 font-heading text-3xl font-extrabold leading-tight tracking-tight text-brand-navy sm:text-4xl">
            Lavado de Oídos Clínico:{' '}
            <span className="text-brand-teal">Seguro, Profesional e Indoloro</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-slate-500">
            ¿Sientes taponamiento, zumbidos o disminución de la audición? Realizamos
            un procedimiento de lavado de oídos altamente efectivo y seguro,
            utilizando técnicas modernas que disuelven la obstrucción de cerumen
            rápidamente sin causar molestias ni dolor.
          </p>

          <ul className="mt-6 space-y-3">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-teal" aria-hidden="true" />
                <span className="text-sm font-medium text-slate-700">{b}</span>
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-wrap items-center gap-5">
            <a
              href="https://wa.me/593999605961?text=Hola.%20%C2%BFQuiero%20m%C3%A1s%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-teal px-7 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-teal/25 transition-all hover:bg-brand-teal-dark hover:-translate-y-0.5 hover:shadow-lg"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
              Agendar Lavado de Oídos
            </a>
            <span className="text-sm font-medium text-slate-500">
              Consulta desde $25.000
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
