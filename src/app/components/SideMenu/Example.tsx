'use client'
import * as React from 'react'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '../../hooks/useDimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'
const screenHeight = screen.height
console.log(screenHeight)
const sidebar = {
  open: () => ({
    clipPath: `circle(${screenHeight + 300}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
}

export const Example = () => {
  const [isOpen, toggleOpen] = useCycle(false, true)
  const containerRef = useRef(null)
  const { height } = useDimensions(containerRef)

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className="fixed sm:h-[1500px]"
    >
      <motion.div
        className="background rounded-r-3xl rounded-bl-3xl bg-slate-100"
        variants={sidebar}
      />
      <MenuToggle toggle={() => toggleOpen()} />
      <Navigation />
    </motion.nav>
  )
}
