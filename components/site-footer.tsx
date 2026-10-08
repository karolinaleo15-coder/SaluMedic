import { FacebookIcon, InstagramIcon, XIcon } from './brand-icons'
import { Logo } from './logo'

const menu = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Servicios Especiales', href: '#servicios' },
  { label: 'Reservar Cita', href: '#contacto' },
]

const contact = [
  'salumedic1@gmail.com',
  '0999605961',
  'Av. Atahualpa y Marcos Montalvo, Ambato, Ecuador',
]

export function SiteFooter() {
  return (
    <footer className="bg-brand-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2 lg:max-w-sm">
            <Logo variant="light" />
            <p className="mt-4 text-sm leading-relaxed text-white/60">
              Nos dedicamos al cuidado integral y especializado de tu salud y la de
              los tuyos. Atención médica cercana, profesional y oportuna.
            </p>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Menú
            </h3>
            <ul className="mt-4 space-y-3">
              {menu.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-white/60 transition-colors hover:text-brand-teal"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-heading text-sm font-bold uppercase tracking-wide text-white">
              Contacto Directo
            </h3>
            <ul className="mt-4 space-y-3">
              {contact.map((item) => (
                <li key={item} className="text-sm text-white/60">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-center justify-between gap-6 border-t border-white/10 pt-6 sm:flex-row">
          <p className="text-xs text-white/50">
            © 2026 SaluMedic. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-3">
            {[
              { icon: FacebookIcon, label: 'Facebook' },
              { icon: InstagramIcon, label: 'Instagram' },
              { icon: XIcon, label: 'X' },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-brand-teal hover:text-white"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
