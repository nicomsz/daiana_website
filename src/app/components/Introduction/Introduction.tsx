'use client'
import Image from 'next/image'
import DaiImage from '../../public/images/dai-photo.png'
import Background from './Background'
import { Montserrat } from '@next/font/google'
import { motion } from 'framer-motion'
const montserrat400 = Montserrat({
  weight: '400',
  subsets: ['latin'],
})
export default function Introduction() {
  return (
    <>
      <Background />
      <div
        className="h-[720px] rounded-full pr-[10px] pt-[175px] 
        tablet:ml-[50px] tablet:mr-[00px] tablet:flex tablet:h-screen  tablet:flex-row tablet:pr-12 tablet:pt-[300px]
      xl:ml-[100px] xl:mr-[00px] xl:flex xl:h-screen  xl:flex-row xl:pr-12 xl:pt-[300px]
      xxl:ml-[0] xxl:flex xxl:h-screen xxl:flex-row  xxl:pt-[300px]
      2xl:ml-[100px] 2xl:flex 2xl:h-screen 2xl:flex-row  2xl:pt-[300px]"
      >
        <Image
          src={DaiImage}
          width={250}
          height={100}
          alt="Dai Photo"
          quality={100}
          className="mx-auto h-[150px] w-[150px]
          tablet:mx-0 tablet:h-[200px] tablet:w-[200px] 
          xl:mx-0 xl:h-[300px] xl:w-[300px] 
          xxl:mx-0 xxl:h-[300px] xxl:w-[300px]
          2xl:mx-0 2xl:h-[300px] 2xl:w-[300px]"
        />
        <div className="w-full text-center tablet:w-[600px] tablet:pl-[10px] xl:pl-[50px] xxl:pl-[0px] 2xl:w-full">
          <p
            className={`${montserrat400.className} pt-6 text-[24px] font-medium text-title-brown 
            tablet:-mt-8 tablet:pt-2 tablet:text-[24px] 
            xl:-mt-8 xl:pt-2 xl:text-5xl 
            xxl:-mt-8 xxl:pt-2 xxl:text-7xl 
            2xl:-mt-8 2xl:pt-2 2xl:text-7xl `}
          >
            Olá, me chamo Dai Oliveira
          </p>
          <p
            className={`${montserrat400.className} pt-1 text-[14px] font-light text-subtitle-home-green 
            tablet:text-[14px] 
            xl:text-[35px] 
            2xl:pt-[25px] 2xl:text-[40px]`}
          >
            TRABALHO COM SOBRANCELHAS E CÍLIOS
          </p>
          <div
            className={`${montserrat400.className} mx-auto w-fit pr-2 pt-[40px] text-center text-[19px] text-subtitle-home-green 
            tablet:pt-[80px] tablet:text-[20px]
            xl:pt-[80px]  xl:text-[50px]
            2xl:text-[70px]`}
          >
            <p className="">SENTIR-SE BONITA MUDA TUDO</p>
            <motion.div
              className="h-[1.3px] w-[0%] bg-subtitle-home-green xl:h-[3px] 2xl:h-[3px] "
              whileInView={{
                width: '100%',
                transitionDuration: '1.7s',
              }}
            ></motion.div>
          </div>
        </div>
      </div>
    </>
  )
}
