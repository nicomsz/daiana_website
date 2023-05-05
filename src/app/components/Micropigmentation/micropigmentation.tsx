'use client'

import { Montserrat, Josefin_Sans as JosefinSans } from '@next/font/google'
import GirlEyebrow from '../../public/images/girl-eyebrow-example.png'
import Image from 'next/image'
import { motion } from 'framer-motion'
const montserrat400 = Montserrat({
  weight: '400',
  subsets: ['latin'],
})
const josefinsans = JosefinSans({
  weight: '400',
  subsets: ['latin'],
})
export default function Micropigmentation() {
  return (
    <div
      className="h-screen w-full bg-background-color pt-8 lg:h-[1000px] lg:pt-20"
      id="anchor"
    >
      <div className="text-center">
        <div className="mx-auto w-fit">
          <motion.div
            className="flex h-[3px] w-[0%] bg-black"
            whileInView={{
              width: '100%',
              transitionDuration: '1.0s',
            }}
          ></motion.div>
          <p
            className={`${josefinsans.className} pb-2 pt-4 text-2xl font-semibold lg:pt-7 lg:text-7xl`}
          >
            MICROPIGMENTAÇÃO DE SOBRANCELHAS
          </p>
          <motion.div
            className="h-[3px] w-[0%] bg-black"
            whileInView={{
              width: '100%',
              transitionDuration: '1.0s',
            }}
          ></motion.div>
        </div>
        <div className={`${montserrat400.className} `}>
          <p className="pt-12 text-3xl lg:pt-20 lg:text-6xl">O que é?</p>
          <p className="mx-4 pt-8 text-sm lg:mx-16 lg:pt-16  lg:text-3xl">
            Micropigmentação de Sobrancelhas é um procedimento estético que visa
            preencher e corrigir as falhas das sobrancelhas naturais depositando
            pigmento específico por meio de aparelho invasivo chamado
            dermógrafo.
          </p>
          <p className="mx-4 pt-3 text-sm lg:mx-16 lg:pt-16  lg:text-3xl">
            Com o dermógrafo, a profissional especializada é capaz de desenhar
            efeitos sombreados ou fios de que imitam os próprios fios naturais.
            É importante realizar o design e um projeto a lápis, antes de
            iniciar o procedimento de micropigmentação de sobrancelhas.
          </p>
          <Image
            src={GirlEyebrow}
            alt="Eyebrow girl example"
            width={300}
            height={300}
            className="mx-auto h-[220px] w-[175px] rounded-full pt-4 lg:h-[350px] lg:w-[300px] lg:pt-0"
          />
        </div>
      </div>
    </div>
  )
}
