'use client'
import { Typewriter } from 'react-simple-typewriter'
import { Satisfy, Roboto_Slab as RobotoSlab } from '@next/font/google'

const satisfy = Satisfy({
  subsets: ['latin'],
  weight: ['400'],
})
const robotoSlab = RobotoSlab({
  subsets: ['latin'],
  weight: ['400'],
})
export default function TypeWritterText() {
  return (
    <>
      <div className="h-[500px] w-full bg-pink-200">
        <div className="mx-auto text-center align-middle">
          <div className="mx-auto flex w-[600px] flex-row content-center gap-4 pr-12 pt-[240px] text-center text-5xl text-slate-700">
            <p className={robotoSlab.className}>Sentir</p>
            <p className={robotoSlab.className}> se </p>
            <div className=" pt-[0.25rem] text-pink-400">
              <p className={satisfy.className}>
                <Typewriter
                  words={[
                    'bonita',
                    'elegante',
                    'divina',
                    'encantadora',
                    'deslumbrante',
                  ]}
                  typeSpeed={80}
                  loop={0}
                  deleteSpeed={50}
                  cursor
                  cursorStyle="|"
                />{' '}
              </p>
            </div>
            <p className={robotoSlab.className}>muda</p>{' '}
            <strong className={`${robotoSlab.className} font-extrabold`}>
              TUDO.
            </strong>
          </div>
        </div>
      </div>
      <div className="pt-[100px] text-center text-4xl font-bold">
        CONHEÇA MEUS SERVIÇOS:
      </div>
    </>
  )
}
