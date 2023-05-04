'use client'
import Image from 'next/image'
import DaiImage from '../../public/images/dai-photo.png'
import Background from './Background'
import { Montserrat } from '@next/font/google'
import { motion } from 'framer-motion'

const montserrat300 = Montserrat({
  weight: ['300', '200'],
  subsets: ['latin'],
})
const montserrat400 = Montserrat({
  weight: '400',
  subsets: ['latin'],
})
export default function Introduction() {
  return (
    <>
      <Background />
      <div className="h-screen rounded-full pt-[100px] lg:mr-[200px] lg:flex lg:flex-row lg:pr-12 lg:pt-[300px]">
        <Image
          src={DaiImage}
          width={250}
          height={100}
          alt="Dai Photo"
          quality={100}
          className="mx-auto h-[100px] w-[100px] lg:h-[300px] lg:w-[300px]"
        />
        <div className="text-center">
          <p
            className={`${montserrat400.className} pt-2 text-2xl font-medium text-title-brown lg:-mt-8 lg:text-7xl `}
          >
            Olá, me chamo Dai Oliveira
          </p>
          <p
            className={`${montserrat300.className} pt-2 text-sm font-light text-subtitle-home-green lg:pt-[50px] lg:text-[53px]`}
          >
            TRABALHO COM SOBRANCELHAS E CÍLIOS
          </p>
          <div
            className={`${montserrat400.className} pr-2 pt-[50px] text-center text-[20px] text-subtitle-home-green lg:pl-[px] lg:text-[70px]`}
          >
            <div className="mx-auto w-fit">
              <p>SENTIR-SE BONITA MUDA TUDO</p>
              <motion.div
                className="h-[3px] w-[0%] bg-subtitle-home-green"
                whileInView={{
                  width: '100%',
                  transitionDuration: '1.7s',
                }}
              ></motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
