import Image from 'next/image'
import { cn } from '@/lib/utils'

export function Logo({
  className,
  variant = 'default',
}: {
  className?: string
  variant?: 'default' | 'light'
}) {
  return (
    <span className={cn('flex items-center gap-2.5', className)}>
      <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white ring-1 ring-brand-teal/15">
        <Image
          src="/images/salumedic-logo.png"
          alt="Logo SaluMedic"
          width={80}
          height={80}
          className="h-full w-full scale-110 object-contain"
          priority
        />
      </span>
      <span
        className={cn(
          'font-heading text-lg font-bold tracking-tight',
          variant === 'light' ? 'text-white' : 'text-brand-navy',
        )}
      >
        SaluMedic
      </span>
    </span>
  )
}
