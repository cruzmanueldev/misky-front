import LogoMisky from '@/assets/home/logo_misky.png'
import Image from 'next/image'

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Image
        src={LogoMisky}
        alt="Misky - Reposteria arteseanal"
        className="cursor-pointer"
        height={120}
      />
    </div>
  )
}
