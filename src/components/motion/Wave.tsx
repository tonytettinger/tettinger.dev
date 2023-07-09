import { MotionProps, motion } from 'framer-motion'
import React, { ReactNode } from 'react'

interface WaveProps extends MotionProps {
    children: ReactNode
    delay: number
}
const Wave = ({ children, delay }: WaveProps) => {
    return (
        <motion.div
            animate={{
                translateY: ['-30px', '30px', '-30px'],
            }}
            transition={{
                delay: delay,
                duration: 5,
                repeat: Infinity,
                ease: 'easeInOut',
            }}
        >
            {children}
        </motion.div>
    )
}

export default Wave
