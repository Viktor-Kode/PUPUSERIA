import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC<{ sticky: boolean }> = ({ sticky }) => {
  return (
    <Link href='/' className='flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0 flex-shrink'>
      <Image
        src='/images/Logo/logo.png'
        alt='logo'
        width={117}
        height={34}
        className='w-auto h-9 sm:h-10 md:h-11 lg:h-12 xl:h-14 flex-shrink-0'
        quality={100}
        priority
      />
      <p className={`text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl font-semibold transition-colors duration-300 whitespace-nowrap ${
        sticky ? 'text-primary' : 'text-white'
      }`}>Freddys Tacos</p>
    </Link>
  )
}

export default Logo
