import * as React from 'react'
import Link from 'next/link'

import { cn } from '@/lib/utils'
import { Button, type buttonVariants } from '@/components/ui/button'
import type { VariantProps } from 'class-variance-authority'

export interface CtaProps {
  ctaEnabled?: boolean
  text: string
  link: string
  variant?: VariantProps<typeof buttonVariants>['variant']
  className?: string
}

export function Cta({ cta }: Readonly<{ cta: CtaProps }>) {
  const { text, link, variant = 'default', className } = cta

  return (
    <Button asChild variant={variant} className={cn(className)}>
      <Link href={link}>{text}</Link>
    </Button>
  )
}
