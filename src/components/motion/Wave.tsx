import { motion } from 'framer-motion'
import React, { PropsWithChildren } from 'react'

interface WaveProps {
    delay: number
}
const Wave = ({ children, delay }: PropsWithChildren<WaveProps>) => {
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
