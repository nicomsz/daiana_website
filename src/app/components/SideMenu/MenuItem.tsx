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
      <motion.li
        variants={variants}
        className="-mt-12 pl-[13px] lg:-mb-4 lg:pl-4 lg:pt-12"
      >
        <Image
          src={DaiIcon}
          width={150}
          height={150}
          alt="Dai Icon"
          className="h-[120px] w-[120px] lg:h-[150px] lg:w-[150px]"
        />
      </motion.li>
      <motion.li
        variants={variants}
        className="mt-0 flex content-center justify-center text-center text-[1.15rem] lg:mt-8 lg:text-[1.30rem]"
      >
        <p className={yaldevi.className}>VOCÊ JÁ CONHEÇE</p>
      </motion.li>
      <motion.li variants={variants}>
        <div className="text-[1.61rem] lg:text-[1.96rem]">
          <p className={sacramento.className}>Nossos serviços?</p>
        </div>
      </motion.li>
      <motion.li
        variants={variants}
        className="rounded-2xl bg-menu-item-rose p-[0.5rem] text-center text-[0.9rem] lg:text-lg"
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
        className="rounded-2xl bg-menu-item-rose p-2 text-center text-[0.9rem] lg:text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>DESIGN DE SOBRANCELHAS</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="rounded-2xl bg-menu-item-rose p-[0.6rem] text-center text-[0.9rem] lg:p-[17px] lg:text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>BROWN LAMINATION</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="rounded-2xl bg-menu-item-rose p-[0.6rem] text-center text-[0.9rem] lg:p-[17px] lg:text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={yaldevi.className}>EXTENSÃO DE CÍLIOS</p>
      </motion.li>

      <motion.li
        variants={variants}
        className="rounded-2xl bg-menu-item-rose p-[1.3rem] text-center text-[0.9rem] lg:p-[17px] lg:text-lg"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={`${yaldevi.className} pl-3 lg:pl-8`}>LASH LIFTING</p>
      </motion.li>
      <motion.li
        className="flex flex-row gap-12 lg:pl-[20px]"
        variants={variants}
      >
        <a href="https://wa.me/+5547992879838" target="_blank" rel="noreferrer">
          <Image
            src={WhatsappIcon}
            width={50}
            height={50}
            alt="Whatsapp icon Click to talk"
            className="h-[70px] w-[70px] lg:h-[50px] lg:w-[50px]"
          />
        </a>
        <a href="mailto:daianablu05@gmail.com">
          <Image
            src={EmailIcon}
            width={50}
            height={50}
            alt="Email Click to send email"
            className="h-[70px] w-[70px] lg:h-[50px] lg:w-[50px]"
          />
        </a>
      </motion.li>
    </>
  )
}
