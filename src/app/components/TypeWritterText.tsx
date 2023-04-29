'use client'
import { Typewriter } from 'react-simple-typewriter'

export default function TypeWritterText() {
  return (
    <>
      <div className="text-slate-700 text-3xl w-[600px] flex flex-row content-center text-center">
        {' '}
        <p className="px-2 font-semibold"> Sentir </p>
        <p> se </p>
        <p className="text-pink-300 px-2">
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
            cursorStyle="_"
          />{' '}
        </p>
        muda <strong className="pl-2">TUDO.</strong>
      </div>
    </>
  )
}
