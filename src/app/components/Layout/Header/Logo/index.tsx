import Image from 'next/image'
import Link from 'next/link'

const Logo: React.FC<{ sticky: boolean }> = ({ sticky }) => {
  return (
    <Link href='/' className='flex items-center gap-4'>
      <Image
        src='/images/Logo/logo.png'
        alt='logo'
        width={117}
        height={34}
        className='w-fit w-24 h-24'
        quality={100}
      />
      <p className={`text-2xl font-semibold transition-colors duration-300 ${
        sticky ? 'text-primary' : 'text-white'
      }`}>Freddys Tacos</p>
    </Link>
  )
}

export default Logo
