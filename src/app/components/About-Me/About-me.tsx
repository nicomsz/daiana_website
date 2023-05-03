'use client'
import Image from 'next/image'
import DaiPhoto from '../../public/images/dai-photo2.png'
import ArrowDown from '../../public/images/arrow_down_download_save_icon_123720.svg'
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
export default function AboutMe() {
  return (
    <div className="h-screen">
      <div className="ml-[300px] flex flex-row pt-[150px]">
        <Image src={DaiPhoto} alt="Dai Photo" width={300} height={300} />
        <div className="w-[800px] pl-[100px]">
          <p className={`${montserrat400.className} text-6xl`}>SOBRE MIM</p>
          <motion.div
            className="h-[3px] w-[0%] bg-black"
            whileInView={{ width: '100%', transitionDuration: '1.7s' }}
          ></motion.div>
          <p className="pt-8 text-xl">
            Olá, me chamo Daiana . Um certo dia não me sentindo mais desafiada
            resolvi mudar o rumo do meu futuro. Desde 2016 em meio às
            oportunidades, buscando em diversos cursos voltados a técnicas de
            sobrancelhas e cílios, venho me desenvolvendo e capacitando com
            certificações nacionais e internacionais. Com o passar dos anos além
            do atendimento as clientes iniciei a formação de profissionais,
            tentando resumir nos meus cursos todo meu conhecimento e vivência na
            área. Meu objeto é melhorar a cada dia e levar mais que um trabalho
            bem feito, busco, entregar a melhor experiência desde um momento
            confortável e agradável até o sentimento de segurança e amor.
          </p>
        </div>
      </div>
      <div>
        <p
          className={`${montserrat200.className} pt-[125px] text-center text-8xl`}
        >
          CONHEÇA MEUS SERVIÇOS:
        </p>
        <Image
          src={ArrowDown}
          alt="Arrow Down to Services"
          className="mx-auto pt-8"
          width={125}
          height={125}
        />
      </div>
    </div>
  )
}
