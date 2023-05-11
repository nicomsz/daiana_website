'use client'
import * as React from 'react'
import { motion } from 'framer-motion'
import { Yaldevi, Sacramento } from '@next/font/google'
import Image from 'next/image'
import DaiIcon from '../../../../public/images/DaiIcon.svg'
import { EnvelopeSimple } from '@phosphor-icons/react'
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
        className="flex h-[45px] items-center rounded-2xl bg-menu-item-rose text-center text-xs lg:h-[70px] lg:p-4 lg:text-[17px]"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={`${yaldevi.className} mx-auto`}>
          MICROPIGMENTAÇÃO DE SOBRANCELHAS
        </p>
      </motion.li>
      <motion.li
        variants={variants}
        className="flex h-[45px] items-center rounded-2xl bg-menu-item-rose text-center text-[13px] lg:h-[70px] lg:text-[17px]"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={`${yaldevi.className} mx-auto`}>DESIGN DE SOBRANCELHAS</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="flex h-[45px] items-center rounded-2xl bg-menu-item-rose text-center text-xs lg:h-[70px] lg:text-[17px]"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={`${yaldevi.className} mx-auto`}>BROWN LAMINATION</p>
      </motion.li>
      <motion.li
        variants={variants}
        className="flex h-[45px] items-center rounded-2xl bg-menu-item-rose text-center text-xs lg:h-[70px] lg:text-[17px]"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={`${yaldevi.className} mx-auto`}>EXTENSÃO DE CÍLIOS</p>
      </motion.li>

      <motion.li
        variants={variants}
        className="flex h-[45px] items-center rounded-2xl bg-menu-item-rose text-center text-xs lg:h-[70px] lg:text-[17px]"
        whileHover={{
          scale: 1.1,
          transition: { duration: 1 },
        }}
      >
        <p className={`${yaldevi.className} mx-auto`}>LASH LIFTING</p>
      </motion.li>
      <motion.li className="flex flex-row" variants={variants}>
        <a href="https://wa.me/+5547992879838" target="_blank" rel="noreferrer">
          <div className="relative h-[40px] w-[40px] lg:h-[47px] lg:w-[70px]">
            <Image
              src="/images/whatsapp-svgrepo-com.svg"
              alt="Whatsapp icon Click to talk"
              fill
            />
          </div>
        </a>
        <div className="grow" />
        <a href="mailto:daianablu05@gmail.com">
          <div className="h-[40px] w-[40px] lg:h-[50px] lg:w-[50px]">
            <EnvelopeSimple color="#c95918" weight="duotone" size="fill" />
          </div>
        </a>
      </motion.li>
    </>
  )
}
