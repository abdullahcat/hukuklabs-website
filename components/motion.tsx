"use client"

import {
  AnimatePresence,
  motion,
  useReducedMotion,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion"
import { cn } from "@/lib/utils"

export const motionEase = [0.22, 1, 0.36, 1] as const

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.08,
    },
  },
}

type FadeInProps = HTMLMotionProps<"div"> & {
  delay?: number
  duration?: number
  amount?: number
}

export function FadeIn({
  children,
  className,
  delay = 0,
  duration = 0.7,
  amount = 0.12,
  ...props
}: FadeInProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -40px 0px" }}
      variants={fadeInUp}
      transition={{ duration, delay, ease: motionEase }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type StaggerProps = HTMLMotionProps<"div"> & {
  stagger?: number
  delayChildren?: number
  amount?: number
}

export function Stagger({
  children,
  className,
  stagger = 0.1,
  delayChildren = 0.08,
  amount = 0.1,
  ...props
}: StaggerProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount, margin: "0px 0px -40px 0px" }}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren },
        },
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

export function StaggerItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : fadeInUp}
      transition={{ duration: 0.65, ease: motionEase }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type HeroStaggerProps = {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export function HeroStagger({
  children,
  className,
  stagger = 0.12,
}: HeroStaggerProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : "hidden"}
      animate="visible"
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: stagger, delayChildren: 0.12 },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

export function HeroItem({
  children,
  className,
  ...props
}: HTMLMotionProps<"div">) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      variants={reduceMotion ? undefined : fadeInUp}
      transition={{ duration: 0.75, ease: motionEase }}
      {...props}
    >
      {children}
    </motion.div>
  )
}

type MotionHeaderProps = HTMLMotionProps<"header">

export function MotionHeader({ children, className, ...props }: MotionHeaderProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.header
      className={cn(className)}
      initial={reduceMotion ? false : { opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: motionEase }}
      {...props}
    >
      {children}
    </motion.header>
  )
}

type PageTransitionProps = {
  children: React.ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, ease: motionEase }}
    >
      {children}
    </motion.div>
  )
}

type MotionCollapseProps = {
  open: boolean
  children: React.ReactNode
  className?: string
}

export function MotionCollapse({ open, children, className }: MotionCollapseProps) {
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence initial={false}>
      {open && (
        <motion.div
          key="collapse"
          initial={reduceMotion ? false : { opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.4, ease: motionEase }}
          className={cn("overflow-hidden", className)}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

type MotionDropdownProps = {
  open: boolean
  children: React.ReactNode
  className?: string
}

export function MotionDropdown({ open, children, className }: MotionDropdownProps) {
  const reduceMotion = useReducedMotion()

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="dropdown"
          initial={reduceMotion ? false : { opacity: 0, y: -6, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -6, scale: 0.98 }}
          transition={{ duration: 0.3, ease: motionEase }}
          className={className}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
