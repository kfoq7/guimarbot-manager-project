import { cn } from '@/lib/utils'

interface Props {
  children: React.ReactNode
  className?: string
}

export const Title = ({ children, className }: Props) => (
  <h1 className={cn('text-balance text-xl font-bold md:text-3xl', className)}>
    {children}
  </h1>
)
