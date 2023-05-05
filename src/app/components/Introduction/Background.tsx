import Image from 'next/image'
import background from '../../public/images/introduction-background.png'

export default function Background() {
  return (
    <>
      <div className="absolute z-[-1] h-[720px] w-full tablet:h-screen lg:h-screen">
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
