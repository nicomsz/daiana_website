'use client'
import { Typewriter } from 'react-simple-typewriter'

export default function TypeWritterText() {
  return (
    <>
      <div className="text-slate-400 text-3xl text-center content-center">
        {' '}
        Micro-pigmentação de sobrancelhas para aumentar sua
        <p className="text-slate-700 text-center">
          {' '}
          <Typewriter
            words={['auto-estima', 'beleza', 'personalidade', 'confiança']}
            typeSpeed={80}
            loop={5}
            deleteSpeed={50}
            cursor
            cursorStyle="_"
          />{' '}
        </p>
      </div>
    </>
  )
}
