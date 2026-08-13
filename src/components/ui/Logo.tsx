import logo from '../../assets/logo.png'

type LogoProps = {
  className?: string
  showName?: boolean
  size?: 'sm' | 'md' | 'lg'
}

const sizes = { sm: 'h-8', md: 'h-10', lg: 'h-12',
}

export function Logo({ className = '', showName = true, size = 'md' }: LogoProps) {
  return (
    <a href="#" className={`inline-flex items-center gap-2.5 ${className}`}>
      <img src={logo} alt="Localy" className={`${sizes[size]} w-auto object-contain`}/>
      {showName && (
        <span className="text-xl font-bold tracking-tight text-[#0a927d]">
          Localy
        </span>
      )}
    </a>
  )
}