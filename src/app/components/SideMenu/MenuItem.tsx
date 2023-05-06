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

export const variants = {
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
      <motion.li
        variants={variants}
        className="mx-auto -mt-24 w-[108px] lg:-mb-4 lg:pl-4 lg:pt-12"
      >
        <Image
          src={DaiIcon}
          width={150}
          height={150}
          alt="Dai Icon"
          className="mx-auto h-[60px] w-[60px] lg:h-[150px] lg:w-[150px]"
        />
      </motion.li>
      <motion.li
        variants={variants}
        className="mt-0 flex content-center justify-center text-center text-[0.9rem] lg:mt-8 lg:text-[1.30rem]"
      >
        <p className={yaldevi.className}>VOCÊ JÁ CONHEÇE</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="mx-auto content-center justify-center text-center text-[1.4rem] lg:text-[1.96rem]"
      >
        <p className={sacramento.className}>Nossos serviços?</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="rounded-2xl bg-menu-item-rose p-[0.2rem] text-center text-[0.7rem] lg:p-2 lg:text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <a href="#anchor">
          <p className={yaldevi.className}>MICROPIGMENTAÇÃO DE SOBRANCELHAS</p>
        </a>
      </motion.li>
      <motion.li
        variants={variants}
        className="rounded-2xl bg-menu-item-rose p-[0.8rem] text-center text-[0.64rem] lg:p-2 lg:text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>DESIGN DE SOBRANCELHAS</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="break-keep rounded-2xl bg-menu-item-rose p-[0.6rem] text-center text-[0.64rem] lg:p-[25px] lg:text-[14px]"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={`${yaldevi.className} pl-5 lg:pl-3`}>BROWN LAMINATION</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="rounded-2xl bg-menu-item-rose p-[0.6rem] text-center text-[0.7rem] lg:p-[25px] lg:text-[14px]"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={`${yaldevi.className} pl-4`}>EXTENSÃO DE CÍLIOS</p>
      </motion.li>

      <motion.li
        variants={variants}
        className="rounded-2xl bg-menu-item-rose p-[0.6rem] text-center text-[0.7rem] lg:p-[17px] lg:text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={`${yaldevi.className} pl-8 lg:pl-8`}>LASH LIFTING</p>
      </motion.li>
      <motion.li
        className="flex flex-row gap-6 lg:pl-[100px]"
        variants={variants}
      >
        <a href="https://wa.me/+5547992879838" target="_blank" rel="noreferrer">
          <Image
            src={WhatsappIcon}
            width={50}
            height={50}
            alt="Whatsapp icon Click to talk"
            className="h-[40px] w-[70px] lg:h-[50px] lg:w-[50px]"
          />
        </a>
        <a href="mailto:daianablu05@gmail.com">
          <Image
            src={EmailIcon}
            width={50}
            height={50}
            alt="Email Click to send email"
            className="h-[40px] w-[70px] lg:h-[50px] lg:w-[50px]"
          />
        </a>
      </motion.li>
    </>
  )
}
