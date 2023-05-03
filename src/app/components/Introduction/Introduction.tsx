'use client'
import Image from 'next/image'
import DaiImage from '../../public/images/dai-photo.png'
import Background from './Background'
import { Montserrat } from '@next/font/google'
import { motion } from 'framer-motion'

const montserrat200 = Montserrat({
  weight: '200',
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
      <div className="flex h-screen flex-row rounded-full pl-[100px] pr-12 pt-[300px]">
        <Image
          src={DaiImage}
          width={250}
          height={100}
          alt="Dai Photo"
          quality={100}
          className="h-[250px] w-[250px]"
        />
        <div>
          <p
            className={`${montserrat400.className} -mt-8 pl-[250px] text-7xl text-title-brown`}
          >
            Olá, me chamo Dai Oliveira
          </p>
          <p
            className={`${montserrat200.className} pl-[150px] pt-[25px] text-[53px] text-subtitle-home-green`}
          >
            TRABALHO COM SOBRANCELHAS E CÍLIOS
          </p>
          <div
            className={`${montserrat400.className} flex flex-row pl-[100px] pr-2 pt-[75px] text-[70px] text-subtitle-home-green`}
          >
            <div className="w-fit pl-6">
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
