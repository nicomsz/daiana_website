'use client'
import * as React from 'react'
import { motion } from 'framer-motion'
import { Yaldevi, Sacramento } from '@next/font/google'
import Image from 'next/image'
import WhatsappIcon from '../../public/images/whatsapp-svgrepo-com.svg'
import EmailIcon from '../../public/images/email-svgrepo-com.svg'
import DaiIcon from '../../public/images/DaiIcon.svg'
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
      <motion.li variants={variants} className="-mb-4 -mt-12 pl-4">
        <Image src={DaiIcon} width={150} height={150} alt="Dai Icon" />
      </motion.li>
      <motion.li
        variants={variants}
        className="mt-8 flex content-center justify-center text-center text-[1.30rem]"
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
        className="rounded-2xl bg-rose-200 p-[0.5rem] text-center text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>MICROPIGMENTAÇÃO DE SOBRANCELHAS</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="rounded-2xl bg-red-orange p-2 text-center text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>DESIGN DE SOBRANCELHAS</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="rounded-2xl bg-pinkish-red p-[0.6rem] text-center text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>BROWN LAMINATION</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="rounded-2xl bg-red-orange p-[0.6rem] text-center text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>EXTENSÃO DE CÍLIOS</p>
      </motion.li>

      <motion.li
        variants={variants}
        className="rounded-2xl bg-pinkish-red p-[1.3rem] text-center text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>LASH LIFTING</p>
      </motion.li>
      <motion.li className="flex flex-row gap-12 pl-[10px]" variants={variants}>
        <a href="https://wa.me/+5547992879838" target="_blank" rel="noreferrer">
          <Image
            src={WhatsappIcon}
            width={50}
            height={50}
            alt="Whatsapp icon Click to talk"
          />
        </a>
        <a href="mailto:daianablu05@gmail.com">
          <Image
            src={EmailIcon}
            width={50}
            height={50}
            alt="Email Click to send email"
            className=""
          />
        </a>
      </motion.li>
    </>
  )
}
