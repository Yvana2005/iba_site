import { cn } from '@/lib/utils'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'outline-light' | 'link'
  size?: 'sm' | 'md' | 'lg'
  children: React.ReactNode
}

export function Button({ variant = 'primary', size = 'md', children, className, ...props }: ButtonProps) {
  const variants = {
    primary: 'bg-black text-white hover:bg-gray-500',
    secondary: 'bg-white text-black border border-gray-300 hover:bg-gray-50',
    outline: 'border-2 border-black text-black hover:bg-black hover:text-white',
    'outline-light': 'border-2 border-white text-white hover:bg-white hover:text-black',
    link: 'text-black hover:text-gray-600',
  }

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-6 py-2.5 text-base',
    lg: 'px-8 py-3 text-lg',
  }

  return (
    <button
      className={cn(
        'font-medium transition-all duration-200 rounded-md',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}