import { Variants } from 'framer-motion'

// Text reveal animations
export const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.8,
      ease: 'easeOut',
    },
  }),
}

// Staggered container
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

// Fade in and slide up
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
}

// Scale in
export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

// Floating animation for badges
export const floatingVariants: Variants = {
  animate: {
    y: [0, -10, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Tilt animation on hover
export const tiltVariants: Variants = {
  normal: {
    rotateX: 0,
    rotateY: 0,
    z: 0,
  },
  hover: {
    rotateX: -10,
    rotateY: 10,
    z: 100,
    transition: {
      duration: 0.3,
      ease: 'easeOut',
    },
  },
}

// Parallax scroll
export const parallaxVariants = (offset: number): Variants => ({
  animate: {
    y: offset,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
})

// Button hover animation
export const buttonHoverVariants: Variants = {
  normal: { scale: 1 },
  hover: {
    scale: 1.05,
    transition: { duration: 0.2 },
  },
}

// Underline animation
export const underlineVariants: Variants = {
  initial: { width: 0 },
  hover: {
    width: '100%',
    transition: { duration: 0.3 },
  },
}

// Slide in from left
export const slideInLeftVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Slide in from right
export const slideInRightVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: 'easeOut',
    },
  },
}

// Pulse animation
export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    opacity: [1, 0.8, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}

// Glow animation
export const glowVariants: Variants = {
  animate: {
    boxShadow: [
      '0 0 20px rgba(255, 107, 0, 0.3)',
      '0 0 40px rgba(255, 107, 0, 0.6)',
      '0 0 20px rgba(255, 107, 0, 0.3)',
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: 'easeInOut',
    },
  },
}
