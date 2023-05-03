import Image from 'next/image'
import Background from '../public/images/introduction-background.jpeg'
export default function Introduction() {
  return (
    <div className="relative z-[-1] h-screen w-screen">
      <Image src={Background} alt="Background White Image" fill quality={100} />
     
    </div>
  )
}
