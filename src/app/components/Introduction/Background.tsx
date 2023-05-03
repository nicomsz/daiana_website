import Image from 'next/image'
import background from '../../public/images/introduction-background.jpeg'

export default function Background() {
  return (
    <>
      <div className="absolute z-[-1] h-screen w-full">
        <Image
          src={background}
          alt="Background White Image"
          fill
          quality={100}
        />
      </div>
    </>
  )
}
