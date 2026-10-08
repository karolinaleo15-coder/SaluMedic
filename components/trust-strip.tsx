import { HeartHandshake, ShieldCheck, Star } from 'lucide-react'

const items = [
  {
    icon: HeartHandshake,
    title: '100% Humano',
    desc: 'Trato cercano y empático',
  },
  {
    icon: ShieldCheck,
    title: 'Procedimientos Seguros',
    desc: 'Protocolos indoloros y certificados',
  },
  {
    icon: Star,
    title: 'Opiniones Excelentes',
    desc: 'Pacientes completamente felices',
  },
]

export function TrustStrip() {
  return (
    <section className="bg-brand-sky">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-10 sm:grid-cols-3 lg:px-8">
        {items.map(({ icon: Icon, title, desc }) => (
          <div key={title} className="flex items-center gap-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-teal shadow-sm">
              <Icon className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-heading text-base font-bold text-brand-navy">{title}</p>
              <p className="text-sm text-slate-500">{desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
