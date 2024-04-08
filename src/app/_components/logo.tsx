import Image from 'next/image'
import Link from 'next/link'
import ProfileImg from '@/public/images/logo1.jpg'

const Logo = () => {
  return (
    <Link href='/' className='flex items-center text-dark w-1/8'>
        <div className='w-16 rounded-full overflow-hidden border border-solid border-dark mr-4'>
            <Image src={ProfileImg} alt='sunset' className='w-full h-auto rounded-full'/>
        </div>
        <span className='font-bold text-xl'>Sunset</span>
    </Link>
  )
}

export default Logo