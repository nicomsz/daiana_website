'use client'
import * as React from 'react'
import { useRef } from 'react'
import { motion, useCycle } from 'framer-motion'
import { useDimensions } from '../../hooks/useDimensions'
import { MenuToggle } from './MenuToggle'
import { Navigation } from './Navigation'

const sidebar = {
  open: () => ({
    clipPath: `circle(${500 + 300}px at 40px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 40,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 40px 40px)',
    transition: {
      delay: 0.5,
      type: 'spring',
      stiffness: 400,
      damping: 35,
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
      className="fixed inset-y-0 h-[500px] w-[300px]"
    >
      <motion.div
        className="absolute inset-y-0 left-0 h-[500px] w-[200px] rounded-r-3xl rounded-bl-3xl border-[0.5px] border-solid border-black bg-slate-100 lg:h-[815px] lg:w-[250px]"
        variants={sidebar}
      />
      <MenuToggle toggle={() => toggleOpen()} />
      <Navigation />
    </motion.nav>
  )
}
