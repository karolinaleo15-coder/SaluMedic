'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import { ArrowRight, Volume2, VolumeX, Sparkles, ShieldCheck, Heart } from 'lucide-react'
import { WhatsAppIcon } from './brand-icons'

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isMuted, setIsMuted] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)

  // Asegura reproducción automática sin sonido en todos los navegadores móviles y de escritorio
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true
      videoRef.current.defaultMuted = true
      videoRef.current.play().catch(() => {
        // En caso de bloqueo estricto de autoplay, el navegador mostrará el póster alternativo
      })
    }
  }, [])

  const toggleMute = () => {
    if (videoRef.current) {
      const nextMuted = !videoRef.current.muted
      videoRef.current.muted = nextMuted
      setIsMuted(nextMuted)
    }
  }

  return (
    <section id="inicio" className="relative min-h-[640px] lg:min-h-[720px] flex items-center overflow-hidden bg-brand-navy">
      {/* Fondo de Video con Imagen de Respaldo Alternativa */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/salumedic-banner.png"
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => setVideoError(true)}
            className="h-full w-full object-cover object-center filter brightness-[0.65] contrast-[1.05] transition-opacity duration-700"
            aria-label="Video promocional SaluMedic"
          >
            <source
              src="/Medical_Clinic_Advertising_salumedic_admp4_o_pyIkNR.mp4"
              type="video/mp4"
            />
            {/* Imagen alternativa para navegadores o dispositivos que no reproduzcan video */}
            <img
              src="/images/salumedic-banner.png"
              alt="SaluMedic — Dra. Karolina Calderón"
              className="h-full w-full object-cover object-center"
            />
          </video>
        ) : (
          /* Imagen alternativa de reserva en caso de error de reproducción */
          <div className="relative h-full w-full">
            <Image
              src="/images/salumedic-banner.png"
              alt="SaluMedic — Dra. Karolina Calderón"
              fill
              priority
              className="object-cover object-center filter brightness-[0.7]"
            />
          </div>
        )}

        {/* Capas de degradado y ajuste de contraste para que todos los textos y botones se lean perfectamente */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-navy/95 via-brand-navy/85 to-brand-navy/60 lg:to-brand-navy/35" />
        <div className="absolute inset-0 bg-slate-950/20 backdrop-blur-[1px]" />
      </div>

      {/* Contenido Principal del Banner */}
      <div className="relative z-10 mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 lg:grid-cols-12 lg:gap-12 lg:px-8 lg:py-24">
        {/* Columna Izquierda: Textos y Botones de Acción */}
        <div className="lg:col-span-7">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-teal-300 backdrop-blur-md">
            <Sparkles className="h-3.5 w-3.5 text-teal-300" aria-hidden="true" />
            <span>Atención Médica Integral</span>
          </div>

          <h1 className="mt-5 font-heading text-4xl font-extrabold leading-[1.12] tracking-tight text-white sm:text-5xl lg:text-6xl drop-shadow-sm">
            Atención Médica con{' '}
            <span className="bg-gradient-to-r from-teal-300 via-emerald-200 to-teal-100 bg-clip-text text-transparent">
              Amor y Calidez
            </span>
          </h1>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-200 sm:text-lg">
            En SaluMedic, nos dedicamos a cuidar de ti y de quienes más quieres.
            Ofrecemos un espacio donde la atención médica profesional se combina
            con un trato cálido, cercano y respetuoso.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://wa.me/593999605961?text=Hola.%20%C2%BFQuiero%20m%C3%A1s%20informaci%C3%B3n%3F"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-brand-coral px-8 py-4 text-sm sm:text-base font-semibold text-white shadow-xl shadow-brand-coral/30 transition-all hover:bg-brand-coral-dark hover:-translate-y-0.5 hover:shadow-2xl"
            >
              <WhatsAppIcon className="h-5 w-5" aria-hidden="true" />
              Reservar Consulta
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-8 py-4 text-sm sm:text-base font-semibold text-white backdrop-blur-md transition-all hover:border-white hover:bg-white/20 hover:-translate-y-0.5"
            >
              Ver Servicios
            </a>
          </div>

          {/* Micro credenciales para reforzar confianza */}
          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-white/10 pt-6 text-xs text-slate-300 sm:text-sm">
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-teal-400" aria-hidden="true" />
              <span>Protocolos Seguros</span>
            </div>
            <div className="flex items-center gap-2">
              <Heart className="h-4 w-4 text-rose-400" aria-hidden="true" />
              <span>Trato 100% Humano</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
              <span>Citas Inmediatas Disponibles</span>
            </div>
          </div>
        </div>

        {/* Columna Derecha: Tarjeta destacada con la Imagen Alternativa de Dra. Karolina Calderón */}
        <div className="lg:col-span-5">
          <div className="relative rounded-3xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-xl sm:p-5">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 shadow-lg">
              <Image
                src="/images/salumedic-banner.png"
                alt="SaluMedic — Dra. Karolina Calderón. Medicina General, Medicina Regenerativa y Podología."
                width={1900}
                height={600}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
                priority
              />
            </div>

            <div className="px-2 pb-1 pt-4 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-heading text-lg font-bold text-white">
                    Dra. Karolina Calderón
                  </h2>
                  <p className="text-sm font-semibold text-teal-300">
                    Directora Médica — SaluMedic
                  </p>
                </div>
                <span className="rounded-full border border-teal-400/40 bg-teal-500/20 px-3 py-1 text-xs font-semibold text-teal-200">
                  Ambato, EC
                </span>
              </div>
              <p className="mt-2 text-sm text-slate-200 leading-snug">
                Medicina General, Regenerativa &amp; Podología Clínica con enfoque
                humano.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Control interactivo discreto de Audio en la esquina inferior */}
      <div className="absolute bottom-4 right-4 z-20">
        <button
          type="button"
          onClick={toggleMute}
          className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-brand-navy/80 px-3.5 py-1.5 text-xs font-medium text-white shadow-lg backdrop-blur-md transition-all hover:bg-brand-navy hover:border-white/40"
          aria-label={isMuted ? 'Activar sonido del video' : 'Silenciar video'}
        >
          {isMuted ? (
            <>
              <VolumeX className="h-3.5 w-3.5 text-slate-300" aria-hidden="true" />
              <span className="hidden sm:inline">Sin sonido (clic para activar)</span>
              <span className="sm:hidden">Silenciado</span>
            </>
          ) : (
            <>
              <Volume2 className="h-3.5 w-3.5 text-teal-300 animate-pulse" aria-hidden="true" />
              <span className="hidden sm:inline">Audio activado</span>
              <span className="sm:hidden">Audio ON</span>
            </>
          )}
        </button>
      </div>
    </section>
  )
}
