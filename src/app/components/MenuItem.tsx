'use client'
import * as React from 'react'
import { motion } from 'framer-motion'
import { Yaldevi, Sacramento } from '@next/font/google'
import Image from 'next/image'
// import WhatsappIcon from '../public/images/whatsapp-svgrepo-com.svg'
// import EmailIcon from '../public/images/email-svgrepo-com.svg'
import DaiIcon from '../public/images/icon.svg'
const yaldevi = Yaldevi({
  subsets: ['latin'],
  weight: ['400'],
})
const sacramento = Sacramento({
  subsets: ['latin'],
  weight: ['400'],
})

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
}

export default function MenuItem() {
  return (
    <>
      <motion.li variants={variants} className="pl-4">
        <Image src={DaiIcon} width={150} height={150} alt="Dai Icon" />
      </motion.li>
      <motion.li
        variants={variants}
        className="flex content-center justify-center text-center mt-8 text-[1.30rem]"
      >
        <p className={yaldevi.className}>VOCÊ JÁ CONHEÇE</p>
      </motion.li>
      <motion.li variants={variants}>
        <div className="text-[1.96rem]">
          <p className={sacramento.className}>Nossos serviços?</p>
        </div>
      </motion.li>
      <motion.li
        variants={variants}
        className="bg-rose-200 rounded-2xl text-center text-lg p-[0.5rem]"
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>MICROPIGMENTAÇÃO DE SOBRANCELHAS</p>
      </motion.li>
      <motion.li
        variants={variants}
        className=" bg-red-orange rounded-2xl text-center text-lg p-2"
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>DESIGN DE SOBRANCELHAS</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="bg-pinkish-red rounded-2xl text-center text-lg p-[0.6rem]"
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>BROWN LAMINATION</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="bg-red-orange rounded-2xl text-center text-lg p-[0.6rem]"
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>EXTENSÃO DE CÍLIOS</p>
      </motion.li>

      <motion.li
        variants={variants}
        className="bg-pinkish-red rounded-2xl text-center text-lg p-[1.3rem]"
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>LASH LIFTING</p>
      </motion.li>
    </>
  )
}
