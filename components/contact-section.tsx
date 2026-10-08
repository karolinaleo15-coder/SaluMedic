'use client'

import { FormEvent } from 'react'
import Image from 'next/image'
import { MapPin, Phone, Mail } from 'lucide-react'
import { WhatsAppIcon } from './brand-icons'

const WHATSAPP_URL = 'https://wa.me/593999605961?text=Hola.%20%C2%BFQuiero%20m%C3%A1s%20informaci%C3%B3n%3F'

const contactItems = [
  {
    icon: MapPin,
    label: 'Nuestra Clínica',
    value: 'Av. Atahualpa y Marcos Montalvo, Ambato, Ecuador',
    href: undefined,
  },
  {
    icon: Phone,
    label: 'Teléfono / WhatsApp',
    value: '+593 99 960 5961 (0999605961)',
    href: WHATSAPP_URL,
  },
  {
    icon: Mail,
    label: 'Correo Electrónico',
    value: 'salumedic1@gmail.com',
    href: 'mailto:salumedic1@gmail.com',
  },
]

const servicesOptions = [
  'Consulta Médica General',
  'Lavado de Oídos Seguro',
  'Onicocriptosis (Uña Encarnada)',
  'Tratamiento de Onicomicosis',
  'Planificación Familiar',
  'Sueroterapia Regenerativa',
]

export function ContactSection() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const name = (form.elements.namedItem('name') as HTMLInputElement)?.value?.trim()
    const service = (form.elements.namedItem('service') as HTMLSelectElement)?.value

    let text = 'Hola. ¿Quiero más información?'
    if (name || service) {
      const parts = ['Hola. ¿Quiero más información?']
      if (name) parts.push(`Mi nombre es ${name}.`)
      if (service) parts.push(`Deseo consultar sobre: ${service}.`)
      text = parts.join(' ')
    }

    const whatsappUrl = `https://wa.me/593999605961?text=${encodeURIComponent(text)}`
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="contacto" className="bg-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-24">
        {/* Left — info + map */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.15em] text-brand-teal">
            Ubicación y Contacto
          </p>
          <h2 className="mt-3 font-heading text-3xl font-extrabold tracking-tight text-brand-navy sm:text-4xl">
            Estamos listos para cuidar de ti
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-500">
            Visítanos en nuestra clínica para recibir un diagnóstico personalizado o
            escríbenos directamente por WhatsApp para coordinar tu cita inmediata.
          </p>

          <ul className="mt-8 space-y-5">
            {contactItems.map(({ icon: Icon, label, value, href }) => (
              <li key={label} className="flex items-start gap-4">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-brand-mint text-brand-teal">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-teal">{label}</p>
                  {href ? (
                    <a
                      href={href}
                      target={href.startsWith('http') ? '_blank' : undefined}
                      rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="text-sm text-slate-600 transition-colors hover:text-brand-teal hover:underline"
                    >
                      {value}
                    </a>
                  ) : (
                    <p className="text-sm text-slate-600">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-slate-100">
            <Image
              src="/images/clinic-map.png"
              alt="Mapa de ubicación de la clínica SaluMedic en Ambato, Ecuador"
              width={720}
              height={340}
              className="h-56 w-full object-cover"
            />
          </div>
        </div>

        {/* Right — form */}
        <div className="rounded-3xl bg-brand-sky p-8 lg:p-10">
          <h3 className="font-heading text-xl font-bold text-brand-navy">
            Solicitar una Cita
          </h3>
          <p className="mt-1 text-sm text-slate-500">
            Completa el formulario y te atenderemos de inmediato por WhatsApp.
          </p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label
                htmlFor="name"
                className="mb-1.5 block text-sm font-semibold text-brand-navy"
              >
                Nombre Completo
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Ej. Juan Pérez"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="mb-1.5 block text-sm font-semibold text-brand-navy"
              >
                Número Telefónico
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Ej. 099 960 5961"
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors placeholder:text-slate-400 focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
              />
            </div>

            <div>
              <label
                htmlFor="service"
                className="mb-1.5 block text-sm font-semibold text-brand-navy"
              >
                Servicio Requerido
              </label>
              <select
                id="service"
                name="service"
                defaultValue=""
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none transition-colors focus:border-brand-teal focus:ring-2 focus:ring-brand-teal/20"
              >
                <option value="" disabled>
                  Selecciona un procedimiento...
                </option>
                {servicesOptions.map((s) => (
                  <option key={s} value={s}>
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand-teal px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-brand-teal/25 transition-all hover:bg-brand-teal-dark hover:-translate-y-0.5 hover:shadow-lg"
            >
              <WhatsAppIcon className="h-4 w-4" aria-hidden="true" />
              Agendar Consulta en Línea
            </button>

            <p className="text-center text-xs text-slate-400">
              Información 100% segura y protegida bajo secreto médico profesional.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
