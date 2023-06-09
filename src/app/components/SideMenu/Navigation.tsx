'use client'
import * as React from 'react'
import { motion } from 'framer-motion'
import MenuItem from './MenuItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
}

export const Navigation = () => (
  <motion.ul
    variants={variants}
    className="fixed w-[198px] rounded-md lg:w-[248px]"
  >
    <MenuItem />
  </motion.ul>
)
